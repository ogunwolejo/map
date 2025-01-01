import {FC, Fragment, memo} from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useForm, type Resolver} from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {DefaultSelect} from '../app.inputs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectCustomizeTrigger,
  SelectValue,
} from '@/components/ui/select';
import clsx from 'clsx';
import {TSelectProps} from '@/types/utils.types';
import {Separator} from '@/components/ui/separator';
import Uploader from './uploader';

type TQuoteRequestAgreement = {
  terms: string;
  shippingMethod: string;
  leadTime: string;
  deliverySchedule: string;
};

const QuoteRequestAgreementSchema = z
  .object({
    terms: z.string().max(9, 'error in generating request number'),
    shippingMethod: z.string().min(3, 'title is required'),
    leadTime: z.string().min(3, 'department is required'),
    deliverySchedule: z.string().min(3, 'day of delivery is required'),
  })
  .required();

const QuoteAgreementForm: FC = () => {
  const form = useForm<Partial<TQuoteRequestAgreement>>({
    resolver: zodResolver(QuoteRequestAgreementSchema) as Resolver<
      Partial<TQuoteRequestAgreement>
    >,
    mode: 'onSubmit',
    defaultValues: {
      terms: '',
      shippingMethod: '',
      leadTime: '',
      deliverySchedule: '',
    },
  });
  return (
    <Fragment>
      <Form {...form}>
        <form className="" autoComplete="on">
          <div className="gap-10 grid grid-cols-1 md:grid-cols-2">
            <FormField
              control={form.control}
              name="terms"
              render={() => (
                <FormItem className="w-full">
                  <FormLabel className="!font-semibold !text-sm !text-grey6">
                    Payment Terms
                  </FormLabel>
                  <FormControl>
                    <DefaultSelect
                      classes="text-grey7 font-normal border border-grey5"
                      placeholder="Net 30"
                      item={[
                        {label: 'Blue', value: 'Blue'},
                        {label: 'Gray', value: 'Grey'},
                      ]}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deliverySchedule"
              render={() => (
                <FormItem className="w-full">
                  <FormLabel className="!font-semibold !text-sm !text-grey6">
                    Delivery Schedule
                  </FormLabel>
                  <FormControl>
                    <DefaultSelect
                      classes="text-grey7 font-normal border border-grey5"
                      placeholder="Immediate delivery"
                      item={[
                        {label: 'Blue', value: 'Blue'},
                        {label: 'Gray', value: 'Grey'},
                      ]}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col justify-start items-start border-0 w-full">
              <FormField
                control={form.control}
                name="shippingMethod"
                render={() => (
                  <FormItem className="w-full">
                    <FormLabel className="!font-semibold !text-sm !text-grey6">
                      Shipping Method
                    </FormLabel>
                    <FormControl>
                      <DefaultSelect
                        classes="text-grey7 font-normal border border-grey5"
                        placeholder="Immediate delivery"
                        item={[
                          {label: 'Blue', value: 'Blue'},
                          {label: 'Gray', value: 'Grey'},
                        ]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator className="my-8" />
              <Uploader />
            </div>

            <FormField
              control={form.control}
              name="leadTime"
              render={() => (
                <FormItem className="w-full">
                  <FormLabel className="!font-semibold !text-sm !text-grey6">
                    Lead time
                  </FormLabel>
                  <FormControl>
                    <LeadTimeDropdown
                      classes="text-grey7 font-normal border border-grey5"
                      placeholder="Immediate delivery"
                      item={[
                        {label: 'Blue', value: 'Blue'},
                        {label: 'Gray', value: 'Grey'},
                      ]}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </Fragment>
  );
};

export default QuoteAgreementForm;

const LeadTimeDropdown: FC<TSelectProps> = memo(
  ({item, placeholder, classes, value}) => {
    return (
      <div className="flex flex-col gap-2 justify-start items-start">
        <Select>
          <SelectCustomizeTrigger
            className={clsx(
              classes,
              'placeholder:text-grey4 text-xs lg:text-sm font-normal !outline-none !ring-0 !h-10',
            )}
          >
            <SelectValue
              placeholder={placeholder}
              defaultValue={value ?? ''}
            ></SelectValue>
          </SelectCustomizeTrigger>
          <SelectContent>
            {item.map((it, idx: number) => {
              return (
                <SelectItem key={idx} value={it.value}>
                  {it.label}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    );
  },
);
