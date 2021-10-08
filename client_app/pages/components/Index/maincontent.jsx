import ShopCard from "../Shop/shop_single_card";
import { useSelector } from 'react-redux';
import IndexSlider from "./slider/slider";
import BestDeals from './../BestDeals/bestdeals';
import RecentViewed from './recentViewed/recentviewed';
import BestSeller from './../Bestsellers/bestsellers';

export default function MainContent(){

    let dataset = useSelector((state) => state.productState.products);

    let featured_dataset = useSelector((state) => state.PromotionalProductState.products);

    let featured = [];

    featured_dataset.map( item => { if (item.type=="featured") {dataset.find(ele => { if (ele.id == item.Select_Product) { featured.push(ele); } }) } } )

 

    

    // dataset.map(item => {
    //     if ( item.offer_percent >= 30 ){
    //         featured.push(item);
    //     }
    // });

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
        <>
        <main id="content" role="main">
        <IndexSlider />
        <div className="container">
           
        <div class="mb-6 row border rounded-lg mx-0 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                    {/* <!-- Feature List --> */}
                    <div class="media col px-6 px-xl-4 px-wd-8 flex-shrink-0 flex-xl-shrink-1 min-width-270-all py-3">
                        <div class="u-avatar mr-2">
                            <i class="text-primary ec ec-transport font-size-46"></i>
                        </div>
                        <div class="media-body text-center">
                            <span class="d-block font-weight-bold text-dark">Free Delivery</span>
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
                            <span class="d-block font-weight-bold text-dark">99 % Customer</span>
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

            <div className="mb-5">
                <div className="row">

                    <div className="col-md-auto mb-0 mb-md-0">
                        <div className="p-3 border border-width-2 border-primary borders-radius-20 bg-white min-width-370">
                            <div className="d-flex justify-content-between align-items-center m-1 ml-2">
                                <h3 className="font-size-22 mb-0 font-weight-normal text-lh-28 max-width-120">Special Offer</h3>
                                <div className="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                                    <span className="font-size-12">Save</span>
                                    <div className="font-size-20 font-weight-bold">$120</div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/320X300/img1.jpg" alt="Image Description" /></a>
                            </div>
                            <h5 className="mb-2 font-size-14 text-center mx-auto max-width-180 text-lh-18"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                            <div className="d-flex align-items-center justify-content-center mb-3">
                                <del className="font-size-18 mr-2 text-gray-2">$99,00</del>
                                <ins className="font-size-30 text-red text-decoration-none">$79,00</ins>
                            </div>
                            <div className="mb-3 mx-2">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="">Availavle: <strong>6</strong></span>
                                    <span className="">Already Sold: <strong>28</strong></span>
                                </div>
                                <div className="rounded-pill bg-gray-3 height-20 position-relative">
                                    <span className="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                                </div>
                            </div>
                            <div className="mb-2">
                                <h6 className="font-size-15 text-gray-2 text-center mb-3">Hurry Up! Offer ends in:</h6>
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
                    
                    
                    <div className="col">
                        
                        <div className="">
                             
                            <div className="position-relative bg-white text-center z-index-2">
                                <ul className="nav nav-classic nav-tab justify-content-center" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active " id="pills-one-example1-tab" data-toggle="pill" href="#pills-one-example1" role="tab" aria-controls="pills-one-example1" aria-selected="true">
                                            <div className="d-md-flex justify-content-md-center align-items-md-center">
                                                Featured
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " id="pills-two-example1-tab" data-toggle="pill" href="#pills-two-example1" role="tab" aria-controls="pills-two-example1" aria-selected="false">
                                            <div className="d-md-flex justify-content-md-center align-items-md-center">
                                                On Sale
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " id="pills-three-example1-tab" data-toggle="pill" href="#pills-three-example1" role="tab" aria-controls="pills-three-example1" aria-selected="false">
                                            <div className="d-md-flex justify-content-md-center align-items-md-center">
                                                Top Rated
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                           
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade pt-2 show active" id="pills-one-example1" role="tabpanel" aria-labelledby="pills-one-example1-tab">
                                    <ul className="row list-unstyled products-group no-gutters">
                                    { featuredProductCardList }
                                    </ul>
                                </div>
                                <div className="tab-pane fade pt-2" id="pills-two-example1" role="tabpanel" aria-labelledby="pills-two-example1-tab">
                                    <ul className="row list-unstyled products-group no-gutters">
                                        { OnSalesProductCardList }
                                    </ul>
                                </div>
                                <div className="tab-pane fade pt-2" id="pills-three-example1" role="tabpanel" aria-labelledby="pills-three-example1-tab">
                                    <ul className="row list-unstyled products-group no-gutters">
                                        { TopRatedProductCardList }
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                       
                    </div>
                   
                </div>
            </div>
            
        </div>
       
       <BestDeals />
       
        <div className="container">
        <BestSeller />
            <div className="mb-6">
                <a href="../shop/shop.html" className="d-block text-gray-90">
                    <div className="" style={{ backgroundimage: 'url(/assets/img/1400X206/img1.jpg)' }}>
                        <div className="space-top-2-md p-4 pt-6 pt-md-8 pt-lg-6 pt-xl-8 pb-lg-4 px-xl-8 px-lg-6">
                            <div className="flex-horizontal-center mt-lg-3 mt-xl-0 overflow-auto overflow-md-visble">
                                <h1 className="text-lh-38 font-size-32 font-weight-light mb-0 flex-shrink-0 flex-md-shrink-1">SHOP AND <strong>SAVE BIG</strong> ON HOTTEST TABLETS</h1>
                                <div className="ml-5 flex-content-center flex-shrink-0">
                                    <div className="bg-primary rounded-lg px-6 py-2">
                                        <em className="font-size-14 font-weight-light">STARTING AT</em>
                                        <div className="font-size-30 font-weight-bold text-lh-1">
                                            <sup className="">$</sup>79<sup className="">99</sup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            
            {/* <RecentViewed /> */}

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
           
        </div>
    </main>
    </>
    )
}