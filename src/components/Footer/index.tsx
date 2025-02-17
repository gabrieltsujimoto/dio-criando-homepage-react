import { Box } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Box
            display={'flex'}
            width={"100%"}
            height={'100%'}
            border={'1px solid red'}
            justifyContent={"center"}
            padding={2}
            margin={0}
        >
            Desenvolvido por Gabriel Tsujimoto © 2025
        </Box>
    )
}