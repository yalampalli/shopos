"use client";

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { MainLayout } from '@/components/templates/MainLayout';
import { GenerateStoreButton } from '@/components/molecules/GenerateStoreButton';
import { ProductTable } from '@/components/molecules/ProductTable';
import { useStore } from '@/context/StoreContext';
import { useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { ServicesSection } from '@/components/organisms/ServicesSection';

interface StorePageProps {
    params: Promise<{
        name: string;
    }>;
}

export default function StorePage({ params }: StorePageProps) {
    const router = useRouter();
    const { state } = useStore();
    const resolvedParams = use(params);
    const storeName = decodeURIComponent(resolvedParams.name);
    const formattedName = `${storeName}'${storeName.endsWith('s') ? '' : 's'} Shop`;

    useEffect(() => {
        let mounted = true;

        if (mounted && !state.currentStore) {
            router.push('/stores/create');
        }

        return () => {
            mounted = false;
        };
    }, [state.currentStore, router]);

    if (!state.currentStore) {
        return null;
    }

    return (
        <MainLayout>
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <Link href="/stores" className="p-2 hover:bg-gray-100 rounded-lg">
                            <ArrowLeftIcon className="w-5 h-5" />
                        </Link>
                        <h1 className="text-2xl font-semibold">{formattedName}</h1>
                    </div>
                    <GenerateStoreButton />
                </div>

                <div className="text-gray-600 mb-8">
                    {state.currentStore.description ||
                        "Your store is in draft mode. Click Generate Store to create your AI-powered shopping destination."}
                </div>

                <div className="mb-12">
                    <ProductTable />
                </div>

                <div className="mt-12">
                    <ServicesSection />
                </div>
            </div>
        </MainLayout>
    );
} 