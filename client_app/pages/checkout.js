import { useSelector } from 'react-redux';
import CheckoutSingleProductBlock from './components/Checkout/CheckoutSingleProductBlock';

export default function Checkout(){
    const { token } = useSelector(state => state.userReducer)
    
    let cartItems = useSelector((state) => state.cartState.cart);

    let cartBlocks = cartItems.map((item) => { return (<CheckoutSingleProductBlock item={item}/>) });
    let cartTotal = ''
    cartTotal = cartTotal + cartItems.map((item) =>  {
        let uid = item.product_id;

        let singleProductData = useSelector((state) =>
            state.productState.products.find((ele) => ele.id == uid))
        console.log(typeof (parseInt(singleProductData.offer_price * item.product_quantity)))
            return parseInt(singleProductData.offer_price * item.product_quantity);
        })
    let prices = cartTotal.split(',')
    let totalPrice = 0
    for( let i=0; i<prices.length; i+=1){
        totalPrice+= parseInt(prices[i])
    }

    let custom_login;
    if (token == null ){

        custom_login = (
            <>
             {/* <!-- Accordion --> */}
             <div id="shopCartAccordion" className="accordion rounded mb-5">
             {/* <!-- Card --> */}
             <div className="card border-0">
                 <div id="shopCartHeadingOne" className="alert alert-primary mb-0" role="alert">
                     Returning customer? <a href="#" className="alert-link" data-toggle="collapse" data-target="#shopCartOne" aria-expanded="false" aria-controls="shopCartOne">Click here to login</a>
                 </div>
                 <div id="shopCartOne" className="collapse border border-top-0" aria-labelledby="shopCartHeadingOne" data-parent="#shopCartAccordion" >
                     {/* <!-- Form --> */}
                     <form className="js-validate p-5">
                         {/* <!-- Title --> */}
                         <div className="mb-5">
                             <p className="text-gray-90 mb-2">Welcome back! Sign in to your account.</p>
                             <p className="text-gray-90">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
                         </div>
                         {/* <!-- End Title --> */}

                         <div className="row">
                             <div className="col-lg-6">
                                 {/* <!-- Form Group --> */}
                                 <div className="js-form-message form-group">
                                     <label className="form-label" for="signinSrEmailExample3">Email address</label>
                                     <input type="email" className="form-control" name="email" id="signinSrEmailExample3" placeholder="Email address" aria-label="Email address" required
                                     data-msg="Please enter a valid email address."
                                     data-error-className="u-has-error"
                                     data-success-className="u-has-success"/>
                                 </div>
                                 {/* <!-- End Form Group --> */}
                             </div>
                             <div className="col-lg-6">
                                 {/* <!-- Form Group --> */}
                                 <div className="js-form-message form-group">
                                     <label className="form-label" for="signinSrPasswordExample2">Password</label>
                                     <input type="password" className="form-control" name="password" id="signinSrPasswordExample2" placeholder="********" aria-label="********" required
                                     data-msg="Your password is invalid. Please try again."
                                     data-error-className="u-has-error"
                                     data-success-className="u-has-success"/>
                                 </div>
                                 {/* <!-- End Form Group --> */}
                             </div>
                         </div>

                         {/* <!-- Checkbox --> */}
                         <div className="js-form-message mb-3">
                             <div className="custom-control custom-checkbox d-flex align-items-center">
                                 <input type="checkbox" className="custom-control-input" id="rememberCheckbox" name="rememberCheckbox" required
                                 data-error-className="u-has-error"
                                 data-success-className="u-has-success"/>
                                 <label className="custom-control-label form-label" for="rememberCheckbox">
                                     Remember me
                                 </label>
                             </div>
                         </div>
                         {/* <!-- End Checkbox --> */}

                         {/* <!-- Button --> */}
                         <div className="mb-1">
                             <div className="mb-3">
                                 <button type="submit" className="btn btn-primary-dark-w px-5">Login</button>
                             </div>
                             <div className="mb-2">
                                 <a className="text-blue" href="#">Lost your password?</a>
                             </div>
                         </div>
                         {/* <!-- End Button --> */}
                     </form>
                     {/* <!-- End Form --> */}
                 </div>
             </div>
             {/* <!-- End Card --> */}
         </div>
         {/* <!-- End Accordion --> */}
         </>
        )
    }

    return(
        <main id="content" role="main" className="checkout-page">
            {/* <!-- breadcrumb --> */}
            <div className="bg-gray-13 bg-md-transparent">
                <div className="container">
                    {/* <!-- breadcrumb --> */}
                    <div className="my-md-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="/">Home</a></li>
                                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">Checkout</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <!-- End breadcrumb --> */}
                </div>
            </div>
            {/* <!-- End breadcrumb --> */}

            <div className="container">
                <div className="mb-5">
                    <h1 className="text-center">Checkout</h1>
                </div>

               {custom_login}

                {/* <!-- Accordion --> */}
                <div id="shopCartAccordion1" className="accordion rounded mb-6">
                    {/* <!-- Card --> */}
                    <div className="card border-0">
                        <div id="shopCartTwo" className="collapse border border-top-0" aria-labelledby="shopCartHeadingTwo" data-parent="#shopCartAccordion1" >
                            <form className="js-validate p-5" novalidate="novalidate">
                                <p className="w-100 text-gray-90">If you have a coupon code, please apply it below.</p>
                                <div className="input-group input-group-pill max-width-660-xl">
                                    <input type="text" className="form-control" name="name" placeholder="Coupon code" aria-label="Promo code"/>
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-block btn-dark font-weight-normal btn-pill px-4">
                                            <i className="fas fa-tags d-md-none"></i>
                                            <span className="d-none d-md-inline">Apply coupon</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!-- End Card --> */}
                </div>
                {/* <!-- End Accordion --> */}
                <form className="js-validate" novalidate="novalidate">
                    <div className="row">
                        <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                            <div className="pl-lg-3 ">
                                <div className="bg-gray-1 rounded-lg">
                                    {/* <!-- Order Summary --> */}
                                    <div className="p-4 mb-4 checkout-table">
                                        {/* <!-- Title --> */}
                                        <div className="border-bottom border-color-1 mb-5">
                                            <h3 className="section-title mb-0 pb-2 font-size-25">Your order</h3>
                                        </div>
                                        {/* <!-- End Title --> */}

                                        {/* <!-- Product Content --> */}
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-total">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {cartBlocks}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Subtotal</th>
                                                    <td>৳{totalPrice}</td>
                                                </tr>
                                                <tr>
                                                    <th>Shipping</th>
                                                    <td>৳300</td>
                                                </tr>
                                                <tr>
                                                    <th>Total</th>
                                                    <td><strong>৳{totalPrice+300}</strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        {/* <!-- End Product Content --> */}
                                        <div className="border-top border-width-3 border-color-1 pt-3 mb-3">
                                            {/* <!-- Basics Accordion --> */}
                                            <div id="basicsAccordion1">
                                                {/* <!-- Card --> */}
                                                <div className="border-bottom border-color-1 border-dotted-bottom">
                                                    <div className="p-3" id="basicsHeadingOne">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" id="stylishRadio1" name="stylishRadio" checked />
                                                            <label className="custom-control-label form-label" for="stylishRadio1"
                                                                data-toggle="collapse"
                                                                data-target="#basicsCollapseOnee"
                                                                aria-expanded="true"
                                                                aria-controls="basicsCollapseOnee">
                                                                Direct bank transfer
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div id="basicsCollapseOnee" className="collapse show border-top border-color-1 border-dotted-top bg-dark-lighter"
                                                        aria-labelledby="basicsHeadingOne"
                                                        data-parent="#basicsAccordion1">
                                                        <div className="p-4">
                                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- End Card --> */}

                                                {/* <!-- Card --> */}
                                                <div className="border-bottom border-color-1 border-dotted-bottom">
                                                    <div className="p-3" id="basicsHeadingTwo">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" id="secondStylishRadio1" name="stylishRadio" />
                                                            <label className="custom-control-label form-label" for="secondStylishRadio1"
                                                                data-toggle="collapse"
                                                                data-target="#basicsCollapseTwo"
                                                                aria-expanded="false"
                                                                aria-controls="basicsCollapseTwo">
                                                                Check payments
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div id="basicsCollapseTwo" className="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                                                        aria-labelledby="basicsHeadingTwo"
                                                        data-parent="#basicsAccordion1">
                                                        <div className="p-4">
                                                            Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- End Card --> */}

                                                {/* <!-- Card --> */}
                                                <div className="border-bottom border-color-1 border-dotted-bottom">
                                                    <div className="p-3" id="basicsHeadingThree">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" id="thirdstylishRadio1" name="stylishRadio" />
                                                            <label className="custom-control-label form-label" for="thirdstylishRadio1"
                                                                data-toggle="collapse"
                                                                data-target="#basicsCollapseThree"
                                                                aria-expanded="false"
                                                                aria-controls="basicsCollapseThree">
                                                                Cash on delivery
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div id="basicsCollapseThree" className="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                                                        aria-labelledby="basicsHeadingThree"
                                                        data-parent="#basicsAccordion1">
                                                        <div className="p-4">
                                                            Pay with cash upon delivery.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- End Card --> */}

                                                {/* <!-- Card --> */}
                                                <div className="border-bottom border-color-1 border-dotted-bottom">
                                                    <div className="p-3" id="basicsHeadingFour">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" id="FourstylishRadio1" name="stylishRadio" />
                                                            <label className="custom-control-label form-label" for="FourstylishRadio1"
                                                                data-toggle="collapse"
                                                                data-target="#basicsCollapseFour"
                                                                aria-expanded="false"
                                                                aria-controls="basicsCollapseFour">
                                                                PayPal <a href="#" className="text-blue">What is PayPal?</a>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div id="basicsCollapseFour" className="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                                                        aria-labelledby="basicsHeadingFour"
                                                        data-parent="#basicsAccordion1">
                                                        <div className="p-4">
                                                            Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- End Card --> */}
                                            </div>
                                            {/* <!-- End Basics Accordion --> */}
                                        </div>
                                        <div className="form-group d-flex align-items-center justify-content-between px-3 mb-5">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck10" required
                                                    data-msg="Please agree terms and conditions."
                                                    data-error-className="u-has-error"
                                                    data-success-className="u-has-success"/>
                                                <label className="form-check-label form-label" for="defaultCheck10">
                                                    I have read and agree to the website <a href="#" className="text-blue">terms and conditions </a>
                                                    <span className="text-danger">*</span>
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary-dark-w btn-block btn-pill font-size-20 mb-3 py-3">Place order</button>
                                    </div>
                                    {/* <!-- End Order Summary --> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 order-lg-1">
                            <div className="pb-7 mb-7">
                                {/* <!-- Title --> */}
                                <div className="border-bottom border-color-1 mb-5">
                                    <h3 className="section-title mb-0 pb-2 font-size-25">Billing details</h3>
                                </div>
                                {/* <!-- End Title --> */}

                                {/* <!-- Billing Form --> */}
                                <div className="row">
                                    <div className="col-md-6">
                                        {/* <!-- Input --> */}
                                        <div className="js-form-message mb-6">
                                            <label className="form-label">
                                                First name
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" name="firstName" placeholder="Jack" aria-label="Jack" required="" data-msg="Please enter your frist name." data-error-className="u-has-error" data-success-className="u-has-success" autocomplete="off"/>
                                        </div>
                                        {/* <!-- End Input --> */}
                                    </div>

                                    <div className="col-md-6">
                                        {/* <!-- Input --> */}
                                        <div className="js-form-message mb-6">
                                            <label className="form-label">
                                                Last name
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" name="lastName" placeholder="Wayley" aria-label="Wayley" required="" data-msg="Please enter your last name." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                        </div>
                                        {/* <!-- End Input --> */}
                                    </div>

                                    <div className="w-100"></div>

                                    <div className="col-md-12">
                                        {/* <!-- Input --> */}
                                        <div className="js-form-message mb-6">
                                            <label className="form-label">
                                                Company name (optional)
                                            </label>
                                            <input type="text" className="form-control" name="companyName" placeholder="Company Name" aria-label="Company Name" data-msg="Please enter a company name." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                        </div>
                                        {/* <!-- End Input --> */}
                                    </div>

                                    <div className="col-md-12">
                                        {/* <!-- Input --> */}
                                        <div className="js-form-message mb-6">
                                            <label className="form-label">
                                                Country
                                                <span className="text-danger">*</span>
                                            </label>
                                            <select className="form-control js-select selectpicker dropdown-select" required="" data-msg="Please select country." data-error-className="u-has-error" data-success-className="u-has-success"
                                                data-live-search="true"
                                                data-style="form-control border-color-1 font-weight-normal">
                                                <option value="">Select country</option>
                                                <option value="AF">Afghanistan</option>
                                                <option value="AX">Åland Islands</option>
                                                <option value="AL">Albania</option>
                                                <option value="DZ">Algeria</option>
                                                <option value="AS">American Samoa</option>
                                                <option value="AD">Andorra</option>
                                                <option value="AO">Angola</option>
                                                <option value="AI">Anguilla</option>
                                                <option value="AQ">Antarctica</option>
                                                <option value="AG">Antigua and Barbuda</option>
                                                <option value="AR">Argentina</option>
                                                <option value="AM">Armenia</option>
                                                <option value="AW">Aruba</option>
                                                <option value="AU">Australia</option>
                                                <option value="AT">Austria</option>
                                                <option value="AZ">Azerbaijan</option>
                                                <option value="BS">Bahamas</option>
                                                <option value="BH">Bahrain</option>
                                                <option value="BD">Bangladesh</option>
                                                <option value="BB">Barbados</option>
                                                <option value="BY">Belarus</option>
                                                <option value="BE">Belgium</option>
                                                <option value="BZ">Belize</option>
                                                <option value="BJ">Benin</option>
                                                <option value="BM">Bermuda</option>
                                                <option value="BT">Bhutan</option>
                                                <option value="BO">Bolivia, Plurinational State of</option>
                                                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                                <option value="BA">Bosnia and Herzegovina</option>
                                                <option value="BW">Botswana</option>
                                                <option value="BV">Bouvet Island</option>
                                                <option value="BR">Brazil</option>
                                                <option value="IO">British Indian Ocean Territory</option>
                                                <option value="BN">Brunei Darussalam</option>
                                                <option value="BG">Bulgaria</option>
                                                <option value="BF">Burkina Faso</option>
                                                <option value="BI">Burundi</option>
                                                <option value="KH">Cambodia</option>
                                                <option value="CM">Cameroon</option>
                                                <option value="CA">Canada</option>
                                                <option value="CV">Cape Verde</option>
                                                <option value="KY">Cayman Islands</option>
                                                <option value="CF">Central African Republic</option>
                                                <option value="TD">Chad</option>
                                                <option value="CL">Chile</option>
                                                <option value="CN">China</option>
                                                <option value="CX">Christmas Island</option>
                                                <option value="CC">Cocos (Keeling) Islands</option>
                                                <option value="CO">Colombia</option>
                                                <option value="KM">Comoros</option>
                                                <option value="CG">Congo</option>
                                                <option value="CD">Congo, the Democratic Republic of the</option>
                                                <option value="CK">Cook Islands</option>
                                                <option value="CR">Costa Rica</option>
                                                <option value="CI">Côte d'Ivoire</option>
                                                <option value="HR">Croatia</option>
                                                <option value="CU">Cuba</option>
                                                <option value="CW">Curaçao</option>
                                                <option value="CY">Cyprus</option>
                                                <option value="CZ">Czech Republic</option>
                                                <option value="DK">Denmark</option>
                                                <option value="DJ">Djibouti</option>
                                                <option value="DM">Dominica</option>
                                                <option value="DO">Dominican Republic</option>
                                                <option value="EC">Ecuador</option>
                                                <option value="EG">Egypt</option>
                                                <option value="SV">El Salvador</option>
                                                <option value="GQ">Equatorial Guinea</option>
                                                <option value="ER">Eritrea</option>
                                                <option value="EE">Estonia</option>
                                                <option value="ET">Ethiopia</option>
                                                <option value="FK">Falkland Islands (Malvinas)</option>
                                                <option value="FO">Faroe Islands</option>
                                                <option value="FJ">Fiji</option>
                                                <option value="FI">Finland</option>
                                                <option value="FR">France</option>
                                                <option value="GF">French Guiana</option>
                                                <option value="PF">French Polynesia</option>
                                                <option value="TF">French Southern Territories</option>
                                                <option value="GA">Gabon</option>
                                                <option value="GM">Gambia</option>
                                                <option value="GE">Georgia</option>
                                                <option value="DE">Germany</option>
                                                <option value="GH">Ghana</option>
                                                <option value="GI">Gibraltar</option>
                                                <option value="GR">Greece</option>
                                                <option value="GL">Greenland</option>
                                                <option value="GD">Grenada</option>
                                                <option value="GP">Guadeloupe</option>
                                                <option value="GU">Guam</option>
                                                <option value="GT">Guatemala</option>
                                                <option value="GG">Guernsey</option>
                                                <option value="GN">Guinea</option>
                                                <option value="GW">Guinea-Bissau</option>
                                                <option value="GY">Guyana</option>
                                                <option value="HT">Haiti</option>
                                                <option value="HM">Heard Island and McDonald Islands</option>
                                                <option value="VA">Holy See (Vatican City State)</option>
                                                <option value="HN">Honduras</option>
                                                <option value="HK">Hong Kong</option>
                                                <option value="HU">Hungary</option>
                                                <option value="IS">Iceland</option>
                                                <option value="IN">India</option>
                                                <option value="ID">Indonesia</option>
                                                <option value="IR">Iran, Islamic Republic of</option>
                                                <option value="IQ">Iraq</option>
                                                <option value="IE">Ireland</option>
                                                <option value="IM">Isle of Man</option>
                                                <option value="IL">Israel</option>
                                                <option value="IT">Italy</option>
                                                <option value="JM">Jamaica</option>
                                                <option value="JP">Japan</option>
                                                <option value="JE">Jersey</option>
                                                <option value="JO">Jordan</option>
                                                <option value="KZ">Kazakhstan</option>
                                                <option value="KE">Kenya</option>
                                                <option value="KI">Kiribati</option>
                                                <option value="KP">Korea, Democratic People's Republic of</option>
                                                <option value="KR">Korea, Republic of</option>
                                                <option value="KW">Kuwait</option>
                                                <option value="KG">Kyrgyzstan</option>
                                                <option value="LA">Lao People's Democratic Republic</option>
                                                <option value="LV">Latvia</option>
                                                <option value="LB">Lebanon</option>
                                                <option value="LS">Lesotho</option>
                                                <option value="LR">Liberia</option>
                                                <option value="LY">Libya</option>
                                                <option value="LI">Liechtenstein</option>
                                                <option value="LT">Lithuania</option>
                                                <option value="LU">Luxembourg</option>
                                                <option value="MO">Macao</option>
                                                <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                                <option value="MG">Madagascar</option>
                                                <option value="MW">Malawi</option>
                                                <option value="MY">Malaysia</option>
                                                <option value="MV">Maldives</option>
                                                <option value="ML">Mali</option>
                                                <option value="MT">Malta</option>
                                                <option value="MH">Marshall Islands</option>
                                                <option value="MQ">Martinique</option>
                                                <option value="MR">Mauritania</option>
                                                <option value="MU">Mauritius</option>
                                                <option value="YT">Mayotte</option>
                                                <option value="MX">Mexico</option>
                                                <option value="FM">Micronesia, Federated States of</option>
                                                <option value="MD">Moldova, Republic of</option>
                                                <option value="MC">Monaco</option>
                                                <option value="MN">Mongolia</option>
                                                <option value="ME">Montenegro</option>
                                                <option value="MS">Montserrat</option>
                                                <option value="MA">Morocco</option>
                                                <option value="MZ">Mozambique</option>
                                                <option value="MM">Myanmar</option>
                                                <option value="NA">Namibia</option>
                                                <option value="NR">Nauru</option>
                                                <option value="NP">Nepal</option>
                                                <option value="NL">Netherlands</option>
                                                <option value="NC">New Caledonia</option>
                                                <option value="NZ">New Zealand</option>
                                                <option value="NI">Nicaragua</option>
                                                <option value="NE">Niger</option>
                                                <option value="NG">Nigeria</option>
                                                <option value="NU">Niue</option>
                                                <option value="NF">Norfolk Island</option>
                                                <option value="MP">Northern Mariana Islands</option>
                                                <option value="NO">Norway</option>
                                                <option value="OM">Oman</option>
                                                <option value="PK">Pakistan</option>
                                                <option value="PW">Palau</option>
                                                <option value="PS">Palestinian Territory, Occupied</option>
                                                <option value="PA">Panama</option>
                                                <option value="PG">Papua New Guinea</option>
                                                <option value="PY">Paraguay</option>
                                                <option value="PE">Peru</option>
                                                <option value="PH">Philippines</option>
                                                <option value="PN">Pitcairn</option>
                                                <option value="PL">Poland</option>
                                                <option value="PT">Portugal</option>
                                                <option value="PR">Puerto Rico</option>
                                                <option value="QA">Qatar</option>
                                                <option value="RE">Réunion</option>
                                                <option value="RO">Romania</option>
                                                <option value="RU">Russian Federation</option>
                                                <option value="RW">Rwanda</option>
                                                <option value="BL">Saint Barthélemy</option>
                                                <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                                <option value="KN">Saint Kitts and Nevis</option>
                                                <option value="LC">Saint Lucia</option>
                                                <option value="MF">Saint Martin (French part)</option>
                                                <option value="PM">Saint Pierre and Miquelon</option>
                                                <option value="VC">Saint Vincent and the Grenadines</option>
                                                <option value="WS">Samoa</option>
                                                <option value="SM">San Marino</option>
                                                <option value="ST">Sao Tome and Principe</option>
                                                <option value="SA">Saudi Arabia</option>
                                                <option value="SN">Senegal</option>
                                                <option value="RS">Serbia</option>
                                                <option value="SC">Seychelles</option>
                                                <option value="SL">Sierra Leone</option>
                                                <option value="SG">Singapore</option>
                                                <option value="SX">Sint Maarten (Dutch part)</option>
                                                <option value="SK">Slovakia</option>
                                                <option value="SI">Slovenia</option>
                                                <option value="SB">Solomon Islands</option>
                                                <option value="SO">Somalia</option>
                                                <option value="ZA">South Africa</option>
                                                <option value="GS">South Georgia and the South Sandwich Islands</option>
                                                <option value="SS">South Sudan</option>
                                                <option value="ES">Spain</option>
                                                <option value="LK">Sri Lanka</option>
                                                <option value="SD">Sudan</option>
                                                <option value="SR">Suriname</option>
                                                <option value="SJ">Svalbard and Jan Mayen</option>
                                                <option value="SZ">Swaziland</option>
                                                <option value="SE">Sweden</option>
                                                <option value="CH">Switzerland</option>
                                                <option value="SY">Syrian Arab Republic</option>
                                                <option value="TW">Taiwan, Province of China</option>
                                                <option value="TJ">Tajikistan</option>
                                                <option value="TZ">Tanzania, United Republic of</option>
                                                <option value="TH">Thailand</option>
                                                <option value="TL">Timor-Leste</option>
                                                <option value="TG">Togo</option>
                                                <option value="TK">Tokelau</option>
                                                <option value="TO">Tonga</option>
                                                <option value="TT">Trinidad and Tobago</option>
                                                <option value="TN">Tunisia</option>
                                                <option value="TR">Turkey</option>
                                                <option value="TM">Turkmenistan</option>
                                                <option value="TC">Turks and Caicos Islands</option>
                                                <option value="TV">Tuvalu</option>
                                                <option value="UG">Uganda</option>
                                                <option value="UA">Ukraine</option>
                                                <option value="AE">United Arab Emirates</option>
                                                <option value="GB">United Kingdom</option>
                                                <option value="US">United States</option>
                                                <option value="UM">United States Minor Outlying Islands</option>
                                                <option value="UY">Uruguay</option>
                                                <option value="UZ">Uzbekistan</option>
                                                <option value="VU">Vanuatu</option>
                                                <option value="VE">Venezuela, Bolivarian Republic of</option>
                                                <option value="VN">Viet Nam</option>
                                                <option value="VG">Virgin Islands, British</option>
                                                <option value="VI">Virgin Islands, U.S.</option>
                                                <option value="WF">Wallis and Futuna</option>
                                                <option value="EH">Western Sahara</option>
                                                <option value="YE">Yemen</option>
                                                <option value="ZM">Zambia</option>
                                                <option value="ZW">Zimbabwe</option>
                                            </select>
                                        </div>
                                        {/* <!-- End Input --> */}
                                    </div>

                                    <div className="col-md-8">
                                        {/* <!-- Input --> */}
                                        <div className="js-form-message mb-6">
                                            <label className="form-label">
                                                Street address
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" name="streetAddress" placeholder="470 Lucy Forks" aria-label="470 Lucy Forks" required="" data-msg="Please enter a valid address." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                        </div>
                                        {/* <!-- End Input --> */}
                                    </div>

                                    <div className="col-md-4">
                                        {/* <!-- Input --> */}
                                        <div className="js-form-message mb-6">
                                            <label className="form-label">
                                                Apt, suite, etc.
                                            </label>
                                            <input type="text" className="form-control" placeholder="YC7B 3UT" aria-label="YC7B 3UT" data-msg="Please enter a valid address." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                        </div>
                                        {/* <!-- End Input --> */}
                                    </div>

                                    <div className="col-md-6">
                                        {/* <!-- Input --> */}
                                        <div className="js-form-message mb-6">
                                            <label className="form-label">
                                                City
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" name="cityAddress" placeholder="London" aria-label="London" required="" data-msg="Please enter a valid address." data-error-className="u-has-error" data-success-className="u-has-success" autocomplete="off"/>
                                        </div>
                                        {/* <!-- End Input --> */}
                                    </div>

                                    <div className="col-md-6">
                                        {/* <!-- Input --> */}
                                        <div className="js-form-message mb-6">
                                            <label className="form-label">
                                                Postcode/Zip
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" name="postcode" placeholder="99999" aria-label="99999" required="" data-msg="Please enter a postcode or zip code." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                        </div>
                                        {/* <!-- End Input --> */}
                                    </div>

                                    <div className="w-100"></div>

                                    <div className="col-md-12">
                                        {/* <!-- Input --> */}
                                        <div className="js-form-message mb-6">
                                            <label className="form-label">
                                                State
                                                <span className="text-danger">*</span>
                                            </label>
                                            <select className="form-control js-select selectpicker dropdown-select" required="" data-msg="Please select state." data-error-className="u-has-error" data-success-className="u-has-success"
                                                data-live-search="true"
                                                data-style="form-control border-color-1 font-weight-normal">
                                                <option value="">Select state</option>
                                                <option value="AF">Afghanistan</option>
                                                <option value="AX">Åland Islands</option>
                                                <option value="AL">Albania</option>
                                                <option value="DZ">Algeria</option>
                                                <option value="AS">American Samoa</option>
                                                <option value="AD">Andorra</option>
                                                <option value="AO">Angola</option>
                                                <option value="AI">Anguilla</option>
                                                <option value="AQ">Antarctica</option>
                                                <option value="AG">Antigua and Barbuda</option>
                                                <option value="AR">Argentina</option>
                                                <option value="AM">Armenia</option>
                                                <option value="AW">Aruba</option>
                                                <option value="AU">Australia</option>
                                                <option value="AT">Austria</option>
                                                <option value="AZ">Azerbaijan</option>
                                                <option value="BS">Bahamas</option>
                                                <option value="BH">Bahrain</option>
                                                <option value="BD">Bangladesh</option>
                                                <option value="BB">Barbados</option>
                                                <option value="BY">Belarus</option>
                                                <option value="BE">Belgium</option>
                                                <option value="BZ">Belize</option>
                                                <option value="BJ">Benin</option>
                                                <option value="BM">Bermuda</option>
                                                <option value="BT">Bhutan</option>
                                                <option value="BO">Bolivia, Plurinational State of</option>
                                                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                                <option value="BA">Bosnia and Herzegovina</option>
                                                <option value="BW">Botswana</option>
                                                <option value="BV">Bouvet Island</option>
                                                <option value="BR">Brazil</option>
                                                <option value="IO">British Indian Ocean Territory</option>
                                                <option value="BN">Brunei Darussalam</option>
                                                <option value="BG">Bulgaria</option>
                                                <option value="BF">Burkina Faso</option>
                                                <option value="BI">Burundi</option>
                                                <option value="KH">Cambodia</option>
                                                <option value="CM">Cameroon</option>
                                                <option value="CA">Canada</option>
                                                <option value="CV">Cape Verde</option>
                                                <option value="KY">Cayman Islands</option>
                                                <option value="CF">Central African Republic</option>
                                                <option value="TD">Chad</option>
                                                <option value="CL">Chile</option>
                                                <option value="CN">China</option>
                                                <option value="CX">Christmas Island</option>
                                                <option value="CC">Cocos (Keeling) Islands</option>
                                                <option value="CO">Colombia</option>
                                                <option value="KM">Comoros</option>
                                                <option value="CG">Congo</option>
                                                <option value="CD">Congo, the Democratic Republic of the</option>
                                                <option value="CK">Cook Islands</option>
                                                <option value="CR">Costa Rica</option>
                                                <option value="CI">Côte d'Ivoire</option>
                                                <option value="HR">Croatia</option>
                                                <option value="CU">Cuba</option>
                                                <option value="CW">Curaçao</option>
                                                <option value="CY">Cyprus</option>
                                                <option value="CZ">Czech Republic</option>
                                                <option value="DK">Denmark</option>
                                                <option value="DJ">Djibouti</option>
                                                <option value="DM">Dominica</option>
                                                <option value="DO">Dominican Republic</option>
                                                <option value="EC">Ecuador</option>
                                                <option value="EG">Egypt</option>
                                                <option value="SV">El Salvador</option>
                                                <option value="GQ">Equatorial Guinea</option>
                                                <option value="ER">Eritrea</option>
                                                <option value="EE">Estonia</option>
                                                <option value="ET">Ethiopia</option>
                                                <option value="FK">Falkland Islands (Malvinas)</option>
                                                <option value="FO">Faroe Islands</option>
                                                <option value="FJ">Fiji</option>
                                                <option value="FI">Finland</option>
                                                <option value="FR">France</option>
                                                <option value="GF">French Guiana</option>
                                                <option value="PF">French Polynesia</option>
                                                <option value="TF">French Southern Territories</option>
                                                <option value="GA">Gabon</option>
                                                <option value="GM">Gambia</option>
                                                <option value="GE">Georgia</option>
                                                <option value="DE">Germany</option>
                                                <option value="GH">Ghana</option>
                                                <option value="GI">Gibraltar</option>
                                                <option value="GR">Greece</option>
                                                <option value="GL">Greenland</option>
                                                <option value="GD">Grenada</option>
                                                <option value="GP">Guadeloupe</option>
                                                <option value="GU">Guam</option>
                                                <option value="GT">Guatemala</option>
                                                <option value="GG">Guernsey</option>
                                                <option value="GN">Guinea</option>
                                                <option value="GW">Guinea-Bissau</option>
                                                <option value="GY">Guyana</option>
                                                <option value="HT">Haiti</option>
                                                <option value="HM">Heard Island and McDonald Islands</option>
                                                <option value="VA">Holy See (Vatican City State)</option>
                                                <option value="HN">Honduras</option>
                                                <option value="HK">Hong Kong</option>
                                                <option value="HU">Hungary</option>
                                                <option value="IS">Iceland</option>
                                                <option value="IN">India</option>
                                                <option value="ID">Indonesia</option>
                                                <option value="IR">Iran, Islamic Republic of</option>
                                                <option value="IQ">Iraq</option>
                                                <option value="IE">Ireland</option>
                                                <option value="IM">Isle of Man</option>
                                                <option value="IL">Israel</option>
                                                <option value="IT">Italy</option>
                                                <option value="JM">Jamaica</option>
                                                <option value="JP">Japan</option>
                                                <option value="JE">Jersey</option>
                                                <option value="JO">Jordan</option>
                                                <option value="KZ">Kazakhstan</option>
                                                <option value="KE">Kenya</option>
                                                <option value="KI">Kiribati</option>
                                                <option value="KP">Korea, Democratic People's Republic of</option>
                                                <option value="KR">Korea, Republic of</option>
                                                <option value="KW">Kuwait</option>
                                                <option value="KG">Kyrgyzstan</option>
                                                <option value="LA">Lao People's Democratic Republic</option>
                                                <option value="LV">Latvia</option>
                                                <option value="LB">Lebanon</option>
                                                <option value="LS">Lesotho</option>
                                                <option value="LR">Liberia</option>
                                                <option value="LY">Libya</option>
                                                <option value="LI">Liechtenstein</option>
                                                <option value="LT">Lithuania</option>
                                                <option value="LU">Luxembourg</option>
                                                <option value="MO">Macao</option>
                                                <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                                <option value="MG">Madagascar</option>
                                                <option value="MW">Malawi</option>
                                                <option value="MY">Malaysia</option>
                                                <option value="MV">Maldives</option>
                                                <option value="ML">Mali</option>
                                                <option value="MT">Malta</option>
                                                <option value="MH">Marshall Islands</option>
                                                <option value="MQ">Martinique</option>
                                                <option value="MR">Mauritania</option>
                                                <option value="MU">Mauritius</option>
                                                <option value="YT">Mayotte</option>
                                                <option value="MX">Mexico</option>
                                                <option value="FM">Micronesia, Federated States of</option>
                                                <option value="MD">Moldova, Republic of</option>
                                                <option value="MC">Monaco</option>
                                                <option value="MN">Mongolia</option>
                                                <option value="ME">Montenegro</option>
                                                <option value="MS">Montserrat</option>
                                                <option value="MA">Morocco</option>
                                                <option value="MZ">Mozambique</option>
                                                <option value="MM">Myanmar</option>
                                                <option value="NA">Namibia</option>
                                                <option value="NR">Nauru</option>
                                                <option value="NP">Nepal</option>
                                                <option value="NL">Netherlands</option>
                                                <option value="NC">New Caledonia</option>
                                                <option value="NZ">New Zealand</option>
                                                <option value="NI">Nicaragua</option>
                                                <option value="NE">Niger</option>
                                                <option value="NG">Nigeria</option>
                                                <option value="NU">Niue</option>
                                                <option value="NF">Norfolk Island</option>
                                                <option value="MP">Northern Mariana Islands</option>
                                                <option value="NO">Norway</option>
                                                <option value="OM">Oman</option>
                                                <option value="PK">Pakistan</option>
                                                <option value="PW">Palau</option>
                                                <option value="PS">Palestinian Territory, Occupied</option>
                                                <option value="PA">Panama</option>
                                                <option value="PG">Papua New Guinea</option>
                                                <option value="PY">Paraguay</option>
                                                <option value="PE">Peru</option>
                                                <option value="PH">Philippines</option>
                                                <option value="PN">Pitcairn</option>
                                                <option value="PL">Poland</option>
                                                <option value="PT">Portugal</option>
                                                <option value="PR">Puerto Rico</option>
                                                <option value="QA">Qatar</option>
                                                <option value="RE">Réunion</option>
                                                <option value="RO">Romania</option>
                                                <option value="RU">Russian Federation</option>
                                                <option value="RW">Rwanda</option>
                                                <option value="BL">Saint Barthélemy</option>
                                                <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                                <option value="KN">Saint Kitts and Nevis</option>
                                                <option value="LC">Saint Lucia</option>
                                                <option value="MF">Saint Martin (French part)</option>
                                                <option value="PM">Saint Pierre and Miquelon</option>
                                                <option value="VC">Saint Vincent and the Grenadines</option>
                                                <option value="WS">Samoa</option>
                                                <option value="SM">San Marino</option>
                                                <option value="ST">Sao Tome and Principe</option>
                                                <option value="SA">Saudi Arabia</option>
                                                <option value="SN">Senegal</option>
                                                <option value="RS">Serbia</option>
                                                <option value="SC">Seychelles</option>
                                                <option value="SL">Sierra Leone</option>
                                                <option value="SG">Singapore</option>
                                                <option value="SX">Sint Maarten (Dutch part)</option>
                                                <option value="SK">Slovakia</option>
                                                <option value="SI">Slovenia</option>
                                                <option value="SB">Solomon Islands</option>
                                                <option value="SO">Somalia</option>
                                                <option value="ZA">South Africa</option>
                                                <option value="GS">South Georgia and the South Sandwich Islands</option>
                                                <option value="SS">South Sudan</option>
                                                <option value="ES">Spain</option>
                                                <option value="LK">Sri Lanka</option>
                                                <option value="SD">Sudan</option>
                                                <option value="SR">Suriname</option>
                                                <option value="SJ">Svalbard and Jan Mayen</option>
                                                <option value="SZ">Swaziland</option>
                                                <option value="SE">Sweden</option>
                                                <option value="CH">Switzerland</option>
                                                <option value="SY">Syrian Arab Republic</option>
                                                <option value="TW">Taiwan, Province of China</option>
                                                <option value="TJ">Tajikistan</option>
                                                <option value="TZ">Tanzania, United Republic of</option>
                                                <option value="TH">Thailand</option>
                                                <option value="TL">Timor-Leste</option>
                                                <option value="TG">Togo</option>
                                                <option value="TK">Tokelau</option>
                                                <option value="TO">Tonga</option>
                                                <option value="TT">Trinidad and Tobago</option>
                                                <option value="TN">Tunisia</option>
                                                <option value="TR">Turkey</option>
                                                <option value="TM">Turkmenistan</option>
                                                <option value="TC">Turks and Caicos Islands</option>
                                                <option value="TV">Tuvalu</option>
                                                <option value="UG">Uganda</option>
                                                <option value="UA">Ukraine</option>
                                                <option value="AE">United Arab Emirates</option>
                                                <option value="GB">United Kingdom</option>
                                                <option value="US">United States</option>
                                                <option value="UM">United States Minor Outlying Islands</option>
                                                <option value="UY">Uruguay</option>
                                                <option value="UZ">Uzbekistan</option>
                                                <option value="VU">Vanuatu</option>
                                                <option value="VE">Venezuela, Bolivarian Republic of</option>
                                                <option value="VN">Viet Nam</option>
                                                <option value="VG">Virgin Islands, British</option>
                                                <option value="VI">Virgin Islands, U.S.</option>
                                                <option value="WF">Wallis and Futuna</option>
                                                <option value="EH">Western Sahara</option>
                                                <option value="YE">Yemen</option>
                                                <option value="ZM">Zambia</option>
                                                <option value="ZW">Zimbabwe</option>
                                            </select>
                                        </div>
                                        {/* <!-- End Input --> */}
                                    </div>

                                    <div className="col-md-6">
                                        {/* <!-- Input --> */}
                                        <div className="js-form-message mb-6">
                                            <label className="form-label">
                                                Email address
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="email" className="form-control" name="emailAddress" placeholder="jackwayley@gmail.com" aria-label="jackwayley@gmail.com" required="" data-msg="Please enter a valid email address." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                        </div>
                                        {/* <!-- End Input --> */}
                                    </div>

                                    <div className="col-md-6">
                                        {/* <!-- Input --> */}
                                        <div className="js-form-message mb-6">
                                            <label className="form-label">
                                                Phone
                                            </label>
                                            <input type="text" className="form-control" placeholder="+1 (062) 109-9222" aria-label="+1 (062) 109-9222" data-msg="Please enter your last name." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                        </div>
                                        {/* <!-- End Input --> */}
                                    </div>

                                    <div className="w-100"></div>
                                </div>
                                {/* <!-- End Billing Form --> */}

                                {/* <!-- Accordion --> */}
                                <div id="shopCartAccordion2" className="accordion rounded mb-6">
                                    {/* <!-- Card --> */}
                                    <div className="card border-0">
                                        <div id="shopCartHeadingThree" className="custom-control custom-checkbox d-flex align-items-center">
                                            <input type="checkbox" className="custom-control-input" id="createAnaccount" name="createAnaccount" />
                                            <label className="custom-control-label form-label" for="createAnaccount" data-toggle="collapse" data-target="#shopCartThree" aria-expanded="false" aria-controls="shopCartThree">
                                                Create an account?
                                            </label>
                                        </div>
                                        <div id="shopCartThree" className="collapse" aria-labelledby="shopCartHeadingThree" data-parent="#shopCartAccordion2" >
                                            {/* <!-- Form Group --> */}
                                            <div className="js-form-message form-group py-5">
                                                <label className="form-label" for="signinSrPasswordExample1">
                                                    Create account password
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input type="password" className="form-control" name="password" id="signinSrPasswordExample1" placeholder="********" aria-label="********" required
                                                data-msg="Enter password."
                                                data-error-className="u-has-error"
                                                data-success-className="u-has-success"/>
                                            </div>
                                            {/* <!-- End Form Group --> */}
                                        </div>
                                    </div>
                                    {/* <!-- End Card --> */}
                                </div>
                                {/* <!-- End Accordion --> */}
                                {/* <!-- Title --> */}
                                <div className="border-bottom border-color-1 mb-5">
                                    <h3 className="section-title mb-0 pb-2 font-size-25">Shipping Details details</h3>
                                </div>
                                {/* <!-- End Title --> */}
                                {/* <!-- Accordion --> */}
                                <div id="shopCartAccordion3" className="accordion rounded mb-5">
                                    {/* <!-- Card --> */}
                                    <div className="card border-0">
                                        <div id="shopCartHeadingFour" className="custom-control custom-checkbox d-flex align-items-center">
                                            <input type="checkbox" className="custom-control-input" id="shippingdiffrentAddress" name="shippingdiffrentAddress" />
                                            <label className="custom-control-label form-label" for="shippingdiffrentAddress" data-toggle="collapse" data-target="#shopCartfour" aria-expanded="false" aria-controls="shopCartfour">
                                                Ship to a different address?
                                            </label>
                                        </div>
                                        <div id="shopCartfour" className="collapse mt-5" aria-labelledby="shopCartHeadingFour" data-parent="#shopCartAccordion3" >
                                            {/* <!-- Shipping Form --> */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    {/* <!-- Input --> */}
                                                    <div className="js-form-message mb-6">
                                                        <label className="form-label">
                                                            First name
                                                            <span className="text-danger">*</span>
                                                        </label>
                                                        <input type="text" className="form-control" name="firstName" placeholder="Jack" aria-label="Jack" required="" data-msg="Please enter your frist name." data-error-className="u-has-error" data-success-className="u-has-success" autocomplete="off"/>
                                                    </div>
                                                    {/* <!-- End Input --> */}
                                                </div>

                                                <div className="col-md-6">
                                                    {/* <!-- Input --> */}
                                                    <div className="js-form-message mb-6">
                                                        <label className="form-label">
                                                            Last name
                                                            <span className="text-danger">*</span>
                                                        </label>
                                                        <input type="text" className="form-control" name="lastName" placeholder="Wayley" aria-label="Wayley" required="" data-msg="Please enter your last name." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                                    </div>
                                                    {/* <!-- End Input --> */}
                                                </div>

                                                <div className="w-100"></div>

                                                <div className="col-md-12">
                                                    {/* <!-- Input --> */}
                                                    <div className="js-form-message mb-6">
                                                        <label className="form-label">
                                                            Company name (optional)
                                                        </label>
                                                        <input type="text" className="form-control" name="companyName" placeholder="Company Name" aria-label="Company Name" data-msg="Please enter a company name." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                                    </div>
                                                    {/* <!-- End Input --> */}
                                                </div>

                                                <div className="col-md-12">
                                                    {/* <!-- Input --> */}
                                                    <div className="js-form-message mb-6">
                                                        <label className="form-label">
                                                            Country
                                                            <span className="text-danger">*</span>
                                                        </label>
                                                        <select className="form-control js-select selectpicker dropdown-select" required="" data-msg="Please select country." data-error-className="u-has-error" data-success-className="u-has-success"
                                                            data-live-search="true"
                                                            data-style="form-control border-color-1 font-weight-normal">
                                                            <option value="">Select country</option>
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AX">Åland Islands</option>
                                                            <option value="AL">Albania</option>
                                                            <option value="DZ">Algeria</option>
                                                            <option value="AS">American Samoa</option>
                                                            <option value="AD">Andorra</option>
                                                            <option value="AO">Angola</option>
                                                            <option value="AI">Anguilla</option>
                                                            <option value="AQ">Antarctica</option>
                                                            <option value="AG">Antigua and Barbuda</option>
                                                            <option value="AR">Argentina</option>
                                                            <option value="AM">Armenia</option>
                                                            <option value="AW">Aruba</option>
                                                            <option value="AU">Australia</option>
                                                            <option value="AT">Austria</option>
                                                            <option value="AZ">Azerbaijan</option>
                                                            <option value="BS">Bahamas</option>
                                                            <option value="BH">Bahrain</option>
                                                            <option value="BD">Bangladesh</option>
                                                            <option value="BB">Barbados</option>
                                                            <option value="BY">Belarus</option>
                                                            <option value="BE">Belgium</option>
                                                            <option value="BZ">Belize</option>
                                                            <option value="BJ">Benin</option>
                                                            <option value="BM">Bermuda</option>
                                                            <option value="BT">Bhutan</option>
                                                            <option value="BO">Bolivia, Plurinational State of</option>
                                                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                                            <option value="BA">Bosnia and Herzegovina</option>
                                                            <option value="BW">Botswana</option>
                                                            <option value="BV">Bouvet Island</option>
                                                            <option value="BR">Brazil</option>
                                                            <option value="IO">British Indian Ocean Territory</option>
                                                            <option value="BN">Brunei Darussalam</option>
                                                            <option value="BG">Bulgaria</option>
                                                            <option value="BF">Burkina Faso</option>
                                                            <option value="BI">Burundi</option>
                                                            <option value="KH">Cambodia</option>
                                                            <option value="CM">Cameroon</option>
                                                            <option value="CA">Canada</option>
                                                            <option value="CV">Cape Verde</option>
                                                            <option value="KY">Cayman Islands</option>
                                                            <option value="CF">Central African Republic</option>
                                                            <option value="TD">Chad</option>
                                                            <option value="CL">Chile</option>
                                                            <option value="CN">China</option>
                                                            <option value="CX">Christmas Island</option>
                                                            <option value="CC">Cocos (Keeling) Islands</option>
                                                            <option value="CO">Colombia</option>
                                                            <option value="KM">Comoros</option>
                                                            <option value="CG">Congo</option>
                                                            <option value="CD">Congo, the Democratic Republic of the</option>
                                                            <option value="CK">Cook Islands</option>
                                                            <option value="CR">Costa Rica</option>
                                                            <option value="CI">Côte d'Ivoire</option>
                                                            <option value="HR">Croatia</option>
                                                            <option value="CU">Cuba</option>
                                                            <option value="CW">Curaçao</option>
                                                            <option value="CY">Cyprus</option>
                                                            <option value="CZ">Czech Republic</option>
                                                            <option value="DK">Denmark</option>
                                                            <option value="DJ">Djibouti</option>
                                                            <option value="DM">Dominica</option>
                                                            <option value="DO">Dominican Republic</option>
                                                            <option value="EC">Ecuador</option>
                                                            <option value="EG">Egypt</option>
                                                            <option value="SV">El Salvador</option>
                                                            <option value="GQ">Equatorial Guinea</option>
                                                            <option value="ER">Eritrea</option>
                                                            <option value="EE">Estonia</option>
                                                            <option value="ET">Ethiopia</option>
                                                            <option value="FK">Falkland Islands (Malvinas)</option>
                                                            <option value="FO">Faroe Islands</option>
                                                            <option value="FJ">Fiji</option>
                                                            <option value="FI">Finland</option>
                                                            <option value="FR">France</option>
                                                            <option value="GF">French Guiana</option>
                                                            <option value="PF">French Polynesia</option>
                                                            <option value="TF">French Southern Territories</option>
                                                            <option value="GA">Gabon</option>
                                                            <option value="GM">Gambia</option>
                                                            <option value="GE">Georgia</option>
                                                            <option value="DE">Germany</option>
                                                            <option value="GH">Ghana</option>
                                                            <option value="GI">Gibraltar</option>
                                                            <option value="GR">Greece</option>
                                                            <option value="GL">Greenland</option>
                                                            <option value="GD">Grenada</option>
                                                            <option value="GP">Guadeloupe</option>
                                                            <option value="GU">Guam</option>
                                                            <option value="GT">Guatemala</option>
                                                            <option value="GG">Guernsey</option>
                                                            <option value="GN">Guinea</option>
                                                            <option value="GW">Guinea-Bissau</option>
                                                            <option value="GY">Guyana</option>
                                                            <option value="HT">Haiti</option>
                                                            <option value="HM">Heard Island and McDonald Islands</option>
                                                            <option value="VA">Holy See (Vatican City State)</option>
                                                            <option value="HN">Honduras</option>
                                                            <option value="HK">Hong Kong</option>
                                                            <option value="HU">Hungary</option>
                                                            <option value="IS">Iceland</option>
                                                            <option value="IN">India</option>
                                                            <option value="ID">Indonesia</option>
                                                            <option value="IR">Iran, Islamic Republic of</option>
                                                            <option value="IQ">Iraq</option>
                                                            <option value="IE">Ireland</option>
                                                            <option value="IM">Isle of Man</option>
                                                            <option value="IL">Israel</option>
                                                            <option value="IT">Italy</option>
                                                            <option value="JM">Jamaica</option>
                                                            <option value="JP">Japan</option>
                                                            <option value="JE">Jersey</option>
                                                            <option value="JO">Jordan</option>
                                                            <option value="KZ">Kazakhstan</option>
                                                            <option value="KE">Kenya</option>
                                                            <option value="KI">Kiribati</option>
                                                            <option value="KP">Korea, Democratic People's Republic of</option>
                                                            <option value="KR">Korea, Republic of</option>
                                                            <option value="KW">Kuwait</option>
                                                            <option value="KG">Kyrgyzstan</option>
                                                            <option value="LA">Lao People's Democratic Republic</option>
                                                            <option value="LV">Latvia</option>
                                                            <option value="LB">Lebanon</option>
                                                            <option value="LS">Lesotho</option>
                                                            <option value="LR">Liberia</option>
                                                            <option value="LY">Libya</option>
                                                            <option value="LI">Liechtenstein</option>
                                                            <option value="LT">Lithuania</option>
                                                            <option value="LU">Luxembourg</option>
                                                            <option value="MO">Macao</option>
                                                            <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                                            <option value="MG">Madagascar</option>
                                                            <option value="MW">Malawi</option>
                                                            <option value="MY">Malaysia</option>
                                                            <option value="MV">Maldives</option>
                                                            <option value="ML">Mali</option>
                                                            <option value="MT">Malta</option>
                                                            <option value="MH">Marshall Islands</option>
                                                            <option value="MQ">Martinique</option>
                                                            <option value="MR">Mauritania</option>
                                                            <option value="MU">Mauritius</option>
                                                            <option value="YT">Mayotte</option>
                                                            <option value="MX">Mexico</option>
                                                            <option value="FM">Micronesia, Federated States of</option>
                                                            <option value="MD">Moldova, Republic of</option>
                                                            <option value="MC">Monaco</option>
                                                            <option value="MN">Mongolia</option>
                                                            <option value="ME">Montenegro</option>
                                                            <option value="MS">Montserrat</option>
                                                            <option value="MA">Morocco</option>
                                                            <option value="MZ">Mozambique</option>
                                                            <option value="MM">Myanmar</option>
                                                            <option value="NA">Namibia</option>
                                                            <option value="NR">Nauru</option>
                                                            <option value="NP">Nepal</option>
                                                            <option value="NL">Netherlands</option>
                                                            <option value="NC">New Caledonia</option>
                                                            <option value="NZ">New Zealand</option>
                                                            <option value="NI">Nicaragua</option>
                                                            <option value="NE">Niger</option>
                                                            <option value="NG">Nigeria</option>
                                                            <option value="NU">Niue</option>
                                                            <option value="NF">Norfolk Island</option>
                                                            <option value="MP">Northern Mariana Islands</option>
                                                            <option value="NO">Norway</option>
                                                            <option value="OM">Oman</option>
                                                            <option value="PK">Pakistan</option>
                                                            <option value="PW">Palau</option>
                                                            <option value="PS">Palestinian Territory, Occupied</option>
                                                            <option value="PA">Panama</option>
                                                            <option value="PG">Papua New Guinea</option>
                                                            <option value="PY">Paraguay</option>
                                                            <option value="PE">Peru</option>
                                                            <option value="PH">Philippines</option>
                                                            <option value="PN">Pitcairn</option>
                                                            <option value="PL">Poland</option>
                                                            <option value="PT">Portugal</option>
                                                            <option value="PR">Puerto Rico</option>
                                                            <option value="QA">Qatar</option>
                                                            <option value="RE">Réunion</option>
                                                            <option value="RO">Romania</option>
                                                            <option value="RU">Russian Federation</option>
                                                            <option value="RW">Rwanda</option>
                                                            <option value="BL">Saint Barthélemy</option>
                                                            <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                                            <option value="KN">Saint Kitts and Nevis</option>
                                                            <option value="LC">Saint Lucia</option>
                                                            <option value="MF">Saint Martin (French part)</option>
                                                            <option value="PM">Saint Pierre and Miquelon</option>
                                                            <option value="VC">Saint Vincent and the Grenadines</option>
                                                            <option value="WS">Samoa</option>
                                                            <option value="SM">San Marino</option>
                                                            <option value="ST">Sao Tome and Principe</option>
                                                            <option value="SA">Saudi Arabia</option>
                                                            <option value="SN">Senegal</option>
                                                            <option value="RS">Serbia</option>
                                                            <option value="SC">Seychelles</option>
                                                            <option value="SL">Sierra Leone</option>
                                                            <option value="SG">Singapore</option>
                                                            <option value="SX">Sint Maarten (Dutch part)</option>
                                                            <option value="SK">Slovakia</option>
                                                            <option value="SI">Slovenia</option>
                                                            <option value="SB">Solomon Islands</option>
                                                            <option value="SO">Somalia</option>
                                                            <option value="ZA">South Africa</option>
                                                            <option value="GS">South Georgia and the South Sandwich Islands</option>
                                                            <option value="SS">South Sudan</option>
                                                            <option value="ES">Spain</option>
                                                            <option value="LK">Sri Lanka</option>
                                                            <option value="SD">Sudan</option>
                                                            <option value="SR">Suriname</option>
                                                            <option value="SJ">Svalbard and Jan Mayen</option>
                                                            <option value="SZ">Swaziland</option>
                                                            <option value="SE">Sweden</option>
                                                            <option value="CH">Switzerland</option>
                                                            <option value="SY">Syrian Arab Republic</option>
                                                            <option value="TW">Taiwan, Province of China</option>
                                                            <option value="TJ">Tajikistan</option>
                                                            <option value="TZ">Tanzania, United Republic of</option>
                                                            <option value="TH">Thailand</option>
                                                            <option value="TL">Timor-Leste</option>
                                                            <option value="TG">Togo</option>
                                                            <option value="TK">Tokelau</option>
                                                            <option value="TO">Tonga</option>
                                                            <option value="TT">Trinidad and Tobago</option>
                                                            <option value="TN">Tunisia</option>
                                                            <option value="TR">Turkey</option>
                                                            <option value="TM">Turkmenistan</option>
                                                            <option value="TC">Turks and Caicos Islands</option>
                                                            <option value="TV">Tuvalu</option>
                                                            <option value="UG">Uganda</option>
                                                            <option value="UA">Ukraine</option>
                                                            <option value="AE">United Arab Emirates</option>
                                                            <option value="GB">United Kingdom</option>
                                                            <option value="US">United States</option>
                                                            <option value="UM">United States Minor Outlying Islands</option>
                                                            <option value="UY">Uruguay</option>
                                                            <option value="UZ">Uzbekistan</option>
                                                            <option value="VU">Vanuatu</option>
                                                            <option value="VE">Venezuela, Bolivarian Republic of</option>
                                                            <option value="VN">Viet Nam</option>
                                                            <option value="VG">Virgin Islands, British</option>
                                                            <option value="VI">Virgin Islands, U.S.</option>
                                                            <option value="WF">Wallis and Futuna</option>
                                                            <option value="EH">Western Sahara</option>
                                                            <option value="YE">Yemen</option>
                                                            <option value="ZM">Zambia</option>
                                                            <option value="ZW">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                    {/* <!-- End Input --> */}
                                                </div>

                                                <div className="col-md-8">
                                                    {/* <!-- Input --> */}
                                                    <div className="js-form-message mb-6">
                                                        <label className="form-label">
                                                            Street address
                                                            <span className="text-danger">*</span>
                                                        </label>
                                                        <input type="text" className="form-control" name="streetAddress" placeholder="470 Lucy Forks" aria-label="470 Lucy Forks" required="" data-msg="Please enter a valid address." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                                    </div>
                                                    {/* <!-- End Input --> */}
                                                </div>

                                                <div className="col-md-4">
                                                    {/* <!-- Input --> */}
                                                    <div className="js-form-message mb-6">
                                                        <label className="form-label">
                                                            Apt, suite, etc.
                                                        </label>
                                                        <input type="text" className="form-control" placeholder="YC7B 3UT" aria-label="YC7B 3UT" data-msg="Please enter a valid address." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                                    </div>
                                                    {/* <!-- End Input --> */}
                                                </div>

                                                <div className="col-md-6">
                                                    {/* <!-- Input --> */}
                                                    <div className="js-form-message mb-6">
                                                        <label className="form-label">
                                                            City
                                                            <span className="text-danger">*</span>
                                                        </label>
                                                        <input type="text" className="form-control" name="cityAddress" placeholder="London" aria-label="London" required="" data-msg="Please enter a valid address." data-error-className="u-has-error" data-success-className="u-has-success" autocomplete="off"/>
                                                    </div>
                                                    {/* <!-- End Input --> */}
                                                </div>

                                                <div className="col-md-6">
                                                    {/* <!-- Input --> */}
                                                    <div className="js-form-message mb-6">
                                                        <label className="form-label">
                                                            Postcode/Zip
                                                            <span className="text-danger">*</span>
                                                        </label>
                                                        <input type="text" className="form-control" name="postcode" placeholder="99999" aria-label="99999" required="" data-msg="Please enter a postcode or zip code." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                                    </div>
                                                    {/* <!-- End Input --> */}
                                                </div>

                                                <div className="w-100"></div>

                                                <div className="col-md-12">
                                                    {/* <!-- Input --> */}
                                                    <div className="js-form-message mb-6">
                                                        <label className="form-label">
                                                            State
                                                            <span className="text-danger">*</span>
                                                        </label>
                                                        <select className="form-control js-select selectpicker dropdown-select" required="" data-msg="Please select state." data-error-className="u-has-error" data-success-className="u-has-success"
                                                            data-live-search="true"
                                                            data-style="form-control border-color-1 font-weight-normal">
                                                            <option value="">Select state</option>
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AX">Åland Islands</option>
                                                            <option value="AL">Albania</option>
                                                            <option value="DZ">Algeria</option>
                                                            <option value="AS">American Samoa</option>
                                                            <option value="AD">Andorra</option>
                                                            <option value="AO">Angola</option>
                                                            <option value="AI">Anguilla</option>
                                                            <option value="AQ">Antarctica</option>
                                                            <option value="AG">Antigua and Barbuda</option>
                                                            <option value="AR">Argentina</option>
                                                            <option value="AM">Armenia</option>
                                                            <option value="AW">Aruba</option>
                                                            <option value="AU">Australia</option>
                                                            <option value="AT">Austria</option>
                                                            <option value="AZ">Azerbaijan</option>
                                                            <option value="BS">Bahamas</option>
                                                            <option value="BH">Bahrain</option>
                                                            <option value="BD">Bangladesh</option>
                                                            <option value="BB">Barbados</option>
                                                            <option value="BY">Belarus</option>
                                                            <option value="BE">Belgium</option>
                                                            <option value="BZ">Belize</option>
                                                            <option value="BJ">Benin</option>
                                                            <option value="BM">Bermuda</option>
                                                            <option value="BT">Bhutan</option>
                                                            <option value="BO">Bolivia, Plurinational State of</option>
                                                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                                            <option value="BA">Bosnia and Herzegovina</option>
                                                            <option value="BW">Botswana</option>
                                                            <option value="BV">Bouvet Island</option>
                                                            <option value="BR">Brazil</option>
                                                            <option value="IO">British Indian Ocean Territory</option>
                                                            <option value="BN">Brunei Darussalam</option>
                                                            <option value="BG">Bulgaria</option>
                                                            <option value="BF">Burkina Faso</option>
                                                            <option value="BI">Burundi</option>
                                                            <option value="KH">Cambodia</option>
                                                            <option value="CM">Cameroon</option>
                                                            <option value="CA">Canada</option>
                                                            <option value="CV">Cape Verde</option>
                                                            <option value="KY">Cayman Islands</option>
                                                            <option value="CF">Central African Republic</option>
                                                            <option value="TD">Chad</option>
                                                            <option value="CL">Chile</option>
                                                            <option value="CN">China</option>
                                                            <option value="CX">Christmas Island</option>
                                                            <option value="CC">Cocos (Keeling) Islands</option>
                                                            <option value="CO">Colombia</option>
                                                            <option value="KM">Comoros</option>
                                                            <option value="CG">Congo</option>
                                                            <option value="CD">Congo, the Democratic Republic of the</option>
                                                            <option value="CK">Cook Islands</option>
                                                            <option value="CR">Costa Rica</option>
                                                            <option value="CI">Côte d'Ivoire</option>
                                                            <option value="HR">Croatia</option>
                                                            <option value="CU">Cuba</option>
                                                            <option value="CW">Curaçao</option>
                                                            <option value="CY">Cyprus</option>
                                                            <option value="CZ">Czech Republic</option>
                                                            <option value="DK">Denmark</option>
                                                            <option value="DJ">Djibouti</option>
                                                            <option value="DM">Dominica</option>
                                                            <option value="DO">Dominican Republic</option>
                                                            <option value="EC">Ecuador</option>
                                                            <option value="EG">Egypt</option>
                                                            <option value="SV">El Salvador</option>
                                                            <option value="GQ">Equatorial Guinea</option>
                                                            <option value="ER">Eritrea</option>
                                                            <option value="EE">Estonia</option>
                                                            <option value="ET">Ethiopia</option>
                                                            <option value="FK">Falkland Islands (Malvinas)</option>
                                                            <option value="FO">Faroe Islands</option>
                                                            <option value="FJ">Fiji</option>
                                                            <option value="FI">Finland</option>
                                                            <option value="FR">France</option>
                                                            <option value="GF">French Guiana</option>
                                                            <option value="PF">French Polynesia</option>
                                                            <option value="TF">French Southern Territories</option>
                                                            <option value="GA">Gabon</option>
                                                            <option value="GM">Gambia</option>
                                                            <option value="GE">Georgia</option>
                                                            <option value="DE">Germany</option>
                                                            <option value="GH">Ghana</option>
                                                            <option value="GI">Gibraltar</option>
                                                            <option value="GR">Greece</option>
                                                            <option value="GL">Greenland</option>
                                                            <option value="GD">Grenada</option>
                                                            <option value="GP">Guadeloupe</option>
                                                            <option value="GU">Guam</option>
                                                            <option value="GT">Guatemala</option>
                                                            <option value="GG">Guernsey</option>
                                                            <option value="GN">Guinea</option>
                                                            <option value="GW">Guinea-Bissau</option>
                                                            <option value="GY">Guyana</option>
                                                            <option value="HT">Haiti</option>
                                                            <option value="HM">Heard Island and McDonald Islands</option>
                                                            <option value="VA">Holy See (Vatican City State)</option>
                                                            <option value="HN">Honduras</option>
                                                            <option value="HK">Hong Kong</option>
                                                            <option value="HU">Hungary</option>
                                                            <option value="IS">Iceland</option>
                                                            <option value="IN">India</option>
                                                            <option value="ID">Indonesia</option>
                                                            <option value="IR">Iran, Islamic Republic of</option>
                                                            <option value="IQ">Iraq</option>
                                                            <option value="IE">Ireland</option>
                                                            <option value="IM">Isle of Man</option>
                                                            <option value="IL">Israel</option>
                                                            <option value="IT">Italy</option>
                                                            <option value="JM">Jamaica</option>
                                                            <option value="JP">Japan</option>
                                                            <option value="JE">Jersey</option>
                                                            <option value="JO">Jordan</option>
                                                            <option value="KZ">Kazakhstan</option>
                                                            <option value="KE">Kenya</option>
                                                            <option value="KI">Kiribati</option>
                                                            <option value="KP">Korea, Democratic People's Republic of</option>
                                                            <option value="KR">Korea, Republic of</option>
                                                            <option value="KW">Kuwait</option>
                                                            <option value="KG">Kyrgyzstan</option>
                                                            <option value="LA">Lao People's Democratic Republic</option>
                                                            <option value="LV">Latvia</option>
                                                            <option value="LB">Lebanon</option>
                                                            <option value="LS">Lesotho</option>
                                                            <option value="LR">Liberia</option>
                                                            <option value="LY">Libya</option>
                                                            <option value="LI">Liechtenstein</option>
                                                            <option value="LT">Lithuania</option>
                                                            <option value="LU">Luxembourg</option>
                                                            <option value="MO">Macao</option>
                                                            <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                                            <option value="MG">Madagascar</option>
                                                            <option value="MW">Malawi</option>
                                                            <option value="MY">Malaysia</option>
                                                            <option value="MV">Maldives</option>
                                                            <option value="ML">Mali</option>
                                                            <option value="MT">Malta</option>
                                                            <option value="MH">Marshall Islands</option>
                                                            <option value="MQ">Martinique</option>
                                                            <option value="MR">Mauritania</option>
                                                            <option value="MU">Mauritius</option>
                                                            <option value="YT">Mayotte</option>
                                                            <option value="MX">Mexico</option>
                                                            <option value="FM">Micronesia, Federated States of</option>
                                                            <option value="MD">Moldova, Republic of</option>
                                                            <option value="MC">Monaco</option>
                                                            <option value="MN">Mongolia</option>
                                                            <option value="ME">Montenegro</option>
                                                            <option value="MS">Montserrat</option>
                                                            <option value="MA">Morocco</option>
                                                            <option value="MZ">Mozambique</option>
                                                            <option value="MM">Myanmar</option>
                                                            <option value="NA">Namibia</option>
                                                            <option value="NR">Nauru</option>
                                                            <option value="NP">Nepal</option>
                                                            <option value="NL">Netherlands</option>
                                                            <option value="NC">New Caledonia</option>
                                                            <option value="NZ">New Zealand</option>
                                                            <option value="NI">Nicaragua</option>
                                                            <option value="NE">Niger</option>
                                                            <option value="NG">Nigeria</option>
                                                            <option value="NU">Niue</option>
                                                            <option value="NF">Norfolk Island</option>
                                                            <option value="MP">Northern Mariana Islands</option>
                                                            <option value="NO">Norway</option>
                                                            <option value="OM">Oman</option>
                                                            <option value="PK">Pakistan</option>
                                                            <option value="PW">Palau</option>
                                                            <option value="PS">Palestinian Territory, Occupied</option>
                                                            <option value="PA">Panama</option>
                                                            <option value="PG">Papua New Guinea</option>
                                                            <option value="PY">Paraguay</option>
                                                            <option value="PE">Peru</option>
                                                            <option value="PH">Philippines</option>
                                                            <option value="PN">Pitcairn</option>
                                                            <option value="PL">Poland</option>
                                                            <option value="PT">Portugal</option>
                                                            <option value="PR">Puerto Rico</option>
                                                            <option value="QA">Qatar</option>
                                                            <option value="RE">Réunion</option>
                                                            <option value="RO">Romania</option>
                                                            <option value="RU">Russian Federation</option>
                                                            <option value="RW">Rwanda</option>
                                                            <option value="BL">Saint Barthélemy</option>
                                                            <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                                            <option value="KN">Saint Kitts and Nevis</option>
                                                            <option value="LC">Saint Lucia</option>
                                                            <option value="MF">Saint Martin (French part)</option>
                                                            <option value="PM">Saint Pierre and Miquelon</option>
                                                            <option value="VC">Saint Vincent and the Grenadines</option>
                                                            <option value="WS">Samoa</option>
                                                            <option value="SM">San Marino</option>
                                                            <option value="ST">Sao Tome and Principe</option>
                                                            <option value="SA">Saudi Arabia</option>
                                                            <option value="SN">Senegal</option>
                                                            <option value="RS">Serbia</option>
                                                            <option value="SC">Seychelles</option>
                                                            <option value="SL">Sierra Leone</option>
                                                            <option value="SG">Singapore</option>
                                                            <option value="SX">Sint Maarten (Dutch part)</option>
                                                            <option value="SK">Slovakia</option>
                                                            <option value="SI">Slovenia</option>
                                                            <option value="SB">Solomon Islands</option>
                                                            <option value="SO">Somalia</option>
                                                            <option value="ZA">South Africa</option>
                                                            <option value="GS">South Georgia and the South Sandwich Islands</option>
                                                            <option value="SS">South Sudan</option>
                                                            <option value="ES">Spain</option>
                                                            <option value="LK">Sri Lanka</option>
                                                            <option value="SD">Sudan</option>
                                                            <option value="SR">Suriname</option>
                                                            <option value="SJ">Svalbard and Jan Mayen</option>
                                                            <option value="SZ">Swaziland</option>
                                                            <option value="SE">Sweden</option>
                                                            <option value="CH">Switzerland</option>
                                                            <option value="SY">Syrian Arab Republic</option>
                                                            <option value="TW">Taiwan, Province of China</option>
                                                            <option value="TJ">Tajikistan</option>
                                                            <option value="TZ">Tanzania, United Republic of</option>
                                                            <option value="TH">Thailand</option>
                                                            <option value="TL">Timor-Leste</option>
                                                            <option value="TG">Togo</option>
                                                            <option value="TK">Tokelau</option>
                                                            <option value="TO">Tonga</option>
                                                            <option value="TT">Trinidad and Tobago</option>
                                                            <option value="TN">Tunisia</option>
                                                            <option value="TR">Turkey</option>
                                                            <option value="TM">Turkmenistan</option>
                                                            <option value="TC">Turks and Caicos Islands</option>
                                                            <option value="TV">Tuvalu</option>
                                                            <option value="UG">Uganda</option>
                                                            <option value="UA">Ukraine</option>
                                                            <option value="AE">United Arab Emirates</option>
                                                            <option value="GB">United Kingdom</option>
                                                            <option value="US">United States</option>
                                                            <option value="UM">United States Minor Outlying Islands</option>
                                                            <option value="UY">Uruguay</option>
                                                            <option value="UZ">Uzbekistan</option>
                                                            <option value="VU">Vanuatu</option>
                                                            <option value="VE">Venezuela, Bolivarian Republic of</option>
                                                            <option value="VN">Viet Nam</option>
                                                            <option value="VG">Virgin Islands, British</option>
                                                            <option value="VI">Virgin Islands, U.S.</option>
                                                            <option value="WF">Wallis and Futuna</option>
                                                            <option value="EH">Western Sahara</option>
                                                            <option value="YE">Yemen</option>
                                                            <option value="ZM">Zambia</option>
                                                            <option value="ZW">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                    {/* <!-- End Input --> */}
                                                </div>

                                                <div className="col-md-6">
                                                    {/* <!-- Input --> */}
                                                    <div className="js-form-message mb-6">
                                                        <label className="form-label">
                                                            Email address
                                                            <span className="text-danger">*</span>
                                                        </label>
                                                        <input type="email" className="form-control" name="emailAddress" placeholder="jackwayley@gmail.com" aria-label="jackwayley@gmail.com" required="" data-msg="Please enter a valid email address." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                                    </div>
                                                    {/* <!-- End Input --> */}
                                                </div>

                                                <div className="col-md-6">
                                                    {/* <!-- Input --> */}
                                                    <div className="js-form-message mb-6">
                                                        <label className="form-label">
                                                            Phone
                                                        </label>
                                                        <input type="text" className="form-control" placeholder="+1 (062) 109-9222" aria-label="+1 (062) 109-9222" data-msg="Please enter your last name." data-error-className="u-has-error" data-success-className="u-has-success"/>
                                                    </div>
                                                    {/* <!-- End Input --> */}
                                                </div>

                                                <div className="w-100"></div>
                                            </div>
                                            {/* <!-- End Shipping Form --> */}
                                        </div>
                                    </div>
                                    {/* <!-- End Card --> */}
                                </div>
                                {/* <!-- End Accordion --> */}
                                {/* <!-- Input --> */}
                                <div className="js-form-message mb-6">
                                    <label className="form-label">
                                        Order notes (optional)
                                    </label>

                                    <div className="input-group">
                                        <textarea className="form-control p-5" rows="4" name="text" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                    </div>
                                </div>
                                {/* <!-- End Input --> */}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}