import ResponsiveDialog from '@/components/responsive-dialog';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { columns } from '@/pages/formulas/_components/columns';
import { DataTable } from '@/pages/formulas/_components/data-table';
import { BreadcrumbItem } from '@/types';
import { Formula } from '@/types/formula';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { FormulaForm } from './_components/formula-form';

type Pagination<T> = {
    data: T[];
    current_page: number;
    last_page: number;
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Percentage Formulas',
        href: '/formulas',
    },
];

export default function Index() {
    const { formulas } = usePage<{
        formulas: Pagination<Formula>;
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
                        Create Formula
                    </Button>
                }
            >
                <Head title="Percentage Formulas" />

                <div className="px-4">
                    <DataTable columns={columns} data={formulas.data} />
                </div>
            </AppLayout>

            <ResponsiveDialog
                title="Create Percentage Formula"
                description="Change the percentage formula to suit your calculation needs. Make sure the format is valid for accurate results."
                open={isDialogOpen}
                setOpen={setIsDialogOpen}
            >
                <FormulaForm setIsOpen={setIsDialogOpen} />
            </ResponsiveDialog>
        </>
    );
}
