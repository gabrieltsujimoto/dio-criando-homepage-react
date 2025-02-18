import { login } from "./login";
import { useContext } from "react";

const mockSetIsLoggedIn = jest.fn()
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))




describe('login', () => {
    const mockAlert = jest.fn(); //Por estar fora do escopo de teste que queremos, precisamos fazer um 'mock' da chamada externa que irá acontecer
    const mockMail = 'gabriel@teste.com';
    window.alert = mockAlert;

    it('Deve retornar verdadeiro caso e-mail seja válido', async () => {
        await login(mockMail)
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        // expect(mockNavigate).toHaveBeenCalledWith('/1')
    })

    it('Deve exibir um erro caso o e-mail seja invalido.', async () => {
        await login('email@invalido.erro')
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
        expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    })
})