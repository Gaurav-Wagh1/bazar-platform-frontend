import '../components/cart/cart.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import CartItem from "../components/cart/CartItem";
import Final from '../components/cart/Final';
import PlaceOrder from '../components/cart/PlaceOrder';

const Cart = ({ toggleLoading }) => {
    const [finalData, setFinalData] = useState({ total: 0, quantity: 0 });
    const [notification, setNotification] = useState({ status: false, message: "" });
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                toggleLoading(true);
                const apiURL = "/api/v1/carts";
                const response = await axios.get(apiURL);
                const apiCartItems = response.data.data.CartItems;
                setCartItems(apiCartItems);
                let quantity = 0;
                apiCartItems.forEach((cartItem) => {
                    quantity += cartItem.quantity;
                });
                setFinalData({ total: response.data.data.total, quantity: quantity });
                toggleLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCart();
    }, []);

    const removeCartItem = async (cartItemId) => {
        toggleLoading(true);
        try {
            const apiURL = `/api/v1/carts/${cartItemId}`;
            const response = await axios.delete(apiURL);
            const apiCartItems = response.data.data.CartItems;
            setCartItems(apiCartItems);
            let quantity = 0;
            apiCartItems.forEach((cartItem) => {
                quantity += cartItem.quantity;
            });
            setFinalData({ total: response.data.data.total, quantity: quantity });
            toggleLoading(false);
            setNotification({ status: true, message: response.data.message });
            setTimeout(() => {
                setNotification({ status: false, message: "" });
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {notification.status &&
                (
                    <div className="alert alert-success alert-dismissible" role="alert">
                        <strong>{notification.message}</strong>
                        <button type="button" onClick={() => setIsLoggedOut({ status: false, info: "" })} className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }

            (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-2"></div>
                    <div className="col-lg-8 col-md-8 col-12">
                        <div className="main-container">
                            <h3 className='p-2 mx-3'>Shopping Cart </h3>
                            {cartItems.length
                                ?
                                cartItems.map((apiCartItem) => {
                                    return <CartItem quantity={apiCartItem.quantity} price={apiCartItem.ProductSKU.price} imageURL={apiCartItem.ProductSKU.image} variety={apiCartItem.ProductSKU.variety} name={apiCartItem.ProductSKU.Product.name} key={apiCartItem.id} removeCartItem={removeCartItem} cartItemId={apiCartItem.id} productId={apiCartItem.ProductSKU.Product.id} />
                                })
                                :
                                <>
                                    <hr />
                                    <p className='fs-5 text-center'>Cart is empty...</p>
                                </>
                            }
                            <Final total={finalData.total} quantity={finalData.quantity} />
                            {cartItems.length &&
                                <PlaceOrder total={finalData.total} />
                            }
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-2"></div>
                </div>
            </div>
            )

        </>
    );
}

export default Cart;