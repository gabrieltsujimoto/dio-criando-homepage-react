import { Button, Flex, Spacer } from '@chakra-ui/react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const Header = () => {
    const navigate = useNavigate();
    const {isLoggedIn, setIsLoggedIn} = useContext(AppContext)

    const sair = () =>{
        setIsLoggedIn(!isLoggedIn)
        navigate(`/`)
    }

    return (
        <Flex border={'1px solid white'} alignItems={'center'}>
            <div className='header'>
                <h1 className='header-title'>💰 DIO Bank 💰</h1>
                <p className='header-subtitle'>Faça seu login agora!</p>
            </div>
            {
            isLoggedIn === true ?
                <Spacer position={'relative'} right={0} border={'1px solid white'} display={'flex'} alignItems={'center'} paddingX={2}>
                    <Button onClick={() => sair()}>Sair</Button>
                </Spacer>
                : ""
            }
        </Flex>
    )
}