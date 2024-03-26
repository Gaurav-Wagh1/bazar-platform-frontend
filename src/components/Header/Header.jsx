import "../../assets/style.css"
import { Link, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cart from '../../assets/cart.png'
import axios from "axios";

// images

import brandLogo from "../../assets/bazaar-high-resolution-logo-transparent (2).png"


const Header = (prop) => {
    const [isLoggedOut, setIsLoggedOut] = useState({ status: false, info: "" });

    const navigate = useNavigate();

    const handleCart = async () => {
        if(!(prop.user.email && prop.user.id)){
            setIsLoggedOut({ status: true, info: "You are logged out, Log In to see the cart" });
            setTimeout(() => {
                setIsLoggedOut({ status: false, info: "" });
            }, 3000);
            return;
        }
        navigate("/cart");
    }

    const handleLogout = async () => {
        prop.toggleLoading(true);
        const apiURL = `/api/v1/users/logout`;
        try {
            await axios.post(apiURL);
            prop.toggleLoading(false);
            setIsLoggedOut({ status: true, info: "Logged out successfully" });
            setTimeout(() => {
                setIsLoggedOut({ status: false, info: "" });
            }, 3000);
            navigate("/");
        } catch (error) {
            prop.toggleLoading(false);
            console.log(error);
        }
        prop.updateUserInfo({});
    }

    const handleUser = async() => {
        if(!(prop.user.email && prop.user.id)){
            setIsLoggedOut({ status: true, info: "You are logged out, Log In to see the profile" });
            setTimeout(() => {
                setIsLoggedOut({ status: false, info: "" });
            }, 3000);
            return;
        }
        navigate("/user");
    }

    return (
        <>
            {isLoggedOut.status &&
                (
                    <div className="alert alert-success alert-dismissible" role="alert">
                        <strong>{isLoggedOut.info}</strong>
                        <button type="button" onClick={() => setIsLoggedOut({ status: false, info: "" })} className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }
            {/* <div className="container-fluid">
                <div className="row">
                    <div className="navbar col-12">
                        <div className="col-md-2 col-12 text-white p-0 m-0 text-center">
                            <h3 className='m-0 main-heading' onClick={() => navigate('/')}>BAZAR</h3>
                        </div>
                        <div className="col-md-6 col-12 p-0">
                            <form className="d-flex justify-content-center search-box">
                                <input className="p-2 text-white" id="search" type="search" placeholder="Search for whatever you want" aria-label="Search" />
                                <button className="search px-4 mx-3" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="col-md-4 col-12 d-flex justify-content-around">

                            <img src={cart} id="cart-logo" alt="img" className="" onClick={() => navigate('/cart')} />

                            <Dropdown className='float-right'>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="mt-1 ml-3 w-45">
                                    Hello User
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => navigate('/signin')} className="dropdown-list">
                                        Sign In
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => navigate('/signup')} className="dropdown-list">
                                        Sign Up
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </div>
                </div>
            </div> */}

            <header>
                {/* <!-- section 1     nav-top--> */}
                <div className="top-navbar">
                    <div className="top-icons">
                        <i className="fa-brands fa-twitter mx-2"></i>
                        <i className="fa-brands fa-facebook-f mx-2"></i>
                        <i className="fa-brands fa-instagram mx-2"></i>
                    </div>
                    <div className="other-links">
                        {
                            (prop.user.id && prop.user.email)
                                ? <>Hello, {prop.user.fullName}</>
                                : <button id="btn-login" className="mx-2" onClick={() => { navigate("/signin") }}>Login</button>
                        }
                        {
                            (prop.user.id && prop.user.email)
                                ? <button id="btn-login" className="mx-2" onClick={handleLogout}>Log Out</button>
                                : <button id="btn-login" className="mx-2" onClick={() => { navigate("/signup") }}>Sign up</button>
                        }
                        <i className="fa-solid fa-user" onClick={handleUser}></i>
                        <i className="fa-solid fa-cart-shopping" onClick={handleCart}></i>
                    </div>
                </div>

                {/* <!-- SECTION 2      nav-lower --> */}
                <nav className="navbar navbar-expand-lg" id="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand logo" href="#"><img src={brandLogo} alt="" width="180px" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span><i className="fa-solid fa-bars" style={{ color: "white" }}></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Women.html">Women</a>
                                </li>
                                {/* <!-- <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style="background-color: #1c1c50;">
                                    <li><a className="dropdown-item" href="#">T-Shirt</a></li>
                                    <li><a className="dropdown-item" href="#">Hoodies</a></li>
                                    <li><a className="dropdown-item" href="#">Pants</a></li>
                                    <li><a className="dropdown-item" href="#">Soprts Shoes</a></li>
                                    <li><a className="dropdown-item" href="#">Smart Watch</a></li>
                                    <li><a className="dropdown-item" href="#">Glasess</a></li>
                                </ul>
                            </li> --> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="men.html">Men</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="kids.html">Kids</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="electronics.html">Electronics</a>
                                </li>
                            </ul>

                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search" />
                                <button className="btn btn-outline-success" type="submit" id="search-btn">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header >
        </>
    );
}

export default Header;