import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Check = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            const data = location.state;
            navigate("/extraorderdetails", { state: data })
        }, 5000);
    });

    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-white" id="check-container" style={{ height: "80vh" }}>
            <dotlottie-player src="https://lottie.host/5ced6d19-a2c0-4577-83ef-4be4e5b40785/gdPfZRQRQn.json" background="transparent" speed="1" style={{ "width": "300px", "height": "300px" }} direction="1" playMode="normal" autoplay></dotlottie-player>
            {
                <h1 className="text-success">Success</h1>
            }
        </div>
    );
}

export default Check;