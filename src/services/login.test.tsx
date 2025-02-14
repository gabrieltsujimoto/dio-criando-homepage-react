import { login } from "./login"

describe('login', () => {
    const mockAlert = jest.fn(); //Por estar fora do escopo de teste que queremos, precisamos fazer um 'mock' da chamada externa que irá acontecer
    window.alert = mockAlert;

    it('Deve exibir um alert com boas vindas', () => {
        login("teste")
        expect(mockAlert).toHaveBeenCalledWith("Bem vindo(a)! \n\n Você conseguiu logar com sucesso com o e-mail: teste")
    })
})