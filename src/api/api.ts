const account = {
    mail: 'gabriel@teste.com',
    password: '123456',
    name: "Gabriel T",
    balance: 2000.00,
    id: '1'
}
const account2 = {
    mail: 'teste@teste.com',
    password: 'teste',
    name: "Teste T",
    balance: 9999,
    id: '2'
}

export const api = new Promise((res) => {
    setTimeout(() => {
        res(account)
    }, 4000)
})

export const getAccountById = () => {

}