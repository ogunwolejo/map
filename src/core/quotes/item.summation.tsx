import clsx from 'clsx';
import {memo, FC} from 'react';

type Props = {
  classes?: string;
  amount: number;
  label: string;
};

export const ItemSummation: FC<Props> = memo(
  ({
    classes = 'text-sm lg:text-base font-normal text-grey6',
    amount,
    label,
  }) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
    return (
      <div className="flex justify-start gap-6 items-center">
        <h6 className="font-normal text-sm lg:text-base capitalize text-start">
          {label}
        </h6>
        <p className={clsx(classes, 'text-right self-end')}>{formatted}</p>
      </div>
    );
  },
);
