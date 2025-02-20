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
    const [usermail, setUserMail] = useState<string>('')
    const [currentId, setCurrentId] = useState<string>('')
    const [actualBalance, setActualBalance] = useState<string>('x')
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const storage = getAllLocalStorage();

    async function cLoginFn(inputName: string, inputEmail: string): Promise<Boolean> {
        const res = UseLogin(inputName, inputEmail, isLoggedIn);

        const context = await getApiToLocalStorage();
        console.log(`
            Valores do getApiTolocalstorage() 
            ${context.name}, ${context.id}, ${context.balance}, ${context.mail}
        `)

        if (await res) {
            setUsername(context.name)
            setUserMail(context.mail)
            setCurrentId(context.id)
            setActualBalance(context.balance)
            setIsLoggedIn(true)
        }

        const localStorageModel: IDioBank = {
            id: context.id,
            loginState: true,
            email: context.mail,
            nome: context.name,
            balance: context.balance
        }
        changeLocalStorage(localStorageModel)
        console.log(`Toma o localStorage que foi definido no contexto: ${getAllLocalStorage()}`)

        return res
    }

    function cLogoutFn(state: boolean): void {
        setIsLoggedIn(state)
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
                    cLoginFn,
                    cLogoutFn,
                    usermail,
                    setUserMail
                }}>
            {children}
        </AppContext.Provider>
    )
}