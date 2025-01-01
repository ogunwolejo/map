import {QuoteProcedureState} from '@/types/quotes.types';
import {createContext, useContext} from 'react';

type MoveNext = {
  nextHandler: (val: QuoteProcedureState) => void;
}

export const StageContext = createContext<MoveNext | undefined>(undefined);

export const useStageContext = () => {
  const ctx = useContext(StageContext);
  if (ctx === undefined) {
    throw new Error('QuoteData is undefined');
  }

  return ctx;
};
