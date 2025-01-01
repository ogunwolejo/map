import {QuoteFillDetails} from '@/core/quotes/quote.fill-details';
import {QuoteProcessCard} from '@/core/quotes/quote.process-card';
import {ProcessList} from '@/types/quotes.types';
import {FC, useMemo} from 'react';

const QuoteRequest: FC = () => {
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

  return (
    <div className="space-y-6">
      <QuoteProcessCard activeNumber={1} stages={stages} />
      <QuoteFillDetails />
    </div>
  );
};

export default QuoteRequest;
