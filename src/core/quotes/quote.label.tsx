import {FC, ReactNode} from 'react';

type Props = {
  title: string;
  child: ReactNode;
};

const QuoteLabel: FC<Props> = ({title, child}) => {
  return (
    <div className="flex justify-between items-center">
      <h5 className="font-medium text-sm lg:text-base text-grey2">{title}</h5>
      {child}
    </div>
  );
};

export default QuoteLabel;
