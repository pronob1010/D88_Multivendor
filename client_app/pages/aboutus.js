export default function AboutUs() {
    return (
        <main id="content" role="main">
            <div className="bg-img-hero mb-14" style={{ backgroundImage: "url(/assets/img/1920x600/img1.jpg)" }}>
                <div className="container">
                    <div className="flex-content-center max-width-620-lg flex-column mx-auto text-center min-height-564">
                        <h1 className="h1 font-weight-bold">About Us</h1>
                        <p className="text-gray-39 font-size-18 text-lh-default">Passion may be a friendly or eager interest in or admiration for a proposal, cause, discovery, or activity or love to a feeling of unusual excitement.</p>
                    </div>
                </div>
            </div>
             
             
            <div className="container mb-8 mb-lg-0 mt-14">
                <div className="row mb-8">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-lg-6 mb-5 mb-lg-8">
                                <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">What we really do?</h3>
                                <p className="text-gray-90">Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies nunc eget, fringilla orci.</p>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-8">
                                <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">Our Vision</h3>
                                <p className="text-gray-90">Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur. Vestibulum velit nibh, egestas vel faucibus vitae.</p>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-8">
                                <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">History of the Company</h3>
                                <p className="text-gray-90">Mauris rhoncus aliquet purus, a ornare nisi euismod in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam imperdiet eu metus vel ornare. Nullam in risus vel orci feugiat vestibulum. In sed aliquam mi. Nullam condimentum sollicitudin dui.</p>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-8">
                                <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">Cooperate with Us!</h3>
                                <p className="text-gray-90">Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies nunc eget, fringilla orci.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="ml-lg-8">
                            <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">What can we do for you ?</h3>
                             {/* <!-- Basics Accordion --> */}
                            <div id="basicsAccordion1" className="about-accordion">
                                 {/* <!-- Card --> */}
                                <div className="card mb-4 border-color-4 rounded-0">
                                    <div className="card-header card-collapse border-color-4" id="basicsHeadingOne">
                                        <h5 className="mb-0">
                                            <button type="button" className="btn btn-link btn-block flex-horizontal-center card-btn p-0 font-size-18"
                                                data-toggle="collapse"
                                                data-target="#basicsCollapseOnee"
                                                aria-expanded="true"
                                                aria-controls="basicsCollapseOnee">
                                                <span className="border border-color-5 rounded font-size-12 mr-5">
                                                    <i className="fas fa-plus"></i>
                                                    <i className="fas fa-minus"></i>
                                                </span>
                                                Support 24/7
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="basicsCollapseOnee" className="collapse show"
                                        aria-labelledby="basicsHeadingOne"
                                        data-parent="#basicsAccordion1">
                                        <div className="card-body">
                                            <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </div>
                                    </div>
                                </div>
                                 {/* <!-- End Card --> */}

                                 {/* <!-- Card --> */}
                                <div className="card mb-4 border-color-4 rounded-0">
                                    <div className="card-header card-collapse border-color-4" id="basicsHeadingTwo">
                                        <h5 className="mb-0">
                                            <button type="button" className="btn btn-link btn-block flex-horizontal-center card-btn p-0 font-size-18"
                                                data-toggle="collapse"
                                                data-target="#basicsCollapseTwo"
                                                aria-expanded="false"
                                                aria-controls="basicsCollapseTwo">
                                                <span className="border border-color-5 rounded font-size-12 mr-5">
                                                    <i className="fas fa-plus"></i>
                                                    <i className="fas fa-minus"></i>
                                                </span>
                                                Best Quality
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="basicsCollapseTwo" className="collapse"
                                        aria-labelledby="basicsHeadingTwo"
                                        data-parent="#basicsAccordion1">
                                        <div className="card-body">
                                            <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </div>
                                    </div>
                                </div>
                                 {/* <!-- End Card --> */}

                                 {/* <!-- Card --> */}
                                <div className="card mb-4 border-color-4 rounded-0">
                                    <div className="card-header card-collapse border-color-4" id="basicsHeadingThree">
                                        <h5 className="mb-0">
                                            <button type="button" className="btn btn-link btn-block flex-horizontal-center card-btn p-0 font-size-18"
                                                data-toggle="collapse"
                                                data-target="#basicsCollapseThree"
                                                aria-expanded="false"
                                                aria-controls="basicsCollapseThree">
                                                <span className="border border-color-5 rounded font-size-12 mr-5">
                                                    <i className="fas fa-plus"></i>
                                                    <i className="fas fa-minus"></i>
                                                </span>
                                                Fastest Delivery
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="basicsCollapseThree" className="collapse"
                                        aria-labelledby="basicsHeadingThree"
                                        data-parent="#basicsAccordion1">
                                        <div className="card-body">
                                            <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </div>
                                    </div>
                                </div>
                                 {/* <!-- End Card --> */}

                                 {/* <!-- Card --> */}
                                <div className="card mb-4 border-color-4 rounded-0">
                                    <div className="card-header card-collapse border-color-4" id="basicsHeadingFour">
                                        <h5 className="mb-0">
                                            <button type="button" className="btn btn-link btn-block flex-horizontal-center card-btn p-0 font-size-18"
                                                data-toggle="collapse"
                                                data-target="#basicsCollapseFour"
                                                aria-expanded="false"
                                                aria-controls="basicsCollapseFour">
                                                <span className="border border-color-5 rounded font-size-12 mr-5">
                                                    <i className="fas fa-plus"></i>
                                                    <i className="fas fa-minus"></i>
                                                </span>
                                                Customer Care
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="basicsCollapseFour" className="collapse"
                                        aria-labelledby="basicsHeadingFour"
                                        data-parent="#basicsAccordion1">
                                        <div className="card-body">
                                            <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </div>
                                    </div>
                                </div>
                                 {/* <!-- End Card --> */}

                                 {/* <!-- Card --> */}
                                <div className="card mb-4 border-color-4 rounded-0">
                                    <div className="card-header card-collapse border-color-4" id="basicsHeadingFive">
                                        <h5 className="mb-0">
                                            <button type="button" className="btn btn-link btn-block flex-horizontal-center card-btn p-0 font-size-18"
                                                data-toggle="collapse"
                                                data-target="#basicsCollapseFive"
                                                aria-expanded="false"
                                                aria-controls="basicsCollapseFive">
                                                <span className="border border-color-5 rounded font-size-12 mr-5">
                                                    <i className="fas fa-plus"></i>
                                                    <i className="fas fa-minus"></i>
                                                </span>
                                                Over 200 Satisfied Customers
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="basicsCollapseFive" className="collapse"
                                        aria-labelledby="basicsHeadingFive"
                                        data-parent="#basicsAccordion1">
                                        <div className="card-body">
                                            <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </div>
                                    </div>
                                </div>
                                 {/* <!-- End Card --> */}
                            </div>
                             {/* <!-- End Basics Accordion --> */}
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