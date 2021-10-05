const ProductsIdList = [
]

if (process.browser) {
    let myrecentobj = window.localStorage.getItem("recent_checked");
    // console.log(myrecentobj);

    if (myrecentobj != null){
        JSON.parse(myrecentobj).map(item => {
            ProductsIdList.push(item);
        })
    }
}

export default ProductsIdList;