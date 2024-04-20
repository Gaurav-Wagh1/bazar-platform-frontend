import ErrorSVG from "../assets/images/svgs/page-not-found.svg";

const ErrorPage = () =>{
    return(
        <div className="text-center">
            <img src={ErrorSVG} alt="" style={{height:"80vh", width:"100vw"}}/>
        </div>
    );
}

export default ErrorPage;