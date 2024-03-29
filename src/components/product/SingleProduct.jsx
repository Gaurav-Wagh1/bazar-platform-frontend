import { useEffect, useState } from "react";
import "../../assets/css/style.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SingleProduct = ({ toggleLoading }) => {

    const [product, setProduct] = useState({});
    const [productSKU, setProductSKU] = useState({});
    const [isCartItem, setIsCartItem] = useState(false);
    const [success, setSuccess] = useState({ status: false, message: "" });

    const location = useLocation();

    useEffect(() => {
        const loadData = async () => {
            try {
                toggleLoading(true);
                const data = location.state;
                const apiURL = `/api/v1/products/${data.productId}`;
                const response = await axios.get(apiURL);
                setProduct(response.data.data);
                setProductSKU(response.data.data.ProductSKUs[0]);
                // toggleLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
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

    const toggleVariety = (e) => {
        toggleLoading(true);
        const currentVarietyText = e.target.innerHTML;
        const nextVariety = product.ProductSKUs.filter((item) => {
            return item.variety === currentVarietyText;
        });
        setProductSKU(nextVariety[0]);
        console.log(productSKU);
        toggleLoading(false)
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
            console.log(error);
            toggleLoading(false);
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
            {product.name &&
                <>
                    <div className=" single container-fluid mt-3 mb-5 mx-3 ml-9">
                        <div className="row pt-3 px-3 pb-3">
                            <div className="card-wrapper col-lg-4 col-md-6 col-sm-12 ">
                                <div className="big-img">
                                    <img src={productSKU.image} className="img-fluid" id="bigImg"
                                        style={{ "border": "1px solid #1B2141" }} alt="iPhone Image" />
                                    <div className="row small-img mx-0.5 mt-2 mb-2"> {/*<!-- Added mt-3 className for top margin -->*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 col-sm-12 mx-4 ">
                                <h2 className="mt-3 mt-md-0 mb-4 text">{product.name}</h2>
                                <h3 className="card-text"> &#x20B9; {productSKU.price} /- <br /> <span><del>&#x20B9; {+productSKU.price + (+productSKU.price * 0.1)}</del></span></h3>
                                <div className="product-details mt-3">
                                    <h3>Product Highlights</h3>
                                    <ul style={{ "listStyleType": "circle" }}>
                                        <li>{productSKU.highlights && productSKU.highlights}</li>
                                        {product.highlights.split(",").map((highlight, index) => {
                                            return <li key={index}>{highlight.trim()}</li>
                                        })}
                                    </ul>
                                </div>
                                {/* <!-- Product Color --> */}
                                <div className="details row mt-4">
                                    <div className="storage col-12">
                                        <h3>Varieties</h3>
                                        <div className="productsku d-flex flex-row justify-content-start">
                                            {product.ProductSKUs.map((item, index) => {
                                                return <button onClick={toggleVariety} style={{ "backgroundColor": item === productSKU ? "#1B2141" : "transparent", "color": item === productSKU ? "white" : "#1B2141" }} className="sku-storage fs-6 text-center mx-2 font-weight-bold" key={index}>{item.variety}</button>
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="cart mb-3 mt-3 d-flex flex-row justify-content-around">
                                    <button type="button" id="buyNow"> Buy Now </button>
                                </div>
                                <div className="cart mb-3 mt-3 d-flex flex-row justify-content-around">
                                    {isCartItem ?
                                        <button type="button" style={{ "background-color": "#1B2141", "color": "#E9E2DA", "padding": "15px 80px" }} id="addToCart" onClick={toggleCart}> Added to Cart </button> :
                                        <button type="button" id="addToCart" onClick={toggleCart}> Add to Cart </button>}
                                </div>
                                <div className="description">
                                    <h3>Description</h3>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="similar Featured container-fliud">
                        <div className="heading">
                            <h1>Similar Products</h1>
                        </div>
                        <div id="carouselExampleControls" className="carousel slide" >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="card-wrapper ">
                                        <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                            style={{ "width": " 15rem" }}>
                                            <img src="pics/iphone15.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Apple iPhone 13 (128GB) - Pink</h5>
                                                <p className="card-text" /> &#x20B9; <span>52,090</span>
                                            </div>
                                        </div>
                                        <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                            style={{ "width": " 15rem" }}>
                                            <img src="pics/fire-bolt-smartwatch.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">boAt Xtend Smart Watch </h5>
                                                <p className="card-text" /> &#x20B9; <span>999</span>
                                            </div>
                                        </div>
                                        <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                            style={{ "width": " 15rem" }}>
                                            <img src="pics/boult-audio-earbuds.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Boult Audio UFO </h5>
                                                <p className="card-text" /> &#x20B9; <span>1,199</span>
                                            </div>
                                        </div>
                                        <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                            style={{ "width": " 15rem" }}>
                                            <img src="pics/headphone.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Oneplus Bullets Z2 Bluetooth </h5>
                                                <p className="card-text" /> &#x20B9; <span>1,799</span>
                                            </div>
                                        </div>
                                        <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                            style={{ "width": " 15rem" }}>
                                            <img src="pics/oneplus12r.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">OnePlus 12R </h5>
                                                <p className="card-text"> &#x20B9; <span>42,999</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card-wrapper ">
                                        <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                            style={{ "width": " 15rem" }}>
                                            <img src="pics/iphone15.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Apple iPhone 13 (128GB) - Pink</h5>
                                                <p className="card-text" /> &#x20B9; <span>52,090</span>
                                            </div>
                                        </div>
                                        <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                            style={{ "width": " 15rem" }}>
                                            <img src="pics/fire-bolt-smartwatch.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">boAt Xtend Smart Watch </h5>
                                                <p className="card-text" /> &#x20B9; <span>999</span>
                                            </div>
                                        </div>
                                        <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                            style={{ "width": " 15rem" }}>
                                            <img src="pics/boult-audio-earbuds.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Boult Audio UFO </h5>
                                                <p className="card-text" /> &#x20B9; <span>1,199</span>
                                            </div>
                                        </div>
                                        <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                            style={{ "width": " 15rem" }}>
                                            <img src="pics/headphone.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Oneplus Bullets Z2 Bluetooth </h5>
                                                <p className="card-text" /> &#x20B9; <span>1,799</span>
                                            </div>
                                        </div>
                                        <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                            style={{ "width": " 15rem" }}>
                                            <img src="pics/oneplus12r.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body" />
                                            <h5 className="card-title">OnePlus 12R </h5>
                                            <p className="card-text"> &#x20B9; <span>42,999</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card-wrapper ">
                                    <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                        style={{ "width": " 15rem" }}>
                                        <img src="pics/iphone15.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Apple iPhone 13 (128GB) - Pink</h5>
                                            <p className="card-text" /> &#x20B9; <span>52,090</span>
                                        </div>
                                    </div>
                                    <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                        style={{ "width": " 15rem" }}>
                                        <img src="pics/fire-bolt-smartwatch.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">boAt Xtend Smart Watch </h5>
                                            <p className="card-text" /> &#x20B9; <span>999</span>
                                        </div>
                                    </div>
                                    <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                        style={{ "width": " 15rem" }}>
                                        <img src="pics/boult-audio-earbuds.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Boult Audio UFO </h5>
                                            <p className="card-text" /> &#x20B9; <span>1,199</span>
                                        </div>
                                    </div>
                                    <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                        style={{ "width": " 15rem" }}>
                                        <img src="pics/headphone.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Oneplus Bullets Z2 Bluetooth </h5>
                                            <p className="card-text" /> &#x20B9; <span>1,799</span>
                                        </div>
                                    </div>
                                    <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                        style={{ "width": " 15rem" }}>
                                        <img src="pics/oneplus12r.jpg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">OnePlus 12R </h5>
                                            <p className="card-text"> &#x20B9; <span>42,999</span></p>
                                        </div>
                                    </div>
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