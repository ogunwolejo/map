import {FC, memo} from 'react';
import {Card, CardContent} from '@/components/ui/card';
import clsx from 'clsx';
import {ProcessList, TCurrentProccess} from '@/types/quotes.types';

const NumberContainer: FC<{cnt: number; active: boolean; status?: string}> = ({
  cnt,
  active,
  status = 'undone',
}) => {
  return (
    <div className="flex justify-start items-center rounded-full">
      <div
        className={clsx(
          status === 'done'
            ? 'bg-[#E7F6EC]'
            : active
              ? 'bg-primary border border-transparent'
              : 'bg-transparent border border-grey4',
          'relative flex justify-center items-center rounded-full h-8 w-8',
        )}
      >
        <div className="absolute inset-0 rounded-full z-0"></div>
        <p
          className={clsx(
            status === 'done'
              ? 'text-[#0F973D]'
              : active
                ? 'text-white'
                : 'text-grey4',
            'text-base font-semibold',
          )}
        >
          {cnt}
        </p>
      </div>
    </div>
  );
};

type CurrentStage = ProcessList & {
  active: boolean;
};

const QuoteProcessComponent: FC<TCurrentProccess> = memo(({active, list}) => {
  return list.map((item, idx: number) => {
    const isCurrent: CurrentStage =
      item.count === active
        ? {active: true, ...item}
        : {active: false, ...item};

    return (
      <div key={idx} className="flex justify-start gap-3 items-center">
        <NumberContainer
          cnt={isCurrent.count}
          status={isCurrent.status}
          active={isCurrent.active}
        />
        <div className="flex flex-col justify-start">
          <h6
            className={clsx(
              isCurrent.active ? 'font-semibold' : 'font-medium',
              'text-sm lg:text-base text-grey7',
            )}
          >
            {item.title}
          </h6>
          <p
            className={clsx(
              isCurrent.active ? 'text-grey6' : 'text-grey1',
              'font-normal text-xs',
            )}
          >
            {item.content}
          </p>
        </div>
      </div>
    );
  });
});

export const QuoteProcessCard: FC<{
  activeNumber: number;
  stages: ProcessList[];
}> = memo(({activeNumber, stages}) => {
  return (
    <>
      <Card>
        <CardContent className="!pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <QuoteProcessComponent active={activeNumber} list={stages} />
        </CardContent>
      </Card>
    </>
  );
});
