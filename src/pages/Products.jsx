import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/style.css"
import image from "../assets/images/laptop1.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = ({ toggleLoading }) => {
    const [active, setActive] = useState("brand");
    const [filterMedium, setFilterMedium] = useState(false);
    const [cartIcon, setCartIcon] = useState(undefined);
    const [productsDetails, setProductsDetails] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        toggleLoading(true);
        let apiURL = `/api/v1/products`;
        const filterForSearch = location.state;

        if (filterForSearch.name) {
            apiURL += `?name=${filterForSearch.name}`
        }
        if (filterForSearch.subcategory) {
            apiURL += apiURL.includes("?") ? `&subcategory=${filterForSearch.subcategory}` : `?subcategory=${filterForSearch.subcategory}`;

        }
        const fetchData = async () => {
            try {
                const axiosResponse = await axios.get(apiURL);
                setProductsDetails(axiosResponse.data.data);
                toggleLoading(false);
            } catch (error) {
                toggleLoading(false)
                console.log(error);
            }
        }
        fetchData();
    }, [location]);

    const displaySingleProduct = (productId, productSkuId) => {
        navigate("/productdetail", { state: { productId, productSkuId } });
    }

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
                            {productsDetails.length > 0 &&
                                productsDetails.map((product) => {
                                    const productsToDisplay = product.ProductSKUs.map((productSKU) => {
                                        return (
                                            <div className="card card_border shadow mb-5 bg-body-tertiary rounded" style={{ "width": "17rem" }} key={productSKU.id}>
                                                <img src={productSKU.image} onClick={() => displaySingleProduct(product.id, productSKU.id)} className="card-img-top" alt="..." />
                                                <div className="card-body" onClick={() => displaySingleProduct(product.id, productSKU.id)}>
                                                    <h5 className="card-title">{product.name} | {productSKU.variety}</h5>
                                                    <p className="card-text" />
                                                    <p></p>
                                                    <h3>&#x20B9; {productSKU.price}</h3>
                                                    <p><span><s>&#x20B9; {+productSKU.price + (+productSKU.price * 0.1)}</s></span></p>
                                                    <button onMouseEnter={() => { setCartIcon(productSKU.id) }} onMouseLeave={() => { setCartIcon(undefined) }} className=" mt-2 custom-btn">Add to Cart {cartIcon === productSKU.id ? <i className="fa-solid fa-cart-shopping" style={{ "color": "#1b2141" }}></i> : <i className="fa-solid fa-cart-shopping" style={{ "color": "#ffffff" }}></i>}</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                    return productsToDisplay;
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;