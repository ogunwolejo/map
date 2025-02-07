import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {FC} from 'react';
import QuoteLabel from './quote.label';
import Status from '../status';
import Profile from '../profile';
import {QuoteClient} from './quote.client';
import {useQuoteDataContext} from '@/context/quote-data.context';

const QuoteInformation: FC = () => {
  const quoteCtx = useQuoteDataContext();
  return (
    <Card>
      <CardContent>
        <CardHeader className="!px-1">
          <div className="flex justify-between items-center font-satoshi">
            <CardTitle className="font-semibold text-base lg:text-xl text-dark">
              Quote Information
            </CardTitle>
            <CardDescription className="text-grey1 font-normal">
              Expected delivery date : 2024-12-02
            </CardDescription>
          </div>
        </CardHeader>
        <section className="grid xl:grid-cols-2">
          <div className="p-2 space-y-3">
            <QuoteLabel
              title="Title"
              child={
                <p className="font-medium text-xs md:text-sm lg:text-base text-grey3">
                  {quoteCtx.info.title}
                </p>
              }
            />
            <QuoteLabel
              title="RFQ No"
              child={
                <p className="font-medium text-xs md:text-sm lg:text-base text-grey3">
                  {quoteCtx.info.requestNo}
                </p>
              }
            />
            <QuoteLabel
              title="Requestor"
              child={
                <div className="flex justify-start items-center gap-1">
                  <Profile
                    size="md"
                    name={quoteCtx.info.requestor.fullName}
                    bgColor="bg-reddish"
                  />
                  <span className="font-medium text-xs md:text-sm lg:text-base text-grey">
                    {quoteCtx.info.requestor.fullName}
                  </span>
                  <span className="rounded-full bg-grey5 h-1 w-1 sm:h-2 sm:w-2"></span>
                  <span className="font-medium text-xs md:text-sm lg:text-base text-grey4">
                    {quoteCtx.info.requestor.role}
                  </span>
                </div>
              }
            />
            <QuoteLabel
              title="Status"
              child={<Status label={quoteCtx.info.status} />}
            />
            <QuoteLabel
              title="Department"
              child={
                <p className="font-medium text-xs md:text-sm lg:text-base text-grey3">
                  {quoteCtx.info.department}
                </p>
              }
            />
          </div>
          <div className="py-2 !flex !justify-end">
            <QuoteClient />
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default QuoteInformation;

export const QuoteInformationEdit: FC = () => {
  const quoteCtx = useQuoteDataContext();
  return (
    <Card>
      <CardContent>
        <CardHeader className="!px-1">
          <div className="flex justify-between items-center font-satoshi">
            <CardTitle className="font-semibold text-base lg:text-xl text-dark">
              Request Information
            </CardTitle>
            <div className="flex justify-center items-center">
              {/** edit */}
            </div>
          </div>
        </CardHeader>
        <section className="grid xl:grid-cols-2">
          <div className="p-2 space-y-3">
            <QuoteLabel
              title="Title"
              child={
                <p className="font-medium text-xs md:text-sm lg:text-base text-grey3">
                  {quoteCtx.info.title}
                </p>
              }
            />
            <QuoteLabel
              title="RFQ No"
              child={
                <p className="font-medium text-xs md:text-sm lg:text-base text-grey3">
                  {quoteCtx.info.requestNo}
                </p>
              }
            />
            <QuoteLabel
              title="Requestor"
              child={
                <div className="flex justify-start items-center gap-1">
                  <Profile
                    size="md"
                    name={quoteCtx.info.requestor.fullName}
                    bgColor="bg-reddish"
                  />
                  <span className="font-medium text-xs md:text-sm lg:text-base text-grey">
                    {quoteCtx.info.requestor.fullName}
                  </span>
                  <span className="rounded-full bg-grey5 h-1 w-1 sm:h-2 sm:w-2"></span>
                  <span className="font-medium text-xs md:text-sm lg:text-base text-grey4">
                    {quoteCtx.info.requestor.role}
                  </span>
                </div>
              }
            />
            <QuoteLabel
              title="Status"
              child={<Status label={quoteCtx.info.status} />}
            />
            <QuoteLabel
              title="Department"
              child={
                <p className="font-medium text-xs md:text-sm lg:text-base text-grey3">
                  {quoteCtx.info.department}
                </p>
              }
            />
          </div>
          <div className="py-2 !flex !justify-end">
            <QuoteClient />
          </div>
        </section>
      </CardContent>
    </Card>
  );
};
