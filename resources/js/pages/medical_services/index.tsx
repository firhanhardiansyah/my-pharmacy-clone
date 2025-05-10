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
    const { response, filters, totalData } = usePage<{
        response: Pagination<MedicalService>;
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
                        Create Medical Service
                    </Button>
                }
            >
                <Head title="Medical Services" />

                <div className="px-4">
                    <DataTable columns={columns} data={response.data} filters={filters} links={response.links} totalData={totalData} />
                </div>
            </AppLayout>

            <ResponsiveDialog
                title="Create Medical Service"
                description="Make sure all information entered is complete and accurate, including the service name, price, and a brief description of the service."
                open={isDialogOpen}
                setOpen={setIsDialogOpen}
            >
                <MedicalServiceForm setIsOpen={setIsDialogOpen} />
            </ResponsiveDialog>
        </>
    );
}
