export default function SingleMenuItem({item}){
    return (
        <li className="nav-item hs-has-mega-menu u-header__nav-item"
        data-event="hover"
        data-animation-in="slideInUp"
        data-animation-out="fadeOut">
        <a id="MoviesGamesMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">{item.title}</a>

        {/* <!--Movies & Games - Mega Menu --> */}
        <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="MoviesGamesMegaMenu">
            <div className="row u-header__mega-menu-wrapper">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col">
                            <a href="#" className="d-block">
                                <img className="img-fluid" src="/assets/img/300X275/img9.jpg" alt="Image Description"/>
                            </a>
                        </div>
                        <div className="col">
                            <span className="u-header__sub-menu-title">Movies &amp; TV Shows</span>
                            <ul className="u-header__sub-menu-nav-group">
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">All Movies &amp; TV Shows</a></li>
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Blu-ray</a></li>
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Latest Movies</a></li>
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">All English</a></li>
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">All Hindi</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col">
                            <a href="#" className="d-block">
                                <img className="img-fluid" src="/assets/img/300X275/img10.jpg" alt="Image Description"/>
                            </a>
                        </div>
                        <div className="col">
                            <span className="u-header__sub-menu-title">Video Games</span>
                            <ul className="u-header__sub-menu-nav-group">
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Games &amp; Accessories</a></li>
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">PC Games</a></li>
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">New Releases</a></li>
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Consoles</a></li>
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Accessories</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col">
                            <a href="#" className="d-block">
                                <img className="img-fluid" src="/assets/img/300X275/img11.jpg" alt="Image Description"/>
                            </a>
                        </div>
                        <div className="col">
                            <span className="u-header__sub-menu-title">Music</span>
                            <ul className="u-header__sub-menu-nav-group">
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">5.1 Speaker</a></li>
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Home Theatres</a></li>
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Soundbars</a></li>
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Accessories</a></li>
                                <li><a href="#" className="nav-link u-header__sub-menu-nav-link">Consoles</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
    )
}