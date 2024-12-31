import { FC } from "react";
import { Outlet } from "react-router";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSideBar from "@/core/app-sidebar/app.sidebar";
import appRouters from "@/navigation.tsx";

const MainLayout: FC = () => {
  return (
    <SidebarProvider>
      <AppSideBar navigation={appRouters} />
      <main className="w-full">
        <div className="max-w-full bg-white flex flex-col">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
