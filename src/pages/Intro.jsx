import video from "../assets/css/Bazar.mp4"

const Intro = () => {
    return (
        <>
            {/* <!-- 16: 9 aspect ratio-- > */}
            <div className="embed-responsive embed-responsive-16by9 mt-5">
                <video autoPlay muted loop className="embed-responsive-item">
                    <source src={video} type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div>

            {/* <!--4: 3 aspect ratio-- > */}
            {/* <div className="embed-responsive embed-responsive-4by3">
                <video className="embed-responsive-item" style={{ "width": "100vw", "overflow": "hidden" }} autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div> */}
        </>
    )
}

export default Intro;