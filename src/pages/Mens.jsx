import { useNavigate } from "react-router-dom";
import ProductsDisplay from "../components/clothing/ProductsDisplay";

const Mens = () => {
    const navigate = useNavigate();

    const displaySubCategoryProducts = (subcategory) => {
        const filter = { category: "Men's Clothing", subcategory };
        navigate("/search-for-products", { state: filter });
    }

    const displayCategoryProducts = () => {
        const filter = { category: "Men's Clothing" };
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
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-25042024-topbanner-z2-p2-uspa-snitch-min60.jpg" className="d-block w-100" alt="..." />
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
            <div className="categories ">
                <div className="heading">
                    <h1>Top Category</h1>
                </div>
                <div className=" top-category ">
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Shirts")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216177/cat1-shirt_suuzll.webp" className="img-fluid " style={{ "borderRadius": "7rem", "height": "36vh" }} />
                        <h5 className="title">Shirts</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Tshirts")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216174/cat2-tshirt_lguhhx.webp" className="img-fluid " style={{ "borderRadius": "7rem", "height": "36vh" }} />
                        <h5 className="title">T-Shirts</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Jeans")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216168/cat3-jeans_zfw1av.webp" className="img-fluid " style={{ "borderRadius": "7rem", "height": "36vh" }} />
                        <h5 className="title">Jeans</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Suits")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216169/cat5-suits_oxeq6m.webp" className="img-fluid " style={{ "borderRadius": "7rem", "height": "36vh" }} />
                        <h5 className="title">Suits</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Ethnic")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216168/cat4-ethnic_vcy94x.webp" className="img-fluid " style={{ "borderRadius": "7rem", "height": "36vh" }} />
                        <h5 className="title">Ethnic</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Sports Wear")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216172/sportsImg_zej9ve.webp" className="img-fluid " style={{ "borderRadius": "7rem", "height": "36vh" }} />
                        <h5 className="title">Sports Wear</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Hoodies")}>
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216169/hodies_gbmt29.webp" className="img-fluid " style={{ "borderRadius": "7rem", "height": "36vh" }} />
                        <h5 className="title">Hoodies</h5>
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
                <ProductsDisplay products={[118, 90, 125 ,101, 96, 92, 119, 127]} />
                <div className="more align-items-center text-center">
                    <button className="button" onClick={displayCategoryProducts}>Explore More</button>
                </div>
            </div>
        </>
    );
}

export default Mens;