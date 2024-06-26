import "../../assets/css/style.css"

const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img src="https://res.cloudinary.com/dlmczlc8h/image/upload/v1716212756/bazaar-high-resolution-logo-transparent_2_m6lirg.png" className="f-img" alt=""/>
                                <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links ">
                                <li><a href="#">Women</a></li>
                                <li><a href="#">Men</a></li>
                                <li><a href="#">Kids</a></li>
                                <li><a href="#">Beauty</a></li>
                                <li><a href="#">Electronics</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Contribute</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="small" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-12">
                            <p className="copyright-text">Copyright © 2020 All Rights Reserved by
                                <a href="#"> <span className="logo">Bazaar</span></a>
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a className="dribbble" href="#"><i className="fab fa-dribbble"></i></a></li>
                                <li><a className="linkedin" href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;