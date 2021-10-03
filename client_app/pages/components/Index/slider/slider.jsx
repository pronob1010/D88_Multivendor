import { useSelector } from "react-redux";
import SingleSliderBlock from "./slider_single_section";

export default function IndexSlider() {

    let categoryName;
    let categories_list = useSelector(state => state.categoryState.categories);

   

    let dataset = useSelector((state) => state.productState.products);

    let slider_dataset = useSelector((state) => state.PromotionalProductState.products);

    let slider = [];

    slider_dataset.map(item => { if (item.type == "slider") { dataset.find(ele => { if (ele.id == item.Select_Product) { slider.push(ele); } }) } })

    //  console.log(slider);
    

    let singleblock = (
        slider.map(item => {

            categories_list.find(ele => {
                if(ele.id==item.category){
                    categoryName = ele.title;
                }
            })

            return (<SingleSliderBlock item={item} key={item.id} category={categoryName}/>)
        })
    )

    return (
        <div className="mb-5">
            <div className="bg-img-hero" style={{ backgroundImage: 'url("https://transvelo.github.io/electro-html/2.0/assets/img/1920X422/img1.jpg")' }}>
                <div className="container min-height-420 overflow-hidden">
                    <div className="js-slick-carousel u-slick"
                        data-pagi-classes="text-center position-absolute right-0 bottom-0 left-0 u-slick__pagination u-slick__pagination--long justify-content-start mb-3 mb-md-4 offset-xl-3 pl-2 pb-1">
                        { singleblock }
                    </div>
                </div>
            </div>
        </div>

    )
}