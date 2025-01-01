import {memo} from 'react';
import {Card, CardContent, CardHeader} from '@/components/ui/card';
import ClientSvg from '@/assets/icons/client.svg';
import Profile from '../profile';

export const QuoteClient = memo(() => {
  return (
    <Card className="w-full xl:w-[352px] h-[97px]">
      <CardContent className="!p-4">
        <CardHeader className="!p-0">
          <div className="flex justify-start items-center gap-2">
            <img src={ClientSvg} className="w-4 h-4" />
            <span className="text-xs text-grey6">Client</span>
          </div>
          <div className="flex justify-start items-center gap-2 pt-2">
            <Profile name="W" bgColor="bg-reddish" size="sm" />
            <div>
              <h6 className="font-medium text-sm text-grey7">
                Westend Hospital
              </h6>
              <p className="text-xs text-grey6 font-normal">Clear street</p>
            </div>
          </div>
        </CardHeader>
      </CardContent>
    </Card>
  );
});
