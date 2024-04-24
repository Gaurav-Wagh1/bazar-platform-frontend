import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import User from "./pages/User.jsx";
import Layout from './pages/Layout.jsx';
import Check from "./components/Check.jsx";
import Clothing from "./pages/Clothing.jsx";
import Products from "./pages/Products.jsx";
import ErrorPage from "./pages/Error-Page.jsx";
import Electronics from "./pages/Electronics.jsx";
import Loader from "./components/loader/loader.jsx";
import Signup from "./components/authentication/signup"
import Signin from "./components/authentication/signin"
import ProductForm from "./components/product/Product-form.jsx";
import Information from "./components/authentication/Information"
import SingleProduct from "./components/product/SingleProduct.jsx";
import ExtraOrderDetails from "./components/order/ExtraOrderDetails.jsx";
import ForgotPassword from "./components/authentication/forgot-password.jsx";

const App = () => {

  useEffect(() => {
    const fetchUserData = async () => {
      const apiURL = "/api/v1/users";
      try {
        const axiosResponse = await axios.get(apiURL);
        updateUserInfo(axiosResponse.data.data);
      } catch (error) {
      }
    }
    fetchUserData();
  }, []);

  const [user, setUser] = useState({ id: "", email: "", fullName: "", phoneNumber: "", address: "", city: "", state: "", country: "", postalCode: "" });
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = (value) => {
    setIsLoading(value);
  }

  const updateUserInfo = (value) => {
    const updatedInfo = {};
    for (const key in user) {
      updatedInfo[key] = value[key];
    }
    setUser(updatedInfo);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} isLoading={isLoading} toggleLoading={toggleLoading} updateUserInfo={updateUserInfo} />}>
            <Route index element={<Home />} />
            <Route path='electronics' element={<Electronics />} />
            <Route path='clothings' element={<Clothing />} />
            <Route path='signup' element={<Signup user={user} setUser={setUser} toggleLoading={toggleLoading} />} />
            <Route path='info' element={<Information user={user} setUser={setUser} toggleLoading={toggleLoading} title={"Tell something more about you"} description={""} />} />
            <Route path='signin' element={<Signin user={user} updateUserInfo={updateUserInfo} toggleLoading={toggleLoading} />} />
            <Route path='forgot' element={<ForgotPassword user={user} setUser={setUser} />} />
            <Route path='cart' element={<Cart user={user} toggleLoading={toggleLoading} updateUserInfo={updateUserInfo} />} />
            <Route path='user' element={<User user={user} updateUserInfo={updateUserInfo} toggleLoading={toggleLoading} />} />
            <Route path="extraorderdetails" element={<ExtraOrderDetails user={user} toggleLoading={toggleLoading} />} />
            <Route path='products' element={<ProductForm user={user} setUser={setUser} />} />
            <Route path='search-for-products' element={< Products toggleLoading={toggleLoading} />} />
            <Route path='productdetail' element={<SingleProduct user={user} updateUserInfo={updateUserInfo} toggleLoading={toggleLoading} />} />
            <Route path='loader' element={<Loader />} />
            <Route path='check' element={<Check />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;