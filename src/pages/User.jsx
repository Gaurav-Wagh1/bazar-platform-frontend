import "../assets/css/style.css"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Update from "../components/authentication/update";

const User = ({ user, updateUserInfo, toggleLoading }) => {
    const [update, setUpdate] = useState(false);
    const navigate = useNavigate();

    const Link = ({ id, children, title }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <a href="#" className="float-right">{children}</a>
        </OverlayTrigger>
    );

    const handleUpdate = () => {
        setUpdate(true);
    }

    return (
        <>
            {update && <Update user={user} setUpdate={setUpdate} updateUserInfo={updateUserInfo} toggleLoading={toggleLoading}/>}
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
                            <div className="col-6">
                                <div className="user-info">
                                    <span><strong>Email -</strong> {user.email} </span><br />
                                    <span><strong>Phone -</strong> {user.phoneNumber} </span>
                                </div>
                            </div>
                            <div className="col-6 ">
                                <div className="user-info">
                                    <span><strong>Address -</strong> {`${user.address} ${user.city} ${user.state} ${user.country} ${user.postalCode}`} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* <div className="col-1"></div> */}
                        {/* <div className="col-10"> */}
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>Previous Orders</strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* <div className="col-1"></div> */}
                    </div>
                </div>
            }
        </>
    );
}

export default User;