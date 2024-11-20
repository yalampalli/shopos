"use client";

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/context/StoreContext';
import { z } from 'zod';

const storeSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    description: z.string().min(1, 'Description is required')
});

type FormErrors = {
    [key: string]: string;
};

export function useStoreForm() {
    const router = useRouter();
    const { dispatch } = useStore();
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = useCallback((
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    }, [errors]);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const validatedData = storeSchema.parse(formData);
            dispatch({
                type: 'SET_STORE',
                payload: {
                    name: validatedData.name.trim(),
                    description: validatedData.description.trim()
                }
            });
            router.push(`/stores/${encodeURIComponent(validatedData.name.trim())}`);
        } catch (error) {
            if (error instanceof z.ZodError) {
                const formattedErrors: FormErrors = {};
                error.errors.forEach((err) => {
                    if (err.path[0]) {
                        formattedErrors[err.path[0] as string] = err.message;
                    }
                });
                setErrors(formattedErrors);
            }
        } finally {
            setIsSubmitting(false);
        }
    }, [formData, dispatch, router]);

    return {
        formData,
        handleInputChange,
        handleSubmit,
        errors,
        isSubmitting
    };
} 