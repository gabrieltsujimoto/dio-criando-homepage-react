import { getAllLocalStorage, createLocalStorage, changeLocalStorage } from "./storage";

const dioBank = {
    loginState: false,
    email: "",
    nome: "",
    balance: ""
}

describe('Local Storage test', () => {
    // * Storage.prototype => indica o protótipo do módulo, que estão declaradas todas as funções. 
    // * getItem vem do protótipo de Storage, parametro passado para busca. 

    const mockStorageGetItemFn = jest.spyOn(Storage.prototype, 'getItem');
    const mockStorageSetItemFn = jest.spyOn(Storage.prototype, 'setItem');


    it('Deve retornar TODO objeto localStorage', () => {
        getAllLocalStorage();
        expect(mockStorageGetItemFn).toHaveBeenCalledWith('userLocalStorage');
    })

    it('Deve criar o objeto do localStorage', () => {
        createLocalStorage();
        expect(mockStorageSetItemFn).toHaveBeenCalledWith('userLocalStorage', JSON.stringify(dioBank));
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(dioBank);
        expect(mockStorageSetItemFn).toHaveBeenCalledWith('userLocalStorage', JSON.stringify(dioBank))
    })
})