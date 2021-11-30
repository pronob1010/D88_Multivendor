import { useSelector } from "react-redux";
import storeCardcat from "./components/stores/storeCard";

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:8000/api/vendor_catalog/sellers/`);
    const seller_data = await res.json();
  
    if (!seller_data) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: { seller_data },  
    };
  }

export default function AllShop({seller_data}) {

    let categories_list = useSelector(state => state.categoryState.categories);

    
      

    
    let cat_items = categories_list.map(item => {
        // console.log(item);
        return (
            <div className="js-slide products-group">
            <div className="product-item">
                <div className="product-item__outer h-100">
                    <div className="product-item__inner px-wd-4 p-2 p-md-3">
                        <div className="product-item__body pb-xl-2">
                            {/* <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div> */}
                            <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">{item.title}</a></h5>
                            <div className="mb-2">
                                <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src={item.image} alt="Image Description" /></a>
                            </div>
                            {/* <div className="flex-center-between mb-1">
                                <div className="prodcut-price">
                                    <div className="text-gray-100">$685,00</div>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                    <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart"></i></a>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="product-item__footer">
                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        )
        // return (<h1> hi </h1>)
    })


    let seller_list = seller_data.map(item => {
        console.log(item.slug);
        let link = "/stores/"+item.slug;
        return (
            <li className="col-6 col-md-2 col-xl-1gdot7 product-item">
            <div className="product-item__outer h-100 w-100">
                <div className="product-item__inner px-xl-4 p-3">
                    <div className="product-item__body pb-xl-2">
                        <div className="mb-2">
                            <a href={link} className="d-block text-center"><img className="img-fluid" src={item.shop_info[0].primary_logo} alt="Image Description"/></a>
                        </div>
                        <h5 className="text-center mb-1 product-item__title"><a href={link} className="font-size-15 text-gray-90">{item.shop_name}</a></h5>
                    </div>
                </div>
            </div>
        </li>
        )
    })

    return (
        <main id="content" role="main">
            {/* <!-- breadcrumb --> */}
            <div className="bg-gray-13 bg-md-transparent">
                <div className="container">
                    {/* <!-- breadcrumb --> */}
                    <div className="my-md-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="/">Home</a></li>
                                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">All Stores</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End breadcrumb --> */}
                </div>
            </div>
            {/* <!-- End breadcrumb --> */}

            <div className="container">
                <div className="mb-6">
                    <div className="d-flex justify-content-between align-items-center border-bottom border-color-1 flex-lg-nowrap flex-wrap mb-4">
                        <h3 className="section-title section-title__full mb-0 pb-2 font-size-22"> All Shops </h3>
                    </div>

                    <ul className="row list-unstyled products-group no-gutters mb-6">
                        
                      {seller_list}

                    </ul>
                    
                    {/* <!-- People buying in this category --> */}
                    <div className="position-relative">
                        <div className="border-bottom border-color-1 mb-2">
                            <h3 className="section-title section-title__full d-inline-block mb-0 pb-2 font-size-22">People category</h3>
                        </div>
                        <div className="js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1"
                            data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-3 mt-md-0"
                            data-slides-show="6"
                            data-slides-scroll="1"
                            data-arrows-classes="position-absolute top-0 font-size-17 u-slick__arrow-normal top-10"
                            data-arrow-left-classes="fa fa-angle-left right-1"
                            data-arrow-right-classes="fa fa-angle-right right-0"
                            data-responsive='[{
                              "breakpoint": 1400,
                              "settings": {
                                "slidesToShow": 5
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

                            {cat_items}

                        </div>
                    </div>
                    {/* <!-- End People buying in this category --> */}
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
            </div>
        </main>
    )
}