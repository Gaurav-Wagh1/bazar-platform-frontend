const PasswordAuthenticationFields = ({showToast, setShowToast}) => {
    return (
        <div className="toast show position-fixed start-0 top-5 m-3" style={{ "zIndex": "9999" }} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716216937/favicon_axfvq5.png" className="rounded me-2" style={{ "width": "30px" }} alt="..." />
                <strong className="me-auto fs-5">Bazar</strong>
                <button type="button" className="btn-close" onClick={() => setShowToast({ status: false, invalidFields: [] })} data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body" style={{ "fontSize": "15px" }}>
                <h1 className='fs-6'>  Password should</h1>
                <span
                    className={showToast.invalidFields.includes("digit") ? "text-danger" : "text-success"}
                >
                    {showToast.invalidFields.includes("digit") ? <i className="fa-solid fa-xmark" style={{ "color": "#ff0000" }}></i> : <i className="fa-solid fa-check" style={{ "color": "#198754" }}></i>} Contain at least one digit <br />
                </span>

                <span
                    className={showToast.invalidFields.includes("length") ? "text-danger" : "text-success"}
                >
                    {showToast.invalidFields.includes("length") ? <i className="fa-solid fa-xmark" style={{ "color": "#ff0000" }}></i> : <i className="fa-solid fa-check" style={{ "color": "#198754" }}></i>} Be at least 8 characters long <br />
                </span>

                <span
                    className={showToast.invalidFields.includes("uppercase") ? "text-danger" : "text-success"}
                >
                    {showToast.invalidFields.includes("uppercase") ? <i className="fa-solid fa-xmark" style={{ "color": "#ff0000" }}></i> : <i className="fa-solid fa-check" style={{ "color": "#198754" }}></i>} Contains at least one uppercase letter <br />
                </span>

                <span
                    className={showToast.invalidFields.includes("lowercase") ? "text-danger" : "text-success"}
                >
                    {showToast.invalidFields.includes("lowercase") ? <i className="fa-solid fa-xmark" style={{ "color": "#ff0000" }}></i> : <i className="fa-solid fa-check" style={{ "color": "#198754" }}></i>} Contains at least one lowercase letter <br />
                </span>

                <span
                    className={showToast.invalidFields.includes("special") ? "text-danger" : "text-success"}
                >
                    {showToast.invalidFields.includes("special") ? <i className="fa-solid fa-xmark" style={{ "color": "#ff0000" }}></i> : <i className="fa-solid fa-check" style={{ "color": "#198754" }}></i>} Contains at least one special character <br />
                </span>
            </div>
        </div>
    );
}

export default PasswordAuthenticationFields;