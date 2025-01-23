"use client";
import { AppSidebar } from "@/components/custom/AppSidebar";
import DashboardSmNav from "@/components/custom/DashboardSmNav";
import { SidebarProvider } from "@/components/ui/sidebar";

export interface PageProps {
  children: React.ReactNode;
}

const page = ({ children }: PageProps) => {
  return (
    <div>
      <div className="hidden md:block">
        <SidebarProvider>
          <AppSidebar />
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
