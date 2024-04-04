import "../../assets/css/style.css"
import { Link, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// images

import brandLogo from "../../assets/images/bazaar-high-resolution-logo-transparent (2).png"

const Header = (prop) => {
    const [isLoggedOut, setIsLoggedOut] = useState({ status: false, info: "" });
    const [searchField, setSearchField] = useState("");

    const navigate = useNavigate();

    const handleCart = async () => {
        if (!(prop.user.email && prop.user.id)) {
            navigate("/signin");
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
        } catch (error) {
            prop.toggleLoading(false);
            console.log(error);
        }
        prop.updateUserInfo({});
    }

    const handleUser = async () => {
        if (!(prop.user.email && prop.user.id)) {
            navigate("/signin")
            return;
        }
        navigate("/user");
    }

    function makeFilter(str) {

        function createName(category, attributes) {
            if (attributes.length > 1) {
                const indexOfSub = attributes.indexOf(category);
                const name = attributes.filter((element, index) => index !== indexOfSub).toString().replace(/,/g, ' ');
                return name.trim();
            }
            return "";
        }

        str = str.trim().replace(/\s+/g, ' ').toLowerCase();     // to remove extra white spaces between words
        const filter = {};
        const attributes = str.split(" ");
        const category = ["mobile", "phones", "mobiles", "phone", "laptop", "laptops", "tv", "television", "televisions"].filter((item) => attributes.includes(item))[0];

        if (category === "mobile" || category === "phones" || category === "mobiles" || category === "phone") {
            filter.subcategory = "mobiles";
            filter.name = createName(category, attributes);
        }
        else if (category === "laptop" || category === "laptops") {
            filter.subcategory = "laptops";
            filter.name = createName(category, attributes);
        }
        else if (category === "tv" || category === "television" || category === "televisions") {
            filter.subcategory = "televisions";
            filter.name = createName(category, attributes);
        }
        else {
            filter.name = str;
        }
        return filter;
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchField) {
            return;
        }
        const filter = makeFilter(searchField);
        setSearchField("");
        navigate("/search-for-products", { state: filter });
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
            <header className="sticky-navbar">
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
                        <i className="fa-solid fa-user" id="user-controls" onClick={handleUser}></i>
                        <i className="fa-solid fa-cart-shopping" id="user-controls" onClick={handleCart}></i>
                    </div>
                </div>

                {/* <!-- SECTION 2      nav-lower --> */}
                <nav className="navbar navbar-expand-lg" id="navbar">
                    <div className="container-fluid">
                        <Link className="navbar-brand logo" to={"/"}><img src={brandLogo} alt="" width="180px" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span><i className="fa-solid fa-bars" style={{ color: "white" }}></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="">Home</a> */}
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Women</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Men</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Kids</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Electronics</a>
                                </li>
                            </ul>

                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" value={searchField} onChange={(e) => setSearchField(e.target.value)} aria-label="Search" id="search" />
                                <button className="btn btn-outline-success" type="submit" id="search-btn" onClick={handleSearch}>Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header >
        </>
    );
}

export default Header;