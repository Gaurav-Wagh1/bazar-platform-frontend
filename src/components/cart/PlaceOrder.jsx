import { useNavigate } from "react-router-dom";
import "./cart.css"
import axios from "axios";

const PlaceOrder = ({ total, toggleLoading, setUpdate }) => {
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
            const data = response.orderDetail.id;
            navigate("/check", { state: data });
        } catch (error) {
            toggleLoading(false);
            if (error.response.data.error === "Invalid contact field") {
                console.log(error.response.data.message);
                setUpdate({status:true, message:"All contact fields are required!"})
            }
        }
    }
    console.log(total)
    return (
        total &&
        <div className="container-fluid cart-item" id="sticky">
            <div className="total-price p-3 d-flex flex-row justify-content-around">
                <h5>{total}/-</h5>
                <button className="btn btn-warning" onClick={handlePlaceOrder} id="placeOrder">Place order</button>
            </div>
        </div>
    );
}

export default PlaceOrder;