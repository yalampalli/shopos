"use client";

import { createContext, useContext, useReducer, ReactNode } from 'react';

interface Store {
    name: string;
    description: string;
}

interface StoreState {
    currentStore: Store | null;
}

type StoreAction =
    | { type: 'SET_STORE'; payload: Store }
    | { type: 'CLEAR_STORE' };

const initialState: StoreState = {
    currentStore: null
};

// Create the context with a default value
const StoreContext = createContext<{
    state: StoreState;
    dispatch: React.Dispatch<StoreAction>;
}>({
    state: initialState,
    dispatch: () => null
});

function storeReducer(state: StoreState, action: StoreAction): StoreState {
    switch (action.type) {
        case 'SET_STORE':
            return {
                ...state,
                currentStore: action.payload
            };
        case 'CLEAR_STORE':
            return {
                ...state,
                currentStore: null
            };
        default:
            return state;
    }
}

export function StoreProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(storeReducer, initialState);
    const value = { state, dispatch };

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
}

export function useStore() {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
} 