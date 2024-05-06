import { useEffect, useState } from "react";
import "../../assets/css/style.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import Update from "../authentication/update";

const SingleProduct = ({ toggleLoading, user, updateUserInfo }) => {

    const [product, setProduct] = useState({});
    const [productSKU, setProductSKU] = useState({});
    const [isCartItem, setIsCartItem] = useState(false);
    const [success, setSuccess] = useState({ status: false, message: "" });
    const [cartIcon, setCartIcon] = useState(false);
    const [update, setUpdate] = useState({ status: false, message: "" });

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        toggleLoading(true);
        const setCartStatus = async () => {
            try {
                const apiURL = `/api/v1/carts/${productSKU.id}`
                const response = await axios.get(apiURL);
                if (response.data.data) {
                    setIsCartItem(true);
                }
                else {
                    setIsCartItem(false);
                }
                toggleLoading(false);
            } catch (error) {
                toggleLoading(false);
                console.log(error);
            }
        }
        setCartStatus();
    }, [productSKU]);

    const loadData = async (prodId = undefined) => {
        try {
            toggleLoading(true);
            const data = location.state;
            const apiURL = `/api/v1/products/${prodId ? prodId : data.productId}`;
            const response = await axios.get(apiURL);
            setProduct(response.data.data);
            if (data.productSkuId) {
                const choosenProductSKU = response.data.data.ProductSKUs.filter((sku) => {
                    return sku.id === data.productSkuId;
                });
                setProductSKU(choosenProductSKU[0]);
            }
            else {
                setProductSKU(response.data.data.ProductSKUs[0]);
            }
            toggleLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const toggleVariety = (e) => {
        const currentVarietyText = e.target.innerHTML;
        const nextVariety = product.ProductSKUs.filter((item) => {
            return item.variety === currentVarietyText;
        });
        setProductSKU(nextVariety[0]);
    }

    const toggleCart = async () => {
        toggleLoading(true);
        try {
            const apiURL = `/api/v1/carts/${productSKU.id}`
            const response = await axios.get(apiURL);
            if (response.data.data) {
                const apiURL = `/api/v1/carts/${response.data.data[0].id}`;
                await axios.delete(apiURL);
                setIsCartItem(false);
                toggleLoading(false);
                setSuccess({ status: true, message: "Successfully removed item from cart" });
                setTimeout(() => {
                    setSuccess({ status: false, message: "" })
                }, 3000);
            }
            else {
                const apiURL = `/api/v1/carts`;
                await axios.post(apiURL, { productSkuId: productSKU.id, quantity: 1 });
                setIsCartItem(true);
                toggleLoading(false);
                setSuccess({ status: true, message: "Successfully added item into cart" });
                setTimeout(() => {
                    setSuccess({ status: false, message: "" })
                }, 3000);
            }
        } catch (error) {
            toggleLoading(false);
            if(error.response.data.error === "Unauthenticated user!"){
                navigate("/signin");
                return;
            }
            console.log(error);
        }
    }

    const displayProduct = (prodId) => {
        loadData(prodId);
    }
    const purchaseProduct = async (e) => {
        e.preventDefault();
        try {
            const apiURL = "/api/v1/bookings";
            const axiosResponse = await axios.post(apiURL, {
                id: productSKU.id,
                quantity: 1
            });
            const orderId = axiosResponse.data.data.orderDetail.id;
            navigate("/check", { state: orderId });
        } catch (error) {
            if (error.response.data.error === "Unauthenticated user!") {
                console.log("SignIn / SignUp required!");
                navigate("/signin");
                return;
            }
            if (error.response.data.error === "Invalid contact field") {
                console.log(error.response.data.message);
                setUpdate({ status: true, message: "Each contact information need to be filled" });
                return;
            }
            console.log(error);
        }
    }
    return (
        <>
            {(success.status) &&
                (
                    <div className="alert alert-success alert-dismissible" role="alert">
                        <strong>{success.message}</strong>
                        <button type="button" onClick={() => setSuccess({ status: false, message: "" })} className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }

            {update.status && <Update user={user} from={"single-product"} setUpdate={setUpdate} updateUserInfo={updateUserInfo} toggleLoading={toggleLoading} message={update.message} />}

            {(product.name && !update.status) &&
                <>
                    <div className=" single container-fluid bg-white mt-3">
                        <div className="row pt-3 px-3 pb-3">
                            <div className="card-wrapper col-12 col-md-4">
                                <div className="big-img sticky-md">
                                    <img src={productSKU.image} className="img-fluid" id="bigImg"
                                        /*style={{ "border": "1px solid #1B2141" }}*/ alt="iPhone Image" />
                                    <div className="row small-img mx-0.5 mt-2 mb-2"> {/*<!-- Added mt-3 className for top margin -->*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-0 col-md-1"></div>
                            <div className="col-12 col-md-7">
                                <h2 className="mt-3 mt-md-0 text">{product.name}</h2>
                                <h5 className="mb-4">{productSKU.variety}</h5>
                                <h3 className="card-text"> &#x20B9; {productSKU.price} /- <br /> <span><del>&#x20B9; {+productSKU.price + (+productSKU.price * 0.1)}</del></span></h3>
                                <div className="product-details mt-3">
                                    <h3>Product Highlights</h3>
                                    <ul style={{ "listStyleType": "circle" }}>
                                        {productSKU.highlights && <li>{productSKU.highlights}</li>}
                                        {product.highlights.split(",").map((highlight, index) => {
                                            return <li key={index}>{highlight.trim()}</li>
                                        })}
                                    </ul>
                                </div>
                                {/* <!-- Product Color --> */}
                                <div className="details row mt-4">
                                    <div className="storage col-12">
                                        <h3>Varieties</h3>
                                        <div className="productsku d-flex flex-column flex-md-row justify-content-start">
                                            {product.ProductSKUs.map((item, index) => {
                                                return <button onClick={toggleVariety} style={{ "backgroundColor": item === productSKU ? "#1B2141" : "transparent", "color": item === productSKU ? "white" : "#1B2141" }} className="w-100 sku-storage fs-6 text-center mx-2 my-2 my-md-0 font-weight-bold" key={index}>{item.variety}</button>
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center py-5">
                                    <div className="cart w-100">
                                        <button type="button" id="buyNow" onClick={purchaseProduct}> Buy Now </button>
                                    </div>
                                    <div className="cart w-100">
                                        {isCartItem ?
                                            <button type="button" style={{ "backgroundColor": "#1B2141", "color": "#E9E2DA" }} id="addToCart" onClick={toggleCart}> Added to Cart <i className="fa-solid fa-cart-shopping" style={{ "color": "#ffffff" }}></i> </button>
                                            :
                                            <button type="button" id="addToCart" onClick={toggleCart} onMouseEnter={() => { setCartIcon(true) }} onMouseLeave={() => { setCartIcon(false) }}> Add to Cart  {cartIcon ? <i className="fa-solid fa-cart-shopping" style={{ "color": "#ffffff" }}></i> : <i className="fa-solid fa-cart-shopping" style={{ "color": "#1b2141" }}></i>} </button>}
                                    </div>
                                </div>
                                <div className="description">
                                    <h3>Description</h3>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default SingleProduct;