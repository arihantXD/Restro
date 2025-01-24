"use client";
import { usePathname } from "next/navigation";
import React from "react";

const AppSidebarMdNav = () => {
  const pathname = usePathname();
  return (
    <div className="px-2 mt-9 text-gray-500 text-sm border-b">{pathname}</div>
  );
};

export default AppSidebarMdNav;
