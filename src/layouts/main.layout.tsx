import { FC } from "react";
import { Outlet } from "react-router";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSideBar from "@/core/app-sidebar/app.sidebar";
import appRouters from "@/navigation.tsx";
import DefaultHeader from "@/core/app-headers/default.header";

const MainLayout: FC = () => {
  return (
    <SidebarProvider>
      <AppSideBar navigation={appRouters} />
      <main className="w-full">
        <DefaultHeader />
        <div className="py-6 px-4 md:px-8 lg:px-10 box-border max-w-full bg-white">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
