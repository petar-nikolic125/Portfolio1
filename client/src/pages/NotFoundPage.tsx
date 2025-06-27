export default function NotFoundPage() {
    return (
        <main className="min-h-screen grid place-content-center text-center px-6">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-muted-foreground mb-8">
                The page you’re looking for doesn’t exist.
            </p>
            <a
                href="/"
                className="px-6 py-3 bg-primary rounded-lg text-primary-foreground hover:scale-105 transition"
            >
                Take me home
            </a>
        </main>
    );
}
