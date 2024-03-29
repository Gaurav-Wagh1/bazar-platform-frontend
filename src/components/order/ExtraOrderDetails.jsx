import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ExtraOrderDetails = ({ user, toggleLoading }) => {

    const [orderData, setOrderData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        toggleLoading(true);
        const data = location.state;
        setOrderData(data);
        toggleLoading(false);
    }, []);

    const displayProduct = () => {
        const data = { productId: orderData.extraData.productId };
        navigate("/productdetail", { state: data });
    }

    return (
        <>
            {orderData.extraData &&
                <div className="container">
                    <div className="row mt-3 bg-white rounded" onClick={displayProduct}>
                        <div className="row px-4 py-3" >
                            <h4>Product Details</h4>
                            <hr />
                            <div className="col-md-3 d-flex flex-row justify-content-center align-items-center">
                                <img id="product-image" src={orderData.orderDetailData.image} alt={`${orderData.orderDetailData.name}${orderData.orderDetailData.variety}`} />
                            </div>
                            <div className="col-md-5 d-flex flex-column justify-content-center align-items-center">
                                <h5 className="justify-content-start mt-4 mt-lg-0">{orderData.orderDetailData.name}</h5>
                                <h5 className="justify-content-center">{orderData.orderDetailData.variety}</h5><br />
                                <h5 className="fs-6 justify-content-center">{orderData.extraData.productDescription}</h5><br />
                                <h5 className="fs-6 justify-content-end">Quantity - <strong>{orderData.extraData.quantity}</strong></h5>
                            </div>
                            <div className="col-md-4 d-flex flex-column align-items-center">
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
                                <h5 className="font-weight-bold">{user.fullName}</h5>
                                <h6 className="font-weight-normal">{user.address},</h6>
                                <h6 className="font-weight-normal">{user.city},{user.state},</h6>
                                <h6 className="font-weight-normal">{user.country},{user.postalCode}</h6>
                                <h6 className="font-weight-normal">{user.phoneNumber}</h6>
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
                </div>}
        </>
    );
}

export default ExtraOrderDetails;