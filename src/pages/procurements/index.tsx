import SuspensePage from "@/core/suspense.page";
import ProcumentLayout, {QuotesLayoutPage} from "@/layouts/procument.layout";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const OrderPage = lazy(() => import("./order/order"));

const ProcurementPage = () => {
  return (
    <Routes>
      <Route element={<QuotesLayoutPage/>}>
        <Route 
          path='quotes'
          element={
            <div className='text-center'>Quotes ...</div>
          }
        />
      </Route>
      <Route element={<ProcumentLayout />}>
        <Route
          path='order'
          element={
            <SuspensePage>
              <OrderPage />
            </SuspensePage>
          }
        />
      </Route>
    </Routes>
  );
};

export default ProcurementPage;
