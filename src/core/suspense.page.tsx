import {Suspense, PropsWithChildren} from 'react';

const SuspensePage = ({children}: PropsWithChildren) => {
  return <Suspense>{children}</Suspense>;
};

export default SuspensePage;
