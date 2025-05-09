'use client';

import CurrencyInput from '@/components/currency-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MedicalService } from '@/types/medical-service';
import { useForm } from '@inertiajs/react';
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'sonner';

interface MedicalServiceFormProps {
    medicalService?: MedicalService;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function MedicalServiceForm({ medicalService, setIsOpen }: MedicalServiceFormProps) {
    const { data, setData, post, put, processing, reset, errors } = useForm({
        name: medicalService?.name || '',
        price: medicalService?.price.toString() || '',
        description: medicalService?.description || '',
    });

    const isEditMode = Boolean(medicalService);

    // Handle form submission
    const submit = (e: FormEvent) => {
        e.preventDefault();

        // Update medical service
        if (isEditMode) {
            put(route('medical-services.update', medicalService?.id), {
                onSuccess: () => {
                    toast.success('Medical service updated successfully!');
                    reset();

                    if (setIsOpen) {
                        setIsOpen(false);
                    }
                },
                onError: () => {
                    reset();
                    toast.error('Failed to update medical service.');

                    if (setIsOpen) {
                        setIsOpen(false);
                    }
                },
            });
        }

        // Create new medical service
        if (!isEditMode) {
            post(route('medical-services.store'), {
                onSuccess: () => {
                    toast.success('Medical service created successfully!');
                    reset();

                    if (setIsOpen) {
                        setIsOpen(false);
                    }
                },
                onError: () => {
                    toast.error('Failed to create formula.');
                },
            });
        }
    };

    useEffect(() => {
        if (medicalService) {
            setData('name', medicalService.name);
            setData('price', medicalService.price.toString());
            setData('description', medicalService.description);
        }
    }, [medicalService]);

    const [price, setPrice] = useState('');
    const [numericValue, setNumericValue] = useState(0);

    return (
        <form onSubmit={submit} className="space-y-4">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
                <Label htmlFor="price">Price</Label>
                <CurrencyInput value={data.price} onValueChange={(e) => setData('price', e)} />
                {errors.price && <p className="text-sm text-red-500">{errors.price}</p>}
            </div>

            <div>
                <Label htmlFor="description">Description</Label>
                <Input id="description" value={data.description} onChange={(e) => setData('description', e.target.value)} />
            </div>

            <div className="flex justify-end">
                <Button type="submit" disabled={processing}>
                    {isEditMode ? 'Update Changes' : 'Save Medical Service'}
                </Button>
            </div>
        </form>
    );
}
