export default function LatestProductSingleblock({item}){
    return (
        <li className="mb-4">
        <div className="row">
            <div className="col-auto">
                <a href="../shop/single-product-fullwidth.html" className="d-block width-75">
                    <img className="img-fluid" src={item.image} alt="Image Description" />
                </a>
            </div>
            <div className="col">
                <h3 className="text-lh-1dot2 font-size-14 mb-0"><a href="../shop/single-product-fullwidth.html">{item.Title}</a></h3>
                {/* <div className="text-warning text-ls-n2 font-size-16 mb-1" style={{ width: "80px" }}>
                    <small className="fas fa-star"></small>
                    <small className="fas fa-star"></small>
                    <small className="fas fa-star"></small>
                    <small className="fas fa-star"></small>
                    <small className="far fa-star text-muted"></small>
                </div> */}
                <div className="font-weight-bold font-size-15">
                ৳{item.offer_price}
                </div>
            </div>
        </div>
    </li>
    )
}