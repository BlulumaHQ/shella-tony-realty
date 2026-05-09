import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LanguageProvider } from "@/i18n/i18n";

function NotFoundComponent() {
  return (
    <div className="container-app py-32 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="font-serif text-4xl text-primary mt-3">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link
        to="/"
        className="inline-flex mt-8 items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90"
      >
        Return home
      </Link>
    </div>
  );
}

function ErrorComponent({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="container-app py-32 text-center">
      <h1 className="font-serif text-3xl text-primary">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shella & Tony Chan Real Estate Team — Greater Vancouver" },
      {
        name: "description",
        content:
          "Trusted family real estate guidance across the Greater Vancouver area. Multilingual service in English, Cantonese and Mandarin. RE/MAX Crest Realty.",
      },
      { name: "author", content: "Shella & Tony Chan Real Estate Team" },
      { property: "og:title", content: "Shella & Tony Chan Real Estate Team — Greater Vancouver" },
      {
        property: "og:description",
        content:
          "Real estate guidance you can trust through every stage of life. Serving Greater Vancouver in English, Cantonese and Mandarin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Shella & Tony Chan Real Estate Team — Greater Vancouver" },
      { name: "description", content: "A modern, family-oriented real estate advisory website for Shella & Tony Chan." },
      { property: "og:description", content: "A modern, family-oriented real estate advisory website for Shella & Tony Chan." },
      { name: "twitter:description", content: "A modern, family-oriented real estate advisory website for Shella & Tony Chan." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/66c9c47a-c607-479e-bf72-84816c7c602b/id-preview-46a35f55--9cbbda56-58f5-4632-b145-9182a702d999.lovable.app-1778285754852.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/66c9c47a-c607-479e-bf72-84816c7c602b/id-preview-46a35f55--9cbbda56-58f5-4632-b145-9182a702d999.lovable.app-1778285754852.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
