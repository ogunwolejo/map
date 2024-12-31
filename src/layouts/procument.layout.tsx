import DefaultHeader from '@/core/app-headers/default.header';
import HeaderWithBackArrow from '@/core/app-headers/header.back';
import {FC, Fragment} from 'react';
import {Outlet} from 'react-router-dom';

const ProcumentLayout: FC = () => {
  return (
    <Fragment>
      <DefaultHeader />
      <div className="flex-grow">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default ProcumentLayout;

export const QuotesLayoutPage: FC = () => {
  return (
    <Fragment>
      <HeaderWithBackArrow />
      <div className="flex-grow">
        <Outlet />
      </div>
    </Fragment>
  );
};
