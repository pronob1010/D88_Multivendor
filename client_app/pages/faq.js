export default function FAQ() {
  return (
    <main id="content" role="main">
      {/* <!-- breadcrumb --> */}
      <div className="bg-gray-13 bg-md-transparent">
        <div className="container">
          {/* <!-- breadcrumb --> */}
          <div className="my-md-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                  <a href="../home/index.html">Home</a>
                </li>
                <li
                  className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active"
                  aria-current="page"
                >
                  FAQ
                </li>
              </ol>
            </nav>
          </div>
          {/* <!-- End breadcrumb --> */}
        </div>
      </div>
      {/* <!-- End breadcrumb --> */}

      <div className="container">
        <div className="mb-5 text-center">
          <h1>Frequently Asked Questions</h1>
          <p className="text-gray-44">
            This Agreement was last modified on 18th february 2019
          </p>
        </div>
        
        
        {/* <!-- Basics Accordion --> */}
        <div id="basicsAccordion" className="mb-12">

          {/* <!-- Card --> */}
          <div className="card mb-3 border-top-0 border-left-0 border-right-0 border-color-1 rounded-0">
            <div
              className="card-header card-collapse bg-transparent-on-hover border-0"
              id="basicsHeadingOne"
            >
              <h5 className="mb-0">
                <button
                  type="button"
                  className="px-0 btn btn-link btn-block d-flex justify-content-between card-btn py-3 font-size-20 font-weight-semi-bold text-gray-39 border-0"
                  data-toggle="collapse"
                  data-target="#basicsCollapseOner"
                  aria-expanded="true"
                  aria-controls="basicsCollapseOner"
                >
                  # What Shipping Methods Are Available?
                  <span className="card-btn-arrow">
                    <i className="fas fa-chevron-down text-gray-90 font-size-18"></i>
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="basicsCollapseOner"
              className="collapse"
              aria-labelledby="basicsHeadingOne"
              data-parent="#basicsAccordion"
            >
                <hr></hr>
              <div className="card-body pl-0 pb-8">
                <div className="row mb-8">
                  <div className="col-lg-6 mb-5 mb-lg-8">
                    <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">
                      What Shipping Methods Are Available?
                    </h3>
                    <p className="text-gray-90">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus sapien lorem, consectetur et turpis id, blandit
                      interdum metus. Morbi sed ligula id elit mollis efficitur
                      ut nec ligula. Proin erat magna, pellentesque at elementum
                      at, eleifend a tortor.
                    </p>
                  </div>
                  <div className="col-lg-6 mb-5 mb-lg-8">
                    <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">
                      How Long Will it Take To Get My Package?
                    </h3>
                    <p className="text-gray-90">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus sapien lorem, consectetur et turpis id, blandit
                      interdum metus. Morbi sed ligula id elit mollis efficitur
                      ut nec ligula. Proin erat magna, pellentesque at elementum
                      at, eleifend a tortor.
                    </p>
                  </div>
                  <div className="col-lg-6 mb-5 mb-lg-8">
                    <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">
                      How Do I Track My Order?
                    </h3>
                    <p className="text-gray-90">
                      Integer ex turpis, venenatis vitae nibh vel, vestibulum
                      maximus quam. Ut pretium orci ac vestibulum porttitor.
                      Fusce tempus diam quis justo porttitor gravida.
                    </p>
                  </div>
                  <div className="col-lg-6 mb-5 mb-lg-8">
                    <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">
                      Do I Need A Account To Place Order?
                    </h3>
                    <p className="text-gray-90">
                      Integer ex turpis, venenatis vitae nibh vel, vestibulum
                      maximus quam. Ut pretium orci ac vestibulum porttitor.
                      Fusce tempus diam quis justo porttitor gravida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="card mb-3 border-top-0 border-left-0 border-right-0 border-color-1 rounded-0">
            <div
              className="card-header card-collapse bg-transparent-on-hover border-0"
              id="basicsHeadingTwo"
            >
              <h5 className="mb-0">
                <button
                  type="button"
                  className="px-0 btn btn-link btn-block d-flex justify-content-between card-btn py-3 font-size-20 font-weight-semi-bold text-gray-39 border-0"
                  data-toggle="collapse"
                  data-target="#basicsCollapseTwor"
                  aria-expanded="true"
                  aria-controls="basicsCollapseTwor"
                >
                  # What Shipping Methods Are Available?
                  <span className="card-btn-arrow">
                    <i className="fas fa-chevron-down text-gray-90 font-size-18"></i>
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="basicsCollapseTwor"
              className="collapse"
              aria-labelledby="basicsHeadingTwo"
              data-parent="#basicsAccordion"
            >
                <hr></hr>
              <div className="card-body pl-0 pb-8">
                <div className="row mb-8">
                  <div className="col-lg-6 mb-5 mb-lg-8">
                    <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">
                      What Shipping Methods Are Available?
                    </h3>
                    <p className="text-gray-90">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus sapien lorem, consectetur et turpis id, blandit
                      interdum metus. Morbi sed ligula id elit mollis efficitur
                      ut nec ligula. Proin erat magna, pellentesque at elementum
                      at, eleifend a tortor.
                    </p>
                  </div>
                  <div className="col-lg-6 mb-5 mb-lg-8">
                    <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">
                      How Long Will it Take To Get My Package?
                    </h3>
                    <p className="text-gray-90">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus sapien lorem, consectetur et turpis id, blandit
                      interdum metus. Morbi sed ligula id elit mollis efficitur
                      ut nec ligula. Proin erat magna, pellentesque at elementum
                      at, eleifend a tortor.
                    </p>
                  </div>
                  <div className="col-lg-6 mb-5 mb-lg-8">
                    <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">
                      How Do I Track My Order?
                    </h3>
                    <p className="text-gray-90">
                      Integer ex turpis, venenatis vitae nibh vel, vestibulum
                      maximus quam. Ut pretium orci ac vestibulum porttitor.
                      Fusce tempus diam quis justo porttitor gravida.
                    </p>
                  </div>
                  <div className="col-lg-6 mb-5 mb-lg-8">
                    <h3 className="font-size-18 font-weight-semi-bold text-gray-39 mb-4">
                      Do I Need A Account To Place Order?
                    </h3>
                    <p className="text-gray-90">
                      Integer ex turpis, venenatis vitae nibh vel, vestibulum
                      maximus quam. Ut pretium orci ac vestibulum porttitor.
                      Fusce tempus diam quis justo porttitor gravida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}

         
        </div>
        {/* <!-- End Basics Accordion --> */}
        {/* <!-- Brand Carousel --> */}
        <div className="mb-8">
          <div className="py-2 border-top border-bottom">
            <div
              className="js-slick-carousel u-slick my-1"
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
                            }]'
            >
              <div className="js-slide">
                <a href="#" className="link-hover__brand">
                  <img
                    className="img-fluid m-auto max-height-50"
                    src="/assets/img/200X60/img1.png"
                    alt="Image Description"
                  />
                </a>
              </div>
              <div className="js-slide">
                <a href="#" className="link-hover__brand">
                  <img
                    className="img-fluid m-auto max-height-50"
                    src="/assets/img/200X60/img2.png"
                    alt="Image Description"
                  />
                </a>
              </div>
              <div className="js-slide">
                <a href="#" className="link-hover__brand">
                  <img
                    className="img-fluid m-auto max-height-50"
                    src="/assets/img/200X60/img3.png"
                    alt="Image Description"
                  />
                </a>
              </div>
              <div className="js-slide">
                <a href="#" className="link-hover__brand">
                  <img
                    className="img-fluid m-auto max-height-50"
                    src="/assets/img/200X60/img4.png"
                    alt="Image Description"
                  />
                </a>
              </div>
              <div className="js-slide">
                <a href="#" className="link-hover__brand">
                  <img
                    className="img-fluid m-auto max-height-50"
                    src="/assets/img/200X60/img5.png"
                    alt="Image Description"
                  />
                </a>
              </div>
              <div className="js-slide">
                <a href="#" className="link-hover__brand">
                  <img
                    className="img-fluid m-auto max-height-50"
                    src="/assets/img/200X60/img6.png"
                    alt="Image Description"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Brand Carousel --> */}
      </div>
    </main>
  );
}
