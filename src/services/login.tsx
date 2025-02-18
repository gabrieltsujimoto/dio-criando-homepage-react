import { useContext } from "react";
import { api } from "../api/api"
import { AppContext } from "../components/context/AppContext";
import { NavigateFunction } from "react-router-dom";

export const login = async (mail: string): Promise<Boolean | NavigateFunction> => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { setIsLoggedIn } = useContext(AppContext)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data: any = await api;

    if (mail !== data.email) {
        alert("Email inválido!")
        return false
    } else {
        window.alert(`Bem vindo(a)! \n\n Você conseguiu logar com sucesso com o e-mail: ${mail}`)
        setIsLoggedIn(true)
        return true
    }

}
