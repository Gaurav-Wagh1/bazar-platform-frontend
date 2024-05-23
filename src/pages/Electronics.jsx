import { useNavigate } from "react-router-dom/dist";
import "../assets/css/style.css"
import Slider from "../components/home.jsx/Slider";
const Electronics = () => {

    const navigate = useNavigate();

    const showCategoryProducts = (subCategory) => {
        const filter = { subcategory: subCategory };
        navigate("/search-for-products", { state: filter });
    }

    return (
        <>
            {/* <!-- slider --> */}
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

                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214124/electronicsbanner1_gu0qiw.jpg"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214123/electronicsbanner2_hezjev.png"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214127/electronicsbanner3_b63ead.jpg"} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214127/electronicsbanner4_tzoham.jpg"} className="d-block w-100" alt="..." />
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

            {/* <!-- TOP CATEGORIES --> */}
            <div className="categories">
                <div className="heading">
                    <h1>Top Category</h1>
                </div>

                <div className="top-category">
                    <div className="category text-center" onClick={() => showCategoryProducts("mobiles")}>
                        <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214249/mobile_zmvsch.jpg"} className="img-fluid float-end" style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Mobiles</h5>
                    </div>
                    <div className="category text-center" onClick={() => showCategoryProducts("laptops")}>
                        <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214302/laptop_zryxwl.jpg"} className="img-fluid" style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Laptops</h5>
                    </div>
                    <div className="category text-center" onClick={() => showCategoryProducts("tablets")}>
                        <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214346/tablet_puiaet.jpg"} className="img-fluid" style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Tablets</h5>
                    </div>
                    <div className="category text-center" onClick={() => showCategoryProducts("smartwatches")}>
                        <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214378/smartwatch2_jvqpye.avif"} className="img-fluid" style={{ "borderRadius": "7rem", "width": "25rem" }} />
                        <h5 className="title">Smartwatches</h5>
                    </div>
                    <div className="category text-center" onClick={() => showCategoryProducts("earbuds")}>
                        <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214432/headphone_nwctuv.jpg"} className="img-fluid" style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Headphones</h5>
                    </div>
                    <div className="category text-center" onClick={() => showCategoryProducts("speakers")}>
                        <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214469/speaker_x2hkdw.jpg"} className="img-fluid" style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Speakers</h5>
                    </div>
                    <div className="category text-center" onClick={() => showCategoryProducts("TechAccessories")}>
                        <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214507/computer_accesories_g9y5om.jpg"} className="img-fluid" style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Tech Accessories</h5>
                    </div>
                </div>
            </div>

            {/* <!-- ADVERTISE --> */}
            <div className="banner-2 container-fluid mb-4" onClick={() => showCategoryProducts("mobiles")}>
                <div className="" style={{ "borderRadius": "0", "border": "0px solid transparent" }}>
                    <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214564/banner-2_iqibyb.png"} className="card-img" alt="..." />
                </div>
            </div>

            {/* <!-- Prducts --> */}
            <div className="new-products">
                <div className="heading">
                    <h1>New Products</h1>
                </div>
                <Slider products={[30, 29, 74, 72, 83, 68]} />
            </div>

            {/* <!-- banner-3 --> */}
            < div className="container-fluid" >
                <div className="row text-center">
                    <div className="col-12 col-md-6 text-center">
                        <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214639/electronicsbanner5_nnnk75.png"} className="img-fluid w-100" alt="image on the left" />
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214675/headphone_rtde63.png"} className="img-fluid w-100" alt="img on the right" />
                    </div>
                </div>
            </div >

            {/* <!-- more products --> */}
            < div className="best-selling container-fluid" >
                <div className="heading">
                    <h1>Best Selling Products</h1>
                </div>
                <Slider products={[76, 67, 73, 58, 27, 75]} />
            </div >
        </>
    );
}

export default Electronics;