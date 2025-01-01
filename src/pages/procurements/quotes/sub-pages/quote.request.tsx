import {QuoteFillDetails} from '@/core/quotes/quote.fill-details';
import {QuoteProcessCard} from '@/core/quotes/quote.process-card';
import {ProcessList, QuoteData} from '@/types/quotes.types';
import {FC, useMemo} from 'react';
import {useLocation} from 'react-router-dom';

interface LocationState {
  content: QuoteData;
}

const QuoteRequest: FC = () => {
  const {
    state,
  } = useLocation();
  const stages: ProcessList[] = useMemo(
    () => [
      {
        count: 1,
        title: 'Request Information',
        content: 'Provide details about the RFQ',
      },
      {
        count: 2,
        title: 'Terms and Attachments',
        content: 'Payment and delivery terms',
      },
      {
        count: 3,
        title: 'Review',
        content: 'Confirm all information provided',
      },
    ],
    [],
  );

  

  console.log("content", state)

  return (
    <div className="space-y-6">
      <QuoteProcessCard activeNumber={1} stages={stages} />
      <QuoteFillDetails items={state ? state.items : []} data={state ? state : null} />
    </div>
  );
};

export default QuoteRequest;
