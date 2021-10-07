import { useSelector } from 'react-redux';

export default function CheckoutSingleProductBlock({ item }) {
    let uid = item.product_id;

    let singleProductData = useSelector((state) =>
        state.productState.products.find((ele) => ele.id == uid)
    );
    let mod_title = String(singleProductData.Title).substring(0, 35) + "...";
    let this_product_final_price = singleProductData.offer_price * item.product_quantity;
    
    return (
        <tr className="cart_item">
            <td>{mod_title}&nbsp;<strong className="product-quantity">× {item.product_quantity}</strong></td>
            <td>৳ {this_product_final_price}</td>
        </tr>
    )
}