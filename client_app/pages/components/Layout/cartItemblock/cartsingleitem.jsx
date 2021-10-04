import { useSelector } from "react-redux";

export default function CartSingleItem({item}){

    let uid = item.product_id;

    let singleProductData = useSelector((state) =>
    state.productState.products.find((ele) => ele.id == uid)
  );

  let mod_title = String(singleProductData.Title).substring(0,22)+"...";

    return (
        <li className="border-bottom pb-3 mb-3">
                <div className="">
                    <ul className="list-unstyled row mx-n2">
                        <li className="px-2 col-auto">
                            <img className="img-fluid" style={{height:'3rem' }} src={singleProductData.image} clalt="Image Description" />
                        </li>
                        <li className="px-2 col">
                            <h5 className="text-blue font-size-14 font-weight-bold">{mod_title}</h5>
                            <span className="font-size-14">{item.product_quantity} × ৳ {singleProductData.offer_price}</span>
                        </li>
                        <li className="px-2 col-auto">
                            <a href="#" className="text-gray-90"><i className="ec ec-close-remove"></i></a>
                        </li>
                    </ul>
                </div>
            </li>
    )
}