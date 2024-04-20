import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import "./signup.css";
import { useState } from 'react';

import informationSVG from "../../assets/images/svgs/info2m.svg";

// -----------------  UPDATING DATABASE WITH USER INFO;

const Information = (prop) => {
    const [userData, setUserData] = useState({ fullName: "", phoneNumber: "", address: "", city: "", state: "", country: "", postalCode: "" });
    const [infoError, setInfoError] = useState({ flag: false, name: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, phoneNumber, address, city, state, country, postalCode } = userData;
        if (fullName && phoneNumber && address && city && state && country && postalCode) {
            try {
                const apiURL = `/api/v1/users`;
                await axios.patch(apiURL, userData);
                prop.setUser({ ...prop.user, fullName, phoneNumber, address, city, state, country, postalCode });
                setInfoError({ flag: false, name: "Success" });
                setTimeout(() => {
                    setInfoError({ name: "", flag: false });
                    navigate("/");
                }, 1000);
            } catch (error) {
                const err = error.response.data;
                setInfoError({ flag: true, name: `${err.message}, please Sign In` });
                setTimeout(() => {
                    setInfoError({ name: "", flag: false });
                }, 3000);
            }
        }
        else {
            setInfoError({ flag: true, name: "All fields are required to be filled" });
            setTimeout(() => {
                setInfoError({ flag: false, name: "" });
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
                        <img src={informationSVG} alt="" />
                    </div>
                    <div className="main-container col-12 col-md-6 p-md-5 mt-3 mt-md-0">
                        <div className="upper p-4">
                            <h1 className="display-4" style={{ color: "#1B2141"}}>Let's know you more</h1>
                            <form className="mt-4  text-center">
                                <input type="text" className="p-2 d-block w-100 mt-2" name='fullName' value={userData.fullName} onChange={handleChange} placeholder="Full Name (First-name Last-Name format)" autoComplete='on' />
                                <input type="email" className="p-2 d-block w-100 mt-2" id='em' placeholder="Email" defaultValue={prop.user.email} readOnly disabled />
                                <input type="text" className="p-2 d-block w-100 mt-2" name='phoneNumber' value={userData.phoneNumber} onChange={handleChange} placeholder="Number" maxLength={10} autoComplete='on' />
                                <textarea className="p-2 d-block w-100 mt-4" cols="30" name='address' value={userData.address} onChange={handleChange} rows="4" placeholder="Address" autoComplete='on'></textarea>
                                <input type="text" className="p-2 d-block w-100 mt-2" name='city' value={userData.city} onChange={handleChange} placeholder="City" autoComplete='on' />
                                <input type="text" className="p-2 d-block w-100 mt-2" name='state' value={userData.state} onChange={handleChange} placeholder="State" autoComplete='on' />
                                <input type="text" className="p-2 d-block w-100 mt-2" name='country' value={userData.country} onChange={handleChange} placeholder="Country" autoComplete='on' />
                                <input type="text" className="p-2 d-block w-100 mt-2" name='postalCode' value={userData.postalCode} onChange={handleChange} placeholder="Postal Code" autoComplete='on' />
                            </form>
                        </div>
                        <button className="btn rounded btn-outline-secondary p-3 font-weight-bolder text-center w-100 text-right float-right" id="confirm" onClick={handleSubmit}>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Information;