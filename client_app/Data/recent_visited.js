let ProductsIdList = []
// import ProductsIdList from './recent_visited';

if (process.browser) {
    let myrecentobj = window.localStorage.getItem("recent_checked");
    
    if (myrecentobj != null)
    {
        JSON.parse(myrecentobj).map(item => {
            ProductsIdList.push(item);
        });
        
    }
    // console.log(_.uniq(ProductsIdList, false));
}

ProductsIdList = [...new Set(ProductsIdList)];

// console.log(ProductsIdList);



export default ProductsIdList;