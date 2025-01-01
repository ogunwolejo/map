import * as React from 'react';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {CalendarIcon, X} from 'lucide-react';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {Calendar} from '@/components/ui/calendar';
import clsx from 'clsx';
import {TSelectProps} from '@/types/utils.types';

const InputLabel: React.FC = React.memo(() => (
  <Label className="!font-semibold !text-sm !text-grey6"> RFQ No</Label>
));

export const DefaultInput = React.memo(
  (props: React.ComponentProps<'input'>) => {
    return (
      <div className="flex flex-col gap-2 justify-start items-start w-full">
        <Input
          className="border !border-transparent !focus:outline-none !focus:ring-0 !bg-[#D0D5DD] placeholder:text-grey4 text-xs lg:text-sm font-normal !h-10 text-dark"
          type={props.type}
          {...props}
          ref={props.ref}
        />
      </div>
    );
  },
);

export const CancelIconInput = React.memo(
  (props: React.ComponentProps<'input'>) => {
    return (
      <div className="flex flex-col gap-2 justify-start items-start w-full">
        <div className="!bg-[#D0D5DD] border !border-header relative w-full rounded-md !h-10">
          <Input
            className="border !border-transparent !bg-transparent placeholder:text-grey4 text-xs lg:text-sm font-normal text-dark pr-4"
            type={props.type}
            {...props}
            ref={props.ref}
          />
          <X className="w-5 h-5 right-2 absolute top-1/2 transform -translate-y-1/2 cursor-pointer text-grey1" />
        </div>
      </div>
    );
  },
);

export const CalendarInput = React.memo(
  (props: React.ComponentProps<'input'>) => {
    return (
      <React.Fragment>
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex flex-col gap-2 justify-start items-start w-full">
              <div className="!bg-[#D0D5DD] border !border-header relative w-full rounded-md !h-10">
                <div className="left-2 absolute top-1/2 transform -translate-y-1/2 cursor-pointer text-dark flex justify-start items-center gap-2">
                  <CalendarIcon className=" h-4 w-4" />
                  <span className="text-sm font-normal">2024-11-02</span>
                </div>
                <Input
                  className="border !border-transparent !bg-transparent placeholder:text-grey4 text-xs lg:text-sm font-normal text-grey4 pl-4 hidden-input"
                  type={props.type}
                  {...props}
                  ref={props.ref}
                />
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              //selected={date}
              //onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </React.Fragment>
    );
  },
);

export const DefaultSelect: React.FC<TSelectProps> = React.memo(
  ({
    item,
    classes = 'text-grey4 border !border-header bg-[#D0D5DD] ',
    placeholder,
    value,
  }) => {
    return (
      <div className="flex flex-col gap-2 justify-start items-start">
        <Select>
          <SelectTrigger
            className={clsx(
              classes,
              'placeholder:text-grey4 text-xs lg:text-sm font-normal !outline-none !ring-0 !h-10',
            )}
          >
            <SelectValue placeholder={placeholder} defaultValue={value ?? ''} />
          </SelectTrigger>
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
