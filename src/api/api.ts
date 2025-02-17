const account = {
    email: 'gabriel@teste.com',
    password: '123456',
    name: "Gabriel T",
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((res) => {
    setTimeout(() => {
        res(account)
    }, 4000)
})