export default function Footer(){
    return (
        <footer>
       
        <div className="bg-primary py-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 mb-md-3 mb-lg-0">
                        <div className="row align-items-center">
                            <div className="col-auto flex-horizontal-center">
                                <i className="ec ec-newsletter font-size-40"></i>
                                <h2 className="font-size-20 mb-0 ml-3">Sign up to Newsletter</h2>
                            </div>
                            <div className="col my-4 my-md-0">
                                <h5 className="font-size-15 ml-4 mb-0">...and receive <strong>$20 coupon for first shopping.</strong></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                      
                        <form className="js-validate js-form-message">
                            <label className="sr-only" for="subscribeSrEmail">Email address</label>
                            <div className="input-group input-group-pill">
                                <input type="email" className="form-control border-0 height-40" name="email" id="subscribeSrEmail" placeholder="Email address" aria-label="Email address" aria-describedby="subscribeButton" required
                                data-msg="Please enter a valid email address." />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-dark btn-sm-wide height-40 py-2" id="subscribeButton">Sign Up</button>
                                </div>
                            </div>
                        </form>
                      
                    </div>
                </div>
            </div>
        </div>
       
        <div className="pt-8 pb-4 bg-gray-13">
            <div className="container mt-1">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="mb-6">
                            <a href="#" className="d-inline-block">
                            <img style={{ width: "200px" }} src="/assets/logo/forweb.png" alt="logo Image" />
                            </a>
                        </div>
                        <div className="mb-4">
                            <div className="row no-gutters">
                                <div className="col-auto">
                                    <i className="ec ec-support text-primary font-size-56"></i>
                                </div>
                                <div className="col pl-3">
                                    <div className="font-size-13 font-weight-light">Got questions? Call us 24/7!</div>
                                        <a href="tel:+80080018588" className="font-size-20 text-gray-90">01684806728, </a><a href="tel:+0600874548" className="font-size-20 text-gray-90">017********</a>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h6 className="mb-1 font-weight-bold">Contact info</h6>
                            <address className="">
                                Khagan, Daffodil International University
                            </address>
                        </div>
                        <div className="my-4 my-md-4">
                            <ul className="list-inline mb-0 opacity-7">
                                <li className="list-inline-item mr-0">
                                    <a className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" href="#">
                                        <span className="fab fa-facebook-f btn-icon__inner"></span>
                                    </a>
                                </li>
                                <li className="list-inline-item mr-0">
                                    <a className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" href="#">
                                        <span className="fab fa-google btn-icon__inner"></span>
                                    </a>
                                </li>
                                <li className="list-inline-item mr-0">
                                    <a className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" href="#">
                                        <span className="fab fa-twitter btn-icon__inner"></span>
                                    </a>
                                </li>
                                <li className="list-inline-item mr-0">
                                    <a className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle" href="#">
                                        <span className="fab fa-github btn-icon__inner"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-12 col-md mb-4 mb-md-0">
                                <h6 className="mb-3 font-weight-bold">Find it Fast</h6>
                             
                                <ul className="list-group list-group-flush list-group-borderless mb-0 list-group-transparent">
                                    <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Laptops & Computers</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Cameras & Photography</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Smart Phones & Tablets</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Video Games & Consoles</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">TV & Audio</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Gadgets</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Car Electronic & GPS</a></li>
                                </ul>
                              
                            </div>

                            <div className="col-12 col-md mb-4 mb-md-0">
                              
                                <ul className="list-group list-group-flush list-group-borderless mb-0 list-group-transparent mt-md-6">
                                    <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Printers & Ink</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Software</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Office Supplies</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Computer Components</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../shop/product-categories-5-column-sidebar.html">Accesories</a></li>
                                </ul>
                                
                            </div>

                            <div className="col-12 col-md mb-4 mb-md-0">
                                <h6 className="mb-3 font-weight-bold">Customer Care</h6>
                              
                                <ul className="list-group list-group-flush list-group-borderless mb-0 list-group-transparent">
                                    <li><a className="list-group-item list-group-item-action" href="../shop/my-account.html">My Account</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../shop/track-your-order.html">Order Tracking</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../shop/wishlist.html">Wish List</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../home/terms-and-conditions.html">Customer Service</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../home/terms-and-conditions.html">Returns / Exchange</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../home/faq.html">FAQs</a></li>
                                    <li><a className="list-group-item list-group-item-action" href="../home/terms-and-conditions.html">Product Support</a></li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
        <div className="bg-gray-14 py-2">
            <div className="container">
                <div className="flex-center-between d-block d-md-flex">
                    <div className="mb-3 mb-md-0">© <a href="#" className="font-weight-bold text-gray-90">Selldoom</a> - All rights Reserved</div>
                </div>
            </div>
        </div>
       
    </footer>
    )
}