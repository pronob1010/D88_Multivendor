import { useSelector } from 'react-redux';
import CartSingleItem from './cartsingleitem';

export default function CartItemBlock(){

    let cartItems = useSelector(state => state.cartState.cart)

    let cartBlocks = cartItems.map(item => {
        return <CartSingleItem item={item} key={item.id}/> 
        // console.log(item);
    })

    return (
        <div id="basicDropdownHover" className="cart-dropdown dropdown-menu dropdown-unfold border-top border-top-primary mt-3 border-width-2 border-left-0 border-right-0 border-bottom-0 left-auto right-0" aria-labelledby="basicDropdownHoverInvoker">
        <ul className="list-unstyled px-3 pt-3">
        {cartBlocks}
        </ul>
        <div className="flex-center-between px-4 pt-2">
            <a href="/cart" className="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5">View cart</a>
            <a href="/checkout" className="btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5">Checkout</a>
        </div>
    </div>
    )
}