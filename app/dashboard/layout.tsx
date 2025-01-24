"use client";
import { AppSidebar } from "@/components/custom/AppSidebar";
import AppSidebarMdNav from "@/components/custom/AppSidebarMdNav";
import DashboardSmNav from "@/components/custom/DashboardSmNav";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export interface PageProps {
  children: React.ReactNode;
}

const page = ({ children }: PageProps) => {
  return (
    <div>
      <div className="hidden md:block">
        <SidebarProvider>
          <AppSidebar />
          <div className="w-full">
            <AppSidebarMdNav />
            {children}
          </div>
        </SidebarProvider>
      </div>
      <div className="md:hidden">
        <DashboardSmNav />
        {children}
      </div>
    </div>
  );
};

export default page;
