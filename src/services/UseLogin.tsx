
import { api } from "../api/api"

export const UseLogin = async (mail: string): Promise<Boolean> => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data: any = await api;

    if (mail !== data.email) {
        alert("Email inválido!");
        return false;
    } else {
        window.alert(`Bem vindo(a)! \n\n Você conseguiu logar com sucesso com o e-mail: ${mail}`);
    }
    return true;

}
