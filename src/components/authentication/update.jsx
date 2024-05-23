import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import "./signup.css";
import { useState } from 'react';

// -----------------  UPDATING DATABASE WITH USER INFO;

const Update = (prop) => {
    const [userData, setUserData] = useState({});
    const [infoError, setInfoError] = useState({ flag: false, name: "" });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        prop.toggleLoading(true);
        try {
            const apiURL = `/api/v1/users`;
            const response = await axios.patch(apiURL, userData);
            const updatedUserInformation = response.data.data;
            prop.updateUserInfo(updatedUserInformation);
            setUserData({});
            prop.toggleLoading(false);
            setInfoError({ flag: false, name: "Success" });
            setTimeout(() => {
                setInfoError({ name: "", flag: false });
                if(prop.from == "single-product"){
                    navigate("/productdetail");
                    return;
                }
                if (prop.message) {
                    navigate("/cart");
                    return;
                }
                else {
                    navigate("/user");
                    return;
                }
            }, 1000);
            prop.setUpdate({ status: false, message: "" });
        } catch (error) {
            prop.toggleLoading(false);
            console.log(error);
            const err = error.response.data;
            setInfoError({ flag: true, name: `${err.message}, please Sign In` });
            setTimeout(() => {
                setInfoError({ name: "", flag: false });
            }, 3000);
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    }

    return (
        <>
            {/* for displaying errors */}
            {(infoError.flag && infoError.name) &&
                (
                    <div className="alert alert-warning alert-dismissible bg-light text-danger " role="alert">
                        <strong>Error Occured! </strong>{infoError.name}
                        <button type="button" onClick={() => setInfoError({ flag: false, name: "" })} className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }

            {(!infoError.flag && infoError.name === "Success") &&
                (
                    <div className="alert alert-success alert-dismissible" role="alert">
                        <strong>Horrey! 🎇 </strong>You have successfully signed up.
                        <button type="button" onClick={() => setInfoError({ flag: false, name: "" })} className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }

            <div className="container-fluid bg-white pb-3 pb-md-0 py-md-5">
                <div className="row">
                <div className="col-12 col-md-6">
                        <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716450035/info2m_hbhivl.svg" alt="" />
                    </div>
                    <div className="main-container col-12 col-md-6 p-md-5 mt-3 mt-md-0">
                        <div className="upper p-4">
                            <h1 className=".display-4">Update information</h1>
                            <h6 className='text-danger'>{prop.message ? prop.message : "Update those details only which you want to update"}</h6>
                            <form className="mt-4  text-center">
                                <input type="text" className="p-2 d-block w-100 mt-2" name='fullName' defaultValue={prop.user.fullName} value={userData.fullName} onChange={handleChange} placeholder="Full Name (First-name Last-Name format)" autoComplete='on' />
                                <input type="email" className=" .form-control-plaintext p-2 d-block w-100 mt-2 float-left" id='em' placeholder="Email" defaultValue={prop.user.email} readOnly />
                                <input type="text" className="p-2 d-block w-100 mt-2" name='phoneNumber' defaultValue={prop.user.phoneNumber} value={userData.phoneNumber} onChange={handleChange} placeholder="Number" maxLength={10} autoComplete='on' />
                                <textarea className="p-2 d-block w-100 mt-4" cols="30" name='address' defaultValue={prop.user.address} value={userData.address} onChange={handleChange} rows="4" placeholder="Address" autoComplete='on'></textarea>
                                <input type="text" className="p-2 d-block w-100 mt-2" name='city' defaultValue={prop.user.city} value={userData.city} onChange={handleChange} placeholder="City" autoComplete='on' />
                                <input type="text" className="p-2 d-block w-100 mt-2" name='state' defaultValue={prop.user.state} value={userData.state} onChange={handleChange} placeholder="State" autoComplete='on' />
                                <input type="text" className="p-2 d-block w-100 mt-2" name='country' defaultValue={prop.user.country} value={userData.country} onChange={handleChange} placeholder="Country" autoComplete='on' />
                                <input type="text" className="p-2 d-block w-100 mt-2" name='postalCode' defaultValue={prop.user.postalCode} value={userData.postalCode} onChange={handleChange} placeholder="Postal Code" autoComplete='on' />
                            </form>
                        </div>
                        <button className="btn btn-outline-secondary p-3 font-weight-bolder w-50 text-left" id="sign-in" onClick={() => { prop.setUpdate(false) }}>Cancel</button>
                        <button className="btn btn-outline-secondary p-3 font-weight-bolder w-50 text-right float-right" id="confirm" onClick={handleSubmit}>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Update;