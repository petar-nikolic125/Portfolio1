import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider }   from "@/components/ui/tooltip";
import { Toaster }           from "@/components/ui/toaster";
import { queryClient }       from "@/lib/queryClient";

import { Switch, Route }     from "wouter";

// top-level pages (see next step)
import HomePage      from "@/pages/HomePage";
import ProjectsPage  from "@/pages/ProjectsPage";
import NotFoundPage  from "@/pages/NotFoundPage";

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider delayDuration={250}>
                {/* global toast / snack bar */}
                <Toaster />

                {/* routes */}
                <Switch>
                    <Route path="/"           component={HomePage}     />
                    <Route path="/projects"   component={ProjectsPage} />
                    <Route                    component={NotFoundPage} />
                </Switch>
            </TooltipProvider>
        </QueryClientProvider>
    );
}
