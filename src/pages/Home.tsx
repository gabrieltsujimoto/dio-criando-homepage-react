
import { Box } from '@chakra-ui/react';
import { Card } from '../components/Card';

const Home = () => {


    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            background='#292933'
            padding={12}
            color={'black'} >
            <Box width={'100%'} borderRadius={12} background='#fff' padding={12} margin={12} marginX={'16rem'} >
                <Card />
            </Box >
        </Box >
    )
}

export default Home;