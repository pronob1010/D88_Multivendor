import { useState } from "react";
import { connectAdvanced, useSelector } from "react-redux";
import ShopCard from "../Shop/shop_single_card";
import IndexPageSingleCatItem from "./IndexPageSingleCatItem";
import ShopCard2 from "./shopcard2";

export default function BestDeals() {

    const [Data_id, setData_id] = useState('');
    const [Data_href, setData_href] = useState('');

    let dataset = useSelector((state) => state.productState.products);

    // console.log("-----")
    // console.log(dataset[0])
    // console.log("-----")


    let updateSubSection = (e) => {
        // console.log(e.target.getAttribute("data_href"));
        // console.log(e.target.getAttribute("data_id"));

        setData_id(e.target.getAttribute("data_id"));
        setData_href(e.target.getAttribute("data_href"));

        // console.log(dataset);

        // console.log(Data_id, Data_href);
        // return (

        // )
    }

    let categories_list = useSelector(state => state.categoryState.categories);

    let cat_list = categories_list.map(item => {

        // console.log(item);

        let data_id = item.slug + "-tab";
        let data_href = "#" + item.slug;

        // return (<IndexPageSingleCatItem item={item} key={item.id} />)

        return (
            <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                <a className="nav-link " id={data_id} data-toggle="pill" href={Data_href} role="tab" aria-controls={item.slug} aria-selected="false">
                    <div className="d-md-flex justify-content-md-center align-items-md-center" data_id={data_id} data_href={data_href} onClick={updateSubSection}>
                        {item.title}
                    </div>
                </a>
            </li>
        )
    });
    
    let catSubSec_list = categories_list.map(item => {

        let data_id = item.slug + "-tab";
        let data_href = "#" + item.slug;

        // console.log(dataset);

        let product_list = [];

        dataset.map( data_item => {
            if (data_item.category== item.id) { 
                console.log(data_item);
                product_list.push(data_item); } })

    

        

        
        return (
            <div className="tab-pane fade pt-2 show" id={item.slug} role="tabpanel" aria-labelledby={data_id}>
                <div className="row no-gutters">
                    <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                        <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                            {/* {
                                for (let i = 0; i < 4; i++) {
                                    if (product_list[i] != null){
                                        console.log(i);
                                    }
                                }
                            } */}

                        <ShopCard2 data = {product_list[0]} key = {product_list[0].id}/>
                        <ShopCard2 data = {product_list[1]} key = {product_list[1].id}/>
                        <ShopCard2 data = {product_list[2]} key = {product_list[2].id}/>
                        <ShopCard2 data = {product_list[3]} key = {product_list[3].id}/>
                            
                        </ul>
                    </div>
                    <div className="col-md-6 col-wd-4 products-group-1">
                        <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                            <li className="col product-item remove-divider">
                                <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                                    <div className="product-item__inner bg-white p-3">
                                        <div className="product-item__body d-flex flex-column">
                                            <div className="mb-1">
                                                <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Game Consoles</a></div>
                                                <h5 className="mb-0 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">{product_list[1].Title}</a></h5>
                                            </div>
                                            <div className="mb-1 min-height-4-1-4">
                                                <a href="#" className="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img className="img-fluid" src={product_list[1].image} alt="Image Description" /></a>

                                                <div className="row mx-gutters-2 mb-3">
                                                    <div className="col-auto">

                                                        <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;"
                                                            data-src="/assets/img/1920X1080/img1.jpg"
                                                            data-fancybox="fancyboxGallery6"
                                                            data-caption="Electro in frames - image #01"
                                                            data-speed="700"
                                                            data-is-infinite="true">
                                                            <img className="img-fluid border" src="/assets/img/100X100/img1.jpg" alt="Image Description" />

                                                            <span className="u-media-viewer__container">
                                                                <span className="u-media-viewer__icon">
                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                </span>
                                                            </span>
                                                        </a>

                                                    </div>

                                                    <div className="col-auto">

                                                        <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;"
                                                            data-src="/assets/img/1920X1080/img2.jpg"
                                                            data-fancybox="fancyboxGallery6"
                                                            data-caption="Electro in frames - image #02"
                                                            data-speed="700"
                                                            data-is-infinite="true">
                                                            <img className="img-fluid border" src="/assets/img/100X100/img2.jpg" alt="Image Description" />

                                                            <span className="u-media-viewer__container">
                                                                <span className="u-media-viewer__icon">
                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                </span>
                                                            </span>
                                                        </a>

                                                    </div>

                                                    <div className="col-auto">

                                                        <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;"
                                                            data-src="/assets/img/1920X1080/img3.jpg"
                                                            data-fancybox="fancyboxGallery6"
                                                            data-caption="Electro in frames - image #03"
                                                            data-speed="700"
                                                            data-is-infinite="true">
                                                            <img className="img-fluid border" src="/assets/img/100X100/img3.jpg" alt="Image Description" />

                                                            <span className="u-media-viewer__container">
                                                                <span className="u-media-viewer__icon">
                                                                    <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                </span>
                                                            </span>
                                                        </a>

                                                    </div>
                                                    <div className="col"></div>
                                                </div>

                                            </div>
                                            <div className="flex-center-between">
                                                <div className="prodcut-price">
                                                    <div className="text-gray-100">৳{product_list[1].offer_price}</div>
                                                </div>
                                                <div className="d-none d-xl-block prodcut-add-cart">
                                                    <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i className="ec ec-add-to-cart mr-2"></i> Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-item__footer">
                                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                                <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Add to Wishlist</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                    <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                            {/* {
                                for (let i = 0; i < 4; i++) {
                                    if (product_list[i] != null){
                                        console.log(i);
                                    }
                                }
                            } */}

                        <ShopCard2 data = {product_list[0]} key = {product_list[0].id}/>
                        <ShopCard2 data = {product_list[1]} key = {product_list[1].id}/>
                        <ShopCard2 data = {product_list[2]} key = {product_list[2].id}/>
                        <ShopCard2 data = {product_list[3]} key = {product_list[3].id}/>
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
    });

    

    return (
        <div className="products-group-4-1-4 space-1 bg-gray-7">
            <h2 className="sr-only">Products Grid</h2>
            <div className="container">

                <div className="position-relative text-center z-index-2 mb-3">
                    <ul className="nav nav-classic nav-tab nav-tab-sm px-md-3 justify-content-start justify-content-lg-center flex-nowrap flex-lg-wrap overflow-auto overflow-lg-visble border-md-down-bottom-0 pb-1 pb-lg-0 mb-n1 mb-lg-0" id="pills-tab-1" role="tablist">
                        <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                            <a className="nav-link active " id="Tpills-one-example1-tab" data-toggle="pill" href="#Tpills-one-example1" role="tab" aria-controls="Tpills-one-example1" aria-selected="true">
                                <div className="d-md-flex justify-content-md-center align-items-md-center" data_id="Tpills-one-example1-tab" data_href="#Tpills-one-example1" onClick={updateSubSection}>
                                    Best Deals
                                </div>
                            </a>
                        </li>
                        {cat_list}
                    </ul>
                </div>

                <div className="tab-content" id="Tpills-tabContent">
                    <div className="tab-pane fade pt-2 show active" id="Tpills-one-example1" role="tabpanel" aria-labelledby="Tpills-one-example1-tab">
                        <div className="row no-gutters">
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                    
                                <ShopCard2 data = {dataset[0]} key = {dataset[0].id}/>
                                <ShopCard2 data = {dataset[1]} key = {dataset[1].id}/>
                                <ShopCard2 data = {dataset[2]} key = {dataset[2].id}/>
                                <ShopCard2 data = {dataset[3]} key = {dataset[3].id}/>

 
                                </ul>
                            </div>
                            <div className="col-md-6 col-wd-4 products-group-1">
                                <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                    <li className="col product-item remove-divider">
                                        <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                                            <div className="product-item__inner bg-white p-3">
                                                <div className="product-item__body d-flex flex-column">
                                                    <div className="mb-1">
                                                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Game Consoles</a></div>
                                                        <h5 className="mb-0 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">{dataset[0].Title} </a></h5>
                                                    </div>
                                                    <div className="mb-1 min-height-4-1-4">
                                                        <a href="#" className="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img className="img-fluid" src={dataset[0].image} alt="Image Description" /></a>

                                                        <div className="row mx-gutters-2 mb-3">
                                                            <div className="col-auto">

                                                                <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;"
                                                                    data-src="/assets/img/1920X1080/img1.jpg"
                                                                    data-fancybox="fancyboxGallery6"
                                                                    data-caption="Electro in frames - image #01"
                                                                    data-speed="700"
                                                                    data-is-infinite="true">
                                                                    <img className="img-fluid border" src="/assets/img/100X100/img1.jpg" alt="Image Description" />

                                                                    <span className="u-media-viewer__container">
                                                                        <span className="u-media-viewer__icon">
                                                                            <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                        </span>
                                                                    </span>
                                                                </a>

                                                            </div>

                                                            <div className="col-auto">

                                                                <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;"
                                                                    data-src="/assets/img/1920X1080/img2.jpg"
                                                                    data-fancybox="fancyboxGallery6"
                                                                    data-caption="Electro in frames - image #02"
                                                                    data-speed="700"
                                                                    data-is-infinite="true">
                                                                    <img className="img-fluid border" src="/assets/img/100X100/img2.jpg" alt="Image Description" />

                                                                    <span className="u-media-viewer__container">
                                                                        <span className="u-media-viewer__icon">
                                                                            <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                        </span>
                                                                    </span>
                                                                </a>

                                                            </div>

                                                            <div className="col-auto">

                                                                <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;"
                                                                    data-src="/assets/img/1920X1080/img3.jpg"
                                                                    data-fancybox="fancyboxGallery6"
                                                                    data-caption="Electro in frames - image #03"
                                                                    data-speed="700"
                                                                    data-is-infinite="true">
                                                                    <img className="img-fluid border" src="/assets/img/100X100/img3.jpg" alt="Image Description" />

                                                                    <span className="u-media-viewer__container">
                                                                        <span className="u-media-viewer__icon">
                                                                            <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                        </span>
                                                                    </span>
                                                                </a>

                                                            </div>
                                                            <div className="col"></div>
                                                        </div>

                                                    </div>
                                                    <div className="flex-center-between">
                                                        <div className="prodcut-price">
                                                            <div className="text-gray-100">৳{dataset[0].offer_price}</div>
                                                        </div>
                                                        <div className="d-none d-xl-block prodcut-add-cart">
                                                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i className="ec ec-add-to-cart mr-2"></i> Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-item__footer">
                                                    <div className="border-top pt-2 flex-center-between flex-wrap">
                                                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Add to Wishlist</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                            <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                    
                            <ShopCard2 data = {dataset[4]} key = {dataset[4].id}/>
                                <ShopCard2 data = {dataset[5]} key = {dataset[5].id}/>
                                <ShopCard2 data = {dataset[6]} key = {dataset[6].id}/>
                                <ShopCard2 data = {dataset[7]} key = {dataset[7].id}/>
                                    </ul>
                            </div>
                        </div>
                    </div>

                    {catSubSec_list}

                    {/* <div className="tab-pane fade pt-2 show" id={Data_id} role="tabpanel" aria-labelledby={Data_href}>
                    <div className="row no-gutters">
                        <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                            <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                                    <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                                        <div className="product-item__inner bg-white p-3">
                                            <div className="product-item__body pb-xl-2">
                                                <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                <div className="mb-2">
                                                    <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img1.jpg" alt="Image Description" /></a>
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
                                                    <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Add to Wishlist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                                    <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                                        <div className="product-item__inner bg-white p-3">
                                            <div className="product-item__body pb-xl-2">
                                                <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                                                <div className="mb-2">
                                                    <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img2.jpg" alt="Image Description" /></a>
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
                                                    <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Add to Wishlist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                    <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                                        <div className="product-item__inner bg-white p-3">
                                            <div className="product-item__body pb-xl-2">
                                                <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                <div className="mb-2">
                                                    <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img1.jpg" alt="Image Description" /></a>
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
                                                    <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Add to Wishlist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                    <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                                        <div className="product-item__inner bg-white p-3">
                                            <div className="product-item__body pb-xl-2">
                                                <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                                                <div className="mb-2">
                                                    <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img7.jpg" alt="Image Description" /></a>
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
                                                    <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Add to Wishlist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-wd-4 products-group-1">
                            <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                <li className="col product-item remove-divider">
                                    <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                                        <div className="product-item__inner bg-white p-3">
                                            <div className="product-item__body d-flex flex-column">
                                                <div className="mb-1">
                                                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Game Consoles</a></div>
                                                    <h5 className="mb-0 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                                                </div>
                                                <div className="mb-1 min-height-4-1-4">
                                                    <a href="#" className="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img className="img-fluid" src="/assets/img/564X520/img2.jpg" alt="Image Description" /></a>
                                                     
                                                    <div className="row mx-gutters-2 mb-3">
                                                        <div className="col-auto">
                                                             
                                                            <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;"
                                                                data-src="/assets/img/1920X1080/img1.jpg"
                                                                data-fancybox="fancyboxGallery6"
                                                                data-caption="Electro in frames - image #01"
                                                                data-speed="700"
                                                                data-is-infinite="true">
                                                                <img className="img-fluid border" src="/assets/img/100X100/img1.jpg" alt="Image Description" />

                                                                <span className="u-media-viewer__container">
                                                                    <span className="u-media-viewer__icon">
                                                                        <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                    </span>
                                                                </span>
                                                            </a>
                                                             
                                                        </div>

                                                        <div className="col-auto">
                                                             
                                                            <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;"
                                                                data-src="/assets/img/1920X1080/img2.jpg"
                                                                data-fancybox="fancyboxGallery6"
                                                                data-caption="Electro in frames - image #02"
                                                                data-speed="700"
                                                                data-is-infinite="true">
                                                                <img className="img-fluid border" src="/assets/img/100X100/img2.jpg" alt="Image Description" />

                                                                <span className="u-media-viewer__container">
                                                                    <span className="u-media-viewer__icon">
                                                                        <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                    </span>
                                                                </span>
                                                            </a>
                                                             
                                                        </div>

                                                        <div className="col-auto">
                                                             
                                                            <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;"
                                                                data-src="/assets/img/1920X1080/img3.jpg"
                                                                data-fancybox="fancyboxGallery6"
                                                                data-caption="Electro in frames - image #03"
                                                                data-speed="700"
                                                                data-is-infinite="true">
                                                                <img className="img-fluid border" src="/assets/img/100X100/img3.jpg" alt="Image Description" />

                                                                <span className="u-media-viewer__container">
                                                                    <span className="u-media-viewer__icon">
                                                                        <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                                                                    </span>
                                                                </span>
                                                            </a>
                                                             
                                                        </div>
                                                        <div className="col"></div>
                                                    </div>
                                                     
                                                </div>
                                                <div className="flex-center-between">
                                                    <div className="prodcut-price">
                                                        <div className="text-gray-100">$685,00</div>
                                                    </div>
                                                    <div className="d-none d-xl-block prodcut-add-cart">
                                                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i className="ec ec-add-to-cart mr-2"></i> Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-item__footer">
                                                <div className="border-top pt-2 flex-center-between flex-wrap">
                                                    <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                                    <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Add to Wishlist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                            <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                                    <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                                        <div className="product-item__inner bg-white p-3">
                                            <div className="product-item__body pb-xl-2">
                                                <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                <div className="mb-2">
                                                    <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img1.jpg" alt="Image Description" /></a>
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
                                                    <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Add to Wishlist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                                    <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                                        <div className="product-item__inner bg-white p-3">
                                            <div className="product-item__body pb-xl-2">
                                                <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                                                <div className="mb-2">
                                                    <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img2.jpg" alt="Image Description" /></a>
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
                                                    <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Add to Wishlist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                    <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                                        <div className="product-item__inner bg-white p-3">
                                            <div className="product-item__body pb-xl-2">
                                                <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                                                <div className="mb-2">
                                                    <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img1.jpg" alt="Image Description" /></a>
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
                                                    <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Add to Wishlist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                                    <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                                        <div className="product-item__inner bg-white p-3">
                                            <div className="product-item__body pb-xl-2">
                                                <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                                                <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                                                <div className="mb-2">
                                                    <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="/assets/img/212X200/img7.jpg" alt="Image Description" /></a>
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
                                                    <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Add to Wishlist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                </div>

            </div>


            <div className="container space-2 d-none">

                <div className="position-relative text-center z-index-2 mb-3">
                    <ul className="nav nav-classic nav-tab nav-tab-sm px-md-3 justify-content-start justify-content-lg-center flex-nowrap flex-lg-wrap overflow-auto overflow-lg-visble border-md-down-bottom-0 pb-1 pb-lg-0 mb-n1 mb-lg-0" id="pills-tab-2" role="tablist">
                        <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                            <a className="nav-link active " id="Gpills-one-example1-tab" data-toggle="pill" href="#Gpills-one-example1" role="tab" aria-controls="Gpills-one-example1" aria-selected="true">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    Best Deals
                                </div>
                            </a>
                        </li>
                        <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                            <a className="nav-link " id="Gpills-two-example1-tab" data-toggle="pill" href="#Gpills-two-example1" role="tab" aria-controls="Gpills-two-example1" aria-selected="false">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    TV & Video
                                </div>
                            </a>
                        </li>
                        <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                            <a className="nav-link " id="Gpills-three-example1-tab" data-toggle="pill" href="#Gpills-three-example1" role="tab" aria-controls="Gpills-three-example1" aria-selected="false">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    Cameras
                                </div>
                            </a>
                        </li>
                        <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                            <a className="nav-link " id="Gpills-four-example1-tab" data-toggle="pill" href="#Gpills-four-example1" role="tab" aria-controls="Gpills-four-example1" aria-selected="false">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    Audio
                                </div>
                            </a>
                        </li>
                        <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                            <a className="nav-link " id="Gpills-five-example1-tab" data-toggle="pill" href="#Gpills-five-example1" role="tab" aria-controls="Gpills-five-example1" aria-selected="false">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    Smartphones
                                </div>
                            </a>
                        </li>
                        <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                            <a className="nav-link " id="Gpills-six-example1-tab" data-toggle="pill" href="#Gpills-six-example1" role="tab" aria-controls="Gpills-six-example1" aria-selected="false">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    GPS & Navi
                                </div>
                            </a>
                        </li>
                        <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                            <a className="nav-link " id="Gpills-seven-example1-tab" data-toggle="pill" href="#Gpills-seven-example1" role="tab" aria-controls="Gpills-seven-example1" aria-selected="false">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    Computers
                                </div>
                            </a>
                        </li>
                        <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                            <a className="nav-link " id="Gpills-eight-example1-tab" data-toggle="pill" href="#Gpills-eight-example1" role="tab" aria-controls="Gpills-eight-example1" aria-selected="false">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    Portable Audio
                                </div>
                            </a>
                        </li>
                        <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
                            <a className="nav-link " id="Gpills-nine-example1-tab" data-toggle="pill" href="#Gpills-nine-example1" role="tab" aria-controls="Gpills-nine-example1" aria-selected="false">
                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                    Accessories
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>



                <div className="tab-content" id="Gpills-tabContent">
                    <div className="tab-pane fade pt-2 show active" id="Gpills-one-example1" role="tabpanel" aria-labelledby="Gpills-one-example1-tab">
                        <div className="row no-gutters">
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-wd-4 products-group-1">
                                <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                    <li className="col product-item remove-divider">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="d-flex flex-column">
                                                    <div className="mb-1">
                                                        <div className="mb-2">
                                                            <div className="bg-gray-1 bg-animation rounded height-10 w-40"></div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90"></div>
                                                            <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-450"></div>
                                                    </div>
                                                    <div className="mb-4">

                                                        <div className="row mx-gutters-2">
                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>
                                                            <div className="col"></div>
                                                        </div>

                                                    </div>
                                                    <div className="flex-center-between">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-40"></div>
                                                        <div className="bg-gray-1 height-35 width-134 rounded-pill"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade pt-2" id="Gpills-two-example1" role="tabpanel" aria-labelledby="Gpills-two-example1-tab">
                        <div className="row no-gutters">
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-wd-4 products-group-1">
                                <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                    <li className="col product-item remove-divider">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="d-flex flex-column">
                                                    <div className="mb-1">
                                                        <div className="mb-2">
                                                            <div className="bg-gray-1 bg-animation rounded height-10 w-40"></div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90"></div>
                                                            <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-450"></div>
                                                    </div>
                                                    <div className="mb-4">

                                                        <div className="row mx-gutters-2">
                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>
                                                            <div className="col"></div>
                                                        </div>

                                                    </div>
                                                    <div className="flex-center-between">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-40"></div>
                                                        <div className="bg-gray-1 height-35 width-134 rounded-pill"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade pt-2" id="Gpills-three-example1" role="tabpanel" aria-labelledby="Gpills-three-example1-tab">
                        <div className="row no-gutters">
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-wd-4 products-group-1">
                                <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                    <li className="col product-item remove-divider">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="d-flex flex-column">
                                                    <div className="mb-1">
                                                        <div className="mb-2">
                                                            <div className="bg-gray-1 bg-animation rounded height-10 w-40"></div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90"></div>
                                                            <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-450"></div>
                                                    </div>
                                                    <div className="mb-4">

                                                        <div className="row mx-gutters-2">
                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>
                                                            <div className="col"></div>
                                                        </div>

                                                    </div>
                                                    <div className="flex-center-between">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-40"></div>
                                                        <div className="bg-gray-1 height-35 width-134 rounded-pill"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade pt-2" id="Gpills-four-example1" role="tabpanel" aria-labelledby="Gpills-four-example1-tab">
                        <div className="row no-gutters">
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-wd-4 products-group-1">
                                <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                    <li className="col product-item remove-divider">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="d-flex flex-column">
                                                    <div className="mb-1">
                                                        <div className="mb-2">
                                                            <div className="bg-gray-1 bg-animation rounded height-10 w-40"></div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90"></div>
                                                            <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-450"></div>
                                                    </div>
                                                    <div className="mb-4">

                                                        <div className="row mx-gutters-2">
                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>
                                                            <div className="col"></div>
                                                        </div>

                                                    </div>
                                                    <div className="flex-center-between">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-40"></div>
                                                        <div className="bg-gray-1 height-35 width-134 rounded-pill"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade pt-2" id="Gpills-five-example1" role="tabpanel" aria-labelledby="Gpills-five-example1-tab">
                        <div className="row no-gutters">
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-wd-4 products-group-1">
                                <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                    <li className="col product-item remove-divider">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="d-flex flex-column">
                                                    <div className="mb-1">
                                                        <div className="mb-2">
                                                            <div className="bg-gray-1 bg-animation rounded height-10 w-40"></div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90"></div>
                                                            <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-450"></div>
                                                    </div>
                                                    <div className="mb-4">

                                                        <div className="row mx-gutters-2">
                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>
                                                            <div className="col"></div>
                                                        </div>

                                                    </div>
                                                    <div className="flex-center-between">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-40"></div>
                                                        <div className="bg-gray-1 height-35 width-134 rounded-pill"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade pt-2" id="Gpills-six-example1" role="tabpanel" aria-labelledby="Gpills-six-example1-tab">
                        <div className="row no-gutters">
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-wd-4 products-group-1">
                                <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                    <li className="col product-item remove-divider">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="d-flex flex-column">
                                                    <div className="mb-1">
                                                        <div className="mb-2">
                                                            <div className="bg-gray-1 bg-animation rounded height-10 w-40"></div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90"></div>
                                                            <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-450"></div>
                                                    </div>
                                                    <div className="mb-4">

                                                        <div className="row mx-gutters-2">
                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>
                                                            <div className="col"></div>
                                                        </div>

                                                    </div>
                                                    <div className="flex-center-between">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-40"></div>
                                                        <div className="bg-gray-1 height-35 width-134 rounded-pill"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade pt-2" id="Gpills-seven-example1" role="tabpanel" aria-labelledby="Gpills-seven-example1-tab">
                        <div className="row no-gutters">
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-wd-4 products-group-1">
                                <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                    <li className="col product-item remove-divider">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="d-flex flex-column">
                                                    <div className="mb-1">
                                                        <div className="mb-2">
                                                            <div className="bg-gray-1 bg-animation rounded height-10 w-40"></div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90"></div>
                                                            <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-450"></div>
                                                    </div>
                                                    <div className="mb-4">

                                                        <div className="row mx-gutters-2">
                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>
                                                            <div className="col"></div>
                                                        </div>

                                                    </div>
                                                    <div className="flex-center-between">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-40"></div>
                                                        <div className="bg-gray-1 height-35 width-134 rounded-pill"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade pt-2" id="Gpills-eight-example1" role="tabpanel" aria-labelledby="Gpills-eight-example1-tab">
                        <div className="row no-gutters">
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-wd-4 products-group-1">
                                <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                    <li className="col product-item remove-divider">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="d-flex flex-column">
                                                    <div className="mb-1">
                                                        <div className="mb-2">
                                                            <div className="bg-gray-1 bg-animation rounded height-10 w-40"></div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90"></div>
                                                            <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-450"></div>
                                                    </div>
                                                    <div className="mb-4">

                                                        <div className="row mx-gutters-2">
                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>
                                                            <div className="col"></div>
                                                        </div>

                                                    </div>
                                                    <div className="flex-center-between">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-40"></div>
                                                        <div className="bg-gray-1 height-35 width-134 rounded-pill"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade pt-2" id="Gpills-nine-example1" role="tabpanel" aria-labelledby="Gpills-nine-example1-tab">
                        <div className="row no-gutters">
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-wd-4 products-group-1">
                                <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                                    <li className="col product-item remove-divider">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="d-flex flex-column">
                                                    <div className="mb-1">
                                                        <div className="mb-2">
                                                            <div className="bg-gray-1 bg-animation rounded height-10 w-40"></div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90"></div>
                                                            <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-450"></div>
                                                    </div>
                                                    <div className="mb-4">

                                                        <div className="row mx-gutters-2">
                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>

                                                            <div className="col-auto">
                                                                <div className="bg-gray-1 width-60 height-60"></div>
                                                            </div>
                                                            <div className="col"></div>
                                                        </div>

                                                    </div>
                                                    <div className="flex-center-between">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-40"></div>
                                                        <div className="bg-gray-1 height-35 width-134 rounded-pill"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
                                <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                                        <div className="h-100 w-100 prodcut-box-shadow">
                                            <div className="bg-white p-3">
                                                <div className="pb-xl-2">
                                                    <div className="mb-2">
                                                        <div className="bg-gray-1 bg-animation rounded height-10 w-60"></div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="bg-gray-1 bg-animation rounded height-12 mb-1"></div>
                                                        <div className="bg-gray-1 bg-animation rounded height-12 w-80"></div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="bg-gray-1 height-190"></div>
                                                    </div>
                                                    <div className="flex-center-between mb-1">
                                                        <div className="bg-gray-1 bg-animation rounded height-20 w-60"></div>
                                                        <div className="bg-gray-1 height-35 width-35 rounded-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}