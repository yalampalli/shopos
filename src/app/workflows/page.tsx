import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { MainLayout } from '@/components/templates/MainLayout';
import { WorkflowGrid } from '@/components/organisms/WorkflowGrid';

export default function Workflows() {
    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-2 md:px-6">
                <div className="flex items-center gap-3 mb-4 md:mb-8">
                    <Link href="/" className="p-1.5 hover:bg-gray-100 rounded-lg">
                        <ArrowLeftIcon className="w-5 h-5" />
                    </Link>
                    <h1 className="text-2xl font-semibold">Workflows</h1>
                </div>

                <WorkflowGrid />
            </div>
        </MainLayout>
    );
} 