import { useSelector } from "react-redux";
import ImagePopover from './../../../public/assets/vendor/summernote/src/js/base/module/ImagePopover';

export default function SingleProductBlock({ item }) {

    let uid = item.product_id;

    let singleProductData = useSelector((state) =>
        state.productState.products.find((ele) => ele.id == uid)
    );

    let mod_title = String(singleProductData.Title).substring(0, 35) + "...";

    let this_product_final_price = singleProductData.offer_price * item.product_quantity;

    return (
        <tr>
            <td className="text-center">
                <a href="#" className="text-gray-32 font-size-26">×</a>
            </td>
            <td className="d-none d-md-table-cell">
                <a href="#"><img className="img-fluid max-width-100 p-1 border border-color-1" src={singleProductData.image} alt="Image Description" /></a>
            </td>

            <td data-title="Product">
                <a href="#" className="text-gray-90">{mod_title}</a>
            </td>

            <td data-title="Price">
                <span className="">৳ {singleProductData.offer_price}</span>
            </td>

            <td data-title="Quantity">
                <span className="sr-only">Quantity</span>

                <div className="border rounded-pill py-1 width-122 w-xl-80 px-3 border-color-1">
                    <div className="js-quantity row align-items-center">
                        <div className="col">
                            <input className="js-result form-control h-auto border-0 rounded p-0 shadow-none" type="text" value={item.product_quantity} />
                        </div>
                        <div className="col-auto pr-1">
                            <a className="js-minus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0" href="javascript:;">
                                <small className="fas fa-minus btn-icon__inner"></small>
                            </a>
                            <a className="js-plus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0" href="javascript:;">
                                <small className="fas fa-plus btn-icon__inner"></small>
                            </a>
                        </div>
                    </div>
                </div>

            </td>

            <td data-title="Total">
                <span className="">৳ {this_product_final_price}</span>
            </td>
        </tr>
    )
}