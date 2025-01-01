export type TQuoteItem = {
  name: string;
  id: number;
  variant: string;
  quantity: string;
  price: number;
  amount: number;
  deliveryDate: number;
};

export type QuoteProcedureState = 'request' | 'contract' | 'review';

export type ProcessList = {
  count: number;
  title: string;
  content: string;
  status?: 'done' | 'undone';
};

export type TCurrentProccess = {
  active: number;
  list: Array<ProcessList>;
};
