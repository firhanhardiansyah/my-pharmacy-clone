import ResponsiveDialog from '@/components/responsive-dialog';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, Pagination } from '@/types';
import { MedicalService } from '@/types/medical-service';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';
import { MedicalServiceForm } from './_components/medical-service-form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Medical Services',
        href: '/medical-services',
    },
];

export default function index() {
    const { response, filters } = usePage<{
        response: Pagination<MedicalService>;
        filters: {
            search: string;
        };
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
                        Create Medical Service
                    </Button>
                }
            >
                <Head title="Percentage Medical Services" />

                <div className="px-4">
                    <DataTable columns={columns} data={response.data} filters={filters} links={response.links} />
                </div>
            </AppLayout>

            <ResponsiveDialog
                title="Create Percentage Medical Service"
                description="Change the percentage formula to suit your calculation needs. Make sure the format is valid for accurate results."
                open={isDialogOpen}
                setOpen={setIsDialogOpen}
            >
                <MedicalServiceForm setIsOpen={setIsDialogOpen} />
            </ResponsiveDialog>
        </>
    );
}
