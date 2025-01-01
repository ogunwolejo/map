import React, {FC} from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import {TQuoteItem} from '@/types/quotes.types';
import {CalendarInput, DefaultSelect} from '../app.inputs';
import {QuoteFillForm} from './quote.fill-form';
import {Separator} from '@/components/ui/separator';
import {Input} from '@/components/ui/input';
import {DollarSignIcon} from 'lucide-react';
import {Button} from '@/components/ui/button';
import Trash from '@/assets/icons/trash.svg';
import {ItemSummation} from './item.summation';
import {Textarea} from '@/components/ui/textarea';
import QuoteStageButton from './quotes.stage-buttons';

const data: TQuoteItem[] = [
  {
    id: 23401,
    amount: 316,
    name: 'John wick',
    price: 120,
    variant: 'Blue',
    quantity: '120 bags',
    deliveryDate: Date.now(),
  },
  {
    id: 23403,
    amount: 2220,
    name: 'John wick',
    price: 2220,
    variant: 'Blue',
    quantity: '120 bags',
    deliveryDate: Date.now(),
  },
];

export const columns: ColumnDef<TQuoteItem>[] = [
  {
    id: 'id',
    header: ({table}) => (
      <div className="flex justify-start items-center gap-2">
        <span>Items</span>
      </div>
    ),
    cell: ({row}) => (
      <DefaultSelect
        placeholder="Oxygen Concentrator"
        value={row.getValue('name')}
        item={[
          {label: 'Oxygen Concentrator', value: 'Oxygen Concentrator'},
          {label: 'Mechanical Ventilator', value: 'Mechanical Ventilator'},
        ]}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'variant',
    header: () => <h6 className="">Variants</h6>,
    cell: ({row}) => (
      <DefaultSelect
        classes="text-grey7 font-normal border border-grey5"
        placeholder="Blue"
        value={row.getValue('variants')}
        item={[
          {label: 'Blue', value: 'Blue'},
          {label: 'Gray', value: 'Grey'},
        ]}
      />
    ),
  },
  {
    accessorKey: 'quantity',
    header: () => {
      return <h6 className="">Quantity</h6>;
    },
    cell: ({row}) => <QuantityInput value={row.getValue('quantity')} />,
  },
  {
    accessorKey: 'price',
    header: () => {
      return <h6 className="">Price</h6>;
    },
    cell: ({row}) => {
      const price = parseFloat(row.getValue('price'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price);
      return <PriceInput value={formatted} />;
    },
  },
  {
    id: 'delivery_date',
    header: () => <h6 className=" truncate ...">Expected Delivery Date</h6>,
    enableHiding: false,
    cell: ({row}) => {
      return (
        <CalendarInput
          className="text-grey7 font-normal border border-grey5"
          value={row.getValue('deliveryDate')}
        />
      );
    },
  },
  {
    accessorKey: 'amount',
    header: () => <div className="">Amount</div>,
    cell: ({row}) => {
      const price = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price);
      return <PriceInput value={formatted} />;
    },
  },
  {
    accessorKey: 'action',
    header: () => <></>,
    cell: ({row}) => (
      <div className="flex justify-end items-center">
        <Button size="icon" variant="link">
          <img src={Trash} className="" />
        </Button>
      </div>
    ),
  },
];

export const QuoteFillDetails: FC = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <Card>
      <CardContent>
        <CardHeader className="!px-1">
          <div className="flex flex-col justify-start items-start font-satoshi">
            <CardTitle className="font-semibold text-base lg:text-xl text-dark">
              Request for Quote
            </CardTitle>
            <CardDescription className="!text-sm !text-grey4">
              Fill out these details to send the RFQ
            </CardDescription>
          </div>
        </CardHeader>

        <section className="w-full pt-4">
          <QuoteFillForm />
        </section>

        <Separator className="my-6 lg:my-8" orientation="horizontal" />

        <section className="w-full pt-2">
          <div
            className="font-semibold !text-dark text-base py-3"
            role="button"
          >
            Add item
          </div>
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md">
            <Table className="!text-xs table-fixed">
              <TableHeader className="!text-xs !font-normal !text-grey">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className="bg-[#F9FAFB]">
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && 'selected'}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>

            <Separator className="my-6 lg:my-8" orientation="horizontal" />

            <div className="p-5 mt-4 lg:mt-8 flex flex-col justify-end items-end">
              <div className="flex flex-col justify-start items-end  gap-4">
                <div className="flex justify-start gap-3 items-end">
                  <ItemSummation amount={8000} label="sub total" />
                </div>
              </div>
            </div>

            <RequestTextArea />
          </div>
        </section>

        <Separator className="my-6" orientation="horizontal" />

        <QuoteStageButton />
      </CardContent>
    </Card>
  );
};

const QuantityInput = React.memo((props: React.ComponentProps<'input'>) => {
  return (
    <div className="flex flex-col gap-2 justify-start items-start w-full">
      <div className="!bg-[#D0D5DD] border !border-header relative w-full rounded-md !h-10">
        <Input
          className="font-normal placeholder:text-grey4 text-xs lg:text-sm text-dark pr-12"
          type="text"
          {...props}
          ref={props.ref}
        />
        <div className="text-xs right-2 font-normal absolute top-1/2 transform -translate-y-1/2 cursor-pointer ">
          <span className="bg-header text-grey1 border rounded-sm p-1 capitalize">
            pack
          </span>
        </div>
      </div>
    </div>
  );
});

const PriceInput = React.memo((props: React.ComponentProps<'input'>) => {
  return (
    <div className="flex flex-col gap-2 justify-start items-start w-full">
      <div className="!bg-[#D0D5DD] border !border-header relative w-full rounded-md !h-10">
        <Input
          className="font-normal placeholder:text-grey4 text-xs lg:text-sm text-dark pl-12"
          type="text"
          {...props}
          ref={props.ref}
        />
        <div className="text-xs left-2 font-normal absolute top-1/2 transform -translate-y-1/2 cursor-pointer ">
          <span className="bg-header text-grey1 border rounded-sm p-1 capitalize">
            <DollarSignIcon className="w-6 h-5" />
          </span>
        </div>
      </div>
    </div>
  );
});

const RequestTextArea = React.memo(() => {
  return (
    <div className="mt-3 flex flex-col justify-start items-start gap-2 w-2/5">
      <h6 className="font-semibold text-xs lg:text-sm text-grey6">Note</h6>
      <Textarea
        placeholder="Enter note here"
        className="placeholder:text-grey4 text-grey4 text-xs lg:text-sm"
        rows={5}
      />
      <p className="font-medium text-xs text-grey6 self-end">0/200</p>
    </div>
  );
});
