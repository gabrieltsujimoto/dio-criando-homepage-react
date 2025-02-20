import { IAppContext } from "@/interfaces/IAppContext";
import { AppContext } from "../components/context/AppContext";
import { Box, Button, Center, Field, Flex, Text } from "@chakra-ui/react"
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllLocalStorage } from "../services/storage";

const AccountInfo = () => {
    const { username, usermail, actualBalance, setActualBalance, setUserMail, setUsername }: IAppContext = useContext(AppContext)



    useEffect(() => {
        const storage = JSON.parse(getAllLocalStorage()!)
        if (storage) {
            setUserMail(storage.email)
            setUsername(storage.nome)
            setActualBalance(storage.balance)
        }

    })

    return (
        <>
            <Flex justifyContent={'space-between'} alignItems={'center'} marginX={'2rem'} padding={'.8rem'}>
                <Text fontSize={'3xl'} fontWeight={'bold'} paddingX={3} >
                    Informacoes da conta
                </Text>
                <Link to={'/account/1'}>
                    <Text _hover={{ borderBottom: '1px solid white' }} marginRight={12} fontSize={'xl'} paddingX={3} borderRadius={'20%'} transition={'all'}>
                        Conta
                    </Text>
                </Link>
            </Flex>
            <Center padding={24}>
                <Box display={'flex'} width={"100%"} height={'55vh'} background={"#fff"} color={'black'} borderRadius={24} padding={12}>
                    <Field.Root>
                        <Text>
                            <Field.Label>
                                <Text fontSize={24}>
                                    Nome
                                </Text>
                            </Field.Label>
                            {username}
                        </Text>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>
                            <Text fontSize={24}>
                                E-mail
                            </Text>
                        </Field.Label>
                        <Text>
                            {usermail}
                        </Text>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>
                            <Text fontSize={24}>
                                Valor em conta
                            </Text>
                        </Field.Label>
                        <Text>
                            R$ {parseFloat(actualBalance).toFixed(2)}
                        </Text>
                    </Field.Root>
                </Box>
            </Center >
        </>
    )
}

export default AccountInfo;