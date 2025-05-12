'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Supplier } from '@/types/supplier';
import { useForm } from '@inertiajs/react';
import { Dispatch, FormEvent, SetStateAction, useEffect } from 'react';
import { toast } from 'sonner';

interface FormInputProps {
    supplier?: Supplier;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function FormInput({ supplier, setIsOpen }: FormInputProps) {
    const { data, setData, post, put, processing, reset, errors } = useForm({
        name: supplier?.name || '',
        email: supplier?.email || '',
        phone: supplier?.phone || '',
        address: supplier?.address || '',
    });

    const isEditMode = Boolean(supplier);

    // Handle form submission
    const submit = (e: FormEvent) => {
        e.preventDefault();

        // Update supplier
        if (isEditMode) {
            put(route('suppliers.update', supplier?.id), {
                onSuccess: () => {
                    toast.success('Supplier updated successfully!');
                    reset();

                    if (setIsOpen) {
                        setIsOpen(false);
                    }
                },
                onError: () => {
                    toast.error('Failed to update supplier.');
                },
            });
        }

        // Create new supplier
        if (!isEditMode) {
            console.log('Create Supplier');

            post(route('suppliers.store'), {
                onSuccess: () => {
                    toast.success('Supplier created successfully!');
                    reset();

                    if (setIsOpen) {
                        setIsOpen(false);
                    }
                },
                onError: () => {
                    toast.error('Failed to create Supplier.');
                },
            });
        }
    };

    useEffect(() => {
        if (supplier) {
            setData('name', supplier.name);
            setData('email', supplier.email);
        }
    }, [supplier]);

    return (
        <form onSubmit={submit} className="space-y-4">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div>
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" value={data.address} onChange={(e) => setData('address', e.target.value)} />
                {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
            </div>

            <div className="flex justify-end">
                <Button type="submit" disabled={processing}>
                    {isEditMode ? 'Update Changes' : 'Save Supplier'}
                </Button>
            </div>
        </form>
    );
}
