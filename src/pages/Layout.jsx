import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from "../components/loader/loader.jsx";

const Layout = ({isLoading, toggleLoading, user, updateUserInfo}) => {
    return (
        <>
            {isLoading && <Loader />}
            <Header toggleLoading={toggleLoading} user={user} updateUserInfo={updateUserInfo}/>
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;