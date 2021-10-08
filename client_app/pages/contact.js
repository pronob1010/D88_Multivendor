export default function Contact(){
    return (
        <main id="content" role="main">
            {/* <!-- breadcrumb --> */}
            <div className="bg-gray-13 bg-md-transparent">
                <div className="container">
                    {/* <!-- breadcrumb --> */}
                    <div className="my-md-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="../home/index.html">Home</a></li>
                                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">Contact-v1</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End breadcrumb --> */}
                </div>
            </div>
            {/* <!-- End breadcrumb --> */}
            <div className="mb-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835252972956!2d144.95592398991224!3d-37.817327693787625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1575470633967!5m2!1sen!2sin" width="100%" height="514" frameborder="0" style={{ border: '0'}} allowfullscreen=""></iframe>
            </div>

            <div className="container">
                <div className="row mb-10">
                    <div className="col-md-8 col-xl-9">
                        <div className="mr-xl-6">
                            <div className="border-bottom border-color-1 mb-5">
                                <h3 className="section-title mb-0 pb-2 font-size-25">Leave us a Message</h3>
                            </div>
                            <p className="max-width-830-xl text-gray-90">Maecenas dolor elit, semper a sem sed, pulvinar molestie lacus. Aliquam dignissim, elit non mattis ultrices, neque odio ultricies tellus, eu porttitor nisl ipsum eu massa.</p>
                            <form className="js-validate" novalidate="novalidate">
                                <div className="row">
                                    <div className="col-md-6">
                                        {/* <!-- Input --> */}
                                        <div className="js-form-message mb-4">
                                            <label className="form-label">
                                                First name
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" name="firstName" placeholder="" aria-label="" required="" data-msg="Please enter your frist name." data-error-className="u-has-error" data-success-className="u-has-success" autocomplete="off"/>
                                        </div>
                                        {/* <!-- End Input --> */}
                                    </div>

                                    <div className="col-md-6">
                                        {/* <!-- Input --> */}
                                        <div className="js-form-message mb-4">
                                            <label className="form-label">
                                                Last name
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" name="lastName" placeholder="" aria-label="" required="" data-msg="Please enter your last name." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                        </div>
                                        {/* <!-- End Input --> */}
                                    </div>

                                    <div className="col-md-12">
                                        {/* <!-- Input --> */}
                                        <div className="js-form-message mb-4">
                                            <label className="form-label">
                                                Subject
                                            </label>
                                            <input type="text" className="form-control" name="Subject" placeholder="" aria-label="" data-msg="Please enter subject." data-error-className="u-has-error" data-success-className="u-has-success" />
                                        </div>
                                        {/* <!-- End Input --> */}
                                    </div>
                                    <div className="col-md-12">
                                        <div className="js-form-message mb-4">
                                            <label className="form-label">
                                                Your Message
                                            </label>

                                            <div className="input-group">
                                                <textarea className="form-control p-5" rows="4" name="text" placeholder=""></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary-dark-w px-5">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-3">
                        <div className="border-bottom border-color-1 mb-5">
                            <h3 className="section-title mb-0 pb-2 font-size-25">Our Store</h3>
                        </div>
                        <div className="mr-xl-6">
                            <address className="mb-6">
                                121 King Street, <br></br>
                                Melbourne VIC 3000, <br></br>
                                Australia
                            </address>
                            <h5 className="font-size-14 font-weight-bold mb-3">Hours of Operation</h5>
                            <ul className="list-unstyled mb-6">
                                <li className="flex-center-between mb-1"><span className="">Monday:</span><span className="">12-6 PM</span></li>
                                <li className="flex-center-between mb-1"><span className="">Tuesday:</span><span className="">12-6 PM</span></li>
                                <li className="flex-center-between mb-1"><span className="">Wednesday:</span><span className="">12-6 PM</span></li>
                                <li className="flex-center-between mb-1"><span className="">Thursday:</span><span className="">12-6 PM</span></li>
                                <li className="flex-center-between mb-1"><span className="">Friday:</span><span className="">12-6 PM</span></li>
                                <li className="flex-center-between mb-1"><span className="">Saturday:</span><span className="">12-6 PM</span></li>
                                <li className="flex-center-between"><span className="">Sunday</span><span className="">Closed</span></li>
                            </ul>
                            <h5 className="font-size-14 font-weight-bold mb-3">Careers</h5>
                            <p className="text-gray-90">If you’re interested in employment opportunities at Electro, please email us: <a className="text-blue text-decoration-on" href="mailto:contact@yourstore.com">contact@yourstore.com</a></p>
                        </div>
                    </div>
                </div>
                {/* <!-- Brand Carousel --> */}
                <div className="mb-8">
                    <div className="py-2 border-top border-bottom">
                        <div className="js-slick-carousel u-slick my-1"
                            data-slides-show="5"
                            data-slides-scroll="1"
                            data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-normal u-slick__arrow-centered--y"
                            data-arrow-left-classes="fa fa-angle-left u-slick__arrow-classic-inner--left z-index-9"
                            data-arrow-right-classes="fa fa-angle-right u-slick__arrow-classic-inner--right"
                            data-responsive='[{
                                "breakpoint": 992,
                                "settings": {
                                    "slidesToShow": 2
                                }
                            }, {
                                "breakpoint": 768,
                                "settings": {
                                    "slidesToShow": 1
                                }
                            }, {
                                "breakpoint": 554,
                                "settings": {
                                    "slidesToShow": 1
                                }
                            }]'>
                            <div className="js-slide">
                                <a href="#" className="link-hover__brand">
                                    <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img1.png" alt="Image Description" />
                                </a>
                            </div>
                            <div className="js-slide">
                                <a href="#" className="link-hover__brand">
                                    <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img2.png" alt="Image Description" />
                                </a>
                            </div>
                            <div className="js-slide">
                                <a href="#" className="link-hover__brand">
                                    <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img3.png" alt="Image Description" />
                                </a>
                            </div>
                            <div className="js-slide">
                                <a href="#" className="link-hover__brand">
                                    <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img4.png" alt="Image Description" />
                                </a>
                            </div>
                            <div className="js-slide">
                                <a href="#" className="link-hover__brand">
                                    <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img5.png" alt="Image Description" />
                                </a>
                            </div>
                            <div className="js-slide">
                                <a href="#" className="link-hover__brand">
                                    <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img6.png" alt="Image Description" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Brand Carousel --> */}
            </div>
        </main>
    )
}