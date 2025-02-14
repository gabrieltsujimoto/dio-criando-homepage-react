import { Provider } from './components/ui/provider';
import { Box } from '@chakra-ui/react';
import { Card } from './components/Card';
function App() {
  return (
    <Provider>
      <Box minHeight={'100vh'} background='#292933' padding={12} color={'black'}>
        <Box borderRadius={12} background='#fff' padding={12} margin={12} marginX={'16rem'}>
          <Card />
        </Box>
      </Box>
    </Provider >
  )
}

export default App;
