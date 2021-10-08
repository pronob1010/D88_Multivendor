import { useSelector } from "react-redux";

export default function VendorSingleSliderBlock({item, category}){

    return (
        <div className="js-slide">
        <div className="row pt-7 py-md-0">
            <div className="d-none d-wd-block offset-1"></div>
            <div className="col-xl col col-md-8 mt-md-8 mt-lg-10">
                <div className="ml-xl-4">
                    <h6 className="font-size-15 font-weight-bold mb-2 text-cyan"
                        data-scs-animation-in="fadeInUp">
                        {category.toUpperCase()}
                    </h6>
                    <br></br>
                    <h1 className="font-size-46 text-lh-50 font-weight-light mb-8"
                        data-scs-animation-in="fadeInUp"
                        data-scs-animation-delay="200">
                        {item.feature_title} <stong className="font-weight-bold">{item.offer_percent}% OFF</stong>
                    </h1>
                    <a href={`/shop/${item.id}`} className="btn btn-primary transition-3d-hover rounded-lg font-weight-normal py-2 px-md-7 px-3 font-size-16"
                        data-scs-animation-in="fadeInUp"
                        data-scs-animation-delay="300">
                        Start Buying
                    </a>
                </div>
            </div>
            <div className="col-xl-4 col-4 d-flex align-items-end ml-auto ml-md-0"
                data-scs-animation-in="fadeInRight"
                data-scs-animation-delay="500">
                <img className="img-fluid ml-auto mr-10 mr-wd-auto" src={item.image} alt="Image Description"/>
            </div>
        </div>
    </div>
  
    )
}
