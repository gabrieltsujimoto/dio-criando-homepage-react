import { Center, Input } from "@chakra-ui/react"
import { Field } from "../ui/field"
import { CustomButton } from "../Button"
import { useState } from 'react';
import { login } from "../../services/login";

export const Card = () => {
    const [mail, setMail] = useState<string>();
    const [pass, setPass] = useState<string>();
    const [mailValidate, setmailValidate] = useState<boolean>(false);
    const [passValidate, setpassValidate] = useState<boolean>(false);
    function setInputMail(value: string) {
        setMail(value)
    }
    function getPassMail(value: string) {
        setPass(value)
    }

    async function validateFieldsNLogin() {
        if (!mail && !pass) {
            window.alert("Insira seu e-mail e senha")
            setmailValidate(true)
            setpassValidate(true)
            return
        } else {
            if (!pass) {
                setpassValidate(true)
                setmailValidate(false)
                window.alert("Insira sua senha")
                return
            }

            if (!mail || !mail?.includes("@")) {
                setmailValidate(true)
                setpassValidate(false)
                setPass("")
                window.alert("E-mail inválido, lembre-se de que sempre deve conter o padrao usuario@dominio")
                return
            }
        }
        setmailValidate(false)
        setpassValidate(false)
        await login(mail!)
    }

    return (
        <div>
            <Center width={'100%'} display={"flex"} flexDirection={'column'}>
                <h1>Bem-vindo(a)!</h1>
                <Center>
                    <Field required margin={4} invalid={mailValidate} errorText="E-mail inválido" label='E-mail' width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'flex-start'}>
                        <Input value={mail} padding={2} width={"100%"} variant={'flushed'} type="mail" onChange={(e) => setInputMail(e.target.value)} placeholder="Digite seu e-mail aqui" />
                    </Field>
                </Center>
                <Center>
                    <Field required invalid={passValidate} errorText="Senha inválida" label='Senha' width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} margin={4}>
                        <Input value={pass} padding={2} width={"100%"} variant={'flushed'} type="password" onChange={(e) => getPassMail(e.target.value)} placeholder="Digite sua senha aqui" id="passInput" />
                    </Field>
                </Center>
                <Center>
                    <CustomButton email={mail!} senha={pass!} onclick={() => validateFieldsNLogin()} />
                </Center>
            </Center>
        </div>
    )
}