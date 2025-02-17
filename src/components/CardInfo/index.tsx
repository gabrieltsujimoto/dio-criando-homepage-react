import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
    mainContent: string,
    content: string,
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
    return (
        <Box borderRadius={'18px'} backgroundColor={'#fff'} width={320} minHeight={'120px'} padding={8}>
            <Text fontSize={'2xl'} fontWeight={'bold'}>{mainContent}</Text>
            <Text fontSize={'lg'} fontWeight={'md'}>{content}</Text>
        </Box>

    )
}

export default CardInfo;