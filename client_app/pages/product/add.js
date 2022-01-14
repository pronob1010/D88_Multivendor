import { useState, useEffect } from "react";
import { useDispatch , useSelector } from 'react-redux';
import { productCategories } from '../../redux/All_Reducers/productActionCreator';
import axios from "axios";
import { useRouter } from "next/router"

const AddProduct = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { categories } = useSelector(state => state.productState)
    const { userId } = useSelector(state => state.userReducer)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [sub_category, setSub_category] = useState('')
    const [selling_price, setSelling_price] = useState('')
    const [offer_price, setOffer_price] = useState('')
    const [stock, setstock] = useState('')
    const [digital_item, setdigital_item] = useState(0)


    useEffect(() => {
        dispatch(productCategories())
    }, [])


    let handleSubmit = () => {
        const data = {
            userId,
            title,
            description,
            sub_category,
            category,
            selling_price,
            offer_price,
            stock,
            digital_item
        }

        let url = "http://localhost:8000/api/data/allproducts/";
        const header = {
            headers: {
                "content-type": "application/json"
            }
        }

        try {
            axios.post(url, data, header)
                .then(response => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error);
                });
            router.push("/profile")
        }
        catch (err) {
            console.error(`Error received from axios.post: ${JSON.stringify(err)}`);
        }
    }

    return (
        <div>
            <div className="container col-lg-11 order-lg-1 mt-3">
                <div className="pb-11 mb-11">
                    <div className="border-bottom border-color-1 mb-5">
                        <h3 className="section-title text-center  mb-0 pb-2 font-size-25">Add Product</h3>
                    </div>
                    <form onSubmit={handleSubmit} method="POST" enctype="multipart/form-data">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="js-form-message mb-6">
                                    <label className="form-label">
                                        Title
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input type="text" className="form-control" name="title" onChange={(event) => setTitle(event.target.value)} placeholder="Title"  required data-msg="Please enter your frist name." data-error-className="u-has-error" data-success-className="u-has-success" autocomplete="off" />
                                </div>
                            </div>

                            <div className="col-md-12">

                                <div className="js-form-message mb-6">
                                    <label for="description" className="form-label">
                                        Description
                                        <span className="text-danger">*</span>
                                    </label>
                                    <textarea id="description" type="text" className="form-control" name="description" onChange={(event) => setDescription(event.target.value)} placeholder="Description" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="js-form-message mb-6">
                                    <label for="description" className="form-label">
                                        Digital Item
                                        
                                    </label>
                                    <label>&nbsp; </label>
                                    
                                    <input onChange={(event) => event.target.checked ? setdigital_item(1) : setdigital_item(0)} type="checkbox" name="digital_item" />
                                </div>
                            </div>
                                <div className="col-md-6">
                                    <div className="js-form-message mb-6">
                                        <label className="form-label">
                                            Stock
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input required placeholder="15" type="number" className="form-control" name="stock" onChange={(event) => setstock(event.target.value)} />
                                    </div>
                                </div>
            
                            <div className="col-md-6">
                                <div className="js-form-message mb-6">
                                    <label className="form-label">
                                        Category
                                        <span className="text-danger">*</span>
                                    </label>
                                    <select required className="form-control" onChange={(event) => setCategory(event.target.value)} name="category" id="category">
                                        <option value="0">Select</option>
                                        {
                                            Object.keys(categories).map((indx) =>
                                                <option value={categories[indx].id}>{categories[indx].title}</option>
                                        )}

                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="js-form-message mb-6">
                                    <label className="form-label">
                                        Subcategory
                                        <span className="text-danger">*</span>
                                    </label>
                                    <select className="form-control" onChange={(event) => setSub_category(event.target.value)} required name="sub_category" id="">
                                        {
                                            Object.keys(categories).map((indx) =>
                                            (
                                                categories[indx].id == category ?
                                                    (
                                                        Object.keys(categories[indx].subcategory).map((ind) => (
                                                            <option value={categories[indx].subcategory[ind].id}>{categories[indx].subcategory[ind].title}</option>
                                                        ))
                                                    ) : ''
                                            )
                                            )}
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="js-form-message mb-6">
                                    <label className="form-label">
                                        Selling price
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input type="number" className="form-control"
                                    placeholder="100" name="selling_price" onChange={(event) => setSelling_price(event.target.value)} required data-error-className="u-has-error" data-success-className="u-has-success" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="js-form-message mb-6">
                                    <label className="form-label">
                                        Offer price
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input type="number" className="form-control" placeholder="80" name="offer_price" onChange={(event) => setOffer_price(event.target.value)} required data-error-className="u-has-error" data-success-className="u-has-success" />
                                </div>
                            </div>


                            

                        </div>
                        <button type="submit" className="btn btn-block btn-sm btn-primary transition-3d-hover mt-2">Submit</button>

                    </form>
                </div>

            </div>
        </div>
    )
    }
export default AddProduct;