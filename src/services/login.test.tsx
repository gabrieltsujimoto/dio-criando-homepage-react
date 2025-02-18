import { UseLogin } from "./UseLogin";
// jest.mock('react-router', () => {
//     const actual = jest.requireActual('react-router-dom');
//     return {
//         ...actual,
//         useNavigate: jest.fn(() => mockNavigate)
//     }
// })

describe('login', () => {
    const mockAlert = jest.fn(); //Por estar fora do escopo de teste que queremos, precisamos fazer um 'mock' da chamada externa que irá acontecer
    const mockMail = 'gabriel@teste.com';
    window.alert = mockAlert;

    it('Deve retornar verdadeiro caso e-mail seja válido', async () => {
        const res = await UseLogin(mockMail)
        expect(res).toBeTruthy()
    })

    it('Deve exibir um erro caso o e-mail seja invalido.', async () => {
        const res = await UseLogin('email@invalido.erro')
        expect(res).toBeFalsy()

        // expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
        // expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    })
})