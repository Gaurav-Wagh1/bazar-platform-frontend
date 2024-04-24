import Slider from "../components/home.jsx/Slider";
import "../assets/css/style.css"
import ProductsDisplay from "../components/clothing/ProductsDisplay";
import { useNavigate } from "react-router-dom";

const Clothing = () => {
    const navigate = useNavigate();
    const showCategoryProducts = (category) => {
        const filter = { category };
        navigate("/search-for-products", { state: filter });
    }

    return (
        <div className="mt-3">

            {/* <!-- Slider --> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/src/assets/images/clothing-banner-1.png" style={{ "height": "45vh" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/src/assets/images/clothes.webp" style={{ "height": "45vh" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/src/assets/images/clothes-2.webp" style={{ "height": "45vh" }} className="d-block w-100" alt="..." />
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

            {/* <!-- category --> */}
            <div className="cloth-category container-fluid border">
                <div className="row justify-content-around">
                    <div className="heading text-center">
                        <h1>Top Category</h1>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-12 col-lg-4 mt-3 d-flex justify-content-center catlog" onClick={() => showCategoryProducts("Women's Clothing")}>
                        <div id="carouselExample1" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                            <div className="carousel-inner">
                                <div className="carousel-item active" style={{ height: "60vh" }}>
                                    <img src="/src/assets/images/cloth-b1.jpg" className="d-block w-100" alt="Clothing 1" />
                                </div>
                                <div className="carousel-item" style={{ height: "60vh" }}>
                                    <img src="/src/assets/images/cloth-b8.jpg" className="d-block w-100" alt="Clothing 2" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample1"
                                data-bs-slide="prev">
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample1"
                                data-bs-slide="next">
                                <span className="visually-hidden">Next</span>
                            </button>
                            <div className="title text-center">
                                <h3>Women</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-1"></div>
                    <div className="col-12 col-lg-4 mt-3 d-flex justify-content-center catlog" onClick={() => showCategoryProducts("Men's Clothing")}>
                        <div id="carouselExample2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                            <div className="carousel-inner">
                                <div className="carousel-item active" style={{ height: "60vh" }}>
                                    <img src="/src/assets/images/cloth-b6.jpg" className="d-block w-100" alt="Clothing 3" />
                                </div>
                                <div className="carousel-item" style={{ height: "60vh" }}>
                                    <img src="/src/assets/images/cloth-b2.jpg" className="d-block w-100" alt="Clothing 4" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2"
                                data-bs-slide="prev">
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2"
                                data-bs-slide="next">
                                <span className="visually-hidden">Next</span>
                            </button>
                            <div className="title text-center">
                                <h3>Men</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>

            {/* <!-- slider2 --> */}
            <div id="carouselExampleIndicators1" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/src/assets/images/cloth-bammer2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/src/assets/images/cloth-bammer3.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/src/assets/images/cloth-bammer4.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* <!-- new products --> */}
            <div className="new-products container-fluid">
                <div className="heading">
                    <h1>New Products</h1>
                </div>
                <Slider products={[103, 99, 104, 116, 109, 98]} />
            </div>

            {/* <!-- adv --> */}
            <div className="container-fluid mb-5">
                <div className="">
                    <img src="/src/assets/images/clothing-banner-1.png" style={{ width: "100%" }} alt="" />
                </div>
            </div>

            {/* <!-- mobile and accesrories --> */}
            <div className="mobile-all container-fluid">
                <div className="heading">
                    <h1>Explore More</h1>
                </div>
                <ProductsDisplay products={[107, 101, 106, 95, 90, 105, 108, 91]} />
            </div>
        </div>
    );
}

export default Clothing;