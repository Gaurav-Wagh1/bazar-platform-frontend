import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsDisplay = (prop) => {
    const [products, setProducts] = useState([]);
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

    const displaySingleProduct = (productId, productSkuId) => {
        navigate("/productdetail", { state: { productId, productSkuId } })
    }

    return (
        <div className="product-list" id="product-list">
            <div className="row mx-4 align-items-center">
                {products.map(product => {
                    return <div className="col-12 col-sm-6 col-md-4 col-lg-3 product d-flex justify-content-center" key={product.id} onClick={() => displaySingleProduct(product.Product.id, product.id)}>
                        <div className="card card_border shadow mb-5 bg-body-tertiary rounded" style={{ "width": "17rem", "height": "400px" }}>
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {product.Product.name} | {product.variety}
                                </h5>
                                {/* <p className="card-text" /> */}
                                {/* <p></p> */}
                                <h3>&#8377;  {product.price}</h3>
                                <p> <span><del>&#x20B9; {+product.price + (+product.price * 0.1)}</del></span></p>
                                {/* <button className=" mt-auto custom-btn">Buy Now</button> */}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default ProductsDisplay;