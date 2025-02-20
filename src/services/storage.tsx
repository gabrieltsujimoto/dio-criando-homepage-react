import { IDioBank } from "../interfaces/IDioBank";
const dioBank = {
    loginState: false,
    email: "",
    nome: "",
    balance: ""
};

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('userLocalStorage');
}

export const createLocalStorage = (): void => {
    localStorage.setItem('userLocalStorage', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDioBank): void => {
    localStorage.setItem('userLocalStorage', JSON.stringify(dioBank))
}
