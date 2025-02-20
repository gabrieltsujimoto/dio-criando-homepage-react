import { useContext } from "react";
import { UseLogin } from "./UseLogin";
import { AppContext } from "../components/context/AppContext";
/*jest.mock('react-router', () => {
     const actual = jest.requireActual('react-router-dom');
     return {
         ...actual,
         useNavigate: jest.fn(() => mockNavigate)
     }
 }) */

describe('login', () => {
    const mockAlert = jest.fn(); //Por estar fora do escopo de teste que queremos, precisamos fazer um 'mock' da chamada externa que irá acontecer
    const mockMail = 'gabriel@teste.com';
    const mockPass = '123456'
    window.alert = mockAlert;
    const isLoggedIn = true;

    it('Deve retornar falso caso login ou senha sejam inválidos com os da API', async () => {
        const res = await UseLogin('email@invalido', 'senhainvalida', isLoggedIn);
        expect(res).toBeFalsy();
    })

    it('Deve retornar verdadeiro caso e-mail seja válido', async () => {
        const res = await UseLogin(mockMail, mockPass, isLoggedIn);
        expect(res).toBeTruthy();
    })

    it('Deve exibir um erro caso o e-mail seja invalido.', async () => {
        const res = await UseLogin('email@invalido.erro', '12345', isLoggedIn);
        expect(res).toBeFalsy();

        /*  expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
        expect(mockAlert).toHaveBeenCalledWith('Email inválido!') */
    })
})