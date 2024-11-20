import { UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { ServiceCard } from '../molecules/ServiceCard';

export const ServicesSection = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ServiceCard
                    icon={<UserGroupIcon className="w-full h-full" />}
                    title="Agents"
                    description="AI tool for automating image edits and adjustments"
                    href="/agents"
                />
                <ServiceCard
                    icon={<ChartBarIcon className="w-full h-full" />}
                    title="Analytics"
                    description="Tool which helps you to extract insights and patterns from data"
                />
            </div>
        </div>
    );
}; 