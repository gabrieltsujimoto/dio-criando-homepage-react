import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ICardInfo {
    mainContent: string,
    content: string,
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
    return (
        <Link to={'/accountInfo'}>
            <Box boxSizing={'border-box'} _hover={{ border: '1px solid red', cursor: 'pointer' }} borderRadius={'18px'} backgroundColor={'#fff'} width={320} minHeight={'120px'} padding={'2em'}>
                <Text fontSize={'2xl'} fontWeight={'bold'}>{mainContent}</Text>
                <Text fontSize={'lg'} fontWeight={'md'}>{content}</Text>
            </Box >
        </Link>

    )
}

export default CardInfo;