import {QuoteData} from '@/types/quotes.types';
import {createContext, useContext} from 'react';

export const QuoteDataContext = createContext<QuoteData | undefined>(undefined);

export const useQuoteDataContext = () => {
  const ctx = useContext(QuoteDataContext);
  if (ctx === undefined) {
    throw new Error('QuoteData is undefined');
  }

  return ctx;
};
