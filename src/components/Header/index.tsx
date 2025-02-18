import { Button, Flex, Spacer } from '@chakra-ui/react'
import './index.css'

export const Header = () => {
    return (
        <Flex border={'1px solid white'} alignItems={'center'}>
            <div className='header'>
                <h1 className='header-title'>💰 DIO Bank 💰</h1>
                <p className='header-subtitle'>Faça seu login agora!</p>
            </div>
            <Spacer position={'relative'} right={0} border={'1px solid white'} display={'flex'} alignItems={'center'} paddingX={2}>
                <Button>Sair</Button>
            </Spacer>
        </Flex>
    )
}