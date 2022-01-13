import { useRouter } from "next/dist/client/router";
import { useSelector, useDispatch } from 'react-redux';

export default function RecommendedProductCard({item}) {

    let singleProductData = useSelector((state) => state.productState.products.find((ele) => ele.id == item));
    
    let categoryName;
    
    let categories_list = useSelector(state => state.categoryState.categories);
    categories_list.find(ele => {
        if(ele.id==singleProductData.category){
            categoryName = ele.title;
        }
    })

    let mod_title = String(singleProductData.Title).substring(0, 35) + "...";

    const dispatch = useDispatch();

    let product_id;
    let p_quantity = 1;

    let router = useRouter();
    const cartHandeler = (e)=>{
        
        product_id = e.target.attributes.pass.value;
        dispatch({
            type : "ADD_TO_CART", 
            value : product_id,
            quantity : p_quantity,
        });
        router.push('#');
    }

    const fevHandeler = (e)=>{
        
        product_id = e.target.attributes.pass.value;
        dispatch({
            type : "ADD_TO_WISHLIST",
            value : product_id,
        });
        router.push('#');
    }

    return (
        <div className="js-slide products-group">
            <div className="product-item">
                <div className="product-item__outer h-100">
                    <div className="product-item__inner px-wd-4 p-2 p-md-3">
                        <div className="product-item__body pb-xl-2">
                            <div className="mb-2"><a href={`/shop/${singleProductData.id}`} className="font-size-12 text-gray-5">{categoryName}</a></div>
                            <h5 className="mb-1 product-item__title"><a href={`/shop/${singleProductData.id}`} className="text-blue font-weight-bold">{mod_title}</a></h5>
                            <div className="mb-2">
                                <a href={`/shop/${singleProductData.id}`} className="d-block text-center"><img className="img-fluid" src={singleProductData.image} alt="Image Description" /></a>
                            </div>
                            <div className="flex-center-between mb-1">
                                <div className="prodcut-price">
                                    <div className="text-gray-100">৳ {singleProductData.offer_price}</div>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                    <a className="btn-add-cart btn-primary transition-3d-hover"><i onClick={cartHandeler} className="ec ec-add-to-cart"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="product-item__footer">
                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15"></i> Compare</a>
                                <a onClick={fevHandeler} pass={singleProductData.id} className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}