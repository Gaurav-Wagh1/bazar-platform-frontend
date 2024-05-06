import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Slider = (prop) => {
    const [products, setProducts] = useState([]);
    const scrollContainerRef = useRef(null);
    const backBtnRef = useRef(null);
    const nextBtnRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const apiURL = `/api/v1/products?ids=${prop.products.join()}`;
                const axiosResponse = await axios.get(apiURL);
                const products = prop.products.map(productId => axiosResponse.data.data.find(product => product.id === productId));
                setProducts(products)
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, []);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const backBtn = backBtnRef.current;
        const nextBtn = nextBtnRef.current;

        const handleWheel = (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
            scrollContainer.style.scrollBehavior = "auto";
        };

        const handleNextClick = () => {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft += 300;
        };

        const handleBackClick = () => {
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft -= 300;
        };

        if (scrollContainer && backBtn && nextBtn) {
            // if (scrollContainer) {
            scrollContainer.addEventListener("wheel", handleWheel);
            nextBtn.addEventListener("click", handleNextClick);
            backBtn.addEventListener("click", handleBackClick);
        }

        // Cleanup
        return () => {
            if (scrollContainer && backBtn && nextBtn) {
                // if (scrollContainer) {
                scrollContainer.removeEventListener("wheel", handleWheel);
                nextBtn.removeEventListener("click", handleNextClick);
                backBtn.removeEventListener("click", handleBackClick);
            }
        };
    }, []);

    const displaySingleProduct = (productId, productSkuId) => {
        navigate("/productdetail", { state: { productId, productSkuId } })
    }

    return (
        <>
            <div className="slider-wrap " id="slider-container">
                <i className="fa-solid fa-caret-left fa-2xl d-none d-md-inline" ref={backBtnRef} id="back_btn" style={{ "color": "#1b2141" }}></i>
                <div className="slider" ref={scrollContainerRef} id="slider">
                    {products.map(product => {
                        return <div className="slide" key={product.id} onClick={() => displaySingleProduct(product.Product.id, product.id)}>
                            <div className="card card_border shadow bg-body-tertiary rounded" style={{ maxWidth: "15rem", height: "65vh" }}>
                                <img src={product.image} className="card-img-top mt-2" style={{ width: "80%", margin: "0 auto" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.Product.name} | {product.variety}</h5>
                                    {/* <p className="card-text"> */}
                                    <h3>&#8377; {product.price}</h3>
                                    <p> <span><del>&#x20B9; {+product.price + (+product.price * 0.1)}</del></span></p>
                                    {/* </p> */}
                                    {/* <button className=" mt-auto custom-btn">Buy Now</button> */}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <i className="fa-solid fa-caret-right fa-2xl d-none d-md-inline" id="next_btn" ref={nextBtnRef} style={{ "color": "#1b2141" }}></i>
            </div>
        </>
    );
}

export default Slider;