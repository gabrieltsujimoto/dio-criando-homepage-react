import { useContext } from "react";
import Account from "../pages/Account";
import AccountInfo from "../pages/AccountInfo";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "../components/context/AppContext";

const MainRoutes = () =>{
    const {isLoggedIn} = useContext(AppContext)
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path={'/account/:id'} element={isLoggedIn ? <Account /> : <Home/>}/>
            <Route path='/accountInfo/' element={<AccountInfo />} />

        </Routes>
    )

}

export default MainRoutes;
