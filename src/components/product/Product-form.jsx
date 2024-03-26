import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Loader from '../loader/loader';

const ProductForm = (prop) => {
    const [productInfo, setProductInfo] = useState({ name: "", category: "", subCategory: "", variety: "", price: "", quantity: "", description: "" });
    const [productImage, setProductImage] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProductInfo({ ...productInfo, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append('name', productInfo.name);
        formData.append('category', productInfo.category);
        formData.append('subCategory', productInfo.subCategory);
        formData.append('variety', productInfo.variety);
        formData.append('price', productInfo.price);
        formData.append('quantity', productInfo.quantity);
        formData.append('description', productInfo.description);
        formData.append('image', productImage);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        try {
            const response = await axios.post("api/v1/products", formData, config);
            setLoading(false);
            console.log(response);
        } catch (error) {
            setLoading(false)
            console.log(error);
        }

    }

    return (
        <>
            {loading && <Loader />}
            <div className="container-md">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="main-container col-md-6 p-0">
                        <div className="upper p-4">
                            <h1 className=".display-4">Add Product</h1>
                            <form className="mt-4  text-center" encType="multipart/form-data">
                                <input type="text" className="p-2 d-block w-100 mt-2" name='name' value={productInfo.name} onChange={handleChange} placeholder="Name of Product" autoComplete='on' />
                                <textarea className="p-2 d-block w-100 mt-4" cols="30" name='description' value={productInfo.description} onChange={handleChange} rows="4" placeholder="Description of product" autoComplete='on'></textarea>
                                <input type='text' className="p-2 d-block w-100 mt-2" name='category' value={productInfo.category} onChange={handleChange} placeholder="Category" autoComplete='on' />
                                <input type="text" className="p-2 d-block w-100 mt-2" name='subCategory' value={productInfo.subCategory} onChange={handleChange} placeholder="Subcategory" autoComplete='on' />
                                <input type="text" className="p-2 d-block w-100 mt-2" name='variety' value={productInfo.variety} onChange={handleChange} placeholder="Variety" autoComplete='on' />
                                <input type="number" className="p-2 d-block w-100 mt-2" name='price' value={productInfo.price} onChange={handleChange} placeholder="Price" autoComplete='on' />
                                <input type="number" className="p-2 d-block w-100 mt-2" name='quantity' value={productInfo.quantity} onChange={handleChange} placeholder="Quantity" autoComplete='on' />
                                <input type="file" id='image' className="p-2 d-block w-100 mt-2" name='image' onChange={e => setProductImage(e.target.files[0])} placeholder="Image" autoComplete='on' />
                            </form>
                        </div>
                        <button className="btn btn-outline-secondary p-3 font-weight-bolder text-center w-100 text-right float-right" id="confirm" onClick={handleSubmit}>Confirm</button>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
}

export default ProductForm;