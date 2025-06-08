import { ReactNode } from "react";
import { Navigation } from "@/layouts/navigation/Navigation";
import { Footer } from "@/layouts/footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-gray-200 to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-gray-950 border-t border-gray-700/60 dark:border-gray-700/60 light:border-gray-200">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}; 