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

export type Status = 'AWAITING' | 'REJECTED' | 'ACCEPTED';

export type QuoteInfo = {
  title: string;
  client: {
    name: string;
    address: string;
  };
  requestNo: string;
  requestor: {
    fullName: string;
    role: string;
  };
  status: Status;
  department: string;
};

export type QuoteAgreement = {
  terms: number;
  schedule: string;
  shippingMethod: string;
  leadTime: number; // in days
  image: '';
};

export type QuoteItems = {
  name: string;
  id: string;
  quantity: string;
  price: number;
  amount: number;
  deliverySchedule: Date;
  variant?: string;
};

export type QuoteData = {
  info: QuoteInfo;
  note: string; // max of 200 characters
  contract: QuoteAgreement;
  items: Array<QuoteItems>;
};
