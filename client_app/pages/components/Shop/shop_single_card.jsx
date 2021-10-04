import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';


export default function ShopCard({data}) {

    let categoryName;
    let categories_list = useSelector(state => state.categoryState.categories);
    categories_list.find(ele => {
        if(ele.id==data.category){
            categoryName = ele.title;
        }
    })

    // let cart_state = useSelector(state => state.cartState.cart)
    // console.log("cart_state",cart_state)
    const dispatch = useDispatch();

    let product_id;
    let p_quantity = 1;

    let router = useRouter();
    const cartHandeler =(e)=>{
        
        product_id = e.target.attributes.pass.value;
        dispatch({
            type : "ADD_TO_CART", 
            value : product_id,
            quantity : p_quantity,
        });
        router.push('#');
    }


    

   

    return (
        <li className="col-6 col-md-3 col-wd-2gdot4 product-item">
            <div className="product-item__outer h-100">
                <div className="product-item__inner px-xl-4 p-3">
                    <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">{categoryName}</a></div>
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
                                <ins className="font-size-20 text-red text-decoration-none">৳{data.offer_price}</ins>
                                <del className="font-size-12 tex-gray-6 position-absolute bottom-100">৳{data.selling_price}</del>
                            </div>
                            <div className="d-xl-block prodcut-add-cart">
                                <a  className="btn-add-cart btn-primary transition-3d-hover"><i onClick={cartHandeler} className="ec ec-add-to-cart" pass={data.id}></i></a>
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