import Slider from "../components/home.jsx/Slider";
import "../assets/css/style.css"
import ProductsDisplay from "../components/clothing/ProductsDisplay";
import { Link } from "react-router-dom";

const Clothing = () => {
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
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716213515/clothing-banner-1_i3ogc7.png" style={{ "height": "50vh" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716213586/clothes_pscz7g.webp" style={{ "height": "50vh" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716213614/clothes-2_fgexte.webp" style={{ "height": "50vh" }} className="d-block w-100" alt="..." />
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
            <div className="container mt-5">
                <div className="row mx-5 mb-5 d-flex justify-content-center">
                    <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center cat">
                        <Link to="/women" className="card">
                            <div className="cat-btn">
                                <button className="border left" style={{ "borderRadius": " 3rem" }}>Women</button>
                            </div>
                            <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716213726/cloth-b4_fnli73.jpg" width="100%" height="100%" />
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center cat">
                        <Link to="/men" className="card">
                            <div className="cat-btn">
                                <button className="border right" style={{ "borderRadius": " 3rem" }}>Men</button>
                            </div>
                            <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716213780/cloth9_bieptv.jpg" width="100%" height="100%" />
                        </Link>
                    </div>
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
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716213862/cloth-bammer2_ru39nz.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716213861/cloth-bammer3_wgdcs4.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716213861/cloth-bammer4_zumhdn.png" className="d-block w-100" alt="..." />
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
                    <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716213515/clothing-banner-1_i3ogc7.png" style={{ width: "100%" }} alt="" />
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