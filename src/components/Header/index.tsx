import { Center } from '@chakra-ui/react'
import './index.css'

export const Header = () => {
    return (
        <div className='header' style={{ display: 'flex', flexWrap: 'wrap', width: "100%", alignItems: "center", justifyContent: "center" }}>
            <h1 className='header-title'>Dio Bank</h1>
            <span className='header-subtitle'>Faça seu login agora!</span>
        </div>
    )
}