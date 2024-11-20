import { z } from 'zod';

export interface Store {
    name: string;
    description: string;
}

export interface ApiResponse<T> {
    data: T;
    success: boolean;
    error?: string;
}

const storeSchema = z.object({
    name: z.string().min(3),
    description: z.string()
});

export const api = {
    createStore: async (data: Store): Promise<ApiResponse<Store>> => {
        try {
            const validatedData = storeSchema.parse(data);

            return {
                success: true,
                data: validatedData
            };
        } catch (error) {
            return {
                success: false,
                data: data,
                error: error instanceof Error ? error.message : 'Unknown error occurred'
            };
        }
    },

    getStore: async (): Promise<ApiResponse<Store>> => {
        try {
            const store: Store = {
                name: "Test Store",
                description: "Test Description"
            };

            return {
                success: true,
                data: store
            };
        } catch (error) {
            return {
                success: false,
                data: { name: '', description: '' },
                error: error instanceof Error ? error.message : 'Unknown error occurred'
            };
        }
    }
}; 