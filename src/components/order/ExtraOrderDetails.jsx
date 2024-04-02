import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../../assets/css/extraOrderDetails.css"

const ExtraOrderDetails = ({ user, toggleLoading }) => {

    const [orderData, setOrderData] = useState({});
    const [orderItems, setOrderItems] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        toggleLoading(true);
        const data = location.state;
        const { orderDetailData, extraData, paymentData } = data;
        setOrderData({ orderDetailData, extraData, paymentData });
        if (data.cartOrder) {
            setOrderItems(data.orderItems);
        }
        else {
            setOrderItems([]);
        }
        toggleLoading(false);
    }, []);

    const displayProduct = (prodId = orderData.extraData.productId) => {
        const data = { productId: prodId };
        navigate("/productdetail", { state: data });
    }

    return (
        orderData.extraData &&
        <>
            {
                orderItems.length > 0
                    ?
                    <div className="container">
                        <div className="row mt-3 bg-white rounded">
                            <div className="row px-4 py-3" >
                                <h4>Product Details</h4>
                                <hr />
                                {orderItems.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            <div onClick={() => { displayProduct(item.ProductSKU.Product.id) }} className="d-flex flex-row" >
                                                <div className="hover col-md-3 d-flex flex-row justify-content-center align-items-center" >
                                                    <img id="product-image" src={item.ProductSKU.image} alt={`${item.ProductSKU.Product.name}${item.ProductSKU.variety}`} />
                                                </div>
                                                <div className="hover col-md-5 d-flex flex-column justify-content-center align-items-center">
                                                    <h5 className="justify-content-start mt-4 mt-lg-0">{item.ProductSKU.Product.name}</h5>
                                                    <h5 className="justify-content-center">{item.ProductSKU.variety}</h5><br />
                                                    <h5 className="fs-6 justify-content-end">Quantity - <strong>{item.quantity}</strong></h5>
                                                    <h5 className="fs-6 justify-content-end"><strong>Status - {orderData.orderDetailData.status}</strong></h5>
                                                </div>
                                                <div className="hover col-md-4 d-flex flex-column align-items-center">
                                                    <h5 className="fs-6 mt-2">Price - <strong>{item.ProductSKU.price}</strong>/-</h5>
                                                    <h5 className="fs-6 my-4"><strong>Order Placed</strong> -<br /> {new Date(orderData.extraData.orderedDate).toUTCString()} </h5>
                                                    <h5 className="fs-6 "><strong>Delivery Date</strong> -<br /> {new Date(orderData.orderDetailData.deliveryTime).toUTCString()} </h5>
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
                                <strong>{orderData.extraData.address.slice(0, orderData.extraData.address.indexOf(",") + 1)}</strong><br />
                                    {orderData.extraData.address.slice(orderData.extraData.address.indexOf(",") + 1, orderData.extraData.address.length)}
                                </div>

                            </div>
                            <div className="col-md-6 bg-warning px-4 py-3 rounded">
                                <h4>Payment Details</h4>
                                <hr />

                                <div className="address px-5 mt-2">
                                    <h6 className="font-weight-normal">Amount - {orderData.paymentData.amount}</h6>
                                    <h6 className="font-weight-bold text-success">{orderData.paymentData.paymentStatus.toUpperCase()},</h6>
                                    <h6 className="font-weight-normal">Transaction Id - {orderData.paymentData.transactionId},</h6>
                                    <h6 className="font-weight-normal">Transaction date - {new Date(orderData.paymentData.paymentDate).toUTCString()}</h6>
                                    <h6 className="font-weight-normal">Details - {orderData.paymentData.paymentInformation}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <div className="row mt-3 bg-white rounded" onClick={() => displayProduct(orderData.extraData.productId)}>
                            <div className="row px-4 py-3" >
                                <h4>Product Details</h4>
                                <hr />
                                <div className="hover col-md-3 d-flex flex-row justify-content-center align-items-center">
                                    <img id="product-image" src={orderData.orderDetailData.image} alt={`${orderData.orderDetailData.name}${orderData.orderDetailData.variety}`} />
                                </div>
                                <div className="hover col-md-5 d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="justify-content-start mt-4 mt-lg-0">{orderData.orderDetailData.name}</h5>
                                    <h5 className="justify-content-center">{orderData.orderDetailData.variety}</h5><br />
                                    <h5 className="fs-6 justify-content-center">{orderData.extraData.productDescription}</h5><br />
                                    <h5 className="fs-6 justify-content-end">Quantity - <strong>{orderData.extraData.quantity}</strong></h5>
                                    <h5 className="fs-6 justify-content-end"><strong>Status - {orderData.orderDetailData.status}</strong></h5>
                                </div>
                                <div className="hover col-md-4 d-flex flex-column align-items-center">
                                    <h5 className="fs-6 mt-2">Price - <strong>{orderData.extraData.price}</strong>/-</h5>
                                    <h5 className="fs-6 my-4">Order Placed -<br /> {new Date(orderData.extraData.orderedDate).toUTCString()} </h5>
                                    <h5 className="fs-6 ">Delivery Date -<br /> {new Date(orderData.orderDetailData.deliveryTime).toUTCString()} </h5>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3 bg-white rounded">
                            <div className="col-md-6 px-4 py-3">
                                <h4>Delivery Address</h4>
                                <hr />
                                <div className="address px-5 mt-2">
                                    <strong>{orderData.extraData.address.slice(0, orderData.extraData.address.indexOf(",") + 1)}</strong><br />
                                    {orderData.extraData.address.slice(orderData.extraData.address.indexOf(",") + 1, orderData.extraData.address.length)}
                                </div>
                            </div>
                            <div className="col-md-6 bg-warning px-4 py-3 rounded">
                                <h4>Payment Details</h4>
                                <hr />

                                <div className="address px-5 mt-2">
                                    <h6 className="font-weight-normal">Amount - {orderData.paymentData.amount}</h6>
                                    <h6 className="font-weight-bold text-success">{orderData.paymentData.paymentStatus.toUpperCase()},</h6>
                                    <h6 className="font-weight-normal">Transaction Id - {orderData.paymentData.transactionId},</h6>
                                    <h6 className="font-weight-normal">Transaction date - {new Date(orderData.paymentData.paymentDate).toUTCString()}</h6>
                                    <h6 className="font-weight-normal">Details - {orderData.paymentData.paymentInformation}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

export default ExtraOrderDetails;