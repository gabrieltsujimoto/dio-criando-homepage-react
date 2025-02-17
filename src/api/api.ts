const account = {
    email: 'gabriel@teste.com',
    password: '123456',
    name: "Gabriel T"
}

export const api = new Promise((res) => {
    setTimeout(() => {
        res(account)
    }, 3000)
})