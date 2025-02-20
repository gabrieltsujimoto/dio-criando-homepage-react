import { api } from "../api/api";
import { IAccount } from "@/interfaces/IAccount";

export const UseLogin = async (mail: string, pass: string, isLoggedIn: boolean): Promise<Boolean> => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    try {
        const response: any = await api;
        if (mail !== response.mail || pass !== response.password) {
            return false;
        }
    } catch (error) {
        console.log('error no useLogin: ', error)
        return false
    }
    return true;

}

export const getApiToLocalStorage = async (): Promise<IAccount> => {
    const response: any = await api;
    console.log(`Resposta no UseLogin: ${JSON.stringify(response)}`)
    return response
}
