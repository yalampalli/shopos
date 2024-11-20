import { memo } from 'react';
import { WorkflowIcon } from '../atoms/WorkflowIcon';

interface WorkflowTileProps {
    tag: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

const WorkflowTile = memo(({ tag, title, description, icon }: WorkflowTileProps) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 p-6 flex flex-col h-full">
            <div className="w-10 h-10 text-gray-700">
                <WorkflowIcon icon={icon} />
            </div>
            <div className="flex-1 flex flex-col mt-6">
                <div className="mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                        {tag}
                    </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm flex-1 mb-4">
                    {description}
                </p>
                <button className="w-full py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors mt-auto">
                    Try it out
                </button>
            </div>
        </div>
    );
});

WorkflowTile.displayName = 'WorkflowTile';

export default WorkflowTile; 