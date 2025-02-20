import { Button, Flex, Spacer } from '@chakra-ui/react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { changeLocalStorage, getAllLocalStorage } from '../../services/storage';
import { useContext } from 'react';
import { IDioBank } from '@/interfaces/IDioBank';

export const Header = () => {
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)

    const storage = getAllLocalStorage();
    const jsonStorage: IDioBank = JSON.parse(storage!);
    const sair = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false)
            changeLocalStorage(
                {
                    ...jsonStorage,
                    loginState: false,
                }
            )
        }

        navigate('/')
    }

    return (
        <Flex alignItems={'center'}>
            <div className='header'>
                <h1 className='header-title'>💰 DIO Bank 💰</h1>
                <p className='header-subtitle'>{jsonStorage.loginState ? 'Seja bem vindo!' : 'Faça seu login agora!'}</p>
            </div>
            {
                isLoggedIn === true ?
                    <Spacer position={'relative'} right={'1.8rem'} display={'flex'} alignItems={'center'} paddingX={2}>
                        <Button _hover={{ border: '1px solid purple' }} onClick={() => sair()}>Sair</Button>
                    </Spacer>
                    : ""
            }
        </Flex >
    )
}