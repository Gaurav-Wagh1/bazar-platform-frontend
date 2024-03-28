import { useNavigate } from "react-router-dom";
import "../../assets/css/order-detail.css"
const OrderDetail = ({ orderDetailData, extraData, paymentData, cartOrder }) => {

    const navigate = useNavigate();

    const displayMoreDetails = () => {
        if(cartOrder){
            displayMoreCartOrderDetails();
            return;
        }
        const data = { orderDetailData, extraData, paymentData };
        navigate("/extraorderdetails", { state: data });
    }

    const displayMoreCartOrderDetails = () => {
        alert("cart order")
    }

    return (
        <>
            <div className="container-fluid order-container my-2 p-2">
                <div className="row" onClick={displayMoreDetails}>
                    <div className="col-md-3 d-flex flex-row justify-content-center align-items-center">
                        <img id="product-image" src={orderDetailData.image} alt={`${orderDetailData.name}${orderDetailData.variety}`} />
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-center align-items-center">
                        <h5 className="fs-6 justify-content-start">{orderDetailData.name}</h5>
                        <h5 className="fs-6 justify-content-center">{orderDetailData.variety}</h5><br />
                        <h5 className="fs-6 justify-content-end">Status - {orderDetailData.status === "Booked" ? <b className="text-success">{orderDetailData.status}</b> : <b className="text-warning">{orderDetailData.status}</b>}</h5>
                    </div>
                    <div className="col-md-4 d-flex flex-row justify-content-center align-items-center">
                        <h5 className="fs-6">Delivery Date - {new Date(orderDetailData.deliveryTime).toLocaleDateString()} </h5>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default OrderDetail;