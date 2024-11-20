import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="p-4 text-center">
                    <h2>Something went wrong.</h2>
                    <button
                        onClick={() => this.setState({ hasError: false })}
                        className="mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg"
                    >
                        Try again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
} 