import { useState } from "react";
import "../../assets/css/style.css"
import { useNavigate } from "react-router-dom";
const Filter = () => {
    const [active, setActive] = useState("brand");
    const navigate = useNavigate();

    return (
        <div className="container-fluid d-block d-lg-none filter-medium">
            <div className="row py-3">
                <div className="col-3 text-center p-0">
                    <h6 className="fw-medium py-2 m-0 filter-heading" style={active==="brand"?{"backgroundColor":"white", "color":"#1b2141"}:{"backgroundColor":"#d3d3d3"}} onClick={() => setActive("brand")}>Brand</h6>
                    <h6 className="fw-medium py-2 m-0 filter-heading" style={active==="price"?{"backgroundColor":"white"}:{"backgroundColor":"#d3d3d3"}} onClick={() => setActive("price")}>Price</h6>
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
                    <button className="w-100 my-2 btn btn-outline-success" onClick={()=>navigate("/search-for-products")}>Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default Filter;