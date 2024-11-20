"use client";

import { useStoreForm } from '@/hooks/useStoreForm';
import { CloudArrowUpIcon, LinkIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { FaGoogleDrive } from 'react-icons/fa';
import { api } from '@/services/api';

export const CreateStoreForm = () => {
    const { formData, handleInputChange, handleSubmit, errors, isSubmitting } = useStoreForm();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.createStore({
                name: formData.name,
                description: formData.description
            });

            if (response.success) {
                handleSubmit(e);
            } else {
                console.error('API Error:', response.error);
            }
        } catch (error) {
            console.error('Submission error:', error);
        }
    };

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Store Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name your store"
                    className={`w-full px-4 py-3 rounded-lg border 
                        ${errors.name ? 'border-red-500' : 'border-gray-200'} 
                        focus:outline-none focus:border-gray-400
                        bg-white text-gray-900`}
                    required
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Store Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe your store"
                    className={`w-full px-4 py-3 rounded-lg border 
                        ${errors.description ? 'border-red-500' : 'border-gray-200'} 
                        focus:outline-none focus:border-gray-400
                        bg-white text-gray-900`}
                />
                {errors.description && (
                    <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                )}
            </div>

            <div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 p-8">
                    <div className="flex flex-col items-center justify-center text-center">
                        <CloudArrowUpIcon className="w-12 h-12 text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium mb-2 text-gray-900">Upload sources</h3>
                        <p className="text-gray-500 mb-6">
                            Drag and drop or choose file to upload
                        </p>

                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                            >
                                <FaGoogleDrive className="w-5 h-5" />
                                Google Drive
                            </button>
                            <button
                                type="button"
                                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                            >
                                <LinkIcon className="w-5 h-5" />
                                Link
                            </button>
                            <button
                                type="button"
                                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                            >
                                <DocumentTextIcon className="w-5 h-5" />
                                Paste text
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 bg-gray-900 text-white rounded-full 
                        hover:bg-gray-800 transition-colors
                        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? 'Creating...' : 'Upload'}
                </button>
            </div>
        </form>
    );
}; 