import "../assets/css/user-style.css"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Update from "../components/authentication/update";
import OrderDetail from "../components/order/Orderdetail";
import axios from "axios";

const User = ({ user, updateUserInfo, toggleLoading }) => {
    const [update, setUpdate] = useState(false);
    const [apiResponse, setApiResponse] = useState([]);

    const navigate = useNavigate();

    const Link = ({ id, children, title }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <a href="#" className="float-right">{children}</a>
        </OverlayTrigger>
    );

    const handleUpdate = () => {
        setUpdate(true);
    }

    const displayOrders = async () => {
        try {
            toggleLoading(true);
            const apiURL = "api/v1/orders";
            const response = await axios.get(apiURL);
            setApiResponse(response.data.data);
            toggleLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {update && <Update user={user} setUpdate={setUpdate} updateUserInfo={updateUserInfo} toggleLoading={toggleLoading} />}
            {!update &&
                <div className="container p-5">
                    <div className="bg-white  user-div rounded">
                        <div className="user-name px-5 py-4">
                            <strong>{user.fullName}</strong>
                            <Link title="Update user information" className="float-right" id="t-1">
                                <i className="fa-solid fa-pen-to-square fa-xl mt-2 float-right" onClick={handleUpdate} id="edit" style={{ "color": "#1b2141" }}></i>
                            </Link>
                        </div>
                        <hr />
                        <div className="row p-4">
                            <div className="col-xl-6">
                                <div className="user-info">
                                    <span><strong>Email -</strong> {user.email} </span><br />
                                    <span><strong>Phone -</strong> {user.phoneNumber} </span>
                                </div>
                            </div>
                            <div className="col-xl-6 mt-md-2 mt-xl-0">
                                <div className="user-info">
                                    <span><strong>Address -</strong> {`${user.address} ${user.city} ${user.state} ${user.country} ${user.postalCode}`} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" onClick={displayOrders}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>Previous Orders</strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {
                                            apiResponse.map((orderDetail) => {
                                                const displayTags = orderDetail.OrderItems.map((orderItem) => {
                                                    return <OrderDetail
                                                        orderDetailData={
                                                            {
                                                                image: orderItem.ProductSKU.image,
                                                                name: orderItem.ProductSKU.Product.name,
                                                                variety: orderItem.ProductSKU.variety,
                                                                status: orderDetail.status,
                                                                deliveryTime: orderDetail.deliveryTime
                                                            }
                                                        }
                                                        extraData={
                                                            {
                                                                transactionId: orderDetail.transactionId,
                                                                total: orderDetail.total,
                                                                createdAt: orderDetail.createdAt,
                                                                quantity: orderItem.quantity,
                                                                productSKUId: orderItem.ProductSKU.id,
                                                                price: orderItem.ProductSKU.price
                                                            }
                                                        }
                                                        key={orderItem.id}
                                                    />
                                                });
                                                return displayTags;
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default User;