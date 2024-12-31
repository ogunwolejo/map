import clsx from 'clsx';
import {memo, FC} from 'react';

type Props = {
  label: string;
};

const Status: FC<Props> = memo(({label}) => (
  <div className="flex justify-start items-center">
    <div
      className={clsx(
        'relative flex justify-center items-center rounded-xl border border-transparent bg-reddish px-2',
      )}
    >
      <div className="absolute inset-0 rounded-full z-0"></div>
      <p className="text-xs font-medium text-[#F56630]">{label}</p>
    </div>
  </div>
));

export default Status;
