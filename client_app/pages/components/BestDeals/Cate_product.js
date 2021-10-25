const Cate_product = ({prod}) => {
    const category_name = localStorage.getItem("cate_name");
    return (
        <li className="col-xl-2 product-item max-width-xl-100 remove-divider">
            <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                <div className="product-item__inner bg-white p-3">
                    <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">{category_name}</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">{prod.Title}</a></h5>
                        <div className="mb-2">
                            <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src={prod.image} alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                            <div className="prodcut-price">
                                <div className="text-gray-100">৳ {prod.offer_price}</div>
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
    )
}

export default Cate_product
