import { useNavigate } from "react-router-dom";
import "../assets/css/style.css"
import image from "../assets/images/laptop1.jpg";
import { useState } from "react";

const Product = () => {
    const [active, setActive] = useState("brand");
    const [filterMedium, setFilterMedium] = useState(false);
    const [cartIcon, setCartIcon] = useState(false);

    const navigate = useNavigate();
    
    return (
        <>
            {filterMedium && <div className="container-fluid filter-medium">
                <div className="row py-3">
                    <div className="col-3 text-center p-0">
                        <h6 className="fw-medium py-2 m-0 filter-heading" style={active === "brand" ? { "backgroundColor": "white", "color": "#1b2141" } : { "backgroundColor": "#d3d3d3" }} onClick={() => setActive("brand")}>Brand</h6>
                        <h6 className="fw-medium py-2 m-0 filter-heading" style={active === "price" ? { "backgroundColor": "white" } : { "backgroundColor": "#d3d3d3" }} onClick={() => setActive("price")}>Price</h6>
                    </div>
                    <div className="col-9 bg-white rounded-bottom py-3">
                        {active === "brand"
                            &&
                            <ul className="pl-2 m-0">
                                <li>
                                    <input type="checkbox" name="checkbox" id="Vivo" />
                                    <label htmlFor="Vivo" className="ml-2">
                                        <span className="checked"></span>
                                        <span className="filter-list">Vivo</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="checkbox" id="Apple" />
                                    <label htmlFor="Apple" className="ml-2">
                                        <span className="checked"></span>
                                        <span className="filter-list">Apple</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="checkbox" id="Redmi" />
                                    <label htmlFor="Redmi" className="ml-2">
                                        <span className="checked"></span>
                                        <span className="filter-list">Redmi</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="checkbox" id="Realme" />
                                    <label htmlFor="Realme" className="ml-2">
                                        <span className="checked"></span>
                                        <span className="filter-list">Realme</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="checkbox" id="Oppo" />
                                    <label htmlFor="Oppo" className="ml-2">
                                        <span className="checked"></span>
                                        <span className="filter-list">Oppo</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="checkbox" id="OnePlus" />
                                    <label htmlFor="OnePlus" className="ml-2">
                                        <span className="checked"></span>
                                        <span className="filter-list">OnePlus</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="checkbox" id="Samsung" />
                                    <label htmlFor="Samsung" className="ml-2">
                                        <span className="checked"></span>
                                        <span className="filter-list">Samsung</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="checkbox" id="iQOO" />
                                    <label htmlFor="iQOO" className="ml-2">
                                        <span className="checked"></span>
                                        <span className="filter-list">iQOO</span>
                                    </label>
                                </li>
                            </ul>
                        }
                        {active === "price" &&
                            <ul className="pl-2 m-0">
                                <li >
                                    <input type="checkbox" name="checkbox" id="1k" />
                                    <label htmlFor="1k" className="ml-2">
                                        <span className="checked"></span>
                                        <span className="filter-list">Under &#x20B9; 1000</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="checkbox" id="1-5k" />
                                    <label htmlFor="1-5k" className="ml-2">
                                        <span className="checked"></span>
                                        <span className="filter-list">&#x20B9; 1000 - &#x20B9; 5000</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="checkbox" id="5-10k" />
                                    <label htmlFor="5-10k" className="ml-2">
                                        <span className="checked"></span>
                                        <span className="filter-list">&#x20B9; 5000 - &#x20B9; 10,000</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="checkbox" id="10-20k" />
                                    <label htmlFor="10-20k" className="ml-2">
                                        <span className="checked"></span>
                                        <span className="filter-list">&#x20B9; 10,000 - &#x20B9; 20,000</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="checkbox" id="20k+" />
                                    <label htmlFor="20k+" className="ml-2">
                                        <span className="checked"></span>
                                        <span className="filter-list">Over &#x20B9; 20,000</span>
                                    </label>
                                </li>
                            </ul>}
                        <button className="w-100 my-2 btn btn-outline-success" onClick={() => setFilterMedium(false)}>Confirm</button>
                    </div>
                </div>
            </div>}

            <div className="container-fluid mt-3 all-products">
                <div className="mobile-product row">
                    {!filterMedium && <div className="d-block d-lg-none filter-icon-fw ml-md-4 ml-2" onClick={() => setFilterMedium(true)}>
                        <i className="fa-solid fa-filter fa-2xl" style={{ "color": "#1B2141" }}></i>
                    </div>}
                    <div className="col-2 border fil sticky-container d-none d-lg-block">
                        <div className="filter">
                            <div className="brand heading">
                                <h4>Brands</h4>
                                <ul className="pl-2 m-0">
                                    <li>
                                        <input type="checkbox" name="checkbox" id="Vivo" />
                                        <label htmlFor="Vivo" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Vivo</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="checkbox" id="Apple" />
                                        <label htmlFor="Apple" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Apple</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="checkbox" id="Redmi" />
                                        <label htmlFor="Redmi" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Redmi</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="checkbox" id="Realme" />
                                        <label htmlFor="Realme" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Realme</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="checkbox" id="Oppo" />
                                        <label htmlFor="Oppo" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Oppo</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="checkbox" id="OnePlus" />
                                        <label htmlFor="OnePlus" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">OnePlus</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="checkbox" id="Samsung" />
                                        <label htmlFor="Samsung" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Samsung</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="checkbox" id="iQOO" />
                                        <label htmlFor="iQOO" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">iQOO</span>
                                        </label>
                                    </li>
                                </ul>
                                <button className="w-100 my-2 btn btn-outline-success">Confirm</button>
                            </div>
                            <div className="price heading mt-4">
                                <h4>Price</h4>
                                <ul className="pl-2 m-0">
                                    <li >
                                        <input type="checkbox" name="checkbox" id="1k" />
                                        <label htmlFor="1k" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Under &#x20B9; 1000</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="checkbox" id="1-5k" />
                                        <label htmlFor="1-5k" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">&#x20B9; 1000 - &#x20B9; 5000</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="checkbox" id="5-10k" />
                                        <label htmlFor="5-10k" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">&#x20B9; 5000 - &#x20B9; 10,000</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="checkbox" id="10-20k" />
                                        <label htmlFor="10-20k" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">&#x20B9; 10,000 - &#x20B9; 20,000</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="checkbox" id="20k+" />
                                        <label htmlFor="20k+" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Over &#x20B9; 20,000</span>
                                        </label>
                                    </li>
                                </ul>
                                <button className="w-100 my-2 btn btn-outline-success">Confirm</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 col-12">
                        <div className="row d-flex flex-row justify-content-evenly align-items-start flex-wrap">
                            <div className="card card_border shadow mb-5 bg-body-tertiary rounded" style={{ "width": "17rem" }}>
                                <img src={image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Redmi Note 13 5G (Stealth Black, 12GB RAM, 256GB Storage) |
                                        5G Ready
                                    </h5>
                                    <p className="card-text" />
                                    <p></p>
                                    <h3>&#x20B9; 21,499</h3>
                                    <p><span><s>&#x20B9;24,799</s></span></p>
                                    <button className="mt-auto custom-btn">Buy Now</button>
                                    <button onMouseEnter={() => { setCartIcon(true) }} onMouseLeave={() => { setCartIcon(false) }} className=" mt-2 custom-btn">Add to Cart {cartIcon ? <i className="fa-solid fa-cart-shopping" style={{ "color": "#1b2141" }}></i> : <i className="fa-solid fa-cart-shopping" style={{ "color": "#ffffff" }}></i>}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;