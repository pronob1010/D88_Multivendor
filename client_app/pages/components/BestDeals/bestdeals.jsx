import axios from 'axios';
import { useEffect,useState } from 'react';
import Cate_product from './Cate_product';
export default function BestDeals(){
    
    const [categories, setCategories] = useState(null)
    const [allProducts, setAllProducts] = useState(null)
    const [cateProducts, setCateProducts] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/data/categories/")
        .then(response=>{
            setCategories(response.data)
        })
        axios.get("http://localhost:8000/api/data/allproducts/")
        .then(response=>{
            setAllProducts(response.data)
        })
    },[]);

    function cate_product(id){
        let products = allProducts.filter(prod => prod.category===id)
        setCateProducts(products)
        let prod_box = document.querySelector('.prod_box')
        prod_box.id = "id_"+id
        let cate = categories.filter(cate=>cate.id===id)
        localStorage.setItem("cate_name", cate[0].title);
    }


    return (
    <div>
            {categories !== null ? <div className="products-group-4-1-4 space-1 bg-gray-7">
                <h2 className="sr-only">Products Grid</h2>
                <div className="container">

                    <div className="position-relative text-center z-index-2 mb-3">
                        <ul className="nav nav-classic nav-tab nav-tab-sm px-md-3 justify-content-start justify-content-lg-center flex-nowrap flex-lg-wrap overflow-auto overflow-lg-visble border-md-down-bottom-0 pb-1 pb-lg-0 mb-n1 mb-lg-0" id="pills-tab-1" role="tablist">

                            {categories.map(cate => {
                                return (
                                    <li onClick={()=>
                                        cate_product(cate.id)
                                    } className="nav-item flex-shrink-0 flex-lg-shrink-1">
                                        <a className="nav-link " id={"id_"+cate.id + "-tab"} data-toggle="pill" href={"#" + "id_"+cate.id} role="tab" aria-controls={"id_"+cate.id} aria-selected="false">
                                                <div className="d-md-flex justify-content-md-center align-items-md-center">
                                                    {cate.title}
                                                </div>
                                            </a>
                                        </li>
                                )
                            })}


                        </ul>
                    </div>

                    <div className="tab-content" id="Tpills-tabContent">
                        <div className="tab-pane fade pt-2 prod_box" id="id" role="tabpanel" >
                            <div className="row no-gutters">
                                <div className="col-md-12 d-md-flex d-wd-block">
                                    <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                                        {cateProducts!==null?cateProducts.map(prod=>{
                                            return(
                                                <Cate_product key={prod.id} prod={prod}/>
                                            )
                                        }):null}
                                    </ul>
                                </div>
                            </div>
                        </div>
                         
                    </div>

                </div>
            </div>:null}
    </div>
    );
}