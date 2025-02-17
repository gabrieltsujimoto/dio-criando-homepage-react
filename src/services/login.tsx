import { api } from "../api/api"

export const login = async (mail: string): Promise<void> => {
    const data: any = await api;

    mail !== data.email ? alert("Email inválido!") : alert(`Bem vindo(a)! \n\n Você conseguiu logar com sucesso com o e-mail: ${mail}`)
}
