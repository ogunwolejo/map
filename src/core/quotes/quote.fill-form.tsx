import {FC} from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {type SubmitHandler, useForm, type Resolver} from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {CalendarInput, CancelIconInput, DefaultInput} from '../app.inputs';

type TQuoteRequest = {
  title: string;
  no: string;
  department: string;
  deliveryDate: string;
};

const QuoteRequestSchema = z
  .object({
    no: z.string().max(9, 'error in generating request number'),
    title: z.string().min(3, 'title is required'),
    department: z.string().min(3, 'department is required'),
    deliveryDate: z.string().min(3, 'day of delivery is required'),
  })
  .required();

export const QuoteFillForm: FC = () => {
  const form = useForm<Partial<TQuoteRequest>>({
    resolver: zodResolver(QuoteRequestSchema) as Resolver<
      Partial<TQuoteRequest>
    >,
    mode: 'onSubmit',
    defaultValues: {
      deliveryDate: '',
      department: '',
      no: '',
      title: '',
    },
  });
  return (
    <Form {...form}>
      <form className="" autoComplete="on">
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2">
          <FormField
            control={form.control}
            name="no"
            render={() => (
              <FormItem className="w-full">
                <FormLabel className="!font-semibold !text-sm !text-grey6">
                  RFQ No
                </FormLabel>
                <FormControl>
                  <DefaultInput placeholder="RFQ-10234" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={() => (
              <FormItem className="w-full">
                <FormLabel className="!font-semibold !text-sm !text-grey6">
                  Title
                </FormLabel>
                <FormControl>
                  <DefaultInput placeholder="Request for Equipments" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="department"
            render={() => (
              <FormItem className="w-full">
                <FormLabel className="!font-semibold !text-sm !text-grey6">
                  Department
                </FormLabel>
                <FormControl>
                  <CancelIconInput placeholder="RFQ-10234" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <FormField
              control={form.control}
              name="deliveryDate"
              render={() => (
                <FormItem className="w-full">
                  <FormLabel className="!font-semibold !text-sm !text-grey6">
                    Expected delivery date
                  </FormLabel>
                  <FormControl>
                    <CalendarInput placeholder="2024-12-02" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="font-medium text-xs md:text-sm text-grey1 mt-1.5">
              Calculated based on lead time and issue date
            </p>
          </div>
        </div>
      </form>
    </Form>
  );
};
