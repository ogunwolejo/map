import SuspensePage from '@/core/suspense.page';
import ProcumentLayout, {QuotesLayoutPage} from '@/layouts/procument.layout';
import {lazy} from 'react';
import {Routes, Route} from 'react-router-dom';

const OrderPage = lazy(() => import('./order/order'));
const QuoteDetailPage = lazy(() => import('./quotes/sub-pages/detail'));
const QuoteResponsePage = lazy(
  () => import('./quotes/sub-pages/quote.response'),
);

const ProcurementPage = () => {
  return (
    <Routes>
      <Route element={<QuotesLayoutPage />}>
        <Route
          path="quotes"
          element={
            <SuspensePage>
              <QuoteDetailPage />
            </SuspensePage>
          }
        />
      </Route>
      <Route element={<ProcumentLayout />}>
        <Route
          path="quotes/response"
          element={
            <SuspensePage>
              <QuoteResponsePage />
            </SuspensePage>
          }
        />
      </Route>
      <Route element={<ProcumentLayout />}>
        <Route
          path="order"
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
