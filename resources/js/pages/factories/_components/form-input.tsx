'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Factory } from '@/types/factory';
import { useForm } from '@inertiajs/react';
import { Dispatch, FormEvent, SetStateAction, useEffect } from 'react';
import { toast } from 'sonner';

interface FormInputProps {
    factory?: Factory;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function FormInput({ factory, setIsOpen }: FormInputProps) {
    const { data, setData, post, put, processing, reset, errors } = useForm({
        name: factory?.name || '',
        description: factory?.description || '',
    });

    const isEditMode = Boolean(factory);

    // Handle form submission
    const submit = (e: FormEvent) => {
        e.preventDefault();

        // Update factory
        if (isEditMode) {
            put(route('factories.update', factory?.id), {
                onSuccess: () => {
                    toast.success('Unit of Measure updated successfully!');
                    reset();

                    if (setIsOpen) {
                        setIsOpen(false);
                    }
                },
                onError: () => {
                    toast.error('Failed to update factory.');
                },
            });
        }

        // Create new factory
        if (!isEditMode) {
            console.log('Create Uom');

            post(route('factories.store'), {
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
        if (factory) {
            setData('name', factory.name);
            setData('description', factory.description);
        }
    }, [factory]);

    return (
        <form onSubmit={submit} className="space-y-4">
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
                    {isEditMode ? 'Update Changes' : 'Save Factory'}
                </Button>
            </div>
        </form>
    );
}
