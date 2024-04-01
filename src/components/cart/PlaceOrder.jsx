import { useNavigate } from "react-router-dom";
import "./cart.css"
import axios from "axios";

const PlaceOrder = ({ total, toggleLoading }) => {
    const navigate = useNavigate();

    const handlePlaceOrder = async () => {
        toggleLoading(true);
        try {
            const apiURL = "/api/v1/bookings/cart"
            const axiosResponse = await axios.post(apiURL);
            setTimeout(() => {

            }, 5000);
            toggleLoading(false);
            const response = axiosResponse.data.data;
            const data = {
                orderDetailData: {
                    deliveryTime: response.orderDetail.deliveryTime
                },
                extraData: {
                    orderedDate: response.orderDetail.createdAt,
                },
                paymentData: {
                    transactionId: response.paymentResponse.transactionId,
                    paymentStatus: response.paymentResponse.status,
                    amount: response.paymentResponse.amount,
                    paymentInformation: response.paymentResponse.paymentInfo,
                    paymentDate: response.paymentResponse.createdAt,
                },
                orderItems: response.orderItems,
                cartOrder: true
            };
            navigate("/check", { state: data });
        } catch (error) {
            toggleLoading(false);
            console.log(error);
        }
    }

    return (
        <div className="container-fluid cart-item" id="sticky">
            <div className="total-price p-3 d-flex flex-row justify-content-around">
                <h5>{total}/-</h5>
                <button className="btn btn-warning" onClick={handlePlaceOrder} id="placeOrder">Place order</button>
            </div>
        </div>
    );
}

export default PlaceOrder;