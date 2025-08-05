import React, { createContext, useState, ReactNode } from "react";

interface IsConnectedContextType {
    isConnected: boolean;
    setIsConnected: (isConnected: boolean) => void;
}

export const IsConnectedContext = createContext<IsConnectedContextType>({
    isConnected: false,
    setIsConnected: () => { },
});

interface IsConnectedProviderProps {
    children: ReactNode;
}

export const IsConnectedProvider = ({ children }: IsConnectedProviderProps) => {
    const [isConnected, setIsConnected] = useState(false);

    return (
        <IsConnectedContext.Provider value={{ isConnected, setIsConnected }}>
            {children}
        </IsConnectedContext.Provider>
    );
};
