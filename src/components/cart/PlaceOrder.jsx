import { useNavigate } from "react-router-dom";
import Check from "../Check";
import "./cart.css"

const PlaceOrder = ({ total }) => {
    const navigate = useNavigate();      

    const handlePlaceOrder = () => {
        navigate("/check");
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