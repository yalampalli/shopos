import { PhotoIcon, VideoCameraIcon, CubeIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';

interface Workflow {
    title: string;
    description: string;
    tag: string;
    icon: React.ElementType;
}

export const workflows: Workflow[] = [
    {
        title: "Background Remover",
        description: "Remove backgrounds in seconds.",
        icon: PhotoIcon,
        tag: "Image"
    },
    {
        title: "Background Changer",
        description: "Changes background of the image in seconds.",
        icon: PhotoIcon,
        tag: "Image"
    },
    {
        title: "Video Generator",
        description: "Transform images into captivating videos in seconds.",
        icon: VideoCameraIcon,
        tag: "Video"
    },
    {
        title: "Description Generator",
        description: "Generate compelling product descriptions automatically.",
        icon: Square3Stack3DIcon,
        tag: "Text"
    },
    {
        title: "Smart Crop",
        description: "Automatically crop videos for different aspect ratios.",
        icon: VideoCameraIcon,
        tag: "Video"
    },
    {
        title: "3D Model Generator",
        description: "Create 3D models from product images.",
        icon: CubeIcon,
        tag: "3D"
    },
    {
        title: "Video Editor",
        description: "Transform images into captivating videos in seconds.",
        icon: VideoCameraIcon,
        tag: "Video"
    },
    {
        title: "AI Shadows",
        description: "Add realistic shadows to product images.",
        icon: PhotoIcon,
        tag: "Image"
    },
    {
        title: "Batch Edit",
        description: "Edit multiple images at once with AI.",
        icon: PhotoIcon,
        tag: "Image"
    }
]; 