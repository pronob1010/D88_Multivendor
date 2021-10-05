import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';


export default function RecentShopCard({ data }) {

    // console.log(item);

    let categoryName;
    let categories_list = useSelector(state => state.categoryState.categories);
    categories_list.find(ele => {
        if (ele.id == data.category) {
            categoryName = ele.title;
        }
    })

    // let cart_state = useSelector(state => state.cartState.cart)
    // console.log("cart_state",cart_state)
    const dispatch = useDispatch();

    let product_id;
    let p_quantity = 1;

    let router = useRouter();
    const cartHandeler = (e) => {

        product_id = e.target.attributes.pass.value;
        dispatch({
            type: "ADD_TO_CART",
            value: product_id,
            quantity: p_quantity,
        });
        router.push('#');
    }


    return (

        <div className="js-slide products-group slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 166px; height: auto;" tabindex="0" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20">
            <div className="product-item">
                <div className="product-item__outer h-100">
                    <div className="product-item__inner px-wd-4 p-2 p-md-3">
                        <div className="product-item__body pb-xl-2">
                            <div className="mb-2"><a href="#" className="font-size-12 text-gray-5" tabindex="0">{categoryName}</a></div>
                            <h5 className="mb-1 product-item__title"><a href={`/shop/${data.id}`} className="text-blue font-weight-bold" tabindex="0">{data.Title}</a></h5>
                            <div className="mb-2">
                                <a href="../shop/single-product-fullwidth.html" className="d-block text-center" tabindex="0"><img className="img-fluid" src={data.image} alt="Image Description"/></a>
                            </div>
                            <div className="flex-center-between mb-1">
                                <div className="prodcut-price">
                                    <div className="text-gray-100">৳{data.offer_price}</div>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                    <a className="btn-add-cart btn-primary transition-3d-hover" tabindex="0"><i onClick={cartHandeler} className="ec ec-add-to-cart" pass={data.id}></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="product-item__footer">
                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                <a href="../shop/compare.html" className="text-gray-6 font-size-13" tabindex="0"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                <a href="../shop/wishlist.html" className="text-gray-6 font-size-13" tabindex="0"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}