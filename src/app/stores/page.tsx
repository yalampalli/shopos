import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { StoreExamples } from '@/components/organisms/StoreExamples';
import Link from 'next/link';
import { MainLayout } from '@/components/templates/MainLayout';
import { CreateStoreButton } from '@/components/molecules/CreateStoreButton';

export default function Stores() {
    return (
        <MainLayout>
            <div className="max-w-5xl mx-auto px-2 md:px-6">
                <div className="flex items-center gap-3 mb-3 md:mb-6">
                    <Link href="/" className="p-1.5 hover:bg-gray-100 rounded-lg">
                        <ArrowLeftIcon className="w-5 h-5" />
                    </Link>
                    <h1 className="text-2xl font-semibold">My Store</h1>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 md:p-6 mb-4 md:mb-8">
                    <h2 className="text-xl font-semibold mb-2">Generate a Store</h2>
                    <p className="text-gray-700 font-medium">
                        Generative store are AI build shopping destinations for your users.
                        They adapt, personalize and present information real time. It's simply a better way to shop.
                        <br /><br />
                        Start by adding everything in your mind about the brand and what you are selling
                    </p>
                </div>

                <div className="mb-4 md:mb-8">
                    <h2 className="text-xl font-semibold mb-3">Examples</h2>
                    <StoreExamples />
                </div>

                <div className="flex justify-center pb-4 md:pb-8">
                    <CreateStoreButton />
                </div>
            </div>
        </MainLayout>
    );
} 