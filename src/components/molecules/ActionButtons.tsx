import { ActionButton } from '../atoms/ActionButton';
import { DocumentIcon, UserGroupIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

export const ActionButtons = () => {
    return (
        <div className="flex gap-4">
            <ActionButton
                label="Upload"
                icon={<DocumentIcon className="w-5 h-5" />}
                href="/stores"
            />
            <ActionButton
                label="Agents"
                icon={<UserGroupIcon className="w-5 h-5" />}
                href="/agents"
            />
            <ActionButton
                label="Templates"
                icon={<DocumentDuplicateIcon className="w-5 h-5" />}
            />
        </div>
    );
}; 