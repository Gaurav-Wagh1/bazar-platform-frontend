import { useNavigate } from "react-router-dom";
import ProductsDisplay from "../components/clothing/ProductsDisplay";

const Womens = () => {
    const navigate = useNavigate();

    const displaySubCategoryProducts = (subcategory) => {
        const filter = { category: "Women's Clothing", subcategory };
        navigate("/search-for-products", { state: filter });
    }

    const showCategoryProducts = () => {
        const filter = { category: "Women's Clothing" };
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
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716213515/clothing-banner-1_i3ogc7.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716213515/clothing-banner-1_i3ogc7.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716213515/clothing-banner-1_i3ogc7.png" className="d-block w-100" alt="..." />
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

                <div className="top-category">
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Lehengas")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216586/cat7-lehenga_tb7w8k.avif" className="img-fluid " style={{ "borderRadius": "7rem", "width": "25rem", "height": "36vh" }} />
                        <h5 className="title">Lehengas</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Ethnic Wear")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216585/cat6-kurta_vyzdoy.jpg" className="img-fluid " style={{ "borderRadius": "7rem", "height": "36vh" }} />
                        <h5 className="title">Ethnic Wear</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Casual Wear")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216589/cat1-top_hcixrt.avif" className="img-fluid " style={{ "borderRadius": "7rem", "height": "36vh" }} />
                        <h5 className="title">Casual's</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Western Wear")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216590/cat2-dress_f2gfxy.avif" className="img-fluid " style={{ "borderRadius": "7rem", "height": "36vh" }} />
                        <h5 className="title">Western Wear</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Sarees")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216582/cat5-saree_xmzh2r.avif" className="img-fluid " style={{ "borderRadius": "7rem", "height": "36vh" }} />
                        <h5 className="title">Sarees</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Active Wear")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216592/cat3-jumpsuit_fcq0zs.avif" className="img-fluid " style={{ "borderRadius": "7rem", "height": "36vh" }} />
                        <h5 className="title">Active Wear</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Leggings")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216593/leggings_r2tke8.jpg" className="img-fluid " style={{ "borderRadius": "7rem", "height": "36vh" }} />
                        <h5 className="title">Leggings</h5>
                    </div>
                </div>
            </div>

            {/* <!-- slide --> */}
            < div className="container-fluid" >
                <div className="row text-center">
                    <div className="col-12 col-md-6 text-center">
                        <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216365/women-banner-4_ntbffe.png"} className="img-fluid w-100" alt="image on the left" />
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <img src={"https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216365/women-banner-4_ntbffe.png"} className="img-fluid w-100" alt="img on the right" />
                    </div>
                </div>
            </div >

            {/* <!-- explore more --> */}
            <div className="mobile-all border mt-4">
                <div className="heading">
                    <h1>Explore More</h1>
                </div>
                <ProductsDisplay products={[128, 106, 149, 131, 112, 129, 150, 117]} />
                <div className="more align-items-center text-center">
                    <button className="button " onClick={showCategoryProducts}>Explore More</button>
                </div>
            </div>
        </>
    );
}

export default Womens;