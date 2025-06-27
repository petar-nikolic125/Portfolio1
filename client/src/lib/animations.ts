/**
 * Animation utilities for smooth transitions and effects
 */

// Spring easing function for natural motion
export function springEasing(t: number, tension = 500, friction = 20): number {
  const mass = 1;
  const damping = 2 * Math.sqrt(mass * tension) * (friction / 100);
  const omega = Math.sqrt(tension / mass);
  const zeta = damping / (2 * Math.sqrt(tension * mass));
  
  if (zeta < 1) {
    // Underdamped
    const omegaDamped = omega * Math.sqrt(1 - zeta * zeta);
    return 1 - Math.exp(-zeta * omega * t) * 
           (Math.cos(omegaDamped * t) + (zeta * omega / omegaDamped) * Math.sin(omegaDamped * t));
  } else {
    // Critically damped or overdamped
    return 1 - Math.exp(-omega * t) * (1 + omega * t);
  }
}

// Count-up animation helper
export function countUp(
  element: HTMLElement,
  start: number,
  end: number,
  duration: number = 1000,
  suffix: string = ''
): () => void {
  let startTime: number | null = null;
  let animationFrame: number;
  
  const animate = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    
    const easedProgress = springEasing(progress);
    const currentValue = Math.floor(start + (end - start) * easedProgress);
    
    element.textContent = `${currentValue}${suffix}`;
    
    if (progress < 1) {
      animationFrame = requestAnimationFrame(animate);
    }
  };
  
  animationFrame = requestAnimationFrame(animate);
  
  // Return cleanup function
  return () => cancelAnimationFrame(animationFrame);
}

// Intersection Observer for triggering animations
export function createAnimationObserver(
  selector: string,
  animationClass: string,
  options?: IntersectionObserverInit
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        
        // Add animation class
        element.classList.add(animationClass);
        
        // Handle staggered animations for children
        const children = element.querySelectorAll('[data-stagger]');
        children.forEach((child, index) => {
          const staggerDelay = parseInt((child as HTMLElement).dataset.stagger || '100');
          (child as HTMLElement).style.animationDelay = `${index * staggerDelay}ms`;
        });
        
        // Trigger count-up animations if present
        const countElements = element.querySelectorAll('[data-count-up]');
        countElements.forEach((countEl) => {
          const el = countEl as HTMLElement;
          const target = parseInt(el.dataset.countUp || '0');
          const duration = parseInt(el.dataset.duration || '1000');
          const suffix = el.dataset.suffix || '';
          countUp(el, 0, target, duration, suffix);
        });
        
        // Only animate once
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);
  
  // Observe all matching elements
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));
  
  return observer;
}

// Parallax scroll effect
export function initParallax(
  selector: string,
  speed: number = 0.5,
  offset: number = 0
): () => void {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Check if element is in viewport
      if (scrollY + windowHeight > elementTop && scrollY < elementTop + elementHeight) {
        const yPos = -(scrollY - elementTop + offset) * speed;
        element.style.transform = `translateY(${yPos}px)`;
      }
    });
  };
  
  // Use RAF for smooth animation
  let ticking = false;
  const scrollHandler = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', scrollHandler, { passive: true });
  
  // Initial call
  handleScroll();
  
  // Return cleanup function
  return () => window.removeEventListener('scroll', scrollHandler);
}

// Scroll progress tracker
export function trackScrollProgress(callback: (progress: number) => void): () => void {
  const calculateProgress = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.scrollY;
    const progress = Math.min(Math.max(scrollTop / documentHeight, 0), 1);
    callback(progress);
  };
  
  let ticking = false;
  const scrollHandler = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        calculateProgress();
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', scrollHandler, { passive: true });
  calculateProgress(); // Initial calculation
  
  return () => window.removeEventListener('scroll', scrollHandler);
}

// Hardware acceleration check
export function shouldReduceMotion(): boolean {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  return prefersReducedMotion || (isMobile && hardwareConcurrency < 4);
}

// Initialize all animations
export function initializeAnimations() {
  // Skip animations if reduced motion is preferred
  if (shouldReduceMotion()) {
    document.documentElement.classList.add('reduce-motion');
    return;
  }
  
  // Create observers for different sections
  createAnimationObserver('.work-list', 'animate-fade-slide-in');
  createAnimationObserver('.education-list', 'animate-slide-up-fade');
  createAnimationObserver('.skills-grid', 'animate-pop-in');
  createAnimationObserver('.project-card', 'project-card-entered');
  
  // Initialize parallax effects
  initParallax('.parallax-layer-1', 0.1);
  initParallax('.parallax-layer-2', 0.2);
  
  // Track scroll progress
  trackScrollProgress((progress) => {
    document.documentElement.style.setProperty('--scroll-progress', progress.toString());
  });
  
  // Initialize scroll hint
  const scrollHint = document.querySelector('.scroll-hint');
  if (scrollHint) {
    setTimeout(() => {
      scrollHint.classList.add('animate-pulse-hint');
    }, 1000);
    
    // Hide after animation completes
    setTimeout(() => {
      scrollHint.classList.add('opacity-0');
    }, 7000);
  }
}