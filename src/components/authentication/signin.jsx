import { useState } from "react";
import axios from 'axios';
import "./signup.css"
import { useNavigate, Link } from 'react-router-dom';

const Signin = (prop) => {

    const [userData, setUserData] = useState({ email: "", password: "" });
    const [signinError, setSigninError] = useState({ flag: false, name: "" });

    const navigate = useNavigate();

    const handleCreate = async () => {
        navigate('/signup');
    }

    const validateEmail = (email) => {
        const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regx.test(email);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userData.email && userData.password) {
            const isEmailValidated = validateEmail(userData.email);
            if (!isEmailValidated) {
                setSigninError({ flag: true, name: "Please enter a valid email" });
                setTimeout(() => {
                    setSigninError({ name: "", flag: false });
                }, 3000);
                return;
            };

            try {
                prop.toggleLoading(true);
                const apiUrl = `/api/v1/users/signin`;
                const response = await axios.post(apiUrl, {
                    email: userData.email,
                    password: userData.password
                });
                prop.updateUserInfo(response.data.data);
                prop.toggleLoading(false);
                setSigninError({ flag: false, name: "Success" });
                setTimeout(() => {
                    setSigninError({ name: "", flag: false });
                    navigate("/");
                }, 1000);
            } catch (error) {
                prop.toggleLoading(false);
                const err = error.response.data;
                setSigninError({ flag: true, name: `${err.message}` });
                setTimeout(() => {
                    setSigninError({ name: "", flag: false });
                }, 3000);
            }
        }
        else {
            setSigninError({ flag: true, name: "All fields are mandatory" });
            setTimeout(() => {
                setSigninError({ name: "", flag: false });
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
            {(signinError.flag && signinError.name) &&
                (
                    <div className="alert alert-warning alert-dismissible bg-light text-danger " role="alert">
                        <strong>Error Occured! </strong>{signinError.name}
                        <button type="button" onClick={() => setSigninError({ name: "" })} className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }

            {(!signinError.flag && signinError.name === "Success") &&
                (
                    <div className="alert alert-success alert-dismissible" role="alert">
                        <strong>Horrey! 🎇 </strong>You have successfully signed in.
                        <button type="button" onClick={() => setSigninError({ name: "" })} className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }

            <div className="container-md">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="main-container col-md-6 p-0">
                        <div className="upper p-4">
                            <h1 className=".display-4">Sign In</h1>
                            <form className="mt-4  text-center">
                                <input type="text" className="p-2 d-block w-100 mt-2" placeholder="Email" name="email" value={userData.email} onChange={handleChange} autoComplete="true" />
                                <input type="password" className="p-2 d-block w-100 mt-3 mb-4" placeholder="Password" name="password" value={userData.password} onChange={handleChange} />

                                <Link to={"/forgot"} id="forgot" className="mb-3">FORGOT YOUR PASSWORD</Link>
                            </form>
                        </div>
                        <button className="btn btn-outline-secondary p-3 font-weight-bolder w-50 text-left" id="sign-in" onClick={handleCreate}>Create Account</button>
                        <button className="btn btn-outline-secondary p-3 font-weight-bolder w-50 text-right float-right" id="confirm" onClick={handleSubmit}>Confirm</button>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
}

export default Signin;