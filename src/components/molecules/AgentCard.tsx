interface AgentCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const AgentCard = ({ icon, title, description }: AgentCardProps) => {
    return (
        <div className="p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
            <div className="space-y-4">
                <div className="w-10 h-10 text-gray-700">
                    {icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                </h3>
                <p className="text-sm text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );
}; 