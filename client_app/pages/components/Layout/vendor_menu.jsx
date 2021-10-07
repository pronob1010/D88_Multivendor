export default function VendorMenu() {
    return (
        
        <div id="basicsCollapseOne" className="collapse show vertical-menu v1"
        aria-labelledby="basicsHeadingOne"
        data-parent="#basicsAccordion">
        <div className="card-body p-0">
            <nav className="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space hs-menu-initialized">
                <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse">
                    <ul className="navbar-nav u-header__navbar-nav border-primary border-top-0">
                        <li className="nav-item u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a href="#" className="nav-link u-header__nav-link font-weight-bold">Value of the Day</a>
                        </li>
                        <li className="nav-item u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a href="#" className="nav-link u-header__nav-link font-weight-bold">Top 100 Offers</a>
                        </li>
                        <li className="nav-item u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a href="#" className="nav-link u-header__nav-link font-weight-bold">New Arrivals</a>
                        </li>
                        {/* <!-- Nav Item MegaMenu --> */}
                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-animation-in="slideInUp"
                            data-animation-out="fadeOut"
                            data-position="left">
                            <a id="basicMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Computers & Accessories</a>

                            {/* <!-- Nav Item - Mega Menu --> */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu">
                                <div className="vmm-bg">
                                    <img className="img-fluid" src="../../assets/img/500X400/img1.png" alt="Image Description"/>
                                </div>
                                <div className="row u-header__mega-menu-wrapper">
                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Computers & Accessories</span>
                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Computers & Accessories</a></li>
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
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Office & Stationery</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Office & Stationery</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                        </li>
                        {/* <!-- End Nav Item MegaMenu--> */}
                        {/* <!-- Nav Item MegaMenu --> */}
                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a id="basicMegaMenu1" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Cameras, Audio & Video</a>

                            {/* <!-- Nav Item - Mega Menu --> */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu1">
                                <div className="vmm-bg">
                                    <img className="img-fluid" src="../../assets/img/500X400/img4.png" alt="Image Description"/>
                                </div>
                                <div className="row u-header__mega-menu-wrapper">
                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Cameras & Photography</span>
                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Lenses</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Camera Accessories</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Security & Surveillance</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Binoculars & Telescopes</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Camcorders</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Software</a></li>
                                            <li>
                                                <a className="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start" href="#">
                                                    <div className="">All Electronics</div>
                                                    <div className="u-nav-subtext font-size-11 text-gray-30">Discover more products</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Audio & Video</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Audio & Video</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Headphones & Speakers</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                        </li>
                        {/* <!-- End Nav Item MegaMenu--> */}
                        {/* <!-- Nav Item MegaMenu --> */}
                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a id="basicMegaMenu2" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Mobiles & Tablets</a>

                            {/* <!-- Nav Item - Mega Menu --> */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu vmm-bg-extended" aria-labelledby="basicMegaMenu2">
                                <div className="vmm-bg">
                                    <img className="img-fluid" src="../../assets/img/500X400/img3.png" alt="Image Description"/>
                                </div>
                                <div className="row u-header__mega-menu-wrapper">
                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Mobiles & Tablets</span>
                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Mobile Phones</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Smartphones</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Refurbished Mobiles</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link border-top pt-2" href="#">All Mobile Accessories</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Cases & Covers</a></li>
                                            <li>
                                                <a className="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start" href="#">
                                                    <div className="">All Electronics</div>
                                                    <div className="u-nav-subtext font-size-11 text-gray-30">Discover more products</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col mb-3 mb-sm-0">
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Tablets</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Tablet Accessories</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                        </li>
                        {/* <!-- End Nav Item MegaMenu--> */}
                        {/* <!-- Nav Item MegaMenu --> */}
                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a id="basicMegaMenu3" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Movies, Music & Video</a>

                            {/* <!-- Nav Item - Mega Menu --> */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu3">
                                <div className="vmm-bg">
                                    <img className="img-fluid" src="../../assets/img/500X400/img2.png" alt="Image Description"/>
                                </div>
                                <div className="row u-header__mega-menu-wrapper">
                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Movies & TV Shows</span>
                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Movies & TV Shows</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All English</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link border-bottom pb-3" href="#">All Hindi</a></li>
                                        </ul>
                                        <span className="u-header__sub-menu-title">Video Games</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">PC Games</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Consoles</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Accessories</a></li>
                                        </ul>
                                    </div>

                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Music</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Music</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Indian Classical</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Musical Instruments</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                        </li>
                        {/* <!-- End Nav Item MegaMenu--> */}
                        {/* <!-- Nav Item MegaMenu --> */}
                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a id="basicMegaMenu4" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">TV & Audio</a>

                            {/* <!-- Nav Item - Mega Menu --> */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu4">
                                <div className="vmm-bg">
                                    <img className="img-fluid" src="../../assets/img/500X400/img5.png" alt="Image Description"/>
                                </div>
                                <div className="row u-header__mega-menu-wrapper">
                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Audio & Video</span>
                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Audio & Video</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Televisions</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Headphones</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Speakers</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Audio & Video Accessories</a></li>
                                            <li>
                                                <a className="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start" href="#">
                                                    <div className="">Electro Home Appliances</div>
                                                    <div className="u-nav-subtext font-size-11 text-gray-30">Available in select cities</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Music</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Televisions</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Headphones</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                        </li>
                        {/* <!-- End Nav Item MegaMenu--> */}
                        {/* <!-- Nav Item MegaMenu --> */}
                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a id="basicMegaMenu5" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Watches & Eyewear</a>

                            {/* <!-- Nav Item - Mega Menu --> */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu5">
                                <div className="vmm-bg">
                                    <img className="img-fluid" src="../../assets/img/500X400/img6.png" alt="Image Description"/>
                                </div>
                                <div className="row u-header__mega-menu-wrapper">
                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Watches</span>
                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Watches</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Men's Watches</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Women's Watches</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Premium Watches</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Deals on Watches</a></li>
                                        </ul>
                                    </div>

                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Eyewear</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Men's Sunglasses</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                        </li>
                        {/* <!-- End Nav Item MegaMenu--> */}
                        {/* <!-- Nav Item MegaMenu --> */}
                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a id="basicMegaMenu6" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Car, Motorbike & Industrial</a>

                            {/* <!-- Nav Item - Mega Menu --> */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu6">
                                <div className="vmm-bg">
                                    <img className="img-fluid" src="../../assets/img/500X400/img7.png" alt="Image Description"/>
                                </div>
                                <div className="row u-header__mega-menu-wrapper">
                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Car & Motorbike</span>
                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Cars & Bikes</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Car & Bike Care</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link border-bottom pb-3" href="#">Lubricants</a></li>
                                        </ul>
                                        <span className="u-header__sub-menu-title">Shop for Bike</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Helmets & Gloves</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Bike Parts</a></li>
                                        </ul>
                                    </div>

                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Industrial Supplies</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Industrial Supplies</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Lab & Scientific</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                        </li>
                        {/* <!-- End Nav Item MegaMenu--> */}
                        {/* <!-- Nav Item MegaMenu --> */}
                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a id="basicMegaMenu7" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Printers & Ink</a>

                            {/* <!-- Nav Item - Mega Menu --> */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu7">
                                <div className="vmm-bg">
                                    <img className="img-fluid" src="../../assets/img/500X400/img6.png" alt="Image Description"/>
                                </div>
                                <div className="row u-header__mega-menu-wrapper">
                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Car & Motorbike</span>
                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Cars & Bikes</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Car & Bike Care</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link border-bottom pb-3" href="#">Lubricants</a></li>
                                        </ul>
                                        <span className="u-header__sub-menu-title">Shop for Bike</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Helmets & Gloves</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Bike Parts</a></li>
                                        </ul>
                                    </div>

                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Industrial Supplies</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Industrial Supplies</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Lab & Scientific</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                        </li>
                        {/* <!-- End Nav Item MegaMenu--> */}
                        {/* <!-- Nav Item MegaMenu --> */}
                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a id="basicMegaMenu8" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Office Supplies</a>

                            {/* <!-- Nav Item - Mega Menu --> */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu8">
                                <div className="vmm-bg">
                                    <img className="img-fluid" src="../../assets/img/500X400/img1.png" alt="Image Description"/>
                                </div>
                                <div className="row u-header__mega-menu-wrapper">
                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Car & Motorbike</span>
                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Cars & Bikes</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Car & Bike Care</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link border-bottom pb-3" href="#">Lubricants</a></li>
                                        </ul>
                                        <span className="u-header__sub-menu-title">Shop for Bike</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Helmets & Gloves</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Bike Parts</a></li>
                                        </ul>
                                    </div>

                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Industrial Supplies</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Industrial Supplies</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Lab & Scientific</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                        </li>
                        {/* <!-- End Nav Item MegaMenu--> */}
                        {/* <!-- Nav Item MegaMenu --> */}
                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a id="basicMegaMenu9" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Computer Components</a>

                            {/* <!-- Nav Item - Mega Menu --> */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu9">
                                <div className="vmm-bg">
                                    <img className="img-fluid" src="../../assets/img/500X400/img4.png" alt="Image Description"/>
                                </div>
                                <div className="row u-header__mega-menu-wrapper">
                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Car & Motorbike</span>
                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Cars & Bikes</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Car & Bike Care</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link border-bottom pb-3" href="#">Lubricants</a></li>
                                        </ul>
                                        <span className="u-header__sub-menu-title">Shop for Bike</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Helmets & Gloves</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Bike Parts</a></li>
                                        </ul>
                                    </div>

                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Industrial Supplies</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Industrial Supplies</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Lab & Scientific</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                        </li>
                        {/* <!-- End Nav Item MegaMenu--> */}
                        {/* <!-- Nav Item MegaMenu --> */}
                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a id="basicMegaMenu10" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">PC Gaming Headsets</a>

                            {/* <!-- Nav Item - Mega Menu --> */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu10">
                                <div className="vmm-bg">
                                    <img className="img-fluid" src="../../assets/img/500X400/img2.png" alt="Image Description"/>
                                </div>
                                <div className="row u-header__mega-menu-wrapper">
                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Car & Motorbike</span>
                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Cars & Bikes</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Car & Bike Care</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link border-bottom pb-3" href="#">Lubricants</a></li>
                                        </ul>
                                        <span className="u-header__sub-menu-title">Shop for Bike</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Helmets & Gloves</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Bike Parts</a></li>
                                        </ul>
                                    </div>

                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Industrial Supplies</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Industrial Supplies</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Lab & Scientific</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                        </li>
                        {/* <!-- End Nav Item MegaMenu--> */}
                        {/* <!-- Nav Item MegaMenu --> */}
                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a id="basicMegaMenu11" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Smart TVs</a>

                            {/* <!-- Nav Item - Mega Menu --> */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu11">
                                <div className="vmm-bg">
                                    <img className="img-fluid" src="../../assets/img/500X400/img7.png" alt="Image Description"/>
                                </div>
                                <div className="row u-header__mega-menu-wrapper">
                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Car & Motorbike</span>
                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Cars & Bikes</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Car & Bike Care</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link border-bottom pb-3" href="#">Lubricants</a></li>
                                        </ul>
                                        <span className="u-header__sub-menu-title">Shop for Bike</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Helmets & Gloves</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Bike Parts</a></li>
                                        </ul>
                                    </div>

                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Industrial Supplies</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Industrial Supplies</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Lab & Scientific</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                        </li>
                        {/* <!-- End Nav Item MegaMenu--> */}
                        {/* <!-- Nav Item MegaMenu --> */}
                        <li className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-position="left">
                            <a id="basicMegaMenu12" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Computer Components</a>

                            {/* <!-- Nav Item - Mega Menu --> */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu12">
                                <div className="vmm-bg">
                                    <img className="img-fluid" src="../../assets/img/500X400/img4.png" alt="Image Description"/>
                                </div>
                                <div className="row u-header__mega-menu-wrapper">
                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Car & Motorbike</span>
                                        <ul className="u-header__sub-menu-nav-group mb-3">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Cars & Bikes</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Car & Bike Care</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link border-bottom pb-3" href="#">Lubricants</a></li>
                                        </ul>
                                        <span className="u-header__sub-menu-title">Shop for Bike</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Helmets & Gloves</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Bike Parts</a></li>
                                        </ul>
                                    </div>

                                    <div className="col mb-3 mb-sm-0">
                                        <span className="u-header__sub-menu-title">Industrial Supplies</span>
                                        <ul className="u-header__sub-menu-nav-group">
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Industrial Supplies</a></li>
                                            <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Lab & Scientific</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                        </li>
                        {/* <!-- End Nav Item MegaMenu--> */}
                        {/* <!-- Nav Item --> */}
                        <li className="nav-item hs-has-sub-menu u-header__nav-item"
                            data-event="click"
                            data-animation-in="slideInUp"
                            data-animation-out="fadeOut"
                            data-position="left">
                            <a id="homeMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="homeSubMenu">Accessories</a>

                            {/* <!-- Home - Submenu --> */}
                            <ul id="homeSubMenu" className="hs-sub-menu u-header__sub-menu animated hs-position-left fadeOut" aria-labelledby="homeMegaMenu" style={{minWidth: '230px', display: 'none' }}>
                                {/* <!-- Home-v1 --> */}
                                <li className="hs-has-sub-menu">
                                    <a className="nav-link u-header__sub-menu-nav-link " href="index.html">Home-v1</a>
                                </li>
                                {/* <!-- End Home-v1 --> */}

                                {/* <!-- Home-v2 --> */}
                                <li className="hs-has-sub-menu">
                                    <a className="nav-link u-header__sub-menu-nav-link " href="home-v2.html">Home-v2</a>
                                </li>
                                {/* <!-- End Home-v2 --> */}

                                {/* <!-- Home-v3 --> */}
                                <li className="hs-has-sub-menu">
                                    <a className="nav-link u-header__sub-menu-nav-link " href="home-v3.html">Home-v3</a>
                                </li>
                                {/* <!-- End Home-v3 --> */}

                                {/* <!-- Home-v4 --> */}
                                <li className="hs-has-sub-menu">
                                    <a className="nav-link u-header__sub-menu-nav-link " href="home-v4.html">Home-v4</a>
                                </li>
                                {/* <!-- End Home-v4 --> */}

                                {/* <!-- Home-v5 --> */}
                                <li className="hs-has-sub-menu">
                                    <a className="nav-link u-header__sub-menu-nav-link " href="home-v5.html">Home-v5</a>
                                </li>
                                {/* <!-- End Home-v5 --> */}

                                {/* <!-- Home-v6 --> */}
                                <li className="hs-has-sub-menu">
                                    <a className="nav-link u-header__sub-menu-nav-link " href="home-v6.html">Home-v6</a>
                                </li>
                                {/* <!-- End Home-v6 --> */}

                                {/* <!-- Home-v7 --> */}
                                <li className="hs-has-sub-menu">
                                    <a className="nav-link u-header__sub-menu-nav-link " href="home-v7.html">Home-v7</a>
                                </li>
                                {/* <!-- End Home-v7 --> */}
                            </ul>
                            {/* <!-- End Home - Submenu --> */}
                        </li>
                        {/* <!-- End Nav Item --> */}
                    </ul>
                </div>
            </nav>
        </div>
    </div>

    )
}