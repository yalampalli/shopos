import { SearchBar } from '../molecules/SearchBar';
import { ActionButtons } from '../molecules/ActionButtons';

export const SearchSection = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-8rem)]">
            <h1 className="text-2xl font-semibold text-gray-900">
                How can I assist you today?
            </h1>
            <SearchBar />
            <ActionButtons />
        </div>
    );
}; 