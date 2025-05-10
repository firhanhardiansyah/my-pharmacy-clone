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
        title: 'Units of Measure (UOMs)',
        href: '/uom',
    },
];

export default function index() {
    const { response, filters, totalData } = usePage<{
        response: Pagination<Uom>;
        filters: {
            search: string;
        };
        totalData: number;
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
                        Create UOM
                    </Button>
                }
            >
                <Head title="Units of Measure (UOMs)" />

                <div className="px-4">
                    <DataTable columns={columns} data={response.data} filters={filters} links={response.links} totalData={totalData} />
                </div>
            </AppLayout>

            <ResponsiveDialog
                title="Create Units of Measure (UOM)"
                description="Make sure all information entered is complete and accurate, including the service code, name, and a brief description of the Units of Measure (UOMs)."
                open={isDialogOpen}
                setOpen={setIsDialogOpen}
            >
                <FormInput setIsOpen={setIsDialogOpen} />
            </ResponsiveDialog>
        </>
    );
}
