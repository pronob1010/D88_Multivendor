const CartData = [];

if (process.browser) {
  var myobj = window.localStorage.getItem("cart");
  
  if (myobj != null) {
      
    JSON.parse(myobj).map(item => {
        CartData.push(item);
      })
    
  }
//   console.log(CartData);
}

export default CartData;
