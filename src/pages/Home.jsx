import { useNavigate } from "react-router-dom";
import "../assets/css/style.css"

import Slider from "../components/home.jsx/Slider";
import ProductsDisplay from "../components/clothing/ProductsDisplay";

const Home = () => {

    const navigate = useNavigate();
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
                            <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215404/img2_x2n7xf.png"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215406/www.bazaar.co.uk_oo2sh1.png"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215405/img3_txh58e.png"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215405/homebanner1_awrwha.jpg"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215406/homebanner2_lwue6j.jpg"} className="d-block w-100" alt="..." />
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
                <div className="container-fluid">
                    <div className="row d-flex flex-column flex-md-row justify-content-around">
                        <div className="service-col ">
                            <div className="row align-items-center">
                                <div className="col-3 col-md-2  d-flex justify-content-center align-items-center">
                                    <i className="fa-solid fa-truck-fast fa-2xl " style={{ "color": " #1B2141" }}></i></div>
                                <div className="col-9 col-md-10 py-3 text-center">
                                    <h5>FREE SHIPPING WORLDWIDE</h5>
                                    <p>Fast delivery</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-col">
                            <div className="row align-items-center ">
                                <div className="col-3 col-md-2 py-3 d-flex justify-content-center align-items-center"><i
                                    className="fa-solid fa-headphones-simple fa-2xl" style={{ "color": " #1B2141" }}></i></div>
                                <div className="col-9 col-md-10 py-3 text-center">
                                    <h5>24/7 CUSTOMER SERVICE</h5>
                                    <p>Call us on - 91-937 456 7364</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-col">
                            <div className="row align-items-center ">
                                <div className="col-3 col-md-2 py-3 d-flex justify-content-center align-items-center"><i
                                    className="fa-solid fa-sack-dollar fa-2xl" style={{ "color": " #1B2141" }}></i></div>
                                <div className="col-9 col-md-10 py-3 text-center">
                                    <h5>MONEY BACK GUARANTEE</h5>
                                    <p>Send within 30 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Section 5 trending --> */}
            <div className="Featured container-fluid">
                <div className="heading">
                    <h1>Featured Products</h1>
                </div>
                <ProductsDisplay products={[52, 139, 65, 30]} />
            </div>

            {/* <!-- Section 6 Advertise --> */}
            <div className="banner">
                <div className="container-fluid">
                    <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215405/homebanner1_awrwha.jpg"} style={{ "width": "100%" }} alt="" />
                </div>
            </div>

            {/* <!-- Section 7 new products --> */}
            <div className="best-selling">
                <div className="heading">
                    <h1>Best Selling</h1>
                </div>
                <Slider products={[130, 99, 103, 104, 116, 98]} />
            </div>

            {/* <!-- Section 6 Advertise --> */}
            <div className="banner">
                <div className="container-fluid">
                    <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215406/homebanner2_lwue6j.jpg"} style={{ "width": "100%" }} alt="" />
                </div>
            </div>

            {/* <!-- Section 7 new products --> */}
            <div className="new-products container-fluid">
                <div className="heading">
                    <h1>New Products</h1>
                </div>
                <Slider products={[148, 63, 104, 71, 133, 98]} />
            </div>

            {/* <!-- banner --> */}
            <div className="banner container-fluid">
                <div className="row mx-2">
                    <div className="col-6 ">
                        <div className="w-100">
                            <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215620/homebanner3_m2yrit.png"} className="w-100" alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="w-100">
                            <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215715/homebanner4_adokek.png"} className="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;