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
import { MedicalService } from '@/types/medical-service';
import { router } from '@inertiajs/react';
import { Row } from '@tanstack/react-table';
import { MoreVertical, Pencil, Trash } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { MedicalServiceForm } from './medical-service-form';

interface DataTableRowActionsProps<TData> {
    row: Row<TData>;
}

export default function DataTableRowActions<TData extends MedicalService>({ row }: DataTableRowActionsProps<TData>) {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const medicalServiceDelete = (id: number) => {
        router.visit(route('medical-services.destroy', id), {
            method: 'delete',
            onSuccess: () => {
                setIsDeleteOpen(false);
                toast.success('Formula deleted successfully!');
            },
            onError: () => {
                setIsDeleteOpen(false);
                toast.error('Failed to delete formula.');
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
                title="Edit Percentage Formula"
                description="Change the percentage formula to suit your calculation needs. Make sure the format is valid for accurate results."
                open={isEditOpen}
                setOpen={setIsEditOpen}
            >
                <MedicalServiceForm medicalService={row.original} setIsOpen={setIsEditOpen} />
            </ResponsiveDialog>
            <ResponsiveDialog
                title="Delete Percentage Formula"
                description="Are you sure you want to delete this formula? This action cannot be undone."
                open={isDeleteOpen}
                setOpen={setIsDeleteOpen}
            >
                <div className="flex flex-col items-end justify-center space-y-4">
                    <div className="flex space-x-2">
                        <Button variant="destructive" onClick={() => medicalServiceDelete(row.original.id)}>
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
