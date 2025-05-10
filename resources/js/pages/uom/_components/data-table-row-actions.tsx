import ResponsiveDialog from '@/components/responsive-dialog';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Uom } from '@/types/uom';
import { router } from '@inertiajs/react';
import { Row } from '@tanstack/react-table';
import { MoreVertical, Pencil, Trash } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { FormInput } from './form-input';

interface DataTableRowActionsProps<TData> {
    row: Row<TData>;
}

export default function DataTableRowActions<TData extends Uom>({ row }: DataTableRowActionsProps<TData>) {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const onDelete = (id: number) => {
        router.visit(route('uoms.destroy', id), {
            method: 'delete',
            onSuccess: () => {
                setIsDeleteOpen(false);
                toast.success('Units of Measure deleted successfully!');
            },
            onError: () => {
                setIsDeleteOpen(false);
                toast.error('Failed to delete Units of Measure.');
            },
        });
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreVertical />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            variant="default"
                            onClick={() => {
                                setIsEditOpen(true);
                            }}
                        >
                            <Pencil />
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            variant="destructive"
                            onClick={() => {
                                setIsDeleteOpen(true);
                            }}
                        >
                            <Trash />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <ResponsiveDialog
                title="Edit Unit of Measure"
                description="Make sure all information entered is complete and accurate, including the code, name, and a brief description of the unit of measure."
                open={isEditOpen}
                setOpen={setIsEditOpen}
            >
                <FormInput uom={row.original} setIsOpen={setIsEditOpen} />
            </ResponsiveDialog>
            <ResponsiveDialog
                title="Delete Unit of Measure"
                description="Are you sure you want to delete this unit of measure? This action cannot be undone."
                open={isDeleteOpen}
                setOpen={setIsDeleteOpen}
            >
                <div className="flex flex-col items-end justify-center space-y-4">
                    <div className="flex space-x-2">
                        <Button variant="destructive" onClick={() => onDelete(row.original.id)}>
                            Delete
                        </Button>
                        <Button variant="secondary" onClick={() => setIsDeleteOpen(false)}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </ResponsiveDialog>
        </>
    );
}
