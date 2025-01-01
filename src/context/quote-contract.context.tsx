import {QuoteAgreement} from '@/types/quotes.types';
import {createContext, useContext} from 'react';

export const QuoteContractContext = createContext<QuoteAgreement | undefined>(
  undefined,
);

export const useQuoteAgreementContext = () => {
  const ctx = useContext(QuoteContractContext);
  if (ctx === undefined) {
    throw new Error('QuoteAgreement is undefined');
  }

  return ctx;
};
