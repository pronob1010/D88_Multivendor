import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';


export default function SingleProductBlock({ item }) {


    let uid = item.product_id;

    let singleProductData = useSelector((state) =>
        state.productState.products.find((ele) => ele.id == uid)
    );

    let mod_title = String(singleProductData.Title).substring(0, 35) + "...";

    let this_product_final_price = singleProductData.offer_price * item.product_quantity;

    const [final_quantity, setfinal_quantity] = useState(item.product_quantity);

  const dispatch = useDispatch();

    // function cartHandeler(d_quantity) {
        
    //     dispatch({
    //       type : "ADD_TO_CART_FINAL",
    //       value : uid,
    //       quantity : d_quantity,
    //   });
    // }


    function minusHandel() {
        if (final_quantity > 1) {
            setfinal_quantity(final_quantity - 1);

            dispatch({
                type : "ADD_TO_CART_FINAL",
                value : uid,
                quantity : final_quantity-1,
            });
        }
      }
    
      function plusHandel() {
        setfinal_quantity(final_quantity + 1);
        dispatch({
            type : "ADD_TO_CART_FINAL",
            value : uid,
            quantity : final_quantity+1,
        });
      }

    

    return (
        <tr>
            <th className="text-center">
                <a href="#" className="text-gray-32 font-size-26">×</a>
            </th>
            <th className="d-none d-md-table-cell">
                <a href="#"><img className="img-fluid max-width-100 p-1 border border-color-1" src={singleProductData.image} alt="Image Description" /></a>
            </th>

            <th data-title="Product">
                <a href="#" className="text-gray-90">{mod_title}</a>
            </th>

            <th data-title="Price">
                <span className="">৳ {singleProductData.offer_price}</span>
            </th>

            <th data-title="Quantity">
                <span className="sr-only">Quantity</span>

                <div className="border rounded-pill py-1 width-122 w-xl-80 px-3 border-color-1">
                    <div className="js-quantity row align-items-center">
                        <div className="col">
                            <input className="js-result form-control h-auto border-0 rounded p-0 shadow-none" type="text" value={final_quantity} />
                        </div>
                        <div className="col-auto pr-1">
                            <a className="js-minus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0" href="javascript:;" onClick={minusHandel}>
                                <small className="fas fa-minus btn-icon__inner"></small>
                            </a>
                            <a className="js-plus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0" href="javascript:;" onClick={plusHandel}>
                                <small className="fas fa-plus btn-icon__inner"></small>
                            </a>
                        </div>
                    </div>
                </div>

            </th>

            <th data-title="Total">
                <span className="">৳ {this_product_final_price}</span>
            </th>
        </tr>
    )
}