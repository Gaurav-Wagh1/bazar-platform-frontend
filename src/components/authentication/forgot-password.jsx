import axios from 'axios';
import "./signup.css"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

import forgotPasswordSVG from "../../assets/images/svgs/forgot-password.svg"

const ForgotPassword = (prop) => {
    const [userData, setUserData] = useState({ email: "", password: "", confirmPassword: "", verificationCode: "", otpSent: false });
    const [forgetError, setForgetError] = useState({ flag: false, name: "", description: "" });

    const navigate = useNavigate();

    const handleCreate = async () => {
        navigate('/signup');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userData.email) {
            try {
                if (userData.otpSent) {
                    if (!userData.password || !userData.confirmPassword) {
                        setForgetError({ flag: true, name: "Password and Confirm Password fields cannot be empty!" });
                        setTimeout(() => {
                            setForgetError({ name: "", flag: false, description: "" });
                        }, 3000);
                        return;
                    }
                    if (userData.password !== userData.confirmPassword) {
                        setForgetError({ flag: true, name: "Password and confirm password should be same", description: "" });
                        setTimeout(() => {
                            setForgetError({ name: "", flag: false, description: "" });
                        }, 3000);
                        return;
                    }
                    const apiUrl = `api/v1/updatepassword/${prop.user.id}`;
                    const response = await axios.patch(apiUrl, {
                        verificationCode: userData.verificationCode,
                        password: userData.password
                    });
                    if (response.data.success) {
                        setForgetError({ flag: false, name: "Success", description: response.data.message });
                        setTimeout(() => {
                            setForgetError({ name: "", flag: false, description: "" });
                            navigate("/");
                        }, 1500);
                    }
                    return;
                }
                const apiUrl = `/api/v1/forgetpassword`;
                const response = await axios.post(apiUrl, {
                    email: userData.email
                });
                prop.setUser({ ...prop.user, id: response.data.data, email: userData.email });
                setUserData({ ...userData, otpSent: true });
                setForgetError({ flag: false, name: "Success", description: "Verification Code is sent on your email" });
                setTimeout(() => {
                    setForgetError({ name: "", flag: false, description: "" });
                }, 1000);
            } catch (error) {
                const err = error.response.data.message;
                setForgetError({ flag: true, name: err });
                setTimeout(() => {
                    setForgetError({ name: "", flag: false, description: "" });
                }, 3000);
            }
        }
        else {
            setForgetError({ flag: true, name: "All fields are mandatory" });
            setTimeout(() => {
                setForgetError({ name: "", flag: false });
            }, 3000);
            return;
        }
    }

    const handleChange = (e) => {
        const key = e.target.name;
        setUserData({ ...userData, [key]: e.target.value });
    }

    return (
        <>
            {(forgetError.flag && forgetError.name) &&
                (
                    <div className="alert alert-warning alert-dismissible bg-light text-danger " role="alert">
                        <strong>Error Occured! </strong>{forgetError.name}
                        <button type="button" onClick={() => setForgetError({ name: "", description: "", flag: false })} className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }

            {(!forgetError.flag && forgetError.name === "Success") &&
                (
                    <div className="alert alert-success alert-dismissible" role="alert">
                        <strong>Horrey! 🎇 </strong>{forgetError.description}
                        <button type="button" onClick={() => setForgetError({ name: "", description: "", flag: false })} className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }

            <div className="container-fluid bg-white pb-3 pb-md-0 py-md-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={forgotPasswordSVG} className='w-100' alt="" />
                    </div>
                    <div className="main-container col-12 col-md-6 p-md-5 mt-3 mt-md-0">
                        <div className="upper">
                            <h1 className="display-4">Forgot Password</h1>
                            <form className="mt-4 mb-4 text-center">
                                <input type="text" className="p-2 d-block w-100 my-2" placeholder="Enter Your Email" name="email" value={userData.email} onChange={handleChange} readOnly={userData.otpSent ? true : false} autoComplete="true" />
                                {userData.otpSent ?
                                    <>
                                        <input type="number" name='verificationCode' className="p-2 d-block w-100 mt-2" value={userData.verificationCode} onChange={handleChange} placeholder="Enter Verification Code" autoComplete='on' max={999999} />
                                        <input type="password" name='password' className="p-2 d-block w-100 mt-2" value={userData.password} onChange={handleChange} placeholder="Password" autoComplete='on' />
                                        <input type="password" name='confirmPassword' className="p-2 d-block w-100 mt-2" value={userData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" autoComplete='on' />
                                    </>
                                    : <></>}
                            </form>
                        </div>
                        <button className="btn btn-outline-secondary p-3 font-weight-bolder w-50 text-left" id="sign-in" onClick={handleCreate}>Create Account</button>
                        <button className="btn btn-outline-secondary p-3 font-weight-bolder w-50 text-right float-right" id="confirm" onClick={handleSubmit}>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;