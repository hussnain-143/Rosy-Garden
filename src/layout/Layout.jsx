import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/layouts/Header";
import Footer from "../Components/layouts/Footer";

const Layout = () => {
  return (
    <div className="flex mx-auto flex-col min-h-screen">
      {/* Header */}
      <div className="h-20">
        <Header />
      </div>
      <div className="none mt-4 md:block border-2 container max-w-[1200px]  mx-auto"></div>

      {/* Main Content */}
      <main className="flex-1 h-[80vh]">
        <Outlet />
      </main>

      {/* Footer */}
      <div className="bg-gray-200 p-3">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
