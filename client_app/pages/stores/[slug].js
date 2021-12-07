import { useSelector } from "react-redux";
import ShopCard from "../components/Shop/shop_single_card";
import VendorSlider from "../components/Index/slider/vendor_slider";
import BestSeller from "../components/Bestsellers/bestsellers";
import { useRouter } from "next/dist/client/router";

 
export default function VendorShop({productdata}) {
  let router = useRouter();
  // console.log(router.query.slug);
  let seller_slug = router.query.slug;
  let seller_id = String(seller_slug).split('-')[3];
  console.log(seller_id);
  
  const url = 'http://localhost:8000/api/vendor_catalog/sellers/'

  // let sellers_list = []; 
  // let res = fetch(url).then(data=>{return data.json().then(data=>{
  //   console.log(data)
  //   sellers_list.push(data);
  // })})
  // console.log(sellers_list)

  

  let dataset = useSelector((state) => state.productState.products);

  let featured_dataset = useSelector(
    (state) => state.PromotionalProductState.products
  );

  let featured = [];

  featured_dataset.map((item) => {
    // console.log(item);
    if(item.type == "featured") {
      dataset.find((ele) => {
        // console.log(ele)

        if (ele.id == item.Select_Product && ele.seller==seller_id) {
          featured.push(ele);
        }
      });
    }
  });

  let OnSales = [];

  dataset.map((item) => {
    if (item.offer_percent >= 30) {
      OnSales.push(item);
    }
  });

  let TopRated = [];

  dataset.map((item) => {
    if (item.offer_percent >= 30) {
      TopRated.push(item);
    }
  });

  let featuredProductCardList = featured.map((item) => {
    return <ShopCard data={item} key={item.id} />;
  });

  let OnSalesProductCardList = OnSales.map((item) => {
    return <ShopCard data={item} key={item.id} />;
  });

  let TopRatedProductCardList = TopRated.map((item) => {
    return <ShopCard data={item} key={item.id} />;
  });
  return (
    
      <main id="content" role="main">
        <VendorSlider />
        <div className="container">
          <div class="mb-6 row border rounded-lg mx-0 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
            {/* <!-- Feature List --> */}
            <div class="media col px-6 px-xl-4 px-wd-8 flex-shrink-0 flex-xl-shrink-1 min-width-270-all py-3">
              <div class="u-avatar mr-2">
                <i class="text-primary ec ec-transport font-size-46"></i>
              </div>
              <div class="media-body text-center">
                <span class="d-block font-weight-bold text-dark">
                  Free Delivery
                </span>
                <div class=" text-secondary">from $50</div>
              </div>
            </div>
            {/* <!-- End Feature List --> */}

            {/* <!-- Feature List --> */}
            <div class="media col px-6 px-xl-4 px-wd-8 flex-shrink-0 flex-xl-shrink-1 min-width-270-all border-left py-3">
              <div class="u-avatar mr-2">
                <i class="text-primary ec ec-customers font-size-56"></i>
              </div>
              <div class="media-body text-center">
                <span class="d-block font-weight-bold text-dark">
                  99 % Customer
                </span>
                <div class=" text-secondary">Feedbacks</div>
              </div>
            </div>
            {/* <!-- End Feature List --> */}

            {/* <!-- Feature List --> */}
            <div class="media col px-6 px-xl-4 px-wd-8 flex-shrink-0 flex-xl-shrink-1 min-width-270-all border-left py-3">
              <div class="u-avatar mr-2">
                <i class="text-primary ec ec-returning font-size-46"></i>
              </div>
              <div class="media-body text-center">
                <span class="d-block font-weight-bold text-dark">365 Days</span>
                <div class=" text-secondary">for free return</div>
              </div>
            </div>
            {/* <!-- End Feature List --> */}

            {/* <!-- Feature List --> */}
            <div class="media col px-6 px-xl-4 px-wd-8 flex-shrink-0 flex-xl-shrink-1 min-width-270-all border-left py-3">
              <div class="u-avatar mr-2">
                <i class="text-primary ec ec-payment font-size-46"></i>
              </div>
              <div class="media-body text-center">
                <span class="d-block font-weight-bold text-dark">Payment</span>
                <div class=" text-secondary">Secure System</div>
              </div>
            </div>
            {/* <!-- End Feature List --> */}

            {/* <!-- Feature List --> */}
            <div class="media col px-6 px-xl-4 px-wd-8 flex-shrink-0 flex-xl-shrink-1 min-width-270-all border-left py-3">
              <div class="u-avatar mr-2">
                <i class="text-primary ec ec-tag font-size-46"></i>
              </div>
              <div class="media-body text-center">
                <span class="d-block font-weight-bold text-dark">Only Best</span>
                <div class=" text-secondary">Brands</div>
              </div>
            </div>
            {/* <!-- End Feature List --> */}
          </div>

          {/* {/* <!-- Tab Prodcut Section --> */}
          <div className="mb-6">
            {/* {/* <!-- Nav Classic --> */}
            <div className="position-relative bg-white text-center z-index-2">
              <ul
                className="nav nav-classic nav-tab justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active js-animation-link"
                    id="pills-one-example1-tab"
                    data-toggle="pill"
                    href="#pills-one-example1"
                    role="tab"
                    aria-controls="pills-one-example1"
                    aria-selected="true"
                    data-target="#pills-one-example1"
                    data-link-group="groups"
                    data-animation-in="slideInUp"
                  >
                    <div className="d-md-flex justify-content-md-center align-items-md-center">
                      Featured
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-animation-link"
                    id="pills-two-example1-tab"
                    data-toggle="pill"
                    href="#pills-two-example1"
                    role="tab"
                    aria-controls="pills-two-example1"
                    aria-selected="false"
                    data-target="#pills-two-example1"
                    data-link-group="groups"
                    data-animation-in="slideInUp"
                  >
                    <div className="d-md-flex justify-content-md-center align-items-md-center">
                      On Sale
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-animation-link"
                    id="pills-three-example1-tab"
                    data-toggle="pill"
                    href="#pills-three-example1"
                    role="tab"
                    aria-controls="pills-three-example1"
                    aria-selected="false"
                    data-target="#pills-three-example1"
                    data-link-group="groups"
                    data-animation-in="slideInUp"
                  >
                    <div className="d-md-flex justify-content-md-center align-items-md-center">
                      Top Rated
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* {/* <!-- End Nav Classic --> */}
            {/* {/* <!-- Tab Content --> */}
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade pt-2 show active"
                id="pills-one-example1"
                role="tabpanel"
                aria-labelledby="pills-one-example1-tab"
                data-target-group="groups"
              >
                <ul className="row list-unstyled products-group no-gutters">
                  {featuredProductCardList}
                </ul>
              </div>
              <div
                className="tab-pane fade pt-2"
                id="pills-two-example1"
                role="tabpanel"
                aria-labelledby="pills-two-example1-tab"
                data-target-group="groups"
              >
                <ul className="row list-unstyled products-group no-gutters">
                  {OnSalesProductCardList}
                </ul>
              </div>
              <div
                className="tab-pane fade pt-2"
                id="pills-three-example1"
                role="tabpanel"
                aria-labelledby="pills-three-example1-tab"
                data-target-group="groups"
              >
                <ul className="row list-unstyled products-group no-gutters">
                  {TopRatedProductCardList}
                </ul>
              </div>
            </div>
            {/* {/* <!-- End Tab Content --> */}
          </div>
          {/* {/* <!-- End Tab Prodcut Section --> */}
          <div className="row">
            <div className="col-xl-9 col-wd-auto">
              <BestSeller />
            </div>
          </div>

          {/* {/* <!-- Smartphones --> */}
          <div className="position-relative">
            <div className="border-bottom border-color-1 mb-2">
              <h3 className="section-title mb-0 pb-2 font-size-22">
                Smartphones
              </h3>
            </div>
            <div
              className="js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1"
              data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-3 mt-md-0"
              data-slides-show="5"
              data-slides-scroll="1"
              data-arrows-classes="position-absolute top-0 font-size-17 u-slick__arrow-normal top-10"
              data-arrow-left-classes="fa fa-angle-left right-1"
              data-arrow-right-classes="fa fa-angle-right right-0"
              data-responsive='[{
                                  "breakpoint": 1400,
                                  "settings": {
                                    "slidesToShow": 4
                                  }
                                }, {
                                    "breakpoint": 1200,
                                    "settings": {
                                      "slidesToShow": 3
                                    }
                                }, {
                                  "breakpoint": 992,
                                  "settings": {
                                    "slidesToShow": 3
                                  }
                                }, {
                                  "breakpoint": 768,
                                  "settings": {
                                    "slidesToShow": 2
                                  }
                                }, {
                                  "breakpoint": 554,
                                  "settings": {
                                    "slidesToShow": 2
                                  }
                                }]'
            >
              <div className="js-slide products-group">
                <div className="product-item">
                  <div className="product-item__outer h-100">
                    <div className="product-item__inner px-wd-4 p-2 p-md-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5"
                          >
                            Speakers
                          </a>
                        </div>
                        <h5 className="mb-1 product-item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
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
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a
                            href="../shop/compare.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                            Compare
                          </a>
                          <a
                            href="../shop/wishlist.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                            Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="js-slide products-group">
                <div className="product-item">
                  <div className="product-item__outer h-100">
                    <div className="product-item__inner px-wd-4 p-2 p-md-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5"
                          >
                            Speakers
                          </a>
                        </div>
                        <h5 className="mb-1 product-item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
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
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a
                            href="../shop/compare.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                            Compare
                          </a>
                          <a
                            href="../shop/wishlist.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                            Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="js-slide products-group">
                <div className="product-item">
                  <div className="product-item__outer h-100">
                    <div className="product-item__inner px-wd-4 p-2 p-md-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5"
                          >
                            Speakers
                          </a>
                        </div>
                        <h5 className="mb-1 product-item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
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
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a
                            href="../shop/compare.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                            Compare
                          </a>
                          <a
                            href="../shop/wishlist.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                            Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="js-slide products-group">
                <div className="product-item">
                  <div className="product-item__outer h-100">
                    <div className="product-item__inner px-wd-4 p-2 p-md-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5"
                          >
                            Speakers
                          </a>
                        </div>
                        <h5 className="mb-1 product-item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src="/assets/img/212X200/img4.jpg"
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a
                            href="../shop/compare.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                            Compare
                          </a>
                          <a
                            href="../shop/wishlist.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                            Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="js-slide products-group">
                <div className="product-item">
                  <div className="product-item__outer h-100">
                    <div className="product-item__inner px-wd-4 p-2 p-md-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5"
                          >
                            Speakers
                          </a>
                        </div>
                        <h5 className="mb-1 product-item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src="/assets/img/212X200/img5.jpg"
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a
                            href="../shop/compare.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                            Compare
                          </a>
                          <a
                            href="../shop/wishlist.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                            Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="js-slide products-group">
                <div className="product-item">
                  <div className="product-item__outer h-100">
                    <div className="product-item__inner px-wd-4 p-2 p-md-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5"
                          >
                            Speakers
                          </a>
                        </div>
                        <h5 className="mb-1 product-item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src="/assets/img/212X200/img6.jpg"
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a
                            href="../shop/compare.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                            Compare
                          </a>
                          <a
                            href="../shop/wishlist.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                            Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="js-slide products-group">
                <div className="product-item">
                  <div className="product-item__outer h-100">
                    <div className="product-item__inner px-wd-4 p-2 p-md-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5"
                          >
                            Speakers
                          </a>
                        </div>
                        <h5 className="mb-1 product-item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="d-block text-center"
                          >
                            <img
                              className="img-fluid"
                              src="/assets/img/212X200/img7.jpg"
                              alt="Image Description"
                            />
                          </a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a
                            href="../shop/compare.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                            Compare
                          </a>
                          <a
                            href="../shop/wishlist.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                            Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="js-slide products-group">
                <div className="product-item">
                  <div className="product-item__outer h-100">
                    <div className="product-item__inner px-wd-4 p-2 p-md-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5"
                          >
                            Speakers
                          </a>
                        </div>
                        <h5 className="mb-1 product-item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
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
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a
                            href="../shop/compare.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                            Compare
                          </a>
                          <a
                            href="../shop/wishlist.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                            Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="js-slide products-group">
                <div className="product-item">
                  <div className="product-item__outer h-100">
                    <div className="product-item__inner px-wd-4 p-2 p-md-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2">
                          <a
                            href="../shop/product-categories-7-column-full-width.html"
                            className="font-size-12 text-gray-5"
                          >
                            Speakers
                          </a>
                        </div>
                        <h5 className="mb-1 product-item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                            Wireless Audio System Multiroom 360 degree Full base
                            audio
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
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a
                            href="../shop/compare.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                            Compare
                          </a>
                          <a
                            href="../shop/wishlist.html"
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                            Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {/* <!-- End Smartphones --> */}
        </div>
        {/* {/* <!-- Brand Carousel --> */}
        <div className="container mb-8">
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
        {/* {/* <!-- End Brand Carousel --> */}
      </main> 
    
  );
}
