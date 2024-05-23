import { useNavigate } from "react-router-dom";
import ProductsDisplay from "../components/clothing/ProductsDisplay";

const HomeAppliances = () => {
    const navigate = useNavigate();

    const displaySubCategoryProducts = (subcategory) => {
        const filter = { subcategory };
        navigate("/search-for-products", { state: filter });
    }

    return (
        <>
            {/* <!-- Slider --> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
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
                    <div className="carousel-item active">
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214886/banner1_ndybfr.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214890/banner2_z4cc7q.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214885/banner3_obmoit.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214885/banner4_cr8oop.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716214885/banner5_dlffdg.png" className="d-block w-100" alt="..." />
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

            {/* <!-- category -->
            <!-- TOP CATEGORIES --> */}
            <div className="categories">
                <div className="heading">
                    <h1>Top Category</h1>
                </div>

                <div className=" top-category">
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Televisions")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215024/cat8-tv_ff00v1.png" className="img-fluid " style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Television </h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Air Conditioners")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215027/cat1-ac_r7v0qk.jpg" className="img-fluid " style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Air Conditioner</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Refrigerators")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215027/cat2-frigde_szmrzq.png" className="img-fluid " style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Refrigerator</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Washing Machines")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215022/cat3-washing_ztzzzj.png" className="img-fluid " style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Washing Machine</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Microwave Ovens")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215021/cat4-oven_soa0gd.jpg" className="img-fluid " style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Oven</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Water Purifiers")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215022/cat5-purifier_aj9lkj.png" className="img-fluid " style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Water Purifier</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Air Coolers")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215022/cat6-cooler_yzcjpn.jpg" className="img-fluid "
                            style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Cooler</h5>
                    </div>

                </div>
            </div>

            {/* <!-- slide --> */}
            <div className="container-fluid mt-4">
                <div className="">
                    <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716215217/adv_ioamtj.png" width="100%" alt="" />
                </div>
            </div>

            {/* <!-- explore more --> */}
            <div className="mobile-all border mt-4">
                <div className="heading">
                    <h1>Explore More</h1>
                </div>
                <ProductsDisplay products={[139, 49,141, 134, 144, 148, 146, 138, 65 ,62, 142, 140]} />
            </div>
        </>
    );
}

export default HomeAppliances;