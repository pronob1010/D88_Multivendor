import { useSelector } from "react-redux";
import LatestProductSingleblock from './latestproductsingleblock';

export default function LatestProduct(){
    let letestproducts = useSelector((state) => state.productState.products);

    letestproducts = letestproducts.reverse().slice(0,5);

    let products = (
        letestproducts.map( item => { return (<LatestProductSingleblock item = {item} key={item.id}/>) })
        )

    return (
        <div className="mb-8">
                            <div className="border-bottom border-color-1 mb-5">
                                <h3 className="section-title section-title__sm mb-0 pb-2 font-size-18">Latest Products</h3>
                            </div>
                            <ul className="list-unstyled">
                                { products }
                            </ul>
                        </div>
    )
}