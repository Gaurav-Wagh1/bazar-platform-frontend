
const Final = ({quantity, total}) => {
    return (
        <div className="container-fluid cart-item ">
            <div className="total-price p-3 d-flex flex-row justify-content-around">
                <h5 className="">Total Quantity :- {quantity}</h5>
                <h5 className="">Total :- {total}</h5>
            </div>
        </div>
    );
}

export default Final;