'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Formula } from '@/types/formula';
import { useForm } from '@inertiajs/react';
import { Dispatch, FormEvent, SetStateAction, useEffect } from 'react';
import { toast } from 'sonner';

interface FormulaFormProps {
    formula?: Formula;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function FormulaForm({ formula, setIsOpen }: FormulaFormProps) {
    const { data, setData, post, put, processing, reset, errors } = useForm({
        name: formula?.name || '',
        percentage: formula?.percentage.toString() || '',
    });

    const isEditMode = Boolean(formula);

    // Handle form submission
    const submit = (e: FormEvent) => {
        e.preventDefault();

        // Update formula
        if (isEditMode) {
            put(route('formulas.update', formula?.id), {
                onSuccess: () => {
                    toast.success('Formula updated successfully!');
                    reset();

                    if (setIsOpen) {
                        setIsOpen(false);
                    }
                },
                onError: () => {
                    reset();
                    toast.error('Failed to update formula.');

                    if (setIsOpen) {
                        setIsOpen(false);
                    }
                },
            });
        }

        // Create new formula
        if (!isEditMode) {
            post(route('formulas.store'), {
                onSuccess: () => {
                    toast.success('Formula created successfully!');
                    reset();

                    if (setIsOpen) {
                        setIsOpen(false);
                    }
                },
                onError: () => {
                    reset();
                    toast.error('Failed to create formula.');

                    if (setIsOpen) {
                        setIsOpen(false);
                    }
                },
            });
        }
    };

    useEffect(() => {
        if (formula) {
            setData('name', formula.name);
            setData('percentage', formula.percentage.toString());
        }
    }, [formula]);

    return (
        <form onSubmit={submit} className="space-y-4">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
                <Label htmlFor="percentage">Percentage</Label>
                <Input id="percentage" type="number" value={data.percentage} onChange={(e) => setData('percentage', e.target.value)} />
                {errors.percentage && <p className="text-sm text-red-500">{errors.percentage}</p>}
            </div>

            <div className="flex justify-end">
                <Button type="submit" disabled={processing}>
                    {isEditMode ? 'Update Changes' : 'Save Formula'}
                </Button>
            </div>
        </form>
    );
}
