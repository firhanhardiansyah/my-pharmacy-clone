import ResponsiveDialog from '@/components/responsive-dialog';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, Pagination } from '@/types';
import { Supplier } from '@/types/supplier';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';
import { FormInput } from './_components/form-input';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Suppliers',
        href: '/suppliers',
    },
];

export default function index() {
    const { response, filters, totalData, pageSize } = usePage<{
        response: Pagination<Supplier>;
        filters: {
            search: string;
            perPage: string;
        };
        totalData: number;
        pageSize: number;
    }>().props;

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <AppLayout
                breadcrumbs={breadcrumbs}
                trailing={
                    <Button
                        onClick={() => {
                            setIsDialogOpen(true);
                        }}
                    >
                        Create Supplier
                    </Button>
                }
            >
                <Head title="Supplier" />

                <div className="px-4">
                    <DataTable columns={columns} response={response} filters={filters} totalData={totalData} />
                </div>
            </AppLayout>

            <ResponsiveDialog
                title="Create Supplier"
                description="Make sure all information entered is complete and accurate."
                open={isDialogOpen}
                setOpen={setIsDialogOpen}
            >
                <FormInput setIsOpen={setIsDialogOpen} />
            </ResponsiveDialog>
        </>
    );
}
