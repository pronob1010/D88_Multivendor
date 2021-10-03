import BrowseCategories from './components/Shop/BrowseCategories/BrowseCategories';
import RecommendedProductCard from './components/Shop/Recommended/RecommendedProductCard';
import ShopCard from './components/Shop/shop_single_card';
import { useSelector } from 'react-redux';

export default function Shop(){

    let datatest = useSelector((state) => state.productState.products);

    // datatest.map(item => console.log(item));

    let RegularShopCardList = (

        datatest.map(item => { return(<ShopCard data = {item} key={item.id}/>) })
    )

    return(
        <main id="content" role="main">
            {/* <!-- breadcrumb --> */}
            <div className="bg-gray-13 bg-md-transparent">
                <div className="container">
                    {/* <!-- breadcrumb --> */}
                    <div className="my-md-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="../home/index.html">Home</a></li>
                                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">Shop</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End breadcrumb --> */}
                </div>
            </div>
            {/* <!-- End breadcrumb --> */}

            <div className="container">
                <div className="row mb-8">
                    <div className="d-none d-xl-block col-xl-3 col-wd-2gdot5">
                        
                    <BrowseCategories />

                        <div className="mb-6">
                            <div className="border-bottom border-color-1 mb-5">
                                <h3 className="section-title section-title__sm mb-0 pb-2 font-size-18">Filters</h3>
                            </div>
                            <div className="border-bottom pb-4 mb-4">
                                <h4 className="font-size-14 mb-3 font-weight-bold">Brands</h4>

                                {/* <!-- Checkboxes --> */}
                                <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brandAdidas" />
                                        <label className="custom-control-label" for="brandAdidas">Adidas
                                            <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brandNewBalance" />
                                        <label className="custom-control-label" for="brandNewBalance">New Balance
                                            <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brandNike" />
                                        <label className="custom-control-label" for="brandNike">Nike
                                            <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brandFredPerry" />
                                        <label className="custom-control-label" for="brandFredPerry">Fred Perry
                                            <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="brandTnf" />
                                        <label className="custom-control-label" for="brandTnf">The North Face
                                            <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                                        </label>
                                    </div>
                                </div>
                                {/* <!-- End Checkboxes --> */}

                                {/* <!-- View More - Collapse --> */}
                                <div className="collapse" id="collapseBrand">
                                    <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="brandGucci" />
                                            <label className="custom-control-label" for="brandGucci">Gucci
                                                <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="brandMango" />
                                            <label className="custom-control-label" for="brandMango">Mango
                                                <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End View More - Collapse --> */}

                                {/* <!-- Link --> */}
                                <a className="link link-collapse small font-size-13 text-gray-27 d-inline-flex mt-2" data-toggle="collapse" href="#collapseBrand" role="button" aria-expanded="false" aria-controls="collapseBrand">
                                    <span className="link__icon text-gray-27 bg-white">
                                        <span className="link__icon-inner">+</span>
                                    </span>
                                    <span className="link-collapse__default">Show more</span>
                                    <span className="link-collapse__active">Show less</span>
                                </a>
                                {/* <!-- End Link --> */}
                            </div>
                            <div className="border-bottom pb-4 mb-4">
                                <h4 className="font-size-14 mb-3 font-weight-bold">Color</h4>

                                {/* <!-- Checkboxes --> */}
                                <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="categoryTshirt" />
                                        <label className="custom-control-label" for="categoryTshirt">Black <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span></label>
                                    </div>
                                </div>
                                <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="categoryShoes" />
                                        <label className="custom-control-label" for="categoryShoes">Black Leather <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span></label>
                                    </div>
                                </div>
                                <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="categoryAccessories" />
                                        <label className="custom-control-label" for="categoryAccessories">Black with Red <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span></label>
                                    </div>
                                </div>
                                <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="categoryTops" />
                                        <label className="custom-control-label" for="categoryTops">Gold <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span></label>
                                    </div>
                                </div>
                                <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="categoryBottom" />
                                        <label className="custom-control-label" for="categoryBottom">Spacegrey <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span></label>
                                    </div>
                                </div>
                                {/* <!-- End Checkboxes --> */}

                                {/* <!-- View More - Collapse --> */}
                                <div className="collapse" id="collapseColor">
                                    <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="categoryShorts" />
                                            <label className="custom-control-label" for="categoryShorts">Turquoise <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span></label>
                                        </div>
                                    </div>
                                    <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="categoryHats" />
                                            <label className="custom-control-label" for="categoryHats">White <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span></label>
                                        </div>
                                    </div>
                                    <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="categorySocks" />
                                            <label className="custom-control-label" for="categorySocks">White with Gold <span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span></label>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End View More - Collapse --> */}

                                {/* <!-- Link --> */}
                                <a className="link link-collapse small font-size-13 text-gray-27 d-inline-flex mt-2" data-toggle="collapse" href="#collapseColor" role="button" aria-expanded="false" aria-controls="collapseColor">
                                    <span className="link__icon text-gray-27 bg-white">
                                        <span className="link__icon-inner">+</span>
                                    </span>
                                    <span className="link-collapse__default">Show more</span>
                                    <span className="link-collapse__active">Show less</span>
                                </a>
                                {/* <!-- End Link --> */}
                            </div>
                            <div className="range-slider">
                                <h4 className="font-size-14 mb-3 font-weight-bold">Price</h4>
                                {/* <!-- Range Slider --> */}
                                <input className="js-range-slider" type="text"
                                data-extra-classes="u-range-slider u-range-slider-indicator u-range-slider-grid"
                                data-type="double"
                                data-grid="false"
                                data-hide-from-to="true"
                                data-prefix="$"
                                data-min="0"
                                data-max="3456"
                                data-from="0"
                                data-to="3456"
                                data-result-min="#rangeSliderExample3MinResult"
                                data-result-max="#rangeSliderExample3MaxResult" />
                                {/* <!-- End Range Slider --> */}
                                <div className="mt-1 text-gray-111 d-flex mb-4">
                                    <span className="mr-0dot5">Price: </span>
                                    <span>$</span>
                                    <span id="rangeSliderExample3MinResult" className=""></span>
                                    <span className="mx-0dot5"> — </span>
                                    <span>$</span>
                                    <span id="rangeSliderExample3MaxResult" className=""></span>
                                </div>
                                <button type="submit" className="btn px-4 btn-primary-dark-w py-2 rounded-lg">Filter</button>
                            </div>
                        </div>
                        <div className="mb-8">
                            <div className="border-bottom border-color-1 mb-5">
                                <h3 className="section-title section-title__sm mb-0 pb-2 font-size-18">Latest Products</h3>
                            </div>
                            <ul className="list-unstyled">
                                <li className="mb-4">
                                    <div className="row">
                                        <div className="col-auto">
                                            <a href="../shop/single-product-fullwidth.html" className="d-block width-75">
                                                <img className="img-fluid" src="/assets/img/300X300/img1.jpg" alt="Image Description" />
                                            </a>
                                        </div>
                                        <div className="col">
                                            <h3 className="text-lh-1dot2 font-size-14 mb-0"><a href="../shop/single-product-fullwidth.html">Notebook Black Spire V Nitro VN7-591G</a></h3>
                                            <div className="text-warning text-ls-n2 font-size-16 mb-1" style={{ width: "80px" }}>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="far fa-star text-muted"></small>
                                            </div>
                                            <div className="font-weight-bold">
                                                <del className="font-size-11 text-gray-9 d-block">$2299.00</del>
                                                <ins className="font-size-15 text-red text-decoration-none d-block">$1999.00</ins>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-4">
                                    <div className="row">
                                        <div className="col-auto">
                                            <a href="../shop/single-product-fullwidth.html" className="d-block width-75">
                                                <img className="img-fluid" src="/assets/img/300X300/img3.jpg" alt="Image Description" />
                                            </a>
                                        </div>
                                        <div className="col">
                                            <h3 className="text-lh-1dot2 font-size-14 mb-0"><a href="../shop/single-product-fullwidth.html">Notebook Black Spire V Nitro VN7-591G</a></h3>
                                            <div className="text-warning text-ls-n2 font-size-16 mb-1" style={{ width: "80px" }}>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="far fa-star text-muted"></small>
                                            </div>
                                            <div className="font-weight-bold font-size-15">
                                                $499.00
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-4">
                                    <div className="row">
                                        <div className="col-auto">
                                            <a href="../shop/single-product-fullwidth.html" className="d-block width-75">
                                                <img className="img-fluid" src="/assets/img/300X300/img5.jpg" alt="Image Description" />
                                            </a>
                                        </div>
                                        <div className="col">
                                            <h3 className="text-lh-1dot2 font-size-14 mb-0"><a href="../shop/single-product-fullwidth.html">Tablet Thin EliteBook Revolve 810 G6</a></h3>
                                            <div className="text-warning text-ls-n2 font-size-16 mb-1" style={{ width: "80px" }}>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="far fa-star text-muted"></small>
                                            </div>
                                            <div className="font-weight-bold font-size-15">
                                                $100.00
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-4">
                                    <div className="row">
                                        <div className="col-auto">
                                            <a href="../shop/single-product-fullwidth.html" className="d-block width-75">
                                                <img className="img-fluid" src="/assets/img/300X300/img6.jpg" alt="Image Description" />
                                            </a>
                                        </div>
                                        <div className="col">
                                            <h3 className="text-lh-1dot2 font-size-14 mb-0"><a href="../shop/single-product-fullwidth.html">Notebook Purple G952VX-T7008T</a></h3>
                                            <div className="text-warning text-ls-n2 font-size-16 mb-1" style={{ width: "80px" }}>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="far fa-star text-muted"></small>
                                            </div>
                                            <div className="font-weight-bold">
                                                <del className="font-size-11 text-gray-9 d-block">$2299.00</del>
                                                <ins className="font-size-15 text-red text-decoration-none d-block">$1999.00</ins>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-4">
                                    <div className="row">
                                        <div className="col-auto">
                                            <a href="../shop/single-product-fullwidth.html" className="d-block width-75">
                                                <img className="img-fluid" src="/assets/img/300X300/img10.png" alt="Image Description" />
                                            </a>
                                        </div>
                                        <div className="col">
                                            <h3 className="text-lh-1dot2 font-size-14 mb-0"><a href="../shop/single-product-fullwidth.html">Laptop Yoga 21 80JH0035GE W8.1</a></h3>
                                            <div className="text-warning text-ls-n2 font-size-16 mb-1" style={{ width: "80px" }}>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="far fa-star text-muted"></small>
                                            </div>
                                            <div className="font-weight-bold font-size-15">
                                                $1200.00
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-9 col-wd-9gdot5">
                        {/* <!-- Recommended Products --> */}
                        <div className="mb-6 d-none d-xl-block">
                            <div className="position-relative">
                                <div className="border-bottom border-color-1 mb-2">
                                    <h3 className="d-inline-block section-title section-title__full mb-0 pb-2 font-size-22">Recommended Products</h3>
                                </div>
                                <div className="js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-4 pt-2 px-1"
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
                                          "slidesToShow": 4
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
                                        <RecommendedProductCard />
                                        <RecommendedProductCard />
                                        <RecommendedProductCard />
                                        <RecommendedProductCard />
                                        <RecommendedProductCard />
                                        <RecommendedProductCard />
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Recommended Products --> */}

                        {/* <!-- Shop-control-bar Title --> */}
                        <div className="flex-center-between mb-3">
                            <h3 className="font-size-25 mb-0">Shop</h3>
                            <p className="font-size-14 text-gray-90 mb-0">Showing 1–25 of 56 results</p>
                        </div>
                        {/* <!-- End shop-control-bar Title --> */}
                        {/* <!-- Shop-control-bar --> */}
                        <div className="bg-gray-1 flex-center-between borders-radius-9 py-1">
                            <div className="d-xl-none">
                                {/* <!-- Account Sidebar Toggle Button --> */}
                                <a id="sidebarNavToggler1" className="btn btn-sm py-1 font-weight-normal" href="javascript:;" role="button"
                                    aria-controls="sidebarContent1"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-unfold-event="click"
                                    data-unfold-hide-on-scroll="false"
                                    data-unfold-target="#sidebarContent1"
                                    data-unfold-type="css-animation"
                                    data-unfold-animation-in="fadeInLeft"
                                    data-unfold-animation-out="fadeOutLeft"
                                    data-unfold-duration="500">
                                    <i className="fas fa-sliders-h"></i> <span className="ml-1">Filters</span>
                                </a>
                                {/* <!-- End Account Sidebar Toggle Button --> */}
                            </div>
                            <div className="px-3 d-none d-xl-block">
                                <ul className="nav nav-tab-shop" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="pills-one-example1-tab" data-toggle="pill" href="#pills-one-example1" role="tab" aria-controls="pills-one-example1" aria-selected="false">
                                            <div className="d-md-flex justify-content-md-center align-items-md-center">
                                                <i className="fa fa-th"></i>
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="d-flex">
                                <form method="get">
                                    {/* <!-- Select --> */}
                                    <select className="js-select selectpicker dropdown-select max-width-200 max-width-160-sm right-dropdown-0 px-2 px-xl-0"
                                        data-style="btn-sm bg-white font-weight-normal py-2 border text-gray-20 bg-lg-down-transparent border-lg-down-0">
                                        <option value="one" selected>Default sorting</option>
                                        <option value="two">Sort by popularity</option>
                                        <option value="three">Sort by average rating</option>
                                        <option value="four">Sort by latest</option>
                                        <option value="five">Sort by price: low to high</option>
                                        <option value="six">Sort by price: high to low</option>
                                    </select>
                                    {/* <!-- End Select --> */}
                                </form>
                                <form method="POST" className="ml-2 d-none d-xl-block">
                                    {/* <!-- Select --> */}
                                    <select className="js-select selectpicker dropdown-select max-width-120"
                                        data-style="btn-sm bg-white font-weight-normal py-2 border text-gray-20 bg-lg-down-transparent border-lg-down-0">
                                        <option value="one" selected>Show 20</option>
                                        <option value="two">Show 40</option>
                                        <option value="three">Show All</option>
                                    </select>
                                    {/* <!-- End Select --> */}
                                </form>
                            </div>
                            <nav className="px-3 flex-horizontal-center text-gray-20 d-none d-xl-flex">
                                <form method="post" className="min-width-50 mr-1">
                                    <input size="2" min="1" max="3" step="1" type="number" className="form-control text-center px-2 height-35" value="1" />
                                </form> of 3
                                <a className="text-gray-30 font-size-20 ml-2" href="#">→</a>
                            </nav>
                        </div>
                        {/* <!-- End Shop-control-bar --> */}
                        {/* <!-- Shop Body --> */}
                        {/* <!-- Tab Content --> */}
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade pt-2 show active" id="pills-one-example1" role="tabpanel" aria-labelledby="pills-one-example1-tab" data-target-group="groups">
                                <ul className="row list-unstyled products-group no-gutters">
                                
                                { RegularShopCardList }
                                
                                {/* <ShopCard />
                                <ShopCard />
                                <ShopCard />
                                <ShopCard />
                                <ShopCard />
                                <ShopCard />
                                <ShopCard />
                                <ShopCard />
                                <ShopCard />
                                <ShopCard />
                                <ShopCard />
                                <ShopCard /> */}
                                </ul>
                            </div>
                        </div>

                        {/* <!-- End Tab Content --> */}
                        {/* <!-- End Shop Body --> */}
                        {/* <!-- Shop Pagination --> */}
                        
                        <nav className="d-md-flex justify-content-between align-items-center border-top pt-3" aria-label="Page navigation example">
                            <div className="text-center text-md-left mb-3 mb-md-0">Showing 1–25 of 56 results</div>
                            <ul className="pagination mb-0 pagination-shop justify-content-center justify-content-md-start">
                                <li className="page-item"><a className="page-link current" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                            </ul>
                        </nav>
                        {/* <!-- End Shop Pagination --> */}
                    </div>
                </div>
                {/* <!-- Brand Carousel --> */}
                <div className="mb-6">
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