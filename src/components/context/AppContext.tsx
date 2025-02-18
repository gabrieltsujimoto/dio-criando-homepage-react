import { createContext, useState } from "react";

interface IAppContext {
    user: string,
    id: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const user = 'gabriel';
    const id = '1';

    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, id }}>
            {children}
        </AppContext.Provider>
    )
}