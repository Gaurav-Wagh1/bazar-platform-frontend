import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../../assets/css/extraOrderDetails.css"
import axios from "axios";

const ExtraOrderDetails = ({ toggleLoading }) => {

    const [orderData, setOrderData] = useState({});
    const [orderItems, setOrderItems] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const orderId = location.state;
        const fetchData = async () => {
            try {
                toggleLoading(true);
                const apiURL = `/api/v1/orders/${orderId}`;
                const axiosResponse = await axios.get(apiURL);
                const { orderDetails, orderItems, paymentResponse } = axiosResponse.data.data;
                setOrderData({ orderDetails, paymentResponse });
                setOrderItems(orderItems)
                toggleLoading(false);
            } catch (error) {
                toggleLoading(false);
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const displayProduct = (productId, productSkuId) => {
        navigate("/productdetail", { state: { productId, productSkuId } });
    }

    return (
        orderItems.length > 0 &&
        <>
            {
                orderItems.length > 1
                    ?
                    <div className="container">
                        <div className="row mt-3 bg-white rounded">
                            <div className="row px-4 py-3" >
                                <h4>Product Details</h4>
                                <hr />
                                {orderItems.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            <div onClick={() => { displayProduct(item.ProductSKU.Product.id, item.ProductSKU.id) }} className="d-flex flex-row" >
                                                <div className="hover col-md-3 d-flex flex-row justify-content-center align-items-center" >
                                                    <img id="product-image" src={item.ProductSKU.image} alt={`${item.ProductSKU.Product.name}${item.ProductSKU.variety}`} />
                                                </div>
                                                <div className="hover col-md-5 d-flex flex-column justify-content-center align-items-center">
                                                    <h5 className="justify-content-start mt-4 mt-lg-0">{item.ProductSKU.Product.name}</h5>
                                                    <h5 className="justify-content-center">{item.ProductSKU.variety}</h5><br />
                                                    <h5 className="fs-6 justify-content-end">Quantity - <strong>{item.quantity}</strong></h5>
                                                    <h5 className="fs-6 justify-content-end">Status - {orderData.orderDetails.status === "Booked" || orderData.orderDetails.status === "Delivered" ? <b className="text-success">{orderData.orderDetails.status}</b> : <b className="text-warning">{orderData.orderDetails.status}</b>}</h5>
                                                </div>
                                                <div className="hover col-md-4 d-flex flex-column align-items-center">
                                                    <h5 className="fs-6 mt-2">Price - <strong>{item.ProductSKU.price}</strong>/-</h5>
                                                    <h5 className="fs-6 my-4"><strong>Order Placed</strong> -<br /> {new Date(orderData.orderDetails.createdAt).toUTCString()} </h5>
                                                    <h5 className="fs-6 "><strong>Delivery Date</strong> -<br /> {new Date(orderData.orderDetails.deliveryTime).toUTCString()} </h5>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="row mt-3 bg-white rounded">
                            <div className="col-md-6 px-4 py-3">
                                <h4>Delivery Address</h4>
                                <hr />

                                <div className="address px-5 mt-2">
                                    <strong>{orderData.orderDetails.address.slice(0, orderData.orderDetails.address.indexOf(",") + 1)}</strong><br />
                                    {orderData.orderDetails.address.slice(orderData.orderDetails.address.indexOf(",") + 1, orderData.orderDetails.address.length)}
                                </div>

                            </div>
                            <div className="col-md-6 bg-warning px-4 py-3 rounded">
                                <h4>Payment Details</h4>
                                <hr />

                                <div className="address px-5 mt-2">
                                    <h6 className="font-weight-normal">Amount - {orderData.paymentResponse.amount}</h6>
                                    <h6 className="font-weight-bold text-success">{orderData.paymentResponse.status.toUpperCase()},</h6>
                                    <h6 className="font-weight-normal">Transaction Id - {orderData.paymentResponse.transactionId},</h6>
                                    <h6 className="font-weight-normal">Transaction date - {new Date(orderData.paymentResponse.createdAt).toUTCString()}</h6>
                                    <h6 className="font-weight-normal">Details - {orderData.paymentResponse.paymentInfo ? orderData.paymentResponse.paymentInfo : "Transaction Completed Successfully"}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <div className="row mt-3 bg-white rounded" onClick={() => displayProduct(orderItems[0].ProductSKU.Product.id, orderItems[0].ProductSKU.id)}>
                            <div className="row px-4 py-3" >
                                <h4>Product Details</h4>
                                <hr />
                                <div className="hover col-md-3 d-flex flex-row justify-content-center align-items-center">
                                    <img id="product-image" src={orderItems[0].ProductSKU.image} alt={`${orderItems[0].ProductSKU.Product.name}${orderItems[0].ProductSKU.variety}`} />
                                </div>
                                <div className="hover col-md-5 d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="justify-content-start mt-4 mt-lg-0">{orderItems[0].ProductSKU.Product.name}</h5>
                                    <h5 className="justify-content-center">{orderItems[0].ProductSKU.variety}</h5><br />
                                    <h5 className="fs-6 justify-content-md-end">Quantity - <strong>{orderItems[0].quantity}</strong></h5>
                                    <h5 className="fs-6 justify-content-end">Status - {orderData.orderDetails.status === "Booked" || orderData.orderDetails.status === "Delivered" ? <b className="text-success">{orderData.orderDetails.status}</b> : <b className="text-warning">{orderData.orderDetails.status}</b>}</h5>
                                </div>
                                <div className="hover col-md-4 d-flex flex-column align-items-center">
                                    <h5 className="fs-6 mt-2">Price - <strong>{orderItems[0].ProductSKU.price}</strong>/-</h5>
                                    <h5 className="fs-6 my-4"><b>Order Placed</b> -<br /> {new Date(orderData.orderDetails.createdAt).toUTCString()} </h5>
                                    <h5 className="fs-6 "><b>Delivery Date</b> -<br /> {new Date(orderData.orderDetails.deliveryTime).toUTCString()} </h5>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3 bg-white rounded">
                            <div className="col-md-6 px-4 py-3">
                                <h4>Delivery Address</h4>
                                <hr />
                                <div className="address px-5 mt-2">
                                    <strong>{orderData.orderDetails.address.slice(0, orderData.orderDetails.address.indexOf(",") + 1)}</strong><br />
                                    {orderData.orderDetails.address.slice(orderData.orderDetails.address.indexOf(",") + 1, orderData.orderDetails.address.length)}
                                </div>
                            </div>
                            <div className="col-md-6 bg-warning px-4 py-3 rounded">
                                <h4>Payment Details</h4>
                                <hr />

                                <div className="address px-5 mt-2">
                                    <h6 className="font-weight-normal">Amount - {orderData.paymentResponse.amount}</h6>
                                    <h6 className="font-weight-bold text-success">{orderData.paymentResponse.status.toUpperCase()},</h6>
                                    <h6 className="font-weight-normal">Transaction Id - {orderData.paymentResponse.transactionId},</h6>
                                    <h6 className="font-weight-normal">Transaction date - {new Date(orderData.paymentResponse.createdAt).toUTCString()}</h6>
                                    <h6 className="font-weight-normal">Details - {orderData.paymentResponse.paymentInfo ? orderData.paymentResponse.paymentInfo : "Transaction Completed Successfully"}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

export default ExtraOrderDetails;