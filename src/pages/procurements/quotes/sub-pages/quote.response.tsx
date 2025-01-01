import {AppBreadCrumb} from '@/core/app.breadcrumb';
import {QuoteProcedureState} from '@/types/quotes.types';
import {FC, useState, useMemo} from 'react';
import QuoteRequest from './quote.request';
import QuoteAgreement from './quote.agreement';
import QuoteReview from './quote.review';
import { StageContext } from '@/context/stage.context';

const QuoteResponse: FC = () => {
  const [processing, setProcessing] = useState<QuoteProcedureState>('request');
  const nextProcessHandle = (process: QuoteProcedureState) => {
    setProcessing(process);
  };

  const bread: string = useMemo(
    () => (processing === 'review' ? 'Request for Quote' : 'Quote Response'),
    [processing],
  );

  return (
    <StageContext.Provider value={{
      nextHandler: nextProcessHandle,
    }}>
      <div className="page_container space-y-4 lg:space-y-8">
        <AppBreadCrumb
          base={{
            name: 'Quotes',
            to: '/procurement/quotes',
          }}
          current={[
            {
              name: bread,
              to: '',
            },
          ]}
        />
        <section className="">
          {processing === 'request' ? (
            <QuoteRequest />
          ) : processing === 'contract' ? (
            <QuoteAgreement />
          ) : (
            <QuoteReview />
          )}
        </section>
      </div>
    </StageContext.Provider>
  );
};

export default QuoteResponse;
