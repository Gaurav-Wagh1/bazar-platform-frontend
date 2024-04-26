import { useNavigate } from "react-router-dom";

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
                        <img src="/src/assets/images/appliances/banner1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/src/assets/images/appliances/banner2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/src/assets/images/appliances/banner3.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/src/assets/images/appliances/banner4.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/src/assets/images/appliances/banner5.png" className="d-block w-100" alt="..." />
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
                        <img src="/src/assets/images/appliances/cat8-tv.jpg" className="img-fluid " style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Television </h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Air Conditioners")}>
                        <img src="/src/assets/images/appliances/cat1-ac.jpg" className="img-fluid " style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Air Conditioner</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Refrigerators")}>
                        <img src="/src/assets/images/appliances/cat2-frigde.jpg" className="img-fluid " style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Refrigerator</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Washing Machines")}>
                        <img src="/src/assets/images/appliances/cat3-washing.jpg" className="img-fluid " style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Washing Machine</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Microwave Ovens")}>
                        <img src="/src/assets/images/appliances/cat4-oven.jpg" className="img-fluid " style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Oven</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Water Purifiers")}>
                        <img src="/src/assets/images/appliances/cat5-purifier.jpg" className="img-fluid " style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Water Purifier</h5>
                    </div>
                    <div className="category text-center" onClick={() => displaySubCategoryProducts("Air Coolers")}>
                        <img src="/src/assets/images/appliances/cat6-cooler.jpg" className="img-fluid "
                            style={{ "borderRadius": "7rem" }} />
                        <h5 className="title">Cooler</h5>
                    </div>

                </div>
            </div>

            {/* <!-- slide --> */}
            <div className="container-fluid mt-4">
                <div className="">
                    <img src="/src/assets/images/appliances/adv.png" width="100%" alt="" />
                </div>
            </div>

            {/* <!-- explore more --> */}
            <div className="mobile-all border mt-4">
                <div className="heading">
                    <h1>Explore More</h1>
                </div>
                
            </div>
        </>
    );
}

export default HomeAppliances;