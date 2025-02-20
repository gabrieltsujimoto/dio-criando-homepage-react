import { UseLogin } from "./UseLogin";

jest.mock('react', () => ({
    ...jest.requireActual('react'), //desestruturando como mock nos tests
    useContext: () => (
        {
            isLoggedIn: true
        }
    )
}))
describe('login', () => {
    const mockAlert = jest.fn(); //Por estar fora do escopo de teste que queremos, precisamos fazer um 'mock' da chamada externa que irá acontecer
    const mockMail = 'gabriel@teste.com'
    const mockPass = '123456'
    window.alert = mockAlert;

    it('Deve exibir um alert com boas vindas', async () => {
        await UseLogin(mockMail, mockPass, true)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo(a)! \n\n Você conseguiu logar com sucesso com o e-mail: ${mockMail}`)
    })

    it('Deve exibir um erro caso o e-mail seja invalido.', async () => {
        await UseLogin('email@invalido.erro', '111', false)
        expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    })
})