import { Suspense, lazy, PropsWithChildren } from "react";
import MainLayout from "@/layouts/main.layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Application pages
import DashboardPage from "@/pages/dashboard";
const CommunicationPage = lazy(() => import("@/pages/communication"));
const FinancePage = lazy(() => import("@/pages/finance"));
const InventoryPage = lazy(() => import("@/pages/inventory"));
const CalendarPage = lazy(() => import("@/pages/calender"));
const ContractPage = lazy(() => import("@/pages/contract"));
const ProcurementsPage = lazy(() => import("@/pages/procurements/index"));

const SuspensePage = ({ children }: PropsWithChildren) => {
  return <Suspense>{children}</Suspense>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/chat",
        element: (
          <SuspensePage>
            <CommunicationPage />
          </SuspensePage>
        ),
      },
      {
        path: "/finance",
        element: (
          <SuspensePage>
            <FinancePage />
          </SuspensePage>
        ),
      },
      {
        path: "/inventory",
        element: (
          <SuspensePage>
            <InventoryPage />
          </SuspensePage>
        ),
      },
      {
        path: "/contracts",
        element: (
          <SuspensePage>
            <ContractPage />
          </SuspensePage>
        ),
      },
      {
        path: "/calender",
        element: (
          <SuspensePage>
            <CalendarPage />
          </SuspensePage>
        ),
      },
      {
        path: "/procurement/*",
        element: (
          <SuspensePage>
            <ProcurementsPage />
          </SuspensePage>
        ),
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
