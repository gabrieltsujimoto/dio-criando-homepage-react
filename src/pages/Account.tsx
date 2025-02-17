import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardInfo from '../components/CardInfo'
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { api } from '../api/api';
import { IAccount } from '../interfaces/IAccount';
import { AppContext } from '../components/context/AppContext';

const Account = () => {
    const [userData, setUserData] = useState<IAccount>();
    const { id } = useParams();
    const navigate = useNavigate();
    const currenteDate = new Date();
    const context = useContext(AppContext)
    useEffect(() => {
        const getData = async () => {
            const data: IAccount | any = await api
            setUserData(data)
        }
        getData()
    }, [])
    console.log(userData)
    console.log('retorno da página conta: ', context)

    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <Center color={'black'}>
            <SimpleGrid columns={2} columnGap={8} paddingY={16}>
                {
                    userData === undefined || userData === null ?
                        <Center>
                            <Spinner />
                        </Center> :
                        <>
                            <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={currenteDate.toLocaleString('pt-br')} />
                            <CardInfo mainContent='Informaçes da conta' content={`Saldo da conta: R$ ${userData?.balance.toFixed(2)}`}
                            />
                        </>
                }
            </SimpleGrid>
        </Center>
    )
}

export default Account;