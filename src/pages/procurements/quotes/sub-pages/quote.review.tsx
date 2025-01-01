import {useMemo} from 'react';
import {QuoteInformationEdit} from '@/core/quotes/quote.information';
import {QuoteProcessCard} from '@/core/quotes/quote.process-card';
//import {QuoteTermsContract} from '@/core/quotes/quote.terms';
//import {QuoteViewTable} from '@/core/quotes/quoute.view-table';
import {FC} from 'react';
import {ProcessList} from '@/types/quotes.types';
//import QuoteStageButton from '@/core/quotes/quotes.stage-buttons';

const QuoteReview: FC = () => {
  const stages: ProcessList[] = useMemo(
    () => [
      {
        count: 1,
        title: 'Request Information',
        content: 'Provide details about the RFQ',
        status: 'done',
      },
      {
        count: 2,
        title: 'Terms and Attachments',
        content: 'Payment and delivery terms',
        status: 'done',
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
    <div className="page_container space-y-4 lg:space-y-6">
      <QuoteProcessCard activeNumber={3} stages={stages} />
      <QuoteInformationEdit />
      {/* <QuoteViewTable />
      <QuoteTermsContract />
      <QuoteStageButton isSubmit={true} /> */}
    </div>
  );
};

export default QuoteReview;
