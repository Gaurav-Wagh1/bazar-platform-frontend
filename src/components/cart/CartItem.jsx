import './cart.css';
import { useNavigate } from 'react-router-dom';


const CartItem = ({ quantity, price, imageURL, variety, name, cartItemId, removeCartItem, productId, productSKUId }) => {

    const navigate = useNavigate();
    const displayProduct = () => {
        navigate("/productdetail", { state: { productId, productSkuId: productSKUId } });
    }
    return (
        <div className="container-fluid cart-item" key={cartItemId}>
            <div className="row p-4 text-center position-relative">
                <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716212249/cross_mcp0az.jpg" alt="remove" onClick={() => { removeCartItem(cartItemId) }} className='position-absolute w-md-5 w-3 cross' />
                <div className="col-lg-3 col-md-3 col-12">
                    <img className="mx-0 product-img" src={imageURL} alt="product image" onClick={displayProduct} />
                </div>
                <div className="col-lg-5 col-md-12 col-12 d-flex flex-column justify-content-center" onClick={displayProduct}>
                    <h6 className='justify-content-start'>{name}</h6>
                    <br />
                    <h6 className='justify-content-center'>{variety}</h6>
                    <br />
                    <strong className='justify-content-end'>
                        Price = {price} <br />
                        Quantity = {quantity}
                    </strong>
                </div>
                <div className="col-lg-4 col-md-4 mt-md-0 mt-5 col-12 align-middle d-inline text-center d-flex flex-column justify-content-center" >
                    <p className='fs-5'><b>{price * quantity}/-</b></p>
                </div>
            </div>
        </div>
    );
}

export default CartItem;