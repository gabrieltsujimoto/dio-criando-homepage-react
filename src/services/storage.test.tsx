import { getAllLocalStorage } from "./storage"


describe('Local Storage test', () =>{
    // * Storage.prototype => indica o protótipo do módulo, que estão declaradas todas as funções. 
    // * getItem vem do protótipo de Storage, parametro passado para busca. 

    const mockStorageGetItemFn = jest.spyOn(Storage.prototype, 'getItem')

    it('Deve retornar TODO objeto localStorage', () =>{
        getAllLocalStorage()
        expect(mockStorageGetItemFn).toHaveBeenCalled()
    })
})