'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Unit } from '@/types/unit';
import { useForm } from '@inertiajs/react';
import { Dispatch, FormEvent, SetStateAction, useEffect } from 'react';
import { toast } from 'sonner';

interface FormInputProps {
    unit?: Unit;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function FormInput({ unit, setIsOpen }: FormInputProps) {
    const { data, setData, post, put, processing, reset, errors } = useForm({
        code: unit?.code || '',
        name: unit?.name || '',
        description: unit?.description || '',
    });

    const isEditMode = Boolean(unit);

    // Handle form submission
    const submit = (e: FormEvent) => {
        e.preventDefault();

        // Update unit
        if (isEditMode) {
            put(route('units.update', unit?.id), {
                onSuccess: () => {
                    toast.success('Unit successfully!');
                    reset();

                    if (setIsOpen) {
                        setIsOpen(false);
                    }
                },
                onError: () => {
                    toast.error('Failed to update unit.');
                },
            });
        }

        // Create new unit
        if (!isEditMode) {
            console.log('Create Unit');

            post(route('units.store'), {
                onSuccess: () => {
                    toast.success('Unit created successfully!');
                    reset();

                    if (setIsOpen) {
                        setIsOpen(false);
                    }
                },
                onError: () => {
                    toast.error('Failed to create Unit.');
                },
            });
        }
    };

    useEffect(() => {
        if (unit) {
            setData('code', unit.code);
            setData('name', unit.name);
            setData('description', unit.description);
        }
    }, [unit]);

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
                    {isEditMode ? 'Update Changes' : 'Save Unit'}
                </Button>
            </div>
        </form>
    );
}
