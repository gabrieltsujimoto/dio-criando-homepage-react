
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Provider } from './components/ui/provider';
import './index.css'
import { AppContextProvider } from './components/context/AppContext';
import MainRoutes from './routes/routes';
import { getAllLocalStorage } from './services/storage';


function App() {
  const localStorage = getAllLocalStorage();
  console.log(localStorage)
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Provider>
          <Layout>
           <MainRoutes/>
          </Layout>
        </Provider>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App;
