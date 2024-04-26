import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./signup.css"
import { useState } from 'react';

import SignUpSVG from '../../assets/images/svgs/Sign up.svg';
import PasswordAuthenticationFields from './Password-authentication';

// --------------- VALIDATE PASSWORD IS PENDING;

const Signup = (prop) => {
    const [userData, setUserData] = useState({ email: "", password: "", confirmPassword: "" });
    const [signupError, setSignupError] = useState({ flag: false, name: "" });
    const [showToast, setShowToast] = useState({ status: false, invalidFields: [] });
    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();

    const validateEmail = (email) => {
        const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regx.test(email);
    }

    function isValidPassword(password) {
        const invalidFields = [];
        // Check if the password is at least 8 characters long
        if (password.length < 8) {
            invalidFields.push("length")
        }

        // Check if the password contains at least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            invalidFields.push("uppercase");
        }

        // Check if the password contains at least one lowercase letter
        if (!/[a-z]/.test(password)) {
            invalidFields.push("lowercase");
        }

        // Check if the password contains at least one digit
        if (!/\d/.test(password)) {
            invalidFields.push("digit");
        }

        // Check if the password contains at least one special character
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
            invalidFields.push("special");
        }

        // If all criteria are met, the password is valid
        return invalidFields.length ? { status: false, invalidFields } : { status: true, invalidFields };
    }

    const handleSignIn = async () => {
        navigate('/signin');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userData.email && userData.password && userData.confirmPassword) {
            const isEmailValidated = validateEmail(userData.email);
            if (!isEmailValidated) {
                setSignupError({ flag: true, name: "Please enter a valid email" });
                setTimeout(() => {
                    setSignupError({ name: "", flag: false });
                }, 3000);
                return;
            }

            if (userData.password !== userData.confirmPassword) {
                setSignupError({ flag: true, name: "Password and confirm password should be same" });
                setTimeout(() => {
                    setSignupError({ name: "", flag: false });
                }, 3000);
                return;
            }

            const { status, invalidFields } = isValidPassword(userData.password);
            if (!status) {
                setShowToast({ status: true, invalidFields });
                return;
            }
            setShowToast({ status: false, invalidFields: [] });

            const apiUrl = `/api/v1/users/signup`;
            prop.toggleLoading(true);
            try {
                const response = await axios.post(apiUrl, {
                    email: userData.email,
                    password: userData.password
                });
                prop.setUser({ ...prop.user, email: userData.email, id: response.data.data });
                prop.toggleLoading(false);
                setSignupError({ flag: false, name: "Success" });
                setTimeout(() => {
                    setSignupError({ name: "", flag: false });
                    navigate("/info");
                }, 1000);
            } catch (error) {
                console.log(error)
                prop.toggleLoading(false);
                const err = error.response.data;
                setSignupError({ flag: true, name: `${err.message}` });
                setTimeout(() => {
                    setSignupError({ name: "", flag: false });
                }, 3000);
            }
        }
        else {
            setSignupError({ flag: true, name: "All fields are mandatory" });
            setTimeout(() => {
                setSignupError({ name: "", flag: false });
            }, 3000);
            return;
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
            {(signupError.flag && signupError.name) &&
                (
                    <div className="alert alert-warning alert-dismissible bg-light text-danger " role="alert">
                        <strong>Error Occured! </strong>{signupError.name}
                        <button type="button" onClick={() => setSignupError({ flag: false, name: "" })} className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }

            {(!signupError.flag && signupError.name === "Success") &&
                (
                    <div className="alert alert-success alert-dismissible" role="alert">
                        <strong>Horrey! 🎇 </strong>You have successfully signed up.
                        <button type="button" onClick={() => setSignupError({ flag: false, name: "" })} className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }

            {showToast.status && <PasswordAuthenticationFields showToast={showToast} setShowToast={setShowToast} />}

            {/* signup from  */}
            <div className="container-fluid bg-white pb-3 pb-md-0 py-md-5">
                <div className="row" >
                    <div className="col-12 col-md-6">
                        <img src={SignUpSVG} alt="" className='w-100' />
                    </div>
                    <div className="main-container col-12 col-md-6 p-md-5 mt-3 mt-md-0 border-0">
                        <div className="upper">
                            <h1 className="display-4" style={{ color: "#1B2141" }}>Register Yourself</h1>
                            <form className="mt-4 mb-4 text-center">
                                <input type="text" name='email' className="p-2 d-block w-100 mt-2" value={userData.email} onChange={handleChange} placeholder="Email" autoComplete='on' />

                                <div style={{ "display": "flex", "position": "relative", "alignItems": "center" }}>
                                    <input type={showPass ? "text" : "password"} name='password' className="p-2 d-block w-100 mt-2" value={userData.password} onChange={handleChange} placeholder="Password" autoComplete='on' />
                                    <i className='' ><img src={`/src/assets/images/${showPass ? "hide-pass.png" : "show-pass.png"}`} onClick={() => setShowPass(!showPass)} title='show/hide password' className='show-hide-pass' style={{ "width": "80%" }} /></i>
                                </div>

                                <input type={showPass ? "text" : "password"} name='confirmPassword' className="p-2 d-block w-100 mt-2" value={userData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" autoComplete='on' />
                            </form>
                        </div>
                        <button type="submit" className="btn btn-outline-secondary mt-2 p-3 font-weight-bolder w-50 text-left" id="sign-in" onClick={handleSignIn}>Sign In</button>
                        <button type="submit" className="btn btn-outline-secondary mt-2 p-3 font-weight-bolder w-50 text-right float-right" id="confirm" onClick={handleSubmit}>Confirm</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;