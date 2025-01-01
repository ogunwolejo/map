import {QuoteProcessCard} from '@/core/quotes/quote.process-card';
import {ProcessList} from '@/types/quotes.types';
import {FC, useMemo} from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';
import QuoteAgreementForm from '@/core/quotes/quote.agreement-form';
import QuoteStageButton from '@/core/quotes/quotes.stage-buttons';

const QuoteAgreement: FC = () => {
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
      <QuoteProcessCard activeNumber={2} stages={stages} />
      <Card>
        <CardContent>
          <CardHeader className="!px-1">
            <div className="flex flex-col justify-start items-start font-satoshi">
              <CardTitle className="font-semibold text-base lg:text-xl text-dark">
                Terms and Attachments
              </CardTitle>
              <CardDescription className="!text-sm !text-grey4">
                Provide detailed information on payment and delivery terms
              </CardDescription>
            </div>
          </CardHeader>

          <section className="w-full pt-4">
            <QuoteAgreementForm />
          </section>

          <Separator className="my-6 lg:my-8" orientation="horizontal" />
          <QuoteStageButton nexStage="review" isSubmit={false} />
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteAgreement;
