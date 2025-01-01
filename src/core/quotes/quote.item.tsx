import {FC, Fragment} from 'react';

export const QuoteItem: FC = () => {
  return (
    <Fragment>
      <div className="flex justify-start items-center gap-2">
        <img />
        <div>
          <p className="text-grey7 text-xs lg:text-sm font-medium truncate ...">
            Oxygen concentrator
          </p>
          <p className="font-light text-xs text-grey3">#28373</p>
        </div>
      </div>
    </Fragment>
  );
};
