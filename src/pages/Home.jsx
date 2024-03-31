import { useNavigate } from "react-router-dom";
import "../assets/css/style.css"

const Home = () => {

    const navigate = useNavigate();
    const displayProduct = (prodId) => {
        const data = { productId: prodId };
        navigate("/productdetail", { state: data });
    }

    return (
        <>
            {/* <!-- section 3 slider --> */}
            <div className="slider-1 py-3">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                            aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src={"src/assets/images/img2.png"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <img src={"src/assets/images/www.bazaar.co.uk.png"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"src/assets/images/img3.png"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"src/assets/images/homebanner1.jpg"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"src/assets/images/homebanner2.jpg"} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* <!-- Section 4 service info --> */}
            <div className="service-info">
                <div className="container-fliud text-center justify-content-evenly">
                    <div className="row align-items-center mb-4 mx-4">
                        <div className="col-md mx-3 service-col">
                            <div className="row align-items-center">
                                <div className="col-3 col-md-2  d-flex justify-content-center align-items-center">
                                    <i className="fa-solid fa-truck-fast fa-2xl " style={{ "color": " #1B2141" }}></i></div>
                                <div className="col-9 col-md-10 py-3">
                                    <h5>FREE SHIPPING WORLDWIDE</h5>
                                    <p>Fast delivery</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md mx-3 service-col">
                            <div className="row align-items-center ">
                                <div className="col-3 col-md-2 py-3 d-flex justify-content-center align-items-center"><i
                                    className="fa-solid fa-headphones-simple fa-2xl" style={{ "color": " #1B2141" }}></i></div>
                                <div className="col-9 col-md-10 py-3">
                                    <h5>24/7 CUSTOMER SERVICE</h5>
                                    <p>Call us on - 91-937 456 7364</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md mx-3 service-col">
                            <div className="row align-items-center ">
                                <div className="col-3 col-md-2 py-3 d-flex justify-content-center align-items-center"><i
                                    className="fa-solid fa-sack-dollar fa-2xl" style={{ "color": " #1B2141" }}></i></div>
                                <div className="col-9 col-md-10 py-3">
                                    <h5>MONEY BACK GUARANTEE</h5>
                                    <p>Send within 30 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Section 5 trending --> */}
            <div className="Featured container-fliud">
                <div className="heading">
                    <h1>Featured Products</h1>
                </div>
                <div id="carouselExampleControls" className="carousel slide" >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card-wrapper">
                                <div onClick={() => { displayProduct(29) }} className="hover card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/iphone15.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Apple iPhone 13 (128GB) - Pink</h5>
                                        <p className="card-text" /> &#x20B9; <span>52,090</span>
                                    </div>
                                </div>
                                <div onClick={() => { displayProduct(30) }} className="hover card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/fire-bolt-smartwatch.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">boAt Xtend Smart Watch </h5>
                                        <p className="card-text" /> &#x20B9; <span>999</span>
                                    </div>
                                </div>
                                <div onClick={() => { displayProduct(31) }} className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/boult-audio-earbuds.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Boult Audio UFO </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,199</span>
                                    </div>
                                </div>
                                <div onClick={() => { displayProduct(32) }} className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/headphone.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Oneplus Bullets Z2 Bluetooth </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,799</span>
                                    </div>
                                </div>
                                <div onClick={() => { displayProduct(26) }} className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/oneplus12r.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">OnePlus 12</h5>
                                        <p className="card-text mt-5"> &#x20B9; <span>64,099</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper ">
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/iphone15.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Apple iPhone 13 (128GB) - Pink</h5>
                                        <p className="card-text" /> &#x20B9; <span>52,090</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/fire-bolt-smartwatch.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">boAt Xtend Smart Watch </h5>
                                        <p className="card-text" /> &#x20B9; <span>999</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/boult-audio-earbuds.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Boult Audio UFO </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,199</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/headphone.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Oneplus Bullets Z2 Bluetooth </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,799</span>
                                    </div>
                                </div>
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/oneplus12r.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">OnePlus 12</h5>
                                        <p className="card-text mt-5"> &#x20B9; <span>64,099</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper ">
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/iphone15.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Apple iPhone 13 (128GB) - Pink</h5>
                                        <p className="card-text" /> &#x20B9; <span>52,090</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/fire-bolt-smartwatch.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">boAt Xtend Smart Watch </h5>
                                        <p className="card-text" /> &#x20B9; <span>999</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/boult-audio-earbuds.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Boult Audio UFO </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,199</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/headphone.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Oneplus Bullets Z2 Bluetooth </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,799</span>
                                    </div>
                                </div>
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/oneplus12r.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">OnePlus 12</h5>
                                        <p className="card-text mt-5"> &#x20B9; <span>64,099</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <i className="fa-solid fa-square-caret-left fa-2xl " style={{ "color": "#000000" }}></i>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <i className="fa-solid fa-square-caret-right fa-2xl " style={{ "color": "#000000" }}></i>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            {/* <!-- Section 6 Advertise --> */}
            <div className="banner">
                <div className="card">
                    <img src={"src/assets/images/homebanner1.jpg"} alt="" />
                </div>
            </div>

            {/* <!-- Section 7 new products --> */}
            <div className="best-selling container-fliud">
                <div className="heading">
                    <h1>Best Selling Products</h1>
                </div>
                <div id="carouselExampleControls1" className="carousel slide" >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card-wrapper ">
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/iphone15.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Apple iPhone 13 (128GB) - Pink</h5>
                                        <p className="card-text" /> &#x20B9; <span>52,090</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/fire-bolt-smartwatch.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">boAt Xtend Smart Watch </h5>
                                        <p className="card-text" /> &#x20B9; <span>999</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/boult-audio-earbuds.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Boult Audio UFO </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,199</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/headphone.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Oneplus Bullets Z2 Bluetooth </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,799</span>
                                    </div>
                                </div>
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/oneplus12r.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">OnePlus 12</h5>
                                        <p className="card-text mt-5"> &#x20B9; <span>64,099</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper ">
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/iphone15.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Apple iPhone 13 (128GB) - Pink</h5>
                                        <p className="card-text" /> &#x20B9; <span>52,090</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/fire-bolt-smartwatch.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">boAt Xtend Smart Watch </h5>
                                        <p className="card-text" /> &#x20B9; <span>999</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/boult-audio-earbuds.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Boult Audio UFO </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,199</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/headphone.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Oneplus Bullets Z2 Bluetooth </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,799</span>
                                    </div>
                                </div>
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/oneplus12r.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">OnePlus 12</h5>
                                        <p className="card-text mt-5"> &#x20B9; <span>64,099</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper ">
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/iphone15.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Apple iPhone 13 (128GB) - Pink</h5>
                                        <p className="card-text" /> &#x20B9; <span>52,090</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/fire-bolt-smartwatch.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">boAt Xtend Smart Watch </h5>
                                        <p className="card-text" /> &#x20B9; <span>999</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/boult-audio-earbuds.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Boult Audio UFO </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,199</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/headphone.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Oneplus Bullets Z2 Bluetooth </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,799</span>
                                    </div>
                                </div>
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/oneplus12r.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">OnePlus 12</h5>
                                        <p className="card-text mt-5"> &#x20B9; <span>64,099</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                        <i className="fa-solid fa-square-caret-left fa-2xl " style={{ "color": "#000000" }}></i>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                        <i className="fa-solid fa-square-caret-right fa-2xl " style={{ "color": "#000000" }}></i>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>


            {/* <!-- Section 6 Advertise --> */}
            <div className="banner">
                <div className="card">
                    <img src={"src/assets/images/homebanner2.jpg"} alt="" />
                </div>
            </div>

            {/* <!-- Section 7 new products --> */}
            <div className="new-products container-fliud">
                <div className="heading">
                    <h1>New Products</h1>
                </div>
                <div id="carouselExampleControls2" className="carousel slide" >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card-wrapper ">
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/iphone15.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Apple iPhone 13 (128GB) - Pink</h5>
                                        <p className="card-text" /> &#x20B9; <span>52,090</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/fire-bolt-smartwatch.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">boAt Xtend Smart Watch </h5>
                                        <p className="card-text" /> &#x20B9; <span>999</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/boult-audio-earbuds.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Boult Audio UFO </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,199</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/headphone.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Oneplus Bullets Z2 Bluetooth </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,799</span>
                                    </div>
                                </div>
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/oneplus12r.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">OnePlus 12</h5>
                                        <p className="card-text mt-5"> &#x20B9; <span>64,099</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper ">
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/iphone15.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Apple iPhone 13 (128GB) - Pink</h5>
                                        <p className="card-text" /> &#x20B9; <span>52,090</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/fire-bolt-smartwatch.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">boAt Xtend Smart Watch </h5>
                                        <p className="card-text" /> &#x20B9; <span>999</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/boult-audio-earbuds.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Boult Audio UFO </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,199</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/headphone.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Oneplus Bullets Z2 Bluetooth </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,799</span>
                                    </div>
                                </div>
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/oneplus12r.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">OnePlus 12</h5>
                                        <p className="card-text mt-5"> &#x20B9; <span>64,099</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper ">
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/iphone15.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Apple iPhone 13 (128GB) - Pink</h5>
                                        <p className="card-text" /> &#x20B9; <span>52,090</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/fire-bolt-smartwatch.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">boAt Xtend Smart Watch </h5>
                                        <p className="card-text" /> &#x20B9; <span>999</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/boult-audio-earbuds.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Boult Audio UFO </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,199</span>
                                    </div>
                                </div>
                                <div className="card mx-1  card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/headphone.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Oneplus Bullets Z2 Bluetooth </h5>
                                        <p className="card-text" /> &#x20B9; <span>1,799</span>
                                    </div>
                                </div>
                                <div className="card mx-1 card_border shadow mb-5 bg-body-tertiary rounded"
                                    style={{ "width": "15rem" }}>
                                    <img src={"src/assets/images/oneplus12r.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">OnePlus 12</h5>
                                        <p className="card-text mt-5"> &#x20B9; <span>64,099</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                        <i className="fa-solid fa-square-caret-left fa-2xl " style={{ "color": "#000000" }}></i>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                        <i className="fa-solid fa-square-caret-right fa-2xl " style={{ "color": "#000000" }}></i>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>


            {/* <!-- banner --> */}
            <div className="banner container-fliud">
                <div className="row mx-2">
                    <div className="col-6 ">
                        <div className="card">
                            <img src={"src/assets/images/homebanner3.png"} alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <img src={"src/assets/images/homebanner4.png"} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;