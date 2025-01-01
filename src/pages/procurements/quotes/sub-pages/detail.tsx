import {Button} from '@/components/ui/button';
import {FC} from 'react';
import {X} from 'lucide-react';
import QuoteInformation from '@/core/quotes/quote.information';
import {QuoteViewTable} from '@/core/quotes/quoute.view-table';
import {QuoteTermsContract} from '@/core/quotes/quote.terms';
import {useNavigate} from 'react-router-dom';
import {QuoteDataContext} from '@/context/quote-data.context';
import {data} from '@/context/data';

const QuoteDetail: FC = () => {
  const navigate = useNavigate();
  const responseHandle = () => {
    navigate('response', {state: {content: data}});
  };

  return (
    <QuoteDataContext.Provider value={data}>
      <div className="page_container space-y-4 lg:space-y-6">
        <section className="flex justify-between items-center">
          <div className="font-satoshi">
            <h4 className="font-semibold text-xl lg:text-2xl">Quote details</h4>
            <p className="text-grey1 font-medium text-xs lg:text-sm">
              Created on Wed, 12th June 2022, 08:00am
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="default"
              size="default"
              className="!bg-primary !rounded-lg !font-semibold"
              onClick={responseHandle}
            >
              Respond
            </Button>
            <Button
              variant="destructive"
              size="default"
              className="!bg-error !rounded-lg !font-semibold"
            >
              <X className="w-4 h-4" />
              <span>Reject</span>
            </Button>
          </div>
        </section>
        <QuoteInformation />
        <QuoteViewTable data={data.items} />
        <QuoteTermsContract data={data.contract} />
      </div>
    </QuoteDataContext.Provider>
  );
};

export default QuoteDetail;
