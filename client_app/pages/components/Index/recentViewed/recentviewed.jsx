import { useSelector } from 'react-redux';
import ShopCard from '../../Shop/shop_single_card';
import RecentShopCard from './recent_viewed_single_card';


export default function RecentViewed() {

    let recentProducts = useSelector((state) => state.recentState.recent).reverse();


    let all_p = useSelector(state => state.productState.products);
    
    let s_item;

    let ProductCardList = recentProducts.map(ele => {
        
        s_item = all_p.find((item) => item.id == ele)
        

        return <ShopCard data={s_item} key={s_item.id}/>
    })

    // console.log(ProductCardList);

    return (
        <div className="mb-6">
            <div className="position-relative">
                <div className="border-bottom border-color-1 mb-2">
                    <h3 className="section-title mb-0 pb-2 font-size-22">Recently Viewed</h3>
                </div>
                <div className="js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1"
                    data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-3 mt-md-0"
                    data-slides-show="7"
                    data-slides-scroll="1"
                    data-arrows-classes="position-absolute top-0 font-size-17 u-slick__arrow-normal top-10"
                    data-arrow-left-classes="fa fa-angle-left right-1"
                    data-arrow-right-classes="fa fa-angle-right right-0"
                    data-responsive='[{
                  "breakpoint": 1400,
                  "settings": {
                    "slidesToShow": 6
                  }
                }, {
                    "breakpoint": 1200,
                    "settings": {
                      "slidesToShow": 4
                    }
                }, {
                  "breakpoint": 992,
                  "settings": {
                    "slidesToShow": 3
                  }
                }, {
                  "breakpoint": 768,
                  "settings": {
                    "slidesToShow": 2
                  }
                }, {
                  "breakpoint": 554,
                  "settings": {
                    "slidesToShow": 2
                  }
                }]'>

                    {ProductCardList}

                </div>
            </div>
        </div>

    )
}