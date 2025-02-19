import { getAllLocalStorage, createLocalStorage } from "./storage";

const dioBank = {
    login: false
}

describe('Local Storage test', () => {
    // * Storage.prototype => indica o protótipo do módulo, que estão declaradas todas as funções. 
    // * getItem vem do protótipo de Storage, parametro passado para busca. 

    const mockStorageGetItemFn = jest.spyOn(Storage.prototype, 'getItem');


    it('Deve retornar TODO objeto localStorage', () => {
        getAllLocalStorage();
        expect(mockStorageGetItemFn).toHaveBeenCalledWith('diobank');
    })

    it('Deve criar o objeto do localStorage', () => {
        const mockStorageSetItemFn = jest.spyOn(Storage.prototype, 'setItem');
        createLocalStorage();
        expect(mockStorageSetItemFn).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})