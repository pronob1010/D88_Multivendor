import RelatedProductCard from "./../components/Shop/RelatedProductCard/RelatedProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";

export default function ProductDetails() {

  let router = useRouter();

  const dispatch = useDispatch();
  
  let uid = 4;
  if (router.query.id) {
    uid = router.query.id;

    dispatch({
      type : "ADD_TO_RECENT",
      value: uid,
    });

  }

  let singleProductData = useSelector((state) =>
    state.productState.products.find((ele) => ele.id == uid)
  );
  console.log(singleProductData);
  // console.log(singleProductData.find(ele => (ele.id ==uid)));

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
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                  <a href="../shop/shop.html">{singleProductData.category}</a>
                </li>
                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                  <a href="../shop/shop.html">
                    {singleProductData.sub_category}
                  </a>
                </li>
                <li
                  className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active"
                  aria-current="page"
                >
                  {singleProductData.Title}
                </li>
              </ol>
            </nav>
          </div>
          {/* <!-- End breadcrumb --> */}
        </div>
      </div>
      {/* <!-- End breadcrumb --> */}
      <div className="container">
        {/* <!-- Single Product Body --> */}
        <div className="mb-xl-5 mb-3">
          <div className="row">
            <div className="col-md-5 mb-4 mb-md-0">
              <div
                id="sliderSyncingNav"
                className="js-slick-carousel u-slick mb-2"
                data-infinite="true"
                data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic u-slick__arrow-centered--y rounded-circle"
                data-arrow-left-classes="fas fa-arrow-left u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left ml-lg-2 ml-xl-4"
                data-arrow-right-classes="fas fa-arrow-right u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right mr-lg-2 mr-xl-4"
                data-nav-for="#sliderSyncingThumb"
              >
                <div className="js-slide">
                  <img
                    className="img-fluid"
                    src={singleProductData.image}
                    alt="Image Description"
                  />
                </div>
                <div className="js-slide">
                  <img
                    className="img-fluid"
                    src="/assets/img/720X660/img2.jpg"
                    alt="Image Description"
                  />
                </div>
                <div className="js-slide">
                  <img
                    className="img-fluid"
                    src="/assets/img/720X660/img3.jpg"
                    alt="Image Description"
                  />
                </div>
                <div className="js-slide">
                  <img
                    className="img-fluid"
                    src="/assets/img/720X660/img4.jpg"
                    alt="Image Description"
                  />
                </div>
                <div className="js-slide">
                  <img
                    className="img-fluid"
                    src="/assets/img/720X660/img5.jpg"
                    alt="Image Description"
                  />
                </div>
              </div>

              <div
                id="sliderSyncingThumb"
                className="js-slick-carousel u-slick u-slick--slider-syncing u-slick--slider-syncing-size u-slick--gutters-1 u-slick--transform-off"
                data-infinite="true"
                data-slides-show="5"
                data-is-thumbs="true"
                data-nav-for="#sliderSyncingNav"
              >
                <div className="js-slide" style={{ cursor: "pointer" }}>
                  <img
                    className="img-fluid"
                    src="/assets/img/720X660/img1.jpg"
                    alt="Image Description"
                  />
                </div>
                <div className="js-slide" style={{ cursor: "pointer" }}>
                  <img
                    className="img-fluid"
                    src="/assets/img/720X660/img2.jpg"
                    alt="Image Description"
                  />
                </div>
                <div className="js-slide" style={{ cursor: "pointer" }}>
                  <img
                    className="img-fluid"
                    src="/assets/img/720X660/img3.jpg"
                    alt="Image Description"
                  />
                </div>
                <div className="js-slide" style={{ cursor: "pointer" }}>
                  <img
                    className="img-fluid"
                    src="/assets/img/720X660/img4.jpg"
                    alt="Image Description"
                  />
                </div>
                <div className="js-slide" style={{ cursor: "pointer" }}>
                  <img
                    className="img-fluid"
                    src="/assets/img/720X660/img5.jpg"
                    alt="Image Description"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7 mb-md-6 mb-lg-0">
              <div className="mb-2">
                <div className="border-bottom mb-3 pb-md-1 pb-3">
                  {/* <a href="#" className="font-size-12 text-gray-5 mb-2 d-inline-block">Headphones</a> */}
                  <h2 className="font-size-25 text-lh-1dot2">
                    {singleProductData.Title}
                  </h2>
                  <div className="mb-2">
                    <a
                      className="d-inline-flex align-items-center small font-size-15 text-lh-1"
                      href="#"
                    >
                      <div className="text-warning mr-2">
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star"></small>
                        <small className="far fa-star text-muted"></small>
                      </div>
                      <span className="text-secondary font-size-13">
                        (3 customer reviews)
                      </span>
                    </a>
                  </div>
                  <hr></hr>
                  <div className="flex-horizontal-center flex-wrap mb-2">
                    <div className="text-gray-9 font-size-14">
                      SKU:{" "}
                      <span className="text-gray-9 font-weight-bold">
                        {singleProductData.SKU}
                      </span>
                    </div>
                    <div className="text-gray-9 font-size-14 ml-2">
                      Availability:{" "}
                      <span className="text-gray-9 font-weight-bold">
                        {singleProductData.stock} in stock
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-gray-9 font-size-14 font-weight-bold ml-md-2 mt-1"
                    >
                      <i className="ec ec-favorites mr-1 text-gray-9 font-size-15"></i>{" "}
                      Wishlist
                    </a>
                    <a
                      href="#"
                      className="text-gray-9 font-size-14 font-weight-bold ml-md-2 ml-2 mt-1"
                    >
                      <i className="ec ec-compare mr-1 text-gray-9 font-size-15"></i>{" "}
                      Compare
                    </a>
                  </div>
                  <hr></hr>

                  <div className="mb-2">
                    <ul className="font-size-14 pl-3 ml-1 text-gray-110">
                      <li>4.5 inch HD Touch Screen (1280 x 720)</li>
                      <li>Android 4.4 KitKat OS</li>
                      <li>1.4 GHz Quad Core™ Processor</li>
                      <li>20 MP Electro and 28 megapixel CMOS rear camera</li>
                    </ul>
                  </div>
                  {/* <div className="d-md-flex align-items-center">
                                        <a href="#" className="max-width-150 ml-n2 mb-2 mb-md-0 d-block"><img className="img-fluid" src="/assets/img/200X60/img1.png" alt="Image Description" /></a>
                                        <div className="ml-md-3 text-gray-9 font-size-14">Availability: <span className="text-gray-9 font-weight-bold">26 in stock</span></div>
                                    </div> */}
                </div>

                <div className="mb-2">
                  <div className="d-flex align-items-baseline">
                    <ins className="font-size-32 text-decoration-none">
                      ৳{singleProductData.offer_price}
                    </ins>
                    <del className="font-size-20 ml-2 text-gray-6">
                      ৳{singleProductData.selling_price}
                    </del>
                  </div>
                </div>
                <hr></hr>
                <div className="d-md-flex align-items-end mb-3">
                  <div className="max-width-150 mb-4 mb-md-0">
                    <h6 className="font-size-14">Quantity</h6>
                    {/* <!-- Quantity --> */}
                    <div className="border rounded-pill py-2 px-3 border-color-1">
                      <div className="js-quantity row align-items-center">
                        <div className="col">
                          <input
                            className="js-result form-control h-auto border-0 rounded p-0 shadow-none"
                            type="text"
                            value="1"
                          />
                        </div>
                        <div className="col-auto pr-1">
                          <a
                            className="js-minus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0"
                            href="javascript:;"
                          >
                            <small className="fas fa-minus btn-icon__inner"></small>
                          </a>
                          <a
                            className="js-plus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0"
                            href="javascript:;"
                          >
                            <small className="fas fa-plus btn-icon__inner"></small>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Quantity --> */}
                  </div>
                  <div className="ml-md-3">
                    <a
                      href="#"
                      className="btn px-5 btn-primary-dark transition-3d-hover"
                    >
                      <i className="ec ec-add-to-cart mr-2 font-size-20"></i>{" "}
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Single Product Body --> */}
        {/* <!-- Single Product Tab --> */}
        <div className="mb-8">
          <div className="position-relative position-md-static px-md-6">
            <ul
              className="nav nav-classic nav-tab nav-tab-lg justify-content-xl-center flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble border-0 pb-1 pb-xl-0 mb-n1 mb-xl-0"
              id="pills-tab-8"
              role="tablist"
            >
              <li className="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                <a
                  className="nav-link active"
                  id="Jpills-one-example1-tab"
                  data-toggle="pill"
                  href="#Jpills-one-example1"
                  role="tab"
                  aria-controls="Jpills-one-example1"
                  aria-selected="true"
                >
                  Accessories
                </a>
              </li>
              <li className="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                <a
                  className="nav-link"
                  id="Jpills-two-example1-tab"
                  data-toggle="pill"
                  href="#Jpills-two-example1"
                  role="tab"
                  aria-controls="Jpills-two-example1"
                  aria-selected="false"
                >
                  Description
                </a>
              </li>
              <li className="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                <a
                  className="nav-link"
                  id="Jpills-three-example1-tab"
                  data-toggle="pill"
                  href="#Jpills-three-example1"
                  role="tab"
                  aria-controls="Jpills-three-example1"
                  aria-selected="false"
                >
                  Specification
                </a>
              </li>
              <li className="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                <a
                  className="nav-link"
                  id="Jpills-four-example1-tab"
                  data-toggle="pill"
                  href="#Jpills-four-example1"
                  role="tab"
                  aria-controls="Jpills-four-example1"
                  aria-selected="false"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Tab Content --> */}
          <div className="borders-radius-17 border p-4 mt-4 mt-md-0 px-lg-10 py-lg-9">
            <div className="tab-content" id="Jpills-tabContent">
              <div
                className="tab-pane fade active show"
                id="Jpills-one-example1"
                role="tabpanel"
                aria-labelledby="Jpills-one-example1-tab"
              >
                <div className="row no-gutters">
                  <div className="col mb-6 mb-md-0">
                    <ul className="row list-unstyled products-group no-gutters border-bottom border-md-bottom-0">
                      <li className="col-4 col-md-4 col-xl-2gdot5 product-item remove-divider-sm-down border-0">
                        <div className="product-item__outer h-100">
                          <div className="remove-prodcut-hover product-item__inner px-xl-4 p-3">
                            <div className="product-item__body pb-xl-2">
                              <div className="mb-2 d-none d-md-block">
                                <a
                                  href="../shop/product-categories-7-column-full-width.html"
                                  className="font-size-12 text-gray-5"
                                >
                                  Speakers
                                </a>
                              </div>
                              <h5 className="mb-1 product-item__title d-none d-md-block">
                                <a
                                  href="#"
                                  className="text-blue font-weight-bold"
                                >
                                  Wireless Audio System Multiroom 360 degree
                                  Full base audio
                                </a>
                              </h5>
                              <div className="mb-2">
                                <a
                                  href="../shop/single-product-fullwidth.html"
                                  className="d-block text-center"
                                >
                                  <img
                                    className="img-fluid"
                                    src="/assets/img/212X200/img1.jpg"
                                    alt="Image Description"
                                  />
                                </a>
                              </div>
                              <div className="flex-center-between mb-1 d-none d-md-block">
                                <div className="prodcut-price">
                                  <div className="text-gray-100">$685,00</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-4 col-md-4 col-xl-2gdot5 product-item remove-divider-sm-down">
                        <div className="product-item__outer h-100">
                          <div className="remove-prodcut-hover add-accessories product-item__inner px-xl-4 p-3">
                            <div className="product-item__body pb-xl-2">
                              <div className="mb-2 d-none d-md-block">
                                <a
                                  href="../shop/product-categories-7-column-full-width.html"
                                  className="font-size-12 text-gray-5"
                                >
                                  Speakers
                                </a>
                              </div>
                              <h5 className="mb-1 product-item__title d-none d-md-block">
                                <a
                                  href="#"
                                  className="text-blue font-weight-bold"
                                >
                                  Tablet White EliteBook Revolve 810 G2
                                </a>
                              </h5>
                              <div className="mb-2">
                                <a
                                  href="../shop/single-product-fullwidth.html"
                                  className="d-block text-center"
                                >
                                  <img
                                    className="img-fluid"
                                    src="/assets/img/212X200/img2.jpg"
                                    alt="Image Description"
                                  />
                                </a>
                              </div>
                              <div className="flex-center-between mb-1 d-none d-md-block">
                                <div className="prodcut-price d-flex align-items-center position-relative">
                                  <ins className="font-size-20 text-red text-decoration-none">
                                    $1999,00
                                  </ins>
                                  <del className="font-size-12 tex-gray-6 position-absolute bottom-100">
                                    $2 299,00
                                  </del>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-4 col-md-4 col-xl-2gdot5 product-item remove-divider-sm-down remove-divider">
                        <div className="product-item__outer h-100">
                          <div className="remove-prodcut-hover add-accessories product-item__inner px-xl-4 p-3">
                            <div className="product-item__body pb-xl-2">
                              <div className="mb-2 d-none d-md-block">
                                <a
                                  href="../shop/product-categories-7-column-full-width.html"
                                  className="font-size-12 text-gray-5"
                                >
                                  Speakers
                                </a>
                              </div>
                              <h5 className="mb-1 product-item__title d-none d-md-block">
                                <a
                                  href="#"
                                  className="text-blue font-weight-bold"
                                >
                                  Purple Solo 2 Wireless
                                </a>
                              </h5>
                              <div className="mb-2">
                                <a
                                  href="../shop/single-product-fullwidth.html"
                                  className="d-block text-center"
                                >
                                  <img
                                    className="img-fluid"
                                    src="/assets/img/212X200/img3.jpg"
                                    alt="Image Description"
                                  />
                                </a>
                              </div>
                              <div className="flex-center-between mb-1 d-none d-md-block">
                                <div className="prodcut-price">
                                  <div className="text-gray-100">$685,00</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="form-check pl-4 pl-md-0 ml-md-4 mb-2 pb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="inlineCheckbox1"
                        checked
                        disabled
                      />
                      <label
                        className="form-check-label mb-1"
                        for="inlineCheckbox1"
                      >
                        <strong>This product: </strong> Ultra Wireless S50
                        Headphones S50 with Bluetooth -{" "}
                        <span className="text-red font-size-16">$35.00</span>
                      </label>
                    </div>
                    <div className="form-check pl-4 pl-md-0 ml-md-4 mb-2 pb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option1"
                        checked
                      />
                      <label
                        className="form-check-label mb-1 text-blue"
                        for="inlineCheckbox2"
                      >
                        <span className="text-decoration-on cursor-pointer-on">
                          Universal Headphones Case in Black
                        </span>{" "}
                        - <span className="text-red font-size-16">$159.00</span>
                      </label>
                    </div>
                    <div className="form-check pl-4 pl-md-0 ml-md-4 mb-2 pb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        value="option2"
                        checked
                      />
                      <label
                        className="form-check-label mb-1 text-blue"
                        for="inlineCheckbox3"
                      >
                        <span className="text-decoration-on cursor-pointer-on">
                          Headphones USB Wires
                        </span>{" "}
                        - <span className="text-red font-size-16">$50.00</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <div className="mr-xl-15">
                      <div className="mb-3">
                        <div className="text-red font-size-26 text-lh-1dot2">
                          $244.00
                        </div>
                        <div className="text-gray-6">for 3 item(s)</div>
                      </div>
                      <a
                        href="#"
                        className="btn btn-sm btn-block btn-primary-dark btn-wide transition-3d-hover"
                      >
                        Add all to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Jpills-two-example1"
                role="tabpanel"
                aria-labelledby="Jpills-two-example1-tab"
              >
                <h3 className="font-size-24 mb-3">Perfectly Done</h3>
                <p>
                  Praesent ornare, ex a interdum consectetur, lectus diam
                  sodales elit, vitae egestas est enim ornare nisl. Nullam in
                  lectus nec sem semper viverra. In lobortis egestas massa. Nam
                  nec massa nisi. Suspendisse potenti. Quisque suscipit
                  vulputate dui quis volutpat. Ut id elit facilisis, feugiat est
                  in, tempus lacus. Ut ultrices dictum metus, a ultricies ex
                  vulputate ac. Ut id cursus tellus, non tempor quam. Morbi
                  porta diam nisi, id finibus nunc tincidunt eu.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="pt-lg-8 pt-xl-10">
                      <h3 className="font-size-24 mb-3">Wireless</h3>
                      <p className="mb-6">
                        Fusce vitae nibh mi. Integer posuere, libero et
                        ullamcorper facilisis, enim eros tincidunt orci, eget
                        vestibulum sapien nisi ut leo. Cras finibus vel est ut
                        mollis. Donec luctus condimentum ante et euismod.
                      </p>
                      <h3 className="font-size-24 mb-3">Fresh Design</h3>
                      <p className="mb-6">
                        Integer bibendum aliquet ipsum, in ultrices enim sodales
                        sed. Quisque ut urna vitae lacus laoreet malesuada eu at
                        massa. Pellentesque nibh augue, pellentesque nec dictum
                        vel, pretium a arcu. Duis eu urna suscipit, lobortis
                        elit quis, ullamcorper massa.
                      </p>
                      <h3 className="font-size-24 mb-3">Fabolous Sound</h3>
                      <p className="mb-6">
                        Cras rutrum, nibh a sodales accumsan, elit sapien
                        ultrices sapien, eget semper lectus ex congue elit.
                        Nullam dui elit, fermentum a varius at, iaculis non
                        dolor. In hac habitasse platea dictumst.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <img
                      className="img-fluid mr-n4 mr-lg-n10"
                      src="/assets/img/580X580/img1.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div className="col-md-6 text-left">
                    <img
                      className="img-fluid ml-n4 ml-lg-n10"
                      src="/assets/img/580X580/img2.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div className="col-md-6 align-self-center">
                    <div className="pt-lg-8 pt-xl-10 text-right">
                      <h3 className="font-size-24 mb-3">Inteligent Bass</h3>
                      <p className="mb-6">
                        Fusce vitae nibh mi. Integer posuere, libero et
                        ullamcorper facilisis, enim eros tincidunt orci, eget
                        vestibulum sapien nisi ut leo. Cras finibus vel est ut
                        mollis. Donec luctus condimentum ante et euismod.
                      </p>
                      <h3 className="font-size-24 mb-3">Battery Life</h3>
                      <p className="mb-6">
                        Integer bibendum aliquet ipsum, in ultrices enim sodales
                        sed. Quisque ut urna vitae lacus laoreet malesuada eu at
                        massa. Pellentesque nibh augue, pellentesque nec dictum
                        vel, pretium a arcu. Duis eu urna suscipit, lobortis
                        elit quis, ullamcorper massa.
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="nav flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                  <li className="nav-item text-gray-111 flex-shrink-0 flex-xl-shrink-1">
                    <strong>SKU:</strong>{" "}
                    <span className="sku">FW511948218</span>
                  </li>
                  <li className="nav-item text-gray-111 mx-3 flex-shrink-0 flex-xl-shrink-1">
                    /
                  </li>
                  <li className="nav-item text-gray-111 flex-shrink-0 flex-xl-shrink-1">
                    <strong>Category:</strong>{" "}
                    <a href="#" className="text-blue">
                      Headphones
                    </a>
                  </li>
                  <li className="nav-item text-gray-111 mx-3 flex-shrink-0 flex-xl-shrink-1">
                    /
                  </li>
                  <li className="nav-item text-gray-111 flex-shrink-0 flex-xl-shrink-1">
                    <strong>Tags:</strong>{" "}
                    <a href="#" className="text-blue">
                      Fast
                    </a>
                    ,{" "}
                    <a href="#" className="text-blue">
                      Gaming
                    </a>
                    ,{" "}
                    <a href="#" className="text-blue">
                      Strong
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="Jpills-three-example1"
                role="tabpanel"
                aria-labelledby="Jpills-three-example1-tab"
              >
                <div className="mx-md-5 pt-1">
                  <div className="table-responsive mb-4">
                    <table className="table table-hover">
                      <tbody>
                        <tr>
                          <th className="px-4 px-xl-5 border-top-0">Weight</th>
                          <td className="border-top-0">7.25kg</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Dimensions</th>
                          <td>90 x 60 x 90 cm</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Size</th>
                          <td>One Size Fits all</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">color</th>
                          <td>Black with Red, White with Gold</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Guarantee</th>
                          <td>5 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 className="font-size-18 mb-4">
                    Technical Specifications
                  </h3>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <tbody>
                        <tr>
                          <th className="px-4 px-xl-5 border-top-0">Brand</th>
                          <td className="border-top-0">Apple</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Item Height</th>
                          <td>18 Millimeters</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Item Width</th>
                          <td>31.4 Centimeters</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Screen Size</th>
                          <td>13 Inches</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Item Weight</th>
                          <td>1.6 Kg</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Product Dimensions</th>
                          <td>21.9 x 31.4 x 1.8 cm</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Item model number</th>
                          <td>MF841HN/A</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Processor Brand</th>
                          <td>Intel</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Processor Type</th>
                          <td>Core i5</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Processor Speed</th>
                          <td>2.9 GHz</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">RAM Size</th>
                          <td>8 GB</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Hard Drive Size</th>
                          <td>512 GB</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Hard Disk Technology</th>
                          <td>Solid State Drive</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Graphics Coprocessor</th>
                          <td>Intel Integrated Graphics</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">
                            Graphics Card Description
                          </th>
                          <td>Integrated Graphics Card</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Hardware Platform</th>
                          <td>Mac</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">Operating System</th>
                          <td>Mac OS</td>
                        </tr>
                        <tr>
                          <th className="px-4 px-xl-5">
                            Average Battery Life (in hours)
                          </th>
                          <td>9</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Jpills-four-example1"
                role="tabpanel"
                aria-labelledby="Jpills-four-example1-tab"
              >
                <div className="row mb-8">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <h3 className="font-size-18 mb-6">Based on 3 reviews</h3>
                      <h2 className="font-size-30 font-weight-bold text-lh-1 mb-0">
                        4.3
                      </h2>
                      <div className="text-lh-1">overall</div>
                    </div>

                    {/* <!-- Ratings --> */}
                    <ul className="list-unstyled">
                      <li className="py-1">
                        <a
                          className="row align-items-center mx-gutters-2 font-size-1"
                          href="javascript:;"
                        >
                          <div className="col-auto mb-2 mb-md-0">
                            <div
                              className="text-warning text-ls-n2 font-size-16"
                              style={{ width: "80px" }}
                            >
                              <small className="fas fa-star"></small>
                              <small className="fas fa-star"></small>
                              <small className="fas fa-star"></small>
                              <small className="fas fa-star"></small>
                              <small className="far fa-star text-muted"></small>
                            </div>
                          </div>
                          <div className="col-auto mb-2 mb-md-0">
                            <div
                              className="progress ml-xl-5"
                              style={{ height: "10px", width: "200px" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          <div className="col-auto text-right">
                            <span className="text-gray-90">205</span>
                          </div>
                        </a>
                      </li>
                      <li className="py-1">
                        <a
                          className="row align-items-center mx-gutters-2 font-size-1"
                          href="javascript:;"
                        >
                          <div className="col-auto mb-2 mb-md-0">
                            <div
                              className="text-warning text-ls-n2 font-size-16"
                              style={{ width: "80px" }}
                            >
                              <small className="fas fa-star"></small>
                              <small className="fas fa-star"></small>
                              <small className="fas fa-star"></small>
                              <small className="far fa-star text-muted"></small>
                              <small className="far fa-star text-muted"></small>
                            </div>
                          </div>
                          <div className="col-auto mb-2 mb-md-0">
                            <div
                              className="progress ml-xl-5"
                              style={{ height: "10px", width: "200px" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "53%" }}
                                aria-valuenow="53"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          <div className="col-auto text-right">
                            <span className="text-gray-90">55</span>
                          </div>
                        </a>
                      </li>
                      <li className="py-1">
                        <a
                          className="row align-items-center mx-gutters-2 font-size-1"
                          href="javascript:;"
                        >
                          <div className="col-auto mb-2 mb-md-0">
                            <div
                              className="text-warning text-ls-n2 font-size-16"
                              style={{ width: "80px" }}
                            >
                              <small className="fas fa-star"></small>
                              <small className="fas fa-star"></small>
                              <small className="far fa-star text-muted"></small>
                              <small className="far fa-star text-muted"></small>
                              <small className="far fa-star text-muted"></small>
                            </div>
                          </div>
                          <div className="col-auto mb-2 mb-md-0">
                            <div
                              className="progress ml-xl-5"
                              style={{ height: "10px", width: "200px" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "20%" }}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          <div className="col-auto text-right">
                            <span className="text-gray-90">23</span>
                          </div>
                        </a>
                      </li>
                      <li className="py-1">
                        <a
                          className="row align-items-center mx-gutters-2 font-size-1"
                          href="javascript:;"
                        >
                          <div className="col-auto mb-2 mb-md-0">
                            <div
                              className="text-warning text-ls-n2 font-size-16"
                              style={{ width: "80px" }}
                            >
                              <small className="fas fa-star"></small>
                              <small className="far fa-star text-muted"></small>
                              <small className="far fa-star text-muted"></small>
                              <small className="far fa-star text-muted"></small>
                              <small className="far fa-star text-muted"></small>
                            </div>
                          </div>
                          <div className="col-auto mb-2 mb-md-0">
                            <div
                              className="progress ml-xl-5"
                              style={{ height: "10px", width: "200px" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "0%" }}
                                aria-valuenow="0"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          <div className="col-auto text-right">
                            <span className="text-muted">0</span>
                          </div>
                        </a>
                      </li>
                      <li className="py-1">
                        <a
                          className="row align-items-center mx-gutters-2 font-size-1"
                          href="javascript:;"
                        >
                          <div className="col-auto mb-2 mb-md-0">
                            <div
                              className="text-warning text-ls-n2 font-size-16"
                              style={{ width: "80px" }}
                            >
                              <small className="fas fa-star"></small>
                              <small className="far fa-star text-muted"></small>
                              <small className="far fa-star text-muted"></small>
                              <small className="far fa-star text-muted"></small>
                              <small className="far fa-star text-muted"></small>
                            </div>
                          </div>
                          <div className="col-auto mb-2 mb-md-0">
                            <div
                              className="progress ml-xl-5"
                              style={{ height: "10px", width: "200px" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "1%" }}
                                aria-valuenow="1"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          <div className="col-auto text-right">
                            <span className="text-gray-90">4</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                    {/* <!-- End Ratings --> */}
                  </div>
                  <div className="col-md-6">
                    <h3 className="font-size-18 mb-5">Add a review</h3>
                    {/* <!-- Form --> */}
                    <form className="js-validate">
                      <div className="row align-items-center mb-4">
                        <div className="col-md-4 col-lg-3">
                          <label for="rating" className="form-label mb-0">
                            Your Review
                          </label>
                        </div>
                        <div className="col-md-8 col-lg-9">
                          <a href="#" className="d-block">
                            <div className="text-warning text-ls-n2 font-size-16">
                              <small className="far fa-star text-muted"></small>
                              <small className="far fa-star text-muted"></small>
                              <small className="far fa-star text-muted"></small>
                              <small className="far fa-star text-muted"></small>
                              <small className="far fa-star text-muted"></small>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="js-form-message form-group mb-3 row">
                        <div className="col-md-4 col-lg-3">
                          <label
                            for="descriptionTextarea"
                            className="form-label"
                          >
                            Your Review
                          </label>
                        </div>
                        <div className="col-md-8 col-lg-9">
                          <textarea
                            className="form-control"
                            rows="3"
                            id="descriptionTextarea"
                            data-msg="Please enter your message."
                            data-error-className="u-has-error"
                            data-success-class="u-has-success"
                          ></textarea>
                        </div>
                      </div>
                      <div className="js-form-message form-group mb-3 row">
                        <div className="col-md-4 col-lg-3">
                          <label for="inputName" className="form-label">
                            Name <span className="text-danger">*</span>
                          </label>
                        </div>
                        <div className="col-md-8 col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="inputName"
                            aria-label="Alex Hecker"
                            required
                            data-msg="Please enter your name."
                            data-error-className="u-has-error"
                            data-success-class="u-has-success"
                          />
                        </div>
                      </div>
                      <div className="js-form-message form-group mb-3 row">
                        <div className="col-md-4 col-lg-3">
                          <label for="emailAddress" className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                        </div>
                        <div className="col-md-8 col-lg-9">
                          <input
                            type="email"
                            className="form-control"
                            name="emailAddress"
                            id="emailAddress"
                            aria-label="alexhecker@pixeel.com"
                            required
                            data-msg="Please enter a valid email address."
                            data-error-className="u-has-error"
                            data-success-class="u-has-success"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="offset-md-4 offset-lg-3 col-auto">
                          <button
                            type="submit"
                            className="btn btn-primary-dark btn-wide transition-3d-hover"
                          >
                            Add Review
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* <!-- End Form --> */}
                  </div>
                </div>
                {/* <!-- Review --> */}
                <div className="border-bottom border-color-1 pb-4 mb-4">
                  {/* <!-- Review Rating --> */}
                  <div className="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-2">
                    <div
                      className="text-warning text-ls-n2 font-size-16"
                      style={{ width: "80px" }}
                    >
                      <small className="fas fa-star"></small>
                      <small className="fas fa-star"></small>
                      <small className="fas fa-star"></small>
                      <small className="far fa-star text-muted"></small>
                      <small className="far fa-star text-muted"></small>
                    </div>
                  </div>
                  {/* <!-- End Review Rating --> */}

                  <p className="text-gray-90">
                    Fusce vitae nibh mi. Integer posuere, libero et ullamcorper
                    facilisis, enim eros tincidunt orci, eget vestibulum sapien
                    nisi ut leo. Cras finibus vel est ut mollis. Donec luctus
                    condimentum ante et euismod.
                  </p>

                  {/* <!-- Reviewer --> */}
                  <div className="mb-2">
                    <strong>John Doe</strong>
                    <span className="font-size-13 text-gray-23">
                      - April 3, 2019
                    </span>
                  </div>
                  {/* <!-- End Reviewer --> */}
                </div>
                {/* <!-- End Review --> */}
                {/* <!-- Review --> */}
                <div className="border-bottom border-color-1 pb-4 mb-4">
                  {/* <!-- Review Rating --> */}
                  <div className="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-2">
                    <div
                      className="text-warning text-ls-n2 font-size-16"
                      style={{ width: "80px" }}
                    >
                      <small className="fas fa-star"></small>
                      <small className="fas fa-star"></small>
                      <small className="fas fa-star"></small>
                      <small className="fas fa-star"></small>
                      <small className="fas fa-star"></small>
                    </div>
                  </div>
                  {/* <!-- End Review Rating --> */}

                  <p className="text-gray-90">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Suspendisse eget
                    facilisis odio. Duis sodales augue eu tincidunt faucibus.
                    Etiam justo ligula, placerat ac augue id, volutpat porta
                    dui.
                  </p>

                  {/* <!-- Reviewer --> */}
                  <div className="mb-2">
                    <strong>Anna Kowalsky</strong>
                    <span className="font-size-13 text-gray-23">
                      - April 3, 2019
                    </span>
                  </div>
                  {/* <!-- End Reviewer --> */}
                </div>
                {/* <!-- End Review --> */}
                {/* <!-- Review --> */}
                <div className="pb-4">
                  {/* <!-- Review Rating --> */}
                  <div className="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-2">
                    <div
                      className="text-warning text-ls-n2 font-size-16"
                      style={{ width: "80px" }}
                    >
                      <small className="fas fa-star"></small>
                      <small className="fas fa-star"></small>
                      <small className="fas fa-star"></small>
                      <small className="fas fa-star"></small>
                      <small className="far fa-star text-muted"></small>
                    </div>
                  </div>
                  {/* <!-- End Review Rating --> */}

                  <p className="text-gray-90">
                    Sed id tincidunt sapien. Pellentesque cursus accumsan
                    tellus, nec ultricies nulla sollicitudin eget. Donec feugiat
                    orci vestibulum porttitor sagittis.
                  </p>

                  {/* <!-- Reviewer --> */}
                  <div className="mb-2">
                    <strong>Peter Wargner</strong>
                    <span className="font-size-13 text-gray-23">
                      - April 3, 2019
                    </span>
                  </div>
                  {/* <!-- End Reviewer --> */}
                </div>
                {/* <!-- End Review --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Tab Content --> */}
        </div>
        {/* <!-- End Single Product Tab --> */}
        {/* <!-- Related products --> */}

        <div className="mb-6">
          <div className="d-flex justify-content-between align-items-center border-bottom border-color-1 flex-lg-nowrap flex-wrap mb-4">
            <h3 className="section-title mb-0 pb-2 font-size-22">
              Related products
            </h3>
          </div>
          <ul className="row list-unstyled products-group no-gutters">
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
          </ul>
        </div>
        {/* <!-- End Related products --> */}
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
