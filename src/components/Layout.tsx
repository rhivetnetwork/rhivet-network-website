// components/layout/Layout.tsx
import React, { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-black min-h-screen">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
