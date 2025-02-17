
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import { Layout } from './components/Layout';
import { Provider } from './components/ui/provider';
import './index.css'
import AccountInfo from './pages/AccountInfo';
import { AppContextProvider } from './components/context/AppContext';


function App() {

  return (
    <BrowserRouter>
      <AppContextProvider>
        <Provider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/account/:id' element={<Account />} />
              <Route path='/accountInfo/' element={<AccountInfo />} />

            </Routes>
          </Layout>
        </Provider>

      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App;
