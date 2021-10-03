import Link from "next/link";

export default function ShopCard({data}) {

    

    return (
        <li className="col-6 col-md-3 col-wd-2gdot4 product-item">
            <div className="product-item__outer h-100">
                <div className="product-item__inner px-xl-4 p-3">
                    <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">{data.category}</a></div>
                        <h5 className="mb-1 product-item__title">
                            {/* <Link href="/shop/1"> */}
                                <a className="text-blue font-weight-bold" href={`/shop/${data.id}`}>{data.Title}</a>
                            {/* </Link> */}
                        </h5>
                        <div className="mb-2">
                            <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src={data.image}  alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                            <div className="prodcut-price d-flex align-items-center position-relative">
                                <ins className="font-size-20 text-red text-decoration-none">৳{data.selling_price}</ins>
                                <del className="font-size-12 tex-gray-6 position-absolute bottom-100">৳{data.offer_price}</del>
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
        </li>
    )
}