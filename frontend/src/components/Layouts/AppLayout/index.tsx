// Core
import React from "react";

// Components
import Sidebar from "components/Layouts/AppLayout/Sidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout(props: AppLayoutProps) {
  return (
    <div>
      <Sidebar />

      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">{props.children}</div>
      </main>
    </div>
  );
}
