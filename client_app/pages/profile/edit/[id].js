import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from 'react-redux';
const ProfileEdit = () => {
    const router = useRouter()
    const {id} = router.query  //useParams
    const { user_details } = useSelector(state => state.userReducer)
    useEffect(() => {
        
    }, [id])

    return (
        <div>
            <div className="container col-lg-11 order-lg-1 mt-3">
                            <div className="pb-11 mb-11">
                                {/* <!-- Title --> */}
                                <div className="border-bottom border-color-1 mb-5">
                                    <h3 className="section-title text-center  mb-0 pb-2 font-size-25">Profile Edit</h3>
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
                                <input type="text" className="form-control" name="firstName" placeholder="username" aria-label="Jack" required="" data-msg="Please enter your frist name." data-error-className="u-has-error" data-success-className="u-has-success" autocomplete="off"/>
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

                            </div>
                        </div>
        </div>
    )
}

export default ProfileEdit
