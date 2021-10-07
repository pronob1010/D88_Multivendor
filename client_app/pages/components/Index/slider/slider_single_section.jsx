import { useSelector } from "react-redux";

export default function SingleSliderBlock({item, category}){

    return (
        <div className="js-slide bg-img-hero-center">
                        <div className="row min-height-420 py-7 py-md-0">
                            <div className="offset-xl-3 col-xl-5 col-7 mt-md-8">
                                <h1 className="text-lh-60 font-weight-light"
                                    data-scs-animation-in="fadeInUp">
                                    {item.feature_title}
                                </h1>
                                <h6 className="font-size-15 font-weight-bold mb-3"
                                    data-scs-animation-in="fadeInUp"
                                    data-scs-animation-delay="200">UNDER FAVORABLE {category.toUpperCase()}
                                </h6>
                                <div className="mb-4"
                                    data-scs-animation-in="fadeInUp"
                                    data-scs-animation-delay="300">
                                    <span className="font-size-13">FROM</span>
                                    <div className="font-size-50 font-weight-bold text-lh-45">
                                        <sup className="">$</sup>749<sup className="">99</sup>
                                    </div>
                                </div>
                                <a href={`/shop/${item.id}`} className="btn btn-primary transition-3d-hover rounded-lg font-weight-normal py-2 px-md-7 px-3 font-size-16"
                                    data-scs-animation-in="fadeInUp"
                                    data-scs-animation-delay="400">
                                    Start Buying
                                </a>
                            </div>
                            <div className="col-xl-4 col-5  d-flex align-items-center"
                                data-scs-animation-in="zoomIn"
                                data-scs-animation-delay="500">
                                <img className="img-fluid" src={item.image} alt="Image Description" />
                            </div>
                        </div>
                    </div>
    )
}