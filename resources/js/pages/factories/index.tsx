import ResponsiveDialog from '@/components/responsive-dialog';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, Pagination } from '@/types';
import { Uom } from '@/types/uom';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';
import { FormInput } from './_components/form-input';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Factories',
        href: '/uom',
    },
];

export default function index() {
    const { response, filters, totalData, pageSize } = usePage<{
        response: Pagination<Uom>;
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
                        Create Factory
                    </Button>
                }
            >
                <Head title="Factory" />

                <div className="px-4">
                    <DataTable columns={columns} response={response} filters={filters} totalData={totalData} />
                </div>
            </AppLayout>

            <ResponsiveDialog
                title="Create Factory"
                description="Make sure all information entered is complete and accurate, including the service name, and a brief description of the Factory."
                open={isDialogOpen}
                setOpen={setIsDialogOpen}
            >
                <FormInput setIsOpen={setIsDialogOpen} />
            </ResponsiveDialog>
        </>
    );
}
