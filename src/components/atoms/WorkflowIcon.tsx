"use client";

interface WorkflowIconProps {
    icon: React.ElementType;
}

export const WorkflowIcon = ({ icon: Icon }: WorkflowIconProps) => {
    return <Icon className="w-full h-full" />;
}; 