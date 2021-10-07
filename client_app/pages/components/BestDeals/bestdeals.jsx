export default function BestDeals(){
    return (
        <div className="col-md-auto col-md-5 col-xl-4 col-wd-3gdot3 mb-6 mb-md-0">
                                {/* <!-- Deal --> */}
                                <div className="p-3 border border-width-2 border-primary borders-radius-20 bg-white min-width-370">
                                    <div className="d-flex justify-content-between align-items-center m-1 ml-2">
                                        <h3 className="font-size-22 mb-0 font-weight-normal text-lh-28">Special Offer</h3>
                                        <div className="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                                            <span className="font-size-12">Save</span>
                                            <div className="font-size-20 font-weight-bold">$120</div>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/320X300/img1.jpg" alt="Image Description" /></a>
                                    </div>
                                    <h5 className="mb-2 font-size-14 text-center mx-auto text-lh-18"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                                    <div className="d-flex align-items-center justify-content-center mb-2">
                                        <del className="font-size-18 mr-2 text-gray-2">$99,00</del>
                                        <ins className="font-size-30 text-red text-decoration-none">$79,00</ins>
                                    </div>
                                    <div className="mb-3 mx-2">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="">Availavle: <strong>6</strong></span>
                                            <span className="">Already Sold: <strong>28</strong></span>
                                        </div>
                                        <div className="rounded-pill bg-gray-3 height-14 position-relative">
                                            <span className="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                                        </div>
                                    </div>
                                    <div className="mb-2 mx-2 d-xl-flex align-items-xl-center justify-content-xl-between">
                                        <h6 className="font-size-15 text-gray-2 text-center text-xl-left mb-3 mb-xl-0 max-width-100-xl">Hurry Up! Offer ends in:</h6>
                                        <div className="js-countdown d-flex justify-content-center" data-end-date="2020/11/30" data-hours-format="%H" data-minutes-format="%M" data-seconds-format="%S">
                                            <div className="text-lh-1">
                                                <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                    <span className="js-cd-hours">00</span>
                                                </div>
                                                <div className="text-gray-2 font-size-12 font-weight-semi-bold text-center">HOURS</div>
                                            </div>
                                            <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                            <div className="text-lh-1">
                                                <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                    <span className="js-cd-minutes">00</span>
                                                </div>
                                                <div className="text-gray-2 font-size-12 font-weight-semi-bold text-center">MINS</div>
                                            </div>
                                            <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                            <div className="text-lh-1">
                                                <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                    <span className="js-cd-seconds">00</span>
                                                </div>
                                                <div className="text-gray-2 font-size-12 font-weight-semi-bold text-center">SECS</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Deal --> */}
                            </div>
    )
}