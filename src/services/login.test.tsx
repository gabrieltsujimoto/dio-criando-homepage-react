import { login } from "./login";
import { api } from "../api/api";


describe('login', () => {
    const mockAlert = jest.fn(); //Por estar fora do escopo de teste que queremos, precisamos fazer um 'mock' da chamada externa que irá acontecer
    const mockMail = 'gabriel@teste.com'
    window.alert = mockAlert;

    it('Deve exibir um alert com boas vindas', async () => {
        await login(mockMail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo(a)! \n\n Você conseguiu logar com sucesso com o e-mail: ${mockMail}`)
    })

    it('Deve exibir um erro caso o e-mail seja invalido.', async () => {
        await login('email@invalido.erro')
        expect(

            mockAlert).toHaveBeenCalledWith('Email inválido!')
    })
})