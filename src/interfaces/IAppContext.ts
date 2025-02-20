export interface IAppContext {
    username: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    currentId: string,
    setCurrentId: React.Dispatch<React.SetStateAction<string>>,
    isLoggedIn: boolean,
    actualBalance: string | number,
    setActualBalance: React.Dispatch<React.SetStateAction<string | number>>,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    cLoginFn: (mail: string, pass: string) => Promise<Boolean>
}