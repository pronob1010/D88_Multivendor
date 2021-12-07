import IndexBrowseCategoriesMainSingle from './IndexBrowseCategoriesMainSingle';
import { useSelector } from 'react-redux';

export default function BrowseCategories() {

    let categories_list = useSelector(state => state.categoryState.categories);
    

    let cat_list = categories_list.map(item => {

        let slug_id = item.slug;
        let c_id = slug_id + 'Collapse';
        let h_id = '#'+ c_id;
        
        return (
            <li>
                <a className="dropdown-toggle dropdown-toggle-collapse" href="javascript:;" role="button" data-toggle="collapse" aria-expanded="false" aria-controls={c_id} data-target={h_id}>
                    {item.title}<span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span>
                </a>

                <div id={c_id} className="collapse" data-parent="#sidebarNav">
                    <ul id={slug_id} className="list-unstyled dropdown-list">
                        {
                            item.subcategory.map(item => {
                                return (
                                    <li><a className="dropdown-item" href="#">{item.title}<span className="text-gray-25 font-size-12 font-weight-normal"> (56)</span></a></li>
                                )
                            })
                        }
                        {/* <!--Menu List --> */}
                        {/* <!--End Menu List --> */}
                    </ul>
                </div>
            </li>
        )
    })

    return (
        <div className="mb-6 border border-width-2 border-color-3 borders-radius-6">
           
            <ul id="sidebarNav" className="list-unstyled mb-0 sidebar-navbar view-all">
                <li><div className="dropdown-title">Browse Categories</div></li>
                 
                
                 {cat_list}
                 
            </ul>
            
        </div>
    )
}

export function IndexBrowseCategories() {
    return (

        <ul id="headerSidebarList" className="u-header-collapse__nav">
            {/* <!-- Computers & Accessories --> */}
            <li className="u-has-submenu u-header-collapse__submenu">
                <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarComputersCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarComputersCollapse">
                    Computers & Accessories
                </a>

                <div id="headerSidebarComputersCollapse" className="collapse" data-parent="#headerSidebarContent">
                    <ul className="u-header-collapse__nav-list">
                        <li><span className="u-header-sidebar__sub-menu-title">Computers &amp; Accessories</span></li>
                        <li className=""><a className="u-header-collapse__submenu-nav-link" href="#">All Computers & Accessories</a></li>
                        <li className=""><a className="u-header-collapse__submenu-nav-link" href="#">Laptops, Desktops & Monitors</a></li>
                        <li className=""><a className="u-header-collapse__submenu-nav-link" href="#">Printers & Ink</a></li>
                        <li className=""><a className="u-header-collapse__submenu-nav-link" href="#">Networking & Internet Devices</a></li>
                        <li className=""><a className="u-header-collapse__submenu-nav-link" href="#">Computer Accessories</a></li>
                        <li className=""><a className="u-header-collapse__submenu-nav-link" href="#">Software</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Office & Stationery</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Office & Stationery</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Electronics</a></li>
                    </ul>
                </div>
            </li>
            {/* <!-- End Computers & Accessories --> */}

            {/* <!-- Cameras, Audio & Video --> */}
            <li className="u-has-submenu u-header-collapse__submenu">
                <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarCamerasCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarCamerasCollapse">
                    Cameras, Audio & Video
                </a>

                <div id="headerSidebarCamerasCollapse" className="collapse" data-parent="#headerSidebarContent">
                    <ul className="u-header-collapse__nav-list">
                        <li><span className="u-header-sidebar__sub-menu-title">Cameras & Photography</span></li>
                        <li className=""><a className="u-header-collapse__submenu-nav-link" href="#">Lenses</a></li>
                        <li className=""><a className="u-header-collapse__submenu-nav-link" href="#">Camera Accessories</a></li>
                        <li className=""><a className="u-header-collapse__submenu-nav-link" href="#">Security & Surveillance</a></li>
                        <li className=""><a className="u-header-collapse__submenu-nav-link" href="#">Binoculars & Telescopes</a></li>
                        <li className=""><a className="u-header-collapse__submenu-nav-link" href="#">Camcorders</a></li>
                        <li className=""><a className="u-header-collapse__submenu-nav-link" href="#">Software</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Audio & Video</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Audio & Video</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Headphones & Speakers</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Electronics</a></li>
                    </ul>
                </div>
            </li>
            {/* <!-- End Cameras, Audio & Video --> */}

            {/* <!-- Mobiles & Tablets --> */}
            <li className="u-has-submenu u-header-collapse__submenu">
                <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarMobilesCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarMobilesCollapse">
                    Mobiles & Tablets
                </a>

                <div id="headerSidebarMobilesCollapse" className="collapse" data-parent="#headerSidebarContent">
                    <ul className="u-header-collapse__nav-list">
                        <li><span className="u-header-sidebar__sub-menu-title">Mobiles & Tablets</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Mobile Phones</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Smartphones</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Refurbished Mobiles</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Cases & Covers</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Mobile Accessories</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Cases & Covers</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Tablets</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Tablet Accessories</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Electronics</a></li>
                    </ul>
                </div>
            </li>
            {/* <!-- End Mobiles & Tablets --> */}

            {/* <!-- Movies, Music & Video --> */}
            <li className="u-has-submenu u-header-collapse__submenu">
                <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarMoviesCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarMoviesCollapse">
                    Movies, Music & Video
                </a>

                <div id="headerSidebarMoviesCollapse" className="collapse" data-parent="#headerSidebarContent">
                    <ul className="u-header-collapse__nav-list">
                        <li><span className="u-header-sidebar__sub-menu-title">Movies & TV Shows</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Movies & TV Shows</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All English</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Hindi</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Video Games</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">PC Games</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Consoles</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Accessories</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Music</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Music</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Indian Classical</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Musical Instruments</a></li>
                    </ul>
                </div>
            </li>
            {/* <!-- End Movies, Music & Video --> */}

            {/* <!-- TV & Audio --> */}
            <li className="u-has-submenu u-header-collapse__submenu">
                <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarTvCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarTvCollapse">
                    TV & Audio
                </a>

                <div id="headerSidebarTvCollapse" className="collapse" data-parent="#headerSidebarContent">
                    <ul className="u-header-collapse__nav-list">
                        <li><span className="u-header-sidebar__sub-menu-title">Audio & Video</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Audio & Video</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Televisions</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Headphones</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Speakers</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Audio & Video Accessories</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Music</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Televisions</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Headphones</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Electro Home Appliances</a></li>
                    </ul>
                </div>
            </li>
            {/* <!-- End TV & Audio --> */}

            {/* <!-- Watches & Eyewear --> */}
            <li className="u-has-submenu u-header-collapse__submenu">
                <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarWatchesCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarWatchesCollapse">
                    Watches & Eyewear
                </a>

                <div id="headerSidebarWatchesCollapse" className="collapse" data-parent="#headerSidebarContent">
                    <ul className="u-header-collapse__nav-list">
                        <li><span className="u-header-sidebar__sub-menu-title">Watches</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Watches</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Men's Watches</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Women's Watches</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Premium Watches</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Deals on Watches</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Eyewear</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Men's Sunglasses</a></li>
                    </ul>
                </div>
            </li>
            {/* <!-- End Watches & Eyewear --> */}

            {/* <!-- Car, Motorbike & Industrial --> */}
            <li className="u-has-submenu u-header-collapse__submenu">
                <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarCarCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarCarCollapse">
                    Car, Motorbike & Industrial
                </a>

                <div id="headerSidebarCarCollapse" className="collapse" data-parent="#headerSidebarContent">
                    <ul className="u-header-collapse__nav-list">
                        <li><span className="u-header-sidebar__sub-menu-title">Car & Motorbike</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Cars & Bikes</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Car & Bike Care</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Lubricants</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Shop for Bike</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Helmets & Gloves</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Bike Parts</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Industrial Supplies</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Industrial Supplies</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Lab & Scientific</a></li>
                    </ul>
                </div>
            </li>
            {/* <!-- End Car, Motorbike & Industrial --> */}


        </ul>
    )
}

export function IndexBrowseCategoriesMain() {
    let categories_list = useSelector(state => state.categoryState.categories);
    

    let cat_list = categories_list.map(item => {
        return (<IndexBrowseCategoriesMainSingle item={item} key={item.id} />)
    })
    return (

        <ul className="navbar-nav u-header__navbar-nav">
            <li class="nav-item u-header__nav-item" data-event="hover" data-position="left">
                <a href="#" class="nav-link u-header__nav-link font-weight-bold">Deal of The Day !</a>
            </li>
            <li class="nav-item u-header__nav-item" data-event="hover" data-position="left">
                <a href="#" class="nav-link u-header__nav-link font-weight-bold">Top 10 !</a>
            </li>
            <li class="nav-item u-header__nav-item" data-event="hover" data-position="left">
                <a href="#" class="nav-link u-header__nav-link font-weight-bold">Mega offer !</a>
            </li>
            {cat_list}

        </ul>

    )
}