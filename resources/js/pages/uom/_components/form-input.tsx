'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Uom } from '@/types/uom';
import { useForm } from '@inertiajs/react';
import { Dispatch, FormEvent, SetStateAction, useEffect } from 'react';
import { toast } from 'sonner';

interface FormInputProps {
    uom?: Uom;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function FormInput({ uom, setIsOpen }: FormInputProps) {
    const { data, setData, post, put, processing, reset, errors } = useForm({
        code: uom?.code || '',
        name: uom?.name || '',
        description: uom?.description || '',
    });

    const isEditMode = Boolean(uom);

    // Handle form submission
    const submit = (e: FormEvent) => {
        e.preventDefault();

        // Update uom
        if (isEditMode) {
            put(route('uoms.update', uom?.id), {
                onSuccess: () => {
                    toast.success('Unit of Measure updated successfully!');
                    reset();

                    if (setIsOpen) {
                        setIsOpen(false);
                    }
                },
                onError: () => {
                    toast.error('Failed to update uom.');
                },
            });
        }

        // Create new uom
        if (!isEditMode) {
            console.log('Create Uom');

            post(route('uoms.store'), {
                onSuccess: () => {
                    toast.success('Unit of Measure created successfully!');
                    reset();

                    if (setIsOpen) {
                        setIsOpen(false);
                    }
                },
                onError: () => {
                    toast.error('Failed to create Unit of Measure.');
                },
            });
        }
    };

    useEffect(() => {
        if (uom) {
            setData('code', uom.code);
            setData('name', uom.name);
            setData('description', uom.description);
        }
    }, [uom]);

    return (
        <form onSubmit={submit} className="space-y-4">
            <div>
                <Label htmlFor="code">Code</Label>
                <Input id="code" value={data.code} onChange={(e) => setData('code', e.target.value)} />
                {errors.code && <p className="text-sm text-red-500">{errors.code}</p>}
            </div>

            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
                <Label htmlFor="description">Description</Label>
                <Input id="description" value={data.description} onChange={(e) => setData('description', e.target.value)} />
            </div>

            <div className="flex justify-end">
                <Button type="submit" disabled={processing}>
                    {isEditMode ? 'Update Changes' : 'Save Units of Measure'}
                </Button>
            </div>
        </form>
    );
}
