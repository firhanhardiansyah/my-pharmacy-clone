import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Formula } from '@/types/formula';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import DataTableRowActions from './data-table-row-actions';

export const columns: ColumnDef<Formula>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Name
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => {
            const formula = row.original;

            return (
                <div className="px-3">
                    <span>{formula.name}</span>
                </div>
            );
        },
    },
    {
        accessorKey: 'percentage',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Percentage (%)
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => {
            const formula = row.original;

            return (
                <div className="px-3">
                    <span>{formula.percentage} %</span>
                </div>
            );
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
];
