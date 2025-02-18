import { ChangeEvent } from 'react'
import './index.css'

interface ICustomButton {
    email: string | ChangeEvent<HTMLInputElement>,
    senha: string,
    onclick: () => void,
}

export const CustomButton = ({ email, senha, onclick }: ICustomButton) => {
    return (
        <div className='login-btn-wrapper'>
            <button onClick={onclick} className="login-btn">
                Entrar
            </button>
        </div>
    )
}