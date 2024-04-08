import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/style.css"
import { useEffect, useState } from "react";
import axios from "axios";

const Product = ({ toggleLoading }) => {
    const [active, setActive] = useState("brand");
    const [filterMedium, setFilterMedium] = useState(false);
    const [cartIcon, setCartIcon] = useState(undefined);
    const [productsDetails, setProductsDetails] = useState([]);
    const [brandCheckBoxes, setBrandCheckBoxes] = useState({
        vivo: false,
        realme: false,
        apple: false,
        iqoo: false,
        samsung: false,
        redmi: false,
        oppo: false,
        oneplus: false
    });
    const [priceCheckBoxes, setPriceCheckBoxes] = useState({
        "0-1000": false,
        "1000-5000": false,
        "5000-10000": false,
        "10000-20000": false,
        "20000-": false
    });

    const [filterURL, setFilterURL] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        toggleLoading(true);
        resetCheckboxes();

        let apiURL = `/api/v1/products`;
        const filterForSearch = location.state;

        if (filterForSearch.name) {
            apiURL += `?name=${filterForSearch.name}`
        }
        if (filterForSearch.subcategory) {
            apiURL += apiURL.includes("?") ? `&subcategory=${filterForSearch.subcategory}` : `?subcategory=${filterForSearch.subcategory}`;
        }
        fetchData(apiURL);
    }, [location]);

    const fetchData = async (apiURL) => {
        try {
            const axiosResponse = await axios.get(apiURL);
            setProductsDetails(axiosResponse.data.data);
            toggleLoading(false);
        } catch (error) {
            toggleLoading(false)
            console.log(error);
        }
    }

    const resetCheckboxes = () => {
        Object.keys(brandCheckBoxes).forEach(checkBox => brandCheckBoxes[checkBox] = false);
        Object.keys(priceCheckBoxes).forEach(checkBox => priceCheckBoxes[checkBox] = false);
        setBrandCheckBoxes(brandCheckBoxes);
        setPriceCheckBoxes(priceCheckBoxes);
    }

    const displaySingleProduct = (productId, productSkuId) => {
        navigate("/productdetail", { state: { productId, productSkuId } });
    }

    const handleBrandCheckboxes = (e) => {
        const { name } = e.target;
        setBrandCheckBoxes({ ...brandCheckBoxes, [name]: !brandCheckBoxes[name] });
    }

    const handlePriceCheckboxes = (e) => {
        const { name } = e.target;
        setPriceCheckBoxes({ ...priceCheckBoxes, [name]: !priceCheckBoxes[name] });
    }

    const handleBrandSubmit = (e) => {
        e.preventDefault();
        const chosenBrands = {};
        for (const key in brandCheckBoxes) {
            if (brandCheckBoxes[key]) {
                chosenBrands[key] = brandCheckBoxes[key]
            }
        }
        const chosenBrandsArr = Object.keys(chosenBrands);
        if (!chosenBrandsArr.length) {
            let apiURL = `/api/v1/products`;
            const filterForSearch = location.state;

            if (filterForSearch.name) {
                apiURL += `?name=${filterForSearch.name}`
            }
            if (filterForSearch.subcategory) {
                apiURL += apiURL.includes("?") ? `&subcategory=${filterForSearch.subcategory}` : `?subcategory=${filterForSearch.subcategory}`;
            }
            if(filterURL.length){
                apiURL += apiURL.includes("?") ? `&${priceFilter.slice(priceFilter.indexOf("price"))}` : `?${priceFilter.slice(priceFilter.indexOf("price"))}` ;
            }
            setFilterURL(apiURL);
            fetchData(apiURL);
            return;
        }
        let apiURL = "/api/v1/products";
        const filterForSearch = location.state;
        if (filterForSearch.subcategory) {
            apiURL += `?subcategory=${filterForSearch.subcategory}`;
        }
        apiURL += apiURL.includes("?") ? `&name=` : `?name=`;
        chosenBrandsArr.forEach((brand, index) => {
            index === 0 ? apiURL += `${brand}` : apiURL += `,${brand}`;;
        });
        if(filterURL.length){
            const priceIndex = filterURL.indexOf("price");
            if(priceIndex !== -1){
                apiURL += apiURL.includes("?") ? `&${filterURL.slice(priceIndex)}` : `?${filterURL.slice(priceIndex)}` ;
            }
        }
        setFilterURL(apiURL);
        fetchData(apiURL);
    }

    const handlePriceSubmit = (e) => {
        e.preventDefault();
        const priceStringArray = Object.keys(priceCheckBoxes).filter((key) => priceCheckBoxes[key]);
        const numberArray = priceStringArray.map(str => str.split("-")).map(element => element.map(Number));

        const arrayToSend = numberArray.map(subArray => {
            if (subArray[1] === 0) {
                subArray.pop();
            }
            return subArray;
        });

        let apiURL = "";
        if (filterURL.length) {                 // /products?category=mobiles&brand=vivo&price=2000
            const priceIndex = filterURL.indexOf("price");
            if(priceIndex !== -1){
                apiURL = filterURL.substring(0, filterURL.indexOf("price"));
                apiURL +=  `price=${arrayToSend}`;
            }
            else{
                apiURL += filterURL;
                apiURL +=  filterURL.includes("?") ? `&price=${arrayToSend}` : `?price=${arrayToSend}`;
            }
        }
        else {
            apiURL = `/api/v1/products`;
            const filterForSearch = location.state;

            if (filterForSearch.name) {
                apiURL += `?name=${filterForSearch.name}`
            }
            if (filterForSearch.subcategory) {
                apiURL += apiURL.includes("?") ? `&subcategory=${filterForSearch.subcategory}` : `?subcategory=${filterForSearch.subcategory}`;
            }
            apiURL += apiURL.includes("?") ? `&price=${arrayToSend}` : `?price=${arrayToSend}`;
        }
        setFilterURL(apiURL);
        // fetchData(apiURL);
        return;
    }

    const commonSubmit = (e) => {
        setFilterMedium(false)
        e.preventDefault();
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
                            <form>
                                <ul className="pl-2 m-0">
                                    <li>
                                        <input
                                            type="checkbox"
                                            name="vivo"
                                            id="Vivo"
                                            checked={brandCheckBoxes.vivo}
                                            onChange={handleBrandCheckboxes} />
                                        <label htmlFor="Vivo" className="ml-2">
                                            <span className="filter-list">Vivo</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"
                                            name="apple"
                                            checked={brandCheckBoxes.apple}
                                            onChange={handleBrandCheckboxes}
                                            id="Apple" />
                                        <label htmlFor="Apple" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Apple</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"
                                            name="redmi"
                                            checked={brandCheckBoxes.redmi}
                                            onChange={handleBrandCheckboxes}
                                            id="Redmi" />
                                        <label htmlFor="Redmi" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Redmi</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"
                                            name="realme"
                                            checked={brandCheckBoxes.realme}
                                            onChange={handleBrandCheckboxes}
                                            id="Realme" />
                                        <label htmlFor="Realme" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Realme</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"
                                            name="oppo"
                                            checked={brandCheckBoxes.oppo}
                                            onChange={handleBrandCheckboxes}
                                            id="Oppo" />
                                        <label htmlFor="Oppo" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Oppo</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"
                                            name="oneplus"
                                            checked={brandCheckBoxes.oneplus}
                                            onChange={handleBrandCheckboxes}
                                            id="OnePlus" />
                                        <label htmlFor="OnePlus" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">OnePlus</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"
                                            name="samsung"
                                            checked={brandCheckBoxes.samsung}
                                            onChange={handleBrandCheckboxes}
                                            id="Samsung" />
                                        <label htmlFor="Samsung" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Samsung</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"
                                            name="iqoo"
                                            checked={brandCheckBoxes.iqoo}
                                            onChange={handleBrandCheckboxes}
                                            id="iQOO" />
                                        <label htmlFor="iQOO" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">iQOO</span>
                                        </label>
                                    </li>
                                </ul>
                            </form>
                        }
                        {active === "price" &&
                            <ul className="pl-2 m-0">
                                <li >
                                    <input
                                        type="checkbox"
                                        name="0-1000"
                                        id="1k"
                                        checked={priceCheckBoxes["0-1000"]}
                                        onChange={handlePriceCheckboxes}
                                    />
                                    <label htmlFor="1k" className="ml-2">
                                        <span className="filter-list">Under &#x20B9; 1000</span>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        name="1000-5000"
                                        id="1-5k"
                                        checked={priceCheckBoxes["1000-5000"]}
                                        onChange={handlePriceCheckboxes}
                                    />
                                    <label htmlFor="1-5k" className="ml-2">
                                        <span className="filter-list">&#x20B9; 1000 - &#x20B9; 5000</span>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        name="5000-10000"
                                        id="5-10k"
                                        checked={priceCheckBoxes["5000-10000"]}
                                        onChange={handlePriceCheckboxes}
                                    />
                                    <label htmlFor="5-10k" className="ml-2">
                                        <span className="filter-list">&#x20B9; 5000 - &#x20B9; 10,000</span>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        name="10000-20000"
                                        id="10-20k"
                                        checked={priceCheckBoxes["10000-20000"]}
                                        onChange={handlePriceCheckboxes}
                                    />
                                    <label htmlFor="10-20k" className="ml-2">
                                        <span className="filter-list">&#x20B9; 10,000 - &#x20B9; 20,000</span>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        name="20000+"
                                        id="20k+"
                                        checked={priceCheckBoxes["20000-"]}
                                        onChange={handlePriceCheckboxes}
                                    />
                                    <label htmlFor="20k+" className="ml-2">
                                        <span className="filter-list">Over &#x20B9; 20,000</span>
                                    </label>
                                </li>
                            </ul>
                        }
                        <button className="w-100 my-2 btn btn-outline-success" onClick={commonSubmit}>Confirm</button>
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
                                        <input
                                            type="checkbox"
                                            name="vivo"
                                            id="Vivo"
                                            checked={brandCheckBoxes.vivo}
                                            onChange={handleBrandCheckboxes} />
                                        <label htmlFor="Vivo" className="ml-2">
                                            <span className="filter-list">Vivo</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"
                                            name="apple"
                                            checked={brandCheckBoxes.apple}
                                            onChange={handleBrandCheckboxes}
                                            id="Apple" />
                                        <label htmlFor="Apple" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Apple</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"
                                            name="redmi"
                                            checked={brandCheckBoxes.redmi}
                                            onChange={handleBrandCheckboxes}
                                            id="Redmi" />
                                        <label htmlFor="Redmi" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Redmi</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"
                                            name="realme"
                                            checked={brandCheckBoxes.realme}
                                            onChange={handleBrandCheckboxes}
                                            id="Realme" />
                                        <label htmlFor="Realme" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Realme</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"
                                            name="oppo"
                                            checked={brandCheckBoxes.oppo}
                                            onChange={handleBrandCheckboxes}
                                            id="Oppo" />
                                        <label htmlFor="Oppo" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Oppo</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"
                                            name="oneplus"
                                            checked={brandCheckBoxes.oneplus}
                                            onChange={handleBrandCheckboxes}
                                            id="OnePlus" />
                                        <label htmlFor="OnePlus" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">OnePlus</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"
                                            name="samsung"
                                            checked={brandCheckBoxes.samsung}
                                            onChange={handleBrandCheckboxes}
                                            id="Samsung" />
                                        <label htmlFor="Samsung" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">Samsung</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox"
                                            name="iqoo"
                                            checked={brandCheckBoxes.iqoo}
                                            onChange={handleBrandCheckboxes}
                                            id="iQOO" />
                                        <label htmlFor="iQOO" className="ml-2">
                                            <span className="checked"></span>
                                            <span className="filter-list">iQOO</span>
                                        </label>
                                    </li>
                                </ul>
                                <button className="w-100 my-2 btn btn-outline-success" onClick={handleBrandSubmit}>Confirm</button>
                            </div>
                            <div className="price heading mt-4">
                                <h4>Price</h4>
                                <ul className="pl-2 m-0">
                                    <li >
                                        <input
                                            type="checkbox"
                                            name="0-1000"
                                            id="1k"
                                            checked={priceCheckBoxes["0-1000"]}
                                            onChange={handlePriceCheckboxes}
                                        />
                                        <label htmlFor="1k" className="ml-2">
                                            <span className="filter-list">Under &#x20B9; 1000</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            type="checkbox"
                                            name="1000-5000"
                                            id="1-5k"
                                            checked={priceCheckBoxes["1000-5000"]}
                                            onChange={handlePriceCheckboxes}
                                        />
                                        <label htmlFor="1-5k" className="ml-2">
                                            <span className="filter-list">&#x20B9; 1000 - &#x20B9; 5000</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            type="checkbox"
                                            name="5000-10000"
                                            id="5-10k"
                                            checked={priceCheckBoxes["5000-10000"]}
                                            onChange={handlePriceCheckboxes}
                                        />
                                        <label htmlFor="5-10k" className="ml-2">
                                            <span className="filter-list">&#x20B9; 5000 - &#x20B9; 10,000</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            type="checkbox"
                                            name="10000-20000"
                                            id="10-20k"
                                            checked={priceCheckBoxes["10000-20000"]}
                                            onChange={handlePriceCheckboxes}
                                        />
                                        <label htmlFor="10-20k" className="ml-2">
                                            <span className="filter-list">&#x20B9; 10,000 - &#x20B9; 20,000</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            type="checkbox"
                                            name="20000-"
                                            id="20k+"
                                            checked={priceCheckBoxes["20000-"]}
                                            onChange={handlePriceCheckboxes}
                                        />
                                        <label htmlFor="20k+" className="ml-2">
                                            <span className="filter-list">Over &#x20B9; 20,000</span>
                                        </label>
                                    </li>
                                </ul>
                                <button className="w-100 my-2 btn btn-outline-success" onClick={handlePriceSubmit}>Confirm</button>
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