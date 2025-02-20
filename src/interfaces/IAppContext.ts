import React from "react"

export interface IAppContext {
    username: string,
    usermail: string,
    setUserMail: React.Dispatch<React.SetStateAction<string>>,
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    currentId: string,
    setCurrentId: React.Dispatch<React.SetStateAction<string>>,
    isLoggedIn: boolean,
    actualBalance: string,
    setActualBalance: React.Dispatch<React.SetStateAction<string>>,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    cLoginFn: (mail: string, pass: string) => Promise<Boolean>
    cLogoutFn: (state: boolean) => void
}