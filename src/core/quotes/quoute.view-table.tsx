import React, {FC} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
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
import {Checkbox} from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import {TQuoteItem} from '@/types/quotes.types';
import {QuoteItem} from './quote.item';
import {ItemSummation} from './item.summation';

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
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
        <span>Items</span>
      </div>
    ),
    cell: ({row}) => (
      <div className="flex justify-start items-center gap-1">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
        <QuoteItem />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'variant',
    header: () => <h6 className="">Variants</h6>,
    cell: ({row}) => (
      <div className="capitalize text-grey3 text-xs lg:text-sm font-normal">
        {row.getValue('variant')}
      </div>
    ),
  },
  {
    accessorKey: 'quantity',
    header: () => {
      return <h6 className="">Quantity</h6>;
    },
    cell: ({row}) => (
      <div className="text-grey3 text-xs lg:text-sm font-normal">
        {row.getValue('quantity')}
      </div>
    ),
  },
  {
    accessorKey: 'price',
    header: () => {
      return <h6 className="">Price</h6>;
    },
    cell: ({row}) => (
      <div className="text-grey3 text-xs lg:text-sm font-normal">
        {row.getValue('price')}
      </div>
    ),
  },
  {
    accessorKey: 'amount',
    header: () => <div className="">Amount</div>,
    cell: ({row}) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return (
        <div className="text-grey3 text-xs lg:text-sm font-normal">
          {formatted}
        </div>
      );
    },
  },
  {
    id: 'delivery_date',
    header: () => (
      <h6 className="text-end truncate ...">Expected Delivery Date</h6>
    ),
    enableHiding: false,
    cell: ({row}) => {
      return (
        <div className="text-grey3 text-xs lg:text-sm font-normal text-end">
          {row.getValue('deliveryDate')}
        </div>
      );
    },
  },
];

export const QuoteViewTable: FC = () => {
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
          <div className="flex justify-between items-center font-satoshi">
            <CardTitle className="font-semibold text-base lg:text-xl text-dark">
              Item(s)
            </CardTitle>
          </div>
        </CardHeader>
        <div className="w-full">
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
          <div className="rounded-md border">
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
          </div>

          <div className="p-5 mt-4 lg:mt-8 flex flex-col justify-end items-end">
            <div className="flex flex-col justify-start items-end  gap-4">
              <div className="flex justify-start gap-3 items-end">
                <ItemSummation amount={8000} label="sub total" />
              </div>
              <div className="flex justify-start gap-3 items-center">
                <ItemSummation
                  amount={8000}
                  label="total"
                  classes="text-sm lg:text-base font-semibold text-grey6"
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
