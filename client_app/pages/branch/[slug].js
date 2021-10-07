import IndexSlider from './../components/Index/slider/slider';
import { useSelector } from 'react-redux';
import ShopCard from './../components/Shop/shop_single_card';

export default function VendorShop(){
  let dataset = useSelector((state) => state.productState.products);

  let featured_dataset = useSelector((state) => state.PromotionalProductState.products);

  let featured = [];

  featured_dataset.map( item => { if (item.type=="featured") {dataset.find(ele => { if (ele.id == item.Select_Product) { featured.push(ele); } }) } } )


  let OnSales = [];

  dataset.map(item => {
      if ( item.offer_percent >= 30 ){
          OnSales.push(item);
      }
  });

  let TopRated = [];

  dataset.map(item => {
      if ( item.offer_percent >= 30 ){
          TopRated.push(item);
      }
  });
  

  let featuredProductCardList = (
      featured.map(item => { return(<ShopCard data = {item} key={item.id}/>) })
  )

  let OnSalesProductCardList = (
      OnSales.map(item => { return(<ShopCard data = {item} key={item.id}/>) })
  )

  let TopRatedProductCardList = (
      TopRated.map(item => { return(<ShopCard data = {item} key={item.id}/>) })
  )
  return (
    <main id="content" role="main">
            <IndexSlider />
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-wd-auto d-none d-xl-block">
                        <div className="max-width-270 min-width-270 pt-xl-13 mt-xl-13">
                             {/* <!-- Feature List --> */}
                             <aside className="mb-8 mt-8">
                                <div className="d-flex justify-content-center rounded border mb-4">
                                    <div className="px-4 py-6 w-100">
                                        {/* <!-- Feature List --> */}
                                        <div className="media px-3 mb-4 pb-4 border-bottom" href="#">
                                            <div className="u-avatar mr-2">
                                                <i className="text-primary ec ec-transport font-size-46"></i>
                                            </div>
                                            <div className="media-body text-center">
                                                <span className="d-block font-weight-bold text-dark">Free Delivery</span>
                                                <div className=" text-secondary">from $50</div>
                                            </div>
                                        </div>
                                        {/* <!-- End Feature List --> */}

                                        {/* <!-- Feature List --> */}
                                        <div className="media px-3 mb-4 pb-4 border-bottom" href="#">
                                            <div className="u-avatar mr-2">
                                                <i className="text-primary ec ec-customers font-size-56"></i>
                                            </div>
                                            <div className="media-body text-center">
                                                <span className="d-block font-weight-bold text-dark">99 % Customer</span>
                                                <div className=" text-secondary">Feedbacks</div>
                                            </div>
                                        </div>
                                        {/* <!-- End Feature List --> */}

                                        {/* <!-- Feature List --> */}
                                        <div className="media px-3 mb-4 pb-4 border-bottom" href="#">
                                            <div className="u-avatar mr-2">
                                                <i className="text-primary ec ec-returning font-size-46"></i>
                                            </div>
                                            <div className="media-body text-center">
                                                <span className="d-block font-weight-bold text-dark">365 Days</span>
                                                <div className=" text-secondary">for free return</div>
                                            </div>
                                        </div>
                                        {/* <!-- End Feature List --> */}

                                        {/* <!-- Feature List --> */}
                                        <div className="media px-3 mb-4 pb-4 border-bottom" href="#">
                                            <div className="u-avatar mr-2">
                                                <i className="text-primary ec ec-payment font-size-46"></i>
                                            </div>
                                            <div className="media-body text-center">
                                                <span className="d-block font-weight-bold text-dark">Payment</span>
                                                <div className=" text-secondary">Secure System</div>
                                            </div>
                                        </div>
                                        {/* <!-- End Feature List --> */}

                                        {/* <!-- Feature List --> */}
                                        <div className="media px-3" href="#">
                                            <div className="u-avatar mr-2">
                                                <i className="text-primary ec ec-tag font-size-46"></i>
                                            </div>
                                            <div className="media-body text-center">
                                                <span className="d-block font-weight-bold text-dark">Only Best</span>
                                                <div className=" text-secondary">Brands</div>
                                            </div>
                                        </div>
                                        {/* <!-- End Feature List --> */}
                                    </div>
                                </div>
                            </aside>
                            {/* <!-- End Feature List --> */}
                            
                            {/* <!-- Latest Products --> */}
                            <aside className="mb-4">
                                {/* <!-- Wrapper Latest Products --> */}
                                <div className="mb-2 position-relative">
                                    <dv className="d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0">
                                        <h3 className="section-title section-title__sm mb-0 pb-3 font-size-18">Latest Products</h3>
                                    </dv>
                                    <div className="js-slick-carousel u-slick u-slick--gutters-2 overflow-hidden u-slick-overflow-visble pt-3 position-static"
                                        data-slides-show="1"
                                        data-slides-scroll="1"
                                        data-arrows-classes="position-absolute top-0 font-size-17 u-slick__arrow-normal top-10"
                                        data-arrow-left-classes="fa fa-angle-left right-1"
                                        data-arrow-right-classes="fa fa-angle-right right-0">
                                        <div className="js-slide">
                                            <ul className="list-unstyled products-group mb-0 overflow-visible">
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img1.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Tablet Air 3 WiFi 64GB Gold</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$629,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img2.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Tablet White EliteBook  Revolve 810 G2</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$1 299,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img3.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Pendrive USB 3.0 Flash 64 GB</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$110,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img7.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">White Solo 2 Wireless</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$110,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img4.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Smartwatch 2.0 LTE Wifi</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$110,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img5.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Gear Virtual Reality</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$799,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img6.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">External SSD USB 3.1 750 GB</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$799,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img8.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Purple NX Mini F1 aparat  SMART NX</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$559.00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="js-slide">
                                            <ul className="list-unstyled products-group mb-0 overflow-visible">
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img1.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Tablet Air 3 WiFi 64GB Gold</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$629,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img2.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Tablet White EliteBook  Revolve 810 G2</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$1 299,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img3.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Pendrive USB 3.0 Flash 64 GB</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$110,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img7.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">White Solo 2 Wireless</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$110,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img4.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Smartwatch 2.0 LTE Wifi</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$110,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img5.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Gear Virtual Reality</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$799,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img6.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">External SSD USB 3.1 750 GB</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$799,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img8.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Purple NX Mini F1 aparat  SMART NX</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$559.00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="js-slide">
                                            <ul className="list-unstyled products-group mb-0 overflow-visible">
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img1.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Tablet Air 3 WiFi 64GB Gold</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$629,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img2.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Tablet White EliteBook  Revolve 810 G2</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$1 299,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img3.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Pendrive USB 3.0 Flash 64 GB</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$110,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img7.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">White Solo 2 Wireless</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$110,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img4.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Smartwatch 2.0 LTE Wifi</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$110,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img5.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Gear Virtual Reality</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$799,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img6.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">External SSD USB 3.1 750 GB</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$799,00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">
                                                    <div className="product-item__outer h-100">
                                                        <div className="product-item__inner py-md-3 mx-3 row no-gutters">
                                                            <div className="col-auto product-media-left">
                                                                <a href="../shop/single-product-fullwidth.html" className="max-width-70 d-block"><img className="img-fluid" src="/assets/img/150X140/img8.jpg" alt="Image Description"/></a>
                                                            </div>
                                                            <div className="col product-item__body pl-2 pl-lg-3">
                                                                <div className="mb-4">
                                                                    <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-gray-90">Purple NX Mini F1 aparat  SMART NX</a></h5>
                                                                </div>
                                                                <div className="flex-center-between">
                                                                    <div className="prodcut-price">
                                                                        <div className="text-gray-100 font-size-15 font-weight-bold">$559.00</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Wrapper Latest Products --> */}
                            </aside>
                            {/* <!-- End Latest Products --> */}
                           
                            
                        </div>
                    </div>
                    <div className="col-xl-9 col-wd-auto max-width-1130">
                        {/* <!-- Banner --> */}
                         
                        {/* <!-- End Banner --> */}
                        {/* <!-- Tab Prodcut Section --> */}
                        <div className="mb-6">
                            {/* <!-- Nav Classic --> */}
                            <div className="position-relative bg-white text-center z-index-2">
                                <ul className="nav nav-classic nav-tab justify-content-center" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active js-animation-link" id="pills-one-example1-tab" data-toggle="pill" href="#pills-one-example1" role="tab" aria-controls="pills-one-example1" aria-selected="true"
                                            data-target="#pills-one-example1"
                                            data-link-group="groups"
                                            data-animation-in="slideInUp">
                                            <div className="d-md-flex justify-content-md-center align-items-md-center">
                                                Featured
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link js-animation-link" id="pills-two-example1-tab" data-toggle="pill" href="#pills-two-example1" role="tab" aria-controls="pills-two-example1" aria-selected="false"
                                            data-target="#pills-two-example1"
                                            data-link-group="groups"
                                            data-animation-in="slideInUp">
                                            <div className="d-md-flex justify-content-md-center align-items-md-center">
                                                On Sale
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link js-animation-link" id="pills-three-example1-tab" data-toggle="pill" href="#pills-three-example1" role="tab" aria-controls="pills-three-example1" aria-selected="false"
                                            data-target="#pills-three-example1"
                                            data-link-group="groups"
                                            data-animation-in="slideInUp">
                                            <div className="d-md-flex justify-content-md-center align-items-md-center">
                                                Top Rated
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- End Nav Classic --> */}
                            {/* <!-- Tab Content --> */}
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade pt-2 show active" id="pills-one-example1" role="tabpanel" aria-labelledby="pills-one-example1-tab" data-target-group="groups">
                                    <ul className="row list-unstyled products-group no-gutters">
                                    { featuredProductCardList }
                                    </ul>
                                </div>
                                <div className="tab-pane fade pt-2" id="pills-two-example1" role="tabpanel" aria-labelledby="pills-two-example1-tab" data-target-group="groups">
                                    <ul className="row list-unstyled products-group no-gutters">
                                    { OnSalesProductCardList }
                                    </ul>
                                </div>
                                <div className="tab-pane fade pt-2" id="pills-three-example1" role="tabpanel" aria-labelledby="pills-three-example1-tab" data-target-group="groups">
                                    <ul className="row list-unstyled products-group no-gutters">
                                    { TopRatedProductCardList }
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- End Tab Content --> */}
                        </div>
                        {/* <!-- End Tab Prodcut Section --> */}
                        {/* <!-- Deal --> */}
                        <div className="mb-6">
                            <h4 className="font-size-22 text-gray-100 mb-3">Deals of the Week</h4>
                            <div className="p-xl-4 p-wd-0 border border-width-2 border-primary borders-radius-20 border-wd-0">
                                <div className="js-slick-carousel u-slick u-slick--gutters-2 u-slick-deal-arrow__border"
                                    data-slides-show="2"
                                    data-slides-scroll="1"
                                    data-pagi-classes="text-center d-xl-none d-wd-flex mt-4 u-slick__pagination u-slick__pagination--long"
                                    data-arrows-classes="d-none d-xl-inline-flex d-wd-none align-items-center u-slick__arrow-normal u-slick-deal-arrow position-absolute z-index-9 font-size-18 top-3"
                                    data-arrow-left-classes="fa fa-angle-left right-xl-220 u-slick-deal-arrow__left"
                                    data-arrow-right-classes="fa fa-angle-right right-1 u-slick-deal-arrow__right"
                                    data-responsive='[{
                                        "breakpoint": 1399,
                                        "settings": {
                                            "slidesToShow": 1
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
                                        <div className="p-4 p-xl-0 p-wd-4 border border-xl-0 border-width-2 border-primary borders-radius-20 bg-white">
                                            <div className="row align-items-md-center">
                                                <div className="col-md-6 col-xl-7 col-wd-6 px-0 align-self-center">
                                                    <div className="d-inline-flex justify-content-between align-items-center position-absolute left-3 top-0 z-index-9">
                                                        <div className="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                                                            <span className="font-size-12">Save</span>
                                                            <div className="font-size-20 font-weight-bold">$120</div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4 mb-md-0">
                                                        <div className="row align-items-center">
                                                            <div className="col">
                                                                <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid mx-auto" src="/assets/img/380X350/img1.jpg" alt="Image Description"/></a>
                                                            </div>

                                                            <div className="col-auto d-none d-xl-block d-wd-none">
                                                                <ul className="list-group rounded-0">
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img1.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #01"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img1.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img2.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #02"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img2.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img3.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #03"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img3.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img1.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #01"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img1.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xl-5 col-wd-6">
                                                    <div className="space-top-xl-2 space-top-wd-0 mt-xl-4 mt-wd-0">
                                                        <h5 className="mb-3 mb-xl-2 mb-wd-1 font-size-14 text-center mx-auto max-width-180 text-lh-18"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                                                        <div className="d-flex align-items-center justify-content-center mb-3">
                                                            <del className="font-size-18 mr-2 text-gray-2">$99,00</del>
                                                            <ins className="font-size-xl-30 font-size-wd-25 text-red text-decoration-none">$79,00</ins>
                                                        </div>
                                                        <div className="mb-4 mb-xl-5 mb-wd-2 pb-wd-1 mx-2">
                                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                                <span className="">Availavle: <strong>6</strong></span>
                                                                <span className="">Already Sold: <strong>28</strong></span>
                                                            </div>
                                                            <div className="rounded-pill bg-gray-3 height-wd-14 height-xl-20 position-relative">
                                                                <span className="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <h6 className="font-size-15 text-gray-2 text-center mb-xl-3 mb-wd-2">Hurry Up! Offer ends in:</h6>
                                                            <div className="js-countdown d-flex justify-content-center"
                                                                data-end-date="2020/11/30"
                                                                data-hours-format="%H"
                                                                data-minutes-format="%M"
                                                                data-seconds-format="%S">
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-hours"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">HOURS</div>
                                                                </div>
                                                                <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-minutes"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">MINS</div>
                                                                </div>
                                                                <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-seconds"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">SECS</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="js-slide">
                                        <div className="p-4 p-xl-0 p-wd-4 border border-xl-0 border-width-2 border-primary borders-radius-20 bg-white">
                                            <div className="row align-items-md-center">
                                                <div className="col-md-6 col-xl-7 col-wd-6 px-0 align-self-center">
                                                    <div className="d-inline-flex justify-content-between align-items-center position-absolute left-3 top-0 z-index-9">
                                                        <div className="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                                                            <span className="font-size-12">Save</span>
                                                            <div className="font-size-20 font-weight-bold">$120</div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4 mb-md-0">
                                                        <div className="row align-items-center">
                                                            <div className="col">
                                                                <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid mx-auto" src="/assets/img/380X350/img2.jpg" alt="Image Description"/></a>
                                                            </div>

                                                            <div className="col-auto d-none d-xl-block d-wd-none">
                                                                <ul className="list-group rounded-0">
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img1.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #01"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img1.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img2.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #02"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img2.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img3.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #03"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img3.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img1.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #01"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img1.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xl-5 col-wd-6">
                                                    <div className="space-top-xl-2 space-top-wd-0 mt-xl-4 mt-wd-0">
                                                        <h5 className="mb-3 mb-xl-2 mb-wd-1 font-size-14 text-center mx-auto max-width-180 text-lh-18"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                                                        <div className="d-flex align-items-center justify-content-center mb-3">
                                                            <del className="font-size-18 mr-2 text-gray-2">$99,00</del>
                                                            <ins className="font-size-xl-30 font-size-wd-25 text-red text-decoration-none">$79,00</ins>
                                                        </div>
                                                        <div className="mb-4 mb-xl-5 mb-wd-2 pb-wd-1 mx-2">
                                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                                <span className="">Availavle: <strong>6</strong></span>
                                                                <span className="">Already Sold: <strong>28</strong></span>
                                                            </div>
                                                            <div className="rounded-pill bg-gray-3 height-wd-14 height-xl-20 position-relative">
                                                                <span className="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <h6 className="font-size-15 text-gray-2 text-center mb-xl-3 mb-wd-2">Hurry Up! Offer ends in:</h6>
                                                            <div className="js-countdown d-flex justify-content-center"
                                                                data-end-date="2020/11/30"
                                                                data-hours-format="%H"
                                                                data-minutes-format="%M"
                                                                data-seconds-format="%S">
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-hours"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">HOURS</div>
                                                                </div>
                                                                <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-minutes"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">MINS</div>
                                                                </div>
                                                                <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-seconds"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">SECS</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="js-slide">
                                        <div className="p-4 p-xl-0 p-wd-4 border border-xl-0 border-width-2 border-primary borders-radius-20 bg-white">
                                            <div className="row align-items-md-center">
                                                <div className="col-md-6 col-xl-7 col-wd-6 px-0 align-self-center">
                                                    <div className="d-inline-flex justify-content-between align-items-center position-absolute left-3 top-0 z-index-9">
                                                        <div className="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                                                            <span className="font-size-12">Save</span>
                                                            <div className="font-size-20 font-weight-bold">$120</div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4 mb-md-0">
                                                        <div className="row align-items-center">
                                                            <div className="col">
                                                                <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid mx-auto" src="/assets/img/380X350/img1.jpg" alt="Image Description"/></a>
                                                            </div>

                                                            <div className="col-auto d-none d-xl-block d-wd-none">
                                                                <ul className="list-group rounded-0">
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img1.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #01"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img1.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img2.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #02"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img2.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img3.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #03"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img3.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img1.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #01"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img1.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xl-5 col-wd-6">
                                                    <div className="space-top-xl-2 space-top-wd-0 mt-xl-4 mt-wd-0">
                                                        <h5 className="mb-3 mb-xl-2 mb-wd-1 font-size-14 text-center mx-auto max-width-180 text-lh-18"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                                                        <div className="d-flex align-items-center justify-content-center mb-3">
                                                            <del className="font-size-18 mr-2 text-gray-2">$99,00</del>
                                                            <ins className="font-size-xl-30 font-size-wd-25 text-red text-decoration-none">$79,00</ins>
                                                        </div>
                                                        <div className="mb-4 mb-xl-5 mb-wd-2 pb-wd-1 mx-2">
                                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                                <span className="">Availavle: <strong>6</strong></span>
                                                                <span className="">Already Sold: <strong>28</strong></span>
                                                            </div>
                                                            <div className="rounded-pill bg-gray-3 height-wd-14 height-xl-20 position-relative">
                                                                <span className="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <h6 className="font-size-15 text-gray-2 text-center mb-xl-3 mb-wd-2">Hurry Up! Offer ends in:</h6>
                                                            <div className="js-countdown d-flex justify-content-center"
                                                                data-end-date="2020/11/30"
                                                                data-hours-format="%H"
                                                                data-minutes-format="%M"
                                                                data-seconds-format="%S">
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-hours"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">HOURS</div>
                                                                </div>
                                                                <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-minutes"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">MINS</div>
                                                                </div>
                                                                <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-seconds"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">SECS</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="js-slide">
                                        <div className="p-4 p-xl-0 p-wd-4 border border-xl-0 border-width-2 border-primary borders-radius-20 bg-white">
                                            <div className="row align-items-md-center">
                                                <div className="col-md-6 col-xl-7 col-wd-6 px-0 align-self-center">
                                                    <div className="d-inline-flex justify-content-between align-items-center position-absolute left-3 top-0 z-index-9">
                                                        <div className="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                                                            <span className="font-size-12">Save</span>
                                                            <div className="font-size-20 font-weight-bold">$120</div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4 mb-md-0">
                                                        <div className="row align-items-center">
                                                            <div className="col">
                                                                <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid mx-auto" src="/assets/img/380X350/img2.jpg" alt="Image Description"/></a>
                                                            </div>

                                                            <div className="col-auto d-none d-xl-block d-wd-none">
                                                                <ul className="list-group rounded-0">
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img1.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #01"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img1.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img2.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #02"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img2.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img3.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #03"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img3.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img1.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #01"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img1.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xl-5 col-wd-6">
                                                    <div className="space-top-xl-2 space-top-wd-0 mt-xl-4 mt-wd-0">
                                                        <h5 className="mb-3 mb-xl-2 mb-wd-1 font-size-14 text-center mx-auto max-width-180 text-lh-18"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                                                        <div className="d-flex align-items-center justify-content-center mb-3">
                                                            <del className="font-size-18 mr-2 text-gray-2">$99,00</del>
                                                            <ins className="font-size-xl-30 font-size-wd-25 text-red text-decoration-none">$79,00</ins>
                                                        </div>
                                                        <div className="mb-4 mb-xl-5 mb-wd-2 pb-wd-1 mx-2">
                                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                                <span className="">Availavle: <strong>6</strong></span>
                                                                <span className="">Already Sold: <strong>28</strong></span>
                                                            </div>
                                                            <div className="rounded-pill bg-gray-3 height-wd-14 height-xl-20 position-relative">
                                                                <span className="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <h6 className="font-size-15 text-gray-2 text-center mb-xl-3 mb-wd-2">Hurry Up! Offer ends in:</h6>
                                                            <div className="js-countdown d-flex justify-content-center"
                                                                data-end-date="2020/11/30"
                                                                data-hours-format="%H"
                                                                data-minutes-format="%M"
                                                                data-seconds-format="%S">
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-hours"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">HOURS</div>
                                                                </div>
                                                                <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-minutes"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">MINS</div>
                                                                </div>
                                                                <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-seconds"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">SECS</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="js-slide">
                                        <div className="p-4 p-xl-0 p-wd-4 border border-xl-0 border-width-2 border-primary borders-radius-20 bg-white">
                                            <div className="row align-items-md-center">
                                                <div className="col-md-6 col-xl-7 col-wd-6 px-0 align-self-center">
                                                    <div className="d-inline-flex justify-content-between align-items-center position-absolute left-3 top-0 z-index-9">
                                                        <div className="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                                                            <span className="font-size-12">Save</span>
                                                            <div className="font-size-20 font-weight-bold">$120</div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4 mb-md-0">
                                                        <div className="row align-items-center">
                                                            <div className="col">
                                                                <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid mx-auto" src="/assets/img/380X350/img1.jpg" alt="Image Description"/></a>
                                                            </div>

                                                            <div className="col-auto d-none d-xl-block d-wd-none">
                                                                <ul className="list-group rounded-0">
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img1.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #01"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img1.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img2.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #02"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img2.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img3.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #03"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img3.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                    <li className="list-group-item my-1 p-0 border-0">
                                                                        {/* <!-- Gallery --> */}
                                                                        <a className="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                                            data-src="/assets/img/1920X1080/img1.jpg"
                                                                            data-fancybox="fancyboxGallery6"
                                                                            data-caption="Electro in frames - image #01"
                                                                            data-speed="700"
                                                                            data-is-infinite="true">
                                                                            <img className="img-fluid border" src="/assets/img/100X100/img1.jpg" alt="Image Description"/>

                                                                            <span className="u-media-viewer__container">
                                                                                <span className="u-media-viewer__icon">
                                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                        {/* <!-- End Gallery --> */}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xl-5 col-wd-6">
                                                    <div className="space-top-xl-2 space-top-wd-0 mt-xl-4 mt-wd-0">
                                                        <h5 className="mb-3 mb-xl-2 mb-wd-1 font-size-14 text-center mx-auto max-width-180 text-lh-18"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                                                        <div className="d-flex align-items-center justify-content-center mb-3">
                                                            <del className="font-size-18 mr-2 text-gray-2">$99,00</del>
                                                            <ins className="font-size-xl-30 font-size-wd-25 text-red text-decoration-none">$79,00</ins>
                                                        </div>
                                                        <div className="mb-4 mb-xl-5 mb-wd-2 pb-wd-1 mx-2">
                                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                                <span className="">Availavle: <strong>6</strong></span>
                                                                <span className="">Already Sold: <strong>28</strong></span>
                                                            </div>
                                                            <div className="rounded-pill bg-gray-3 height-wd-14 height-xl-20 position-relative">
                                                                <span className="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <h6 className="font-size-15 text-gray-2 text-center mb-xl-3 mb-wd-2">Hurry Up! Offer ends in:</h6>
                                                            <div className="js-countdown d-flex justify-content-center"
                                                                data-end-date="2020/11/30"
                                                                data-hours-format="%H"
                                                                data-minutes-format="%M"
                                                                data-seconds-format="%S">
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-hours"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">HOURS</div>
                                                                </div>
                                                                <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-minutes"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">MINS</div>
                                                                </div>
                                                                <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                                                <div className="text-lh-1">
                                                                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                                        <span className="js-cd-seconds"></span>
                                                                    </div>
                                                                    <div className="text-gray-2 font-size-12 text-center">SECS</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Deal --> */}
                        
                        {/* <!-- Prodcut-cards-carousel --> */}
                        <div className="mb-8">
                            <dv className="d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0">
                                <h3 className="section-title mb-0 pb-2 font-size-22">Bestsellers</h3>
                                <ul className="nav nav-pills mb-2 pt-3 pt-md-0 mb-0 border-top border-color-1 border-md-top-0 align-items-center font-size-15 font-size-15-md flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
                                    <li className="nav-item flex-shrink-0 flex-md-shrink-1">
                                        <a className="text-gray-90 btn btn-outline-primary border-width-2 rounded-pill py-1 px-4 font-size-15 text-lh-19 font-size-15-md" href="#">Top 20</a>
                                    </li>
                                    <li className="nav-item flex-shrink-0 flex-md-shrink-1">
                                        <a className="nav-link text-gray-8" href="#">Phones & Tablets</a>
                                    </li>
                                    <li className="nav-item flex-shrink-0 flex-md-shrink-1">
                                        <a className="nav-link text-gray-8" href="#">Laptops & Computers</a>
                                    </li>
                                    <li className="nav-item flex-shrink-0 flex-md-shrink-1">
                                        <a className="nav-link text-gray-8" href="#"> Video Cameras</a>
                                    </li>
                                </ul>
                            </dv>
                            <div className="js-slick-carousel u-slick u-slick--gutters-1 overflow-hidden u-slick-overflow-visble pt-3 pb-6"
                                data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-4">
                                <div className="js-slide">
                                    <ul className="row list-unstyled products-group no-gutters mb-0 overflow-visible">
                                        <li className="col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                            <div className="product-item__outer h-100">
                                                <div className="product-item__inner p-md-3 row no-gutters">
                                                    <div className="col col-lg-auto col-xl-5 col-wd-auto product-media-left">
                                                        <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="/assets/img/150X140/img1.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="col col-xl-7 col-wd product-item__body pl-2 pl-lg-3 pl-xl-0 pl-wd-3 mr-wd-1">
                                                        <div className="mb-4 mb-xl-2 mb-wd-4">
                                                            <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Tablets</a></div>
                                                            <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet Air 3 WiFi 64GB Gold</a></h5>
                                                        </div>
                                                        <div className="flex-center-between mb-3">
                                                            <div className="prodcut-price">
                                                                <div className="text-gray-100">$629,00</div>
                                                            </div>
                                                            <div className="d-none d-xl-block prodcut-add-cart">
                                                                <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="product-item__footer">
                                                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                                                <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                            <div className="product-item__outer h-100">
                                                <div className="product-item__inner p-md-3 row no-gutters">
                                                    <div className="col col-lg-auto col-xl-5 col-wd-auto product-media-left">
                                                        <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="/assets/img/150X140/img2.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="col col-xl-7 col-wd product-item__body pl-2 pl-lg-3 pl-xl-0 pl-wd-3 mr-wd-1">
                                                        <div className="mb-4 mb-xl-2 mb-wd-4">
                                                            <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Laptops & Computers</a></div>
                                                            <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook  Revolve 810 G2</a></h5>
                                                        </div>
                                                        <div className="flex-center-between mb-3">
                                                            <div className="prodcut-price">
                                                                <div className="text-gray-100">$1 299,00</div>
                                                            </div>
                                                            <div className="d-none d-xl-block prodcut-add-cart">
                                                                <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="product-item__footer">
                                                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                                                <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 remove-divider">
                                            <div className="product-item__outer h-100">
                                                <div className="product-item__inner p-md-3 row no-gutters">
                                                    <div className="col col-lg-auto col-xl-5 col-wd-auto product-media-left">
                                                        <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="/assets/img/150X140/img3.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="col col-xl-7 col-wd product-item__body pl-2 pl-lg-3 pl-xl-0 pl-wd-3 mr-wd-1">
                                                        <div className="mb-4 mb-xl-2 mb-wd-4">
                                                            <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Accesories</a></div>
                                                            <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Pendrive USB 3.0 Flash 64 GB</a></h5>
                                                        </div>
                                                        <div className="flex-center-between mb-3">
                                                            <div className="prodcut-price">
                                                                <div className="text-gray-100">$110,00</div>
                                                            </div>
                                                            <div className="d-none d-xl-block prodcut-add-cart">
                                                                <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="product-item__footer">
                                                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                                                <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="js-slide">
                                    <ul className="row list-unstyled products-group no-gutters mb-0 overflow-visible">
                                        <li className="col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                            <div className="product-item__outer h-100">
                                                <div className="product-item__inner p-md-3 row no-gutters">
                                                    <div className="col col-lg-auto col-xl-5 col-wd-auto product-media-left">
                                                        <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="/assets/img/150X140/img1.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="col col-xl-7 col-wd product-item__body pl-2 pl-lg-3 pl-xl-0 pl-wd-3 mr-wd-1">
                                                        <div className="mb-4 mb-xl-2 mb-wd-4">
                                                            <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Tablets</a></div>
                                                            <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet Air 3 WiFi 64GB Gold</a></h5>
                                                        </div>
                                                        <div className="flex-center-between mb-3">
                                                            <div className="prodcut-price">
                                                                <div className="text-gray-100">$629,00</div>
                                                            </div>
                                                            <div className="d-none d-xl-block prodcut-add-cart">
                                                                <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="product-item__footer">
                                                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                                                <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                            <div className="product-item__outer h-100">
                                                <div className="product-item__inner p-md-3 row no-gutters">
                                                    <div className="col col-lg-auto col-xl-5 col-wd-auto product-media-left">
                                                        <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="/assets/img/150X140/img2.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="col col-xl-7 col-wd product-item__body pl-2 pl-lg-3 pl-xl-0 pl-wd-3 mr-wd-1">
                                                        <div className="mb-4 mb-xl-2 mb-wd-4">
                                                            <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Laptops & Computers</a></div>
                                                            <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook  Revolve 810 G2</a></h5>
                                                        </div>
                                                        <div className="flex-center-between mb-3">
                                                            <div className="prodcut-price">
                                                                <div className="text-gray-100">$1 299,00</div>
                                                            </div>
                                                            <div className="d-none d-xl-block prodcut-add-cart">
                                                                <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="product-item__footer">
                                                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                                                <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 remove-divider">
                                            <div className="product-item__outer h-100">
                                                <div className="product-item__inner p-md-3 row no-gutters">
                                                    <div className="col col-lg-auto col-xl-5 col-wd-auto product-media-left">
                                                        <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="/assets/img/150X140/img3.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="col col-xl-7 col-wd product-item__body pl-2 pl-lg-3 pl-xl-0 pl-wd-3 mr-wd-1">
                                                        <div className="mb-4 mb-xl-2 mb-wd-4">
                                                            <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Accesories</a></div>
                                                            <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Pendrive USB 3.0 Flash 64 GB</a></h5>
                                                        </div>
                                                        <div className="flex-center-between mb-3">
                                                            <div className="prodcut-price">
                                                                <div className="text-gray-100">$110,00</div>
                                                            </div>
                                                            <div className="d-none d-xl-block prodcut-add-cart">
                                                                <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="product-item__footer">
                                                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                                                <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="js-slide">
                                    <ul className="row list-unstyled products-group no-gutters mb-0 overflow-visible">
                                        <li className="col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                            <div className="product-item__outer h-100">
                                                <div className="product-item__inner p-md-3 row no-gutters">
                                                    <div className="col col-lg-auto col-xl-5 col-wd-auto product-media-left">
                                                        <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="/assets/img/150X140/img1.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="col col-xl-7 col-wd product-item__body pl-2 pl-lg-3 pl-xl-0 pl-wd-3 mr-wd-1">
                                                        <div className="mb-4 mb-xl-2 mb-wd-4">
                                                            <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Tablets</a></div>
                                                            <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet Air 3 WiFi 64GB Gold</a></h5>
                                                        </div>
                                                        <div className="flex-center-between mb-3">
                                                            <div className="prodcut-price">
                                                                <div className="text-gray-100">$629,00</div>
                                                            </div>
                                                            <div className="d-none d-xl-block prodcut-add-cart">
                                                                <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="product-item__footer">
                                                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                                                <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                                            <div className="product-item__outer h-100">
                                                <div className="product-item__inner p-md-3 row no-gutters">
                                                    <div className="col col-lg-auto col-xl-5 col-wd-auto product-media-left">
                                                        <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="/assets/img/150X140/img2.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="col col-xl-7 col-wd product-item__body pl-2 pl-lg-3 pl-xl-0 pl-wd-3 mr-wd-1">
                                                        <div className="mb-4 mb-xl-2 mb-wd-4">
                                                            <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Laptops & Computers</a></div>
                                                            <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook  Revolve 810 G2</a></h5>
                                                        </div>
                                                        <div className="flex-center-between mb-3">
                                                            <div className="prodcut-price">
                                                                <div className="text-gray-100">$1 299,00</div>
                                                            </div>
                                                            <div className="d-none d-xl-block prodcut-add-cart">
                                                                <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="product-item__footer">
                                                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                                                <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 remove-divider">
                                            <div className="product-item__outer h-100">
                                                <div className="product-item__inner p-md-3 row no-gutters">
                                                    <div className="col col-lg-auto col-xl-5 col-wd-auto product-media-left">
                                                        <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="/assets/img/150X140/img3.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="col col-xl-7 col-wd product-item__body pl-2 pl-lg-3 pl-xl-0 pl-wd-3 mr-wd-1">
                                                        <div className="mb-4 mb-xl-2 mb-wd-4">
                                                            <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Accesories</a></div>
                                                            <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Pendrive USB 3.0 Flash 64 GB</a></h5>
                                                        </div>
                                                        <div className="flex-center-between mb-3">
                                                            <div className="prodcut-price">
                                                                <div className="text-gray-100">$110,00</div>
                                                            </div>
                                                            <div className="d-none d-xl-block prodcut-add-cart">
                                                                <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="product-item__footer">
                                                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                                                <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Prodcut-cards-carousel --> */}
                        
                        {/* <!-- Banner 2 columns --> */}
                        <div className="mb-8">
                            <div className="row">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <a href="../shop/shop.html">
                                        <img className="img-fluid" src="/assets/img/536X150/img1.jpg" alt="Image Description"/>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <a href="../shop/shop.html">
                                        <img className="img-fluid" src="/assets/img/536X150/img2.jpg" alt="Image Description"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Banner 2 columns --> */}
                        
                        {/* <!-- Smartphones --> */}
                        <div className="position-relative">
                            <div className="border-bottom border-color-1 mb-2">
                                <h3 className="section-title mb-0 pb-2 font-size-22">Smartphones</h3>
                            </div>
                            <div className="js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1"
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
                                }]'>
                                <div className="js-slide products-group">
                                    <div className="product-item">
                                        <div className="product-item__outer h-100">
                                            <div className="product-item__inner px-wd-4 p-2 p-md-3">
                                                <div className="product-item__body pb-xl-2">
                                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                    <div className="mb-2">
                                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img1.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$685,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-item__footer">
                                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
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
                                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                    <div className="mb-2">
                                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img2.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$685,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-item__footer">
                                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
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
                                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                    <div className="mb-2">
                                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img3.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$685,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-item__footer">
                                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
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
                                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                    <div className="mb-2">
                                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img4.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$685,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-item__footer">
                                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
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
                                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                    <div className="mb-2">
                                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img5.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$685,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-item__footer">
                                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
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
                                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                    <div className="mb-2">
                                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img6.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$685,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-item__footer">
                                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
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
                                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                    <div className="mb-2">
                                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img7.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$685,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-item__footer">
                                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
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
                                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                    <div className="mb-2">
                                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img1.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$685,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-item__footer">
                                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
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
                                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                    <div className="mb-2">
                                                        <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img1.jpg" alt="Image Description"/></a>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">$685,00</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-item__footer">
                                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Smartphones --> */}


                        
                    </div>
                </div>
            </div>
            {/* <!-- Brand Carousel --> */}
            <div className="container mb-8">
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
                                <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img1.png" alt="Image Description"/>
                            </a>
                        </div>
                        <div className="js-slide">
                            <a href="#" className="link-hover__brand">
                                <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img2.png" alt="Image Description"/>
                            </a>
                        </div>
                        <div className="js-slide">
                            <a href="#" className="link-hover__brand">
                                <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img3.png" alt="Image Description"/>
                            </a>
                        </div>
                        <div className="js-slide">
                            <a href="#" className="link-hover__brand">
                                <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img4.png" alt="Image Description"/>
                            </a>
                        </div>
                        <div className="js-slide">
                            <a href="#" className="link-hover__brand">
                                <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img5.png" alt="Image Description"/>
                            </a>
                        </div>
                        <div className="js-slide">
                            <a href="#" className="link-hover__brand">
                                <img className="img-fluid m-auto max-height-50" src="/assets/img/200X60/img6.png" alt="Image Description"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Brand Carousel --> */}
        </main>
  )
}