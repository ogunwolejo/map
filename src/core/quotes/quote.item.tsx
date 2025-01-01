import {FC, Fragment} from 'react';

type Props = {
  name: string;
  no: string;
};

export const QuoteItem: FC<Props> = ({name, no}) => {
  return (
    <Fragment>
      <div className="flex justify-start items-center gap-2">
        <img />
        <div>
          <p className="text-grey7 text-xs lg:text-sm font-medium truncate ...">
            {name}
          </p>
          <p className="font-light text-xs text-grey3">#{no}</p>
        </div>
      </div>
    </Fragment>
  );
};
