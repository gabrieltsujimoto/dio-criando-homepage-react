import { useContext, useEffect } from "react";
import Account from "../pages/Account";
import AccountInfo from "../pages/AccountInfo";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "../components/context/AppContext";
import { getAllLocalStorage } from "../services/storage";

const MainRoutes = () => {
    const { loginState } = JSON.parse(getAllLocalStorage()!)
    const {
        setIsLoggedIn
    } = useContext(AppContext)

    useEffect(() => {
        loginState === true ? setIsLoggedIn(false) : setIsLoggedIn(true)
    }, [])

    return (
        <Routes>
            <Route path="/" element={loginState ? <Account /> : <Home />} />
            <Route path={'/account/:id'} element={loginState ? <Account /> : <Home />} />
            <Route path='/accountInfo/' element={loginState ? <AccountInfo /> : <Home />} />
        </Routes>
    )

}

export default MainRoutes;
