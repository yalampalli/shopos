import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { MainLayout } from '@/components/templates/MainLayout';
import { CreateStoreForm } from '@/components/organisms/CreateStoreForm';

export default function CreateStore() {
    return (
        <MainLayout>
            <div className="max-w-3xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/stores" className="p-2 hover:bg-gray-100 rounded-lg">
                        <ArrowLeftIcon className="w-5 h-5" />
                    </Link>
                    <h1 className="text-2xl font-semibold">Create a new store</h1>
                </div>

                <CreateStoreForm />
            </div>
        </MainLayout>
    );
} 