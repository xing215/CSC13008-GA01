import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      <div className="lg:ml-80">
        <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
