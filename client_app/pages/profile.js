import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { vendorsProduct } from '../redux/All_Reducers/productActionCreator';
import axios from "axios";
import { useRouter } from "next/router"

const Profile = () => {
    const router = useRouter()
    const { username, profile_pic, is_vendor } = useSelector(state => state.userReducer.user_details)
    const { userId } = useSelector(state => state.userReducer)
    const { vendors_product } = useSelector(state => state.productState)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(vendorsProduct(userId))
    }, [userId])


    let deleteProduct = (id) => {
        let url = "http://localhost:8000/api/data/allproducts/"+id+"/";
        axios.delete(url)
            .then(response => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
        router.push("/profile/")
    }



    return (
        <div>
            {/* <!-- breadcrumb --> */}
            <div className="bg-gray-13 bg-md-transparent">
                <div className="container">
                    <div className="my-md-3"></div>
                </div>
            </div>
            {/* <!-- End breadcrumb --> */}
            <div className="container">
                {/* <!-- Single Product Body --> */}
                <div className="mb-xl-14 mb-6">
                    <div className="row">
                        <div className="col-md-3 mb-4 mb-md-0">
                            <div id="sliderSyncingNav" className="js-slick-carousel u-slick mb-2" data-infinite="true"
                                data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic u-slick__arrow-centered--y rounded-circle"
                                data-arrow-left-classes="fas fa-arrow-left u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left ml-lg-2 ml-xl-4"
                                data-arrow-right-classes="fas fa-arrow-right u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right mr-lg-2 mr-xl-4"
                                data-nav-for="#sliderSyncingThumb">
                                <div className="js-slide">
                                    {profile_pic ? (<img style={{ 'height': "170px", "width": "220px" }} className="img-fluid" layout='fill' src={profile_pic} alt="Image Description" />): (<></>) }
                                    
                                </div>
                            </div>
                            <div className="mr-xl-15">
                                <div className="mb-3">
                                    <div className="text-gray-6">Update your personal info</div>
                                </div>
                                <a href={`/profile/edit/`}
                                    className="btn btn-sm btn-block btn-primary-dark btn-wide transition-3d-hover">
                                    Edit</a>
                            </div>
                        </div>
                        <div className="col-md-9 mb-md-6 mb-lg-0">
                            <div className="mb-2">
                                <div className="border-bottom mb-3 pb-md-1 pb-3">
                                    <a href="#" className="font-size-12 text-gray-5 mb-2 d-inline-block">User ID: {userId}</a>
                                    <h2 className="font-size-25 text-lh-1dot2">{username}</h2>
                                    <div className="mb-2">
                                        <a className="d-inline-flex align-items-center small font-size-15 text-lh-1" href="#">
                                            <div className="text-warning mr-2">
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="fas fa-star"></small>
                                                <small className="far fa-star text-muted"></small>
                                            </div>
                                            <span className="text-secondary font-size-13">(customer level: 4)</span>
                                        </a>
                                    </div>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                </p>
                                <div className="border-top border-bottom py-3 mb-4">
                                    <p><strong>Total Order</strong>: 10</p>
                                    <p><strong>Total Perchased</strong>: 1000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Product Body --> */}
                {/* <!-- Single Product Tab --> */}
                {
                    is_vendor ? (<div>
                <div className="mb-8">
                    <div className="position-relative position-md-static px-md-6">
                        <ul className="nav nav-classNameic nav-tab nav-tab-lg justify-content-xl-center flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble border-0 pb-1 pb-xl-0 mb-n1 mb-xl-0"
                            id="pills-tab-8" role="tablist">
                            <li className="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                <a className="nav-link active" id="Jpills-one-example1-tab" data-toggle="pill"
                                    href="#Jpills-one-example1" role="tab" aria-controls="Jpills-one-example1"
                                    aria-selected="true">Dashboard</a>
                            </li>
                            <li className="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                <a className="nav-link" id="add_product_tab" data-toggle="pill"
                                    href="#add_product" role="tab" aria-controls="add_product"
                                    aria-selected="true">Add Product</a>
                            </li>
                            <li className="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                <a className="nav-link" id="Jpills-two-example1-tab" data-toggle="pill" href="#Jpills-two-example1"
                                    role="tab" aria-controls="Jpills-two-example1" aria-selected="false">Shiping Status</a>
                            </li>
                            <li className="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                <a className="nav-link" id="Jpills-three-example1-tab" data-toggle="pill"
                                    href="#Jpills-three-example1" role="tab" aria-controls="Jpills-three-example1"
                                    aria-selected="false">Order Details</a>
                            </li>
                            <li className="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                                <a className="nav-link" id="Jpills-four-example1-tab" data-toggle="pill"
                                    href="#Jpills-four-example1" role="tab" aria-controls="Jpills-four-example1"
                                    aria-selected="false">Reviews</a>
                            </li>
                        </ul>
                    </div>
                            {/* {
                                Object.keys(vendors_product).map((prod) => {
                                    console.log(prod)
                                })
                            } */}
                            

                    {/* <!-- Tab Content --> */}
                    <div className="borders-radius-17 border p-4 mt-4 mt-md-0 px-lg-10 py-lg-9">
                        <div className="tab-content" id="Jpills-tabContent">
                            <div className="tab-pane fade active show" id="Jpills-one-example1" role="tabpanel"
                                aria-labelledby="Jpills-one-example1-tab">
                                <div className="row no-gutters">
                                    <div className="col mb-6 mb-md-0">
                                        <ul
                                            className="row list-unstyled products-group no-gutters border-bottom border-md-bottom-0">
                                                    {
                                                        Object.keys(vendors_product).map((prod) => {
                                                            return (<li
                                                                className="col-4 col-md-4 col-xl-2gdot5 product-item remove-divider-sm-down border-0" style={{"flex": "0 0 19.83333%"}}>
                                                                <div className="product-item__outer h-100">
                                                                    <div className="remove-prodcut-hover product-item__inner px-xl-4 p-3">
                                                                        <div className="product-item__body pb-xl-2">
                                                                            <div className="mb-2 d-none d-md-block"><a
                                                                                href={`../shop/${vendors_product[prod].id}`}
                                                                                className="font-size-12 text-gray-5"></a></div>

                                                                            <h5 className="mb-1 product-item__title d-none d-md-block"><a href={`../shop/${vendors_product[prod].id}`}
                                                                                className="text-blue font-weight-bold">{prod.Title}</a></h5>
                                                                            <div className="mb-2">
                                                                                <a href={`../shop/${prod.id}`}
                                                                                    className="d-block text-center"><img style={{"height":"200px"}} className="img-fluid"
                                                                                        src={vendors_product[prod].image}
                                                                                        alt="Image" /></a>
                                                                            </div>
                                                                            <div className="flex-center-between mb-1 d-none d-md-block">
                                                                                <div className="prodcut-price">
                                                                                    <div className="text-gray-100mb-3"><b>$ {vendors_product[prod].offer_price}</b></div>
                                                                                    <div className="d-flex mt-3">
                                                                                        <a style={{ "width": "90px", "margin-right": "5px" }} href={`product/edit/${vendors_product[prod].id}/`} className="btn btn-sm btn-warning">Edit</a>
                                                                                        <button style={{ "width": "90px", "margin-left": "5px", "cursor":"pointer" }} className="btn btn-sm btn-danger" data-toggle="modal" data-target={`#Modal_${vendors_product[prod].id}`}>
                                                                                            Delete
                                                                                        </button>
                                                                                        <div class="modal fade" id={`Modal_${vendors_product[prod].id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                            <div class="modal-dialog" role="document">
                                                                                                <div class="modal-content">
                                                                                                    <div class="modal-header">
                                                                                                        <h5 class="modal-title" id="exampleModalLabel">Delete Product</h5>
                                                                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                                                            <span aria-hidden="true">&times;</span>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <div class="modal-body">
                                                                                                        <p>Do you really want to delete this product?</p>
                                                                                                    </div>
                                                                                                    <div class="modal-footer">
                                                                                                        <form onSubmit={() => deleteProduct(vendors_product[prod].id)}>
                                                                                                        <button type="button" className="btn btn-success mr-2" data-dismiss="modal">Close</button>
                                                                                                            <button type="submit" className="btn btn-danger">Delete</button>
                                                                                                        </form>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                            </li>
                                                            )
                                                        })
                                                    }
                                            
                                        </ul>
                                    </div>
                                    <div className="col-md-auto">

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="add_product" role="tabpanel"
                                aria-labelledby="add_product_tab">
                                <div className="row no-gutters">
                                    <a style={{ "text-align": "center" }} class="btn btn-primary btn-sm" href="/product/add">Add Product</a>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="Jpills-two-example1" role="tabpanel"
                                aria-labelledby="Jpills-two-example1-tab">
                                <h3 className="font-size-24 mb-3">Shiping Light</h3>
                                <p>Status will update when update product status. We are trying to improve our system.</p>

                                <div className="border rounded-pill py-1 px-4 border-color-1">
                                    <div className="js-quantity row align-items-center">
                                        <div className="col">
                                            <input className="js-result form-control h-auto border-0 rounded p-0 shadow-none"
                                                type="text" value="Order Accepted" />
                                        </div>
                                        <div className="col-auto pf-1">
                                            <a className="btn btn-icon btn-xs    rounded-circle border-0" href="#">
                                                <small className="fas btn-icon__inner font-size-15">True</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1"></div>
                                <div className="border rounded-pill py-1 px-4 border-color-1 ">
                                    <div className="js-quantity row align-items-center">
                                        <div className="col">
                                            <input className="js-result form-control h-auto border-0 rounded p-0 shadow-none"
                                                type="text" value="Order Processing" />
                                        </div>
                                        <div className="col-auto pf-1">
                                            <a className="btn btn-icon btn-xs    rounded-circle border-0" href="#">
                                                <small className="fas btn-icon__inner font-size-15">False</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1"></div>
                                <div className="border rounded-pill py-1 px-4 border-color-1">
                                    <div className="js-quantity row align-items-center">
                                        <div className="col">
                                            <input className="js-result form-control h-auto border-0 rounded p-0 shadow-none"
                                                type="text" value="Product Ready" />
                                        </div>
                                        <div className="col-auto pf-1">
                                            <a className="btn btn-icon btn-xs    rounded-circle border-0" href="#">
                                                <small className="fas btn-icon__inner font-size-15">False</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1"></div>
                                <div className="border rounded-pill py-1 px-4 border-color-1">
                                    <div className="js-quantity row align-items-center">
                                        <div className="col">
                                            <input className="js-result form-control h-auto border-0 rounded p-0 shadow-none"
                                                type="text" value="Product Delivered to Agency" />
                                        </div>
                                        <div className="col-auto pf-1">
                                            <a className="btn btn-icon btn-xs    rounded-circle border-0" href="#">
                                                <small className="fas btn-icon__inner font-size-15">False</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1"></div>
                                <div className="border rounded-pill py-1 px-4 border-color-1">
                                    <div className="js-quantity row align-items-center">
                                        <div className="col">
                                            <input className="js-result form-control h-auto border-0 rounded p-0 shadow-none"
                                                type="text" value="Product on the way" />
                                        </div>
                                        <div className="col-auto pf-1">
                                            <a className="btn btn-icon btn-xs    rounded-circle border-0" href="#">
                                                <small className="fas btn-icon__inner font-size-15">False</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1"></div>
                                <div className="border rounded-pill py-1 px-4 border-color-1">
                                    <div className="js-quantity row align-items-center">
                                        <div className="col">
                                            <input className="js-result form-control h-auto border-0 rounded p-0 shadow-none"
                                                type="text" value="Product you received" />
                                        </div>
                                        <div className="col-auto pf-1">
                                            <a className="btn btn-icon btn-xs    rounded-circle border-0" href="#">
                                                <small className="fas btn-icon__inner font-size-15">False</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="Jpills-three-example1" role="tabpanel"
                                aria-labelledby="Jpills-three-example1-tab">
                                <div className="mx-md-5 pt-1">
                                    <div className="table-responsive mb-4">
                                        <table className="table table-hover">
                                            <tbody>
                                                <tr>
                                                    <th className="px-4 px-xl-5 border-top-0">Weight</th>
                                                    <td className="border-top-0">7.25kg</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Dimensions</th>
                                                    <td>90 x 60 x 90 cm</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Size</th>
                                                    <td>One Size Fits all</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">color</th>
                                                    <td>Black with Red, White with Gold</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Guarantee</th>
                                                    <td>5 years</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <h3 className="font-size-18 mb-4">Technical Specifications</h3>
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <tbody>
                                                <tr>
                                                    <th className="px-4 px-xl-5 border-top-0">Brand</th>
                                                    <td className="border-top-0">Apple</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Item Height</th>
                                                    <td>18 Millimeters</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Item Width</th>
                                                    <td>31.4 Centimeters</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Screen Size</th>
                                                    <td>13 Inches</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Item Weight</th>
                                                    <td>1.6 Kg</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Product Dimensions</th>
                                                    <td>21.9 x 31.4 x 1.8 cm</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Item model number</th>
                                                    <td>MF841HN/A</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Processor Brand</th>
                                                    <td>Intel</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Processor Type</th>
                                                    <td>Core i5</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Processor Speed</th>
                                                    <td>2.9 GHz</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">RAM Size</th>
                                                    <td>8 GB</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Hard Drive Size</th>
                                                    <td>512 GB</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Hard Disk Technology</th>
                                                    <td>Solid State Drive</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Graphics Coprocessor</th>
                                                    <td>Intel Integrated Graphics</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Graphics Card Description</th>
                                                    <td>Integrated Graphics Card</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Hardware Platform</th>
                                                    <td>Mac</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Operating System</th>
                                                    <td>Mac OS</td>
                                                </tr>
                                                <tr>
                                                    <th className="px-4 px-xl-5">Average Battery Life (in hours)</th>
                                                    <td>9</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="Jpills-four-example1" role="tabpanel"
                                aria-labelledby="Jpills-four-example1-tab">
                                <div className="row mb-8">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <h3 className="font-size-18 mb-6">Based on 3 reviews</h3>
                                            <h2 className="font-size-30 font-weight-bold text-lh-1 mb-0">4.3</h2>
                                            <div className="text-lh-1">overall</div>
                                        </div>

                                        {/* <!-- Ratings --> */}
                                        <ul className="list-unstyled">
                                            <li className="py-1">
                                                <a className="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="text-warning text-ls-n2 font-size-16" style={{ width: "80px" }}>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="progress ml-xl-5" style={{ height: "10px", width: "200px" }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: "100%" }}
                                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto text-right">
                                                        <span className="text-gray-90">205</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="py-1">
                                                <a className="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="text-warning text-ls-n2 font-size-16" style={{ width: "80px" }}>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="progress ml-xl-5" style={{ height: "10px", width: "200px" }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: "53%" }}
                                                                aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto text-right">
                                                        <span className="text-gray-90">55</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="py-1">
                                                <a className="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="text-warning text-ls-n2 font-size-16" style={{ width: "80px" }}>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="progress ml-xl-5" style={{ height: "10px", width: "200px" }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: "20%" }}
                                                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto text-right">
                                                        <span className="text-gray-90">23</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="py-1">
                                                <a className="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="text-warning text-ls-n2 font-size-16" style={{ width: "80px" }}>
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="progress ml-xl-5" style={{ height: "10px", width: "200px" }}>
                                                            <div className="progress-bar" role="progressbar" style={{ width: "0%" }}
                                                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto text-right">
                                                        <span className="text-muted">0</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="py-1">
                                                <a className="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="text-warning text-ls-n2 font-size-16" style={{ width: "80px" }}>
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="progress ml-xl-5" style={{ height: "10px", width: "200px" }}>
                                                            <div className="progress-bar" stylerole="progressbar" style={{ width: "1%" }}
                                                                aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto text-right">
                                                        <span className="text-gray-90">4</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        {/* <!-- End Ratings --> */}
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="font-size-18 mb-5">Add a review for Selldoom</h3>
                                        {/* <!-- Form --> */}
                                        <form className="js-validate">
                                            <div className="row align-items-center mb-4">
                                                <div className="col-md-4 col-lg-3">
                                                    <label htmlFor="rating" className="form-label mb-0">Your Review</label>
                                                </div>
                                                <div className="col-md-8 col-lg-9">
                                                    <a href="#" className="d-block">
                                                        <div className="text-warning text-ls-n2 font-size-16">
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="js-form-message form-group mb-3 row">
                                                <div className="col-md-4 col-lg-3">
                                                    <label htmlFor="descriptionTextarea" className="form-label">Your Review</label>
                                                </div>
                                                <div className="col-md-8 col-lg-9">
                                                    <textarea className="form-control" rows="3" id="descriptionTextarea"
                                                        data-msg="Please enter your message." data-error-className="u-has-error"
                                                        data-success-className="u-has-success"></textarea>
                                                </div>
                                            </div>
                                            <div className="js-form-message form-group mb-3 row">
                                                <div className="col-md-4 col-lg-3">
                                                    <label htmlFor="inputName" className="form-label">Name <span
                                                        className="text-danger">*</span></label>
                                                </div>
                                                <div className="col-md-8 col-lg-9">
                                                    <input type="text" className="form-control" name="name" id="inputName"
                                                        aria-label="Alex Hecker" required data-msg="Please enter your name."
                                                        data-error-className="u-has-error" data-success-className="u-has-success" />
                                                </div>
                                            </div>
                                            <div className="js-form-message form-group mb-3 row">
                                                <div className="col-md-4 col-lg-3">
                                                    <label htmlFor="emailAddress" className="form-label">Email <span
                                                        className="text-danger">*</span></label>
                                                </div>
                                                <div className="col-md-8 col-lg-9">
                                                    <input type="email" className="form-control" name="emailAddress"
                                                        id="emailAddress" aria-label="alexhecker@pixeel.com" required
                                                        data-msg="Please enter a valid email address."
                                                        data-error-className="u-has-error" data-success-className="u-has-success" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="offset-md-4 offset-lg-3 col-auto">
                                                    <button type="submit"
                                                        className="btn btn-primary-dark btn-wide transition-3d-hover">Add
                                                        Review</button>
                                                </div>
                                            </div>
                                        </form>
                                        {/* <!-- End Form --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Tab Content --> */}
                </div>
                        {/* <!-- End Single Product Tab --> */}</div>):''
                }
            </div>
        </div>
    )
}

export default Profile
