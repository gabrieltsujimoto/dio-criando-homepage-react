import { getApiToLocalStorage, UseLogin } from "../../services/UseLogin";
import { changeLocalStorage, getAllLocalStorage } from "../../services/storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IAppContext } from "../../interfaces/IAppContext";
import { IDioBank } from "@/interfaces/IDioBank";

export const AppContext = createContext({} as IAppContext)

export const UseAppContext = () => {
    const context = useContext(AppContext)
    return context
}

export const AppContextProvider = ({ children }: any) => {
    const [username, setUsername] = useState<string>('')
    const [currentId, setCurrentId] = useState<string>('')
    const [actualBalance, setActualBalance] = useState<string | number>('x')
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const storage = getAllLocalStorage();

    async function cLoginFn(inputName: string, inputEmail: string): Promise<Boolean> {
        const res = await UseLogin(inputName, inputEmail, isLoggedIn);
        const { name, id, balance, email } = await getApiToLocalStorage();

        if (res) {
            setUsername(name)
            setCurrentId(id)
            setActualBalance(balance)
            setIsLoggedIn(true)

            const localStorageModel: IDioBank = {
                loginState: true,
                email: email,
                nome: name,
                balance: balance
            }
            changeLocalStorage(localStorageModel)
        }

        return res
    }

    useEffect(() => {
        if (storage) {
            const { loginState } = JSON.parse(storage)
            setIsLoggedIn(loginState)
        }
    }, [storage])

    return (
        <AppContext.Provider
            value={
                {
                    username,
                    setUsername,
                    isLoggedIn,
                    setIsLoggedIn,
                    actualBalance,
                    setActualBalance,
                    setCurrentId,
                    currentId,
                    cLoginFn
                }}>
            {children}
        </AppContext.Provider>
    )
}