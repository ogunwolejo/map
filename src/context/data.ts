import {QuoteData} from '@/types/quotes.types';

export const data: QuoteData = {
  info: {
    client: {
      address: 'Clear street',
      name: 'Westend Hospital',
    },
    department: 'Maternity',
    requestNo: 'RQ #01234',
    requestor: {
      fullName: 'Jane Doe',
      role: 'Head Nurse, Paediatrics',
    },
    status: 'AWAITING',
    title: 'Request for Equipments',
  },
  note: '',
  contract: {
    image: '',
    leadTime: 10,
    schedule: 'Immediate delivery',
    shippingMethod: 'Ground shipping',
    terms: 30,
  },
  items: [
    {
      id: '23401',
      amount: 316,
      name: 'Oxygen Concentrator',
      price: 120,
      variant: 'Blue',
      quantity: '120 bags',
      deliverySchedule: new Date(2024, 8, 7),
    },
    {
      id: '23403',
      amount: 2220,
      name: 'Oxygen Concentrator',
      price: 2220,
      variant: 'Red',
      quantity: '120 bags',
      deliverySchedule: new Date(2024, 8, 4),
    },
  ],
};
