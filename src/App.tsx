
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import { Layout } from './components/Layout';
import { Provider } from './components/ui/provider';
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Provider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/account' element={<Account />} />
          </Routes>
        </Layout>
      </Provider>

    </BrowserRouter>
  )
}

export default App;
