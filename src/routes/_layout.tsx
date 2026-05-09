import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
  notFoundComponent: () => (
    <div className="container-app py-32 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="font-serif text-4xl text-primary mt-3">Page not found</h1>
      <p className="mt-3 text-muted-foreground">The page you’re looking for doesn’t exist.</p>
    </div>
  ),
});
