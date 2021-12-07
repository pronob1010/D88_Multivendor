export default function IndexBrowseCategoriesMainSingle({item}){

    // console.log(item);

    let sub_cat = item.subcategory.map((item)=>{
        // console.log(item);
        return ( <li><a className="nav-link u-header__sub-menu-nav-link" href="#">{item.title}</a></li> )
    })
    return (
        
        <li className="nav-item hs-has-mega-menu u-header__nav-item"
            data-event="hover"
            data-animation-in="slideInUp"
            data-animation-out="fadeOut"
            data-position="left">
            <a id="basicMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">{item.title}</a>


            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu">
                <div className="vmm-bg">
                    {/* <img className="img-fluid" src="/assets/img/500X400/img1.png" clalt="Image Description" /> */}
                </div>
                <div className="row u-header__mega-menu-wrapper">
                    <div className="col mb-3 mb-sm-0">
                        <span className="u-header__sub-menu-title">{item.title}</span>
                        <ul className="u-header__sub-menu-nav-group mb-3">
                            {sub_cat}
                            {/* <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Computers & Accessories</a></li>
                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Laptops, Desktops & Monitors</a></li>
                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Printers & Ink</a></li>
                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Networking & Internet Devices</a></li>
                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Computer Accessories</a></li>
                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Software</a></li>
                            <li>
                                <a className="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start" href="#">
                                    <div className="">All Electronics</div>
                                    <div className="u-nav-subtext font-size-11 text-gray-30">Discover more products</div>
                                </a>
                            </li> */}
                        </ul>
                    </div>

                    <div className="col mb-3 mb-sm-0">
                        <span className="u-header__sub-menu-title">You may Need </span>
                        <ul className="u-header__sub-menu-nav-group">
                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Office & Stationery</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </li>

    )
}