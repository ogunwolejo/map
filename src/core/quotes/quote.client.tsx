import {memo} from 'react';
import {Card, CardContent, CardHeader} from '@/components/ui/card';
import ClientSvg from '@/assets/icons/client.svg';
import Profile from '../profile';
import {
  QuoteDataContext,
  useQuoteDataContext,
} from '@/context/quote-data.context';

export const QuoteClient = memo(() => {
  const quoteCtx = useQuoteDataContext(QuoteDataContext);
  const companyFirstChar = quoteCtx.info.client.name.charAt(0).toUpperCase();
  return (
    <Card className="w-full xl:w-[352px] h-[97px]">
      <CardContent className="!p-4">
        <CardHeader className="!p-0">
          <div className="flex justify-start items-center gap-2">
            <img src={ClientSvg} className="w-4 h-4" />
            <span className="text-xs text-grey6">Client</span>
          </div>
          <div className="flex justify-start items-center gap-2 pt-2">
            <Profile name={companyFirstChar} bgColor="bg-reddish" size="sm" />
            <div>
              <h6 className="font-medium text-sm text-grey7">
                {quoteCtx.info.client.name}
              </h6>
              <p className="text-xs text-grey6 font-normal">
                {quoteCtx.info.client.address}
              </p>
            </div>
          </div>
        </CardHeader>
      </CardContent>
    </Card>
  );
});
