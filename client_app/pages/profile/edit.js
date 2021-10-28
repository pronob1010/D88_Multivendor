import axios from "axios";
import { useRouter } from "next/router"
import { useState } from "react"
import { useSelector } from 'react-redux';

const ProfileEdit = () => {
    const router = useRouter()
    const { id } = router.query  //useParams
    const { user_details } = useSelector(state => state.userReducer)
    const { userId } = useSelector(state => state.userReducer)
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [phone, setphone] = useState('')
    const [home_address, sethome_address] = useState('')
    const [response_msg, setResponse_msg] = useState()
    let handleSubmit = () => {
        const data = {
            "firstname": firstname,
            "lastname": lastname,
            "phone": phone,
            "home_address": home_address
        }
        
        let url = "http://localhost:8000/api/auth/" + userId + "/";
        const header = {
            headers: {
                "content-type": "application/json"
            }
        }

        axios.put(url, data, header)
            .then(response => {
                setResponse_msg(response.data)
            })
    }
    
    return (
        <div>
            <div className="container col-lg-11 order-lg-1 mt-3">
                <div className="pb-11 mb-11">
                    <div className="border-bottom border-color-1 mb-5">
                        <h3 className="section-title text-center  mb-0 pb-2 font-size-25">Profile Edit</h3>
                    </div>
                    {(() => {
                        if (response_msg != null) {
                            return (
                            <span style={
                                {
                                    "backgroundColor":response_msg.type=="success"?"green":"red",
                                    "fontSize":"20px",
                                    "color":"white",
                                    "padding":'4px',
                                    "marginBottom":"15px",
                                }
                            }>{response_msg.text}</span>
                            )
                        }

                        return null;
                    })()}

                    <form onSubmit={handleSubmit} method="PUT" id="edit_profile">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="js-form-message mb-6">
                                    <label className="form-label">
                                        First name
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input type="text" className="form-control" name="firstName" onChange={(event) => setfirstname(event.target.value)} placeholder="First name" defaultValue={user_details.firstname} aria-label="First name" required="" data-msg="Please enter your frist name." data-error-className="u-has-error" data-success-className="u-has-success" autocomplete="off" />
                                </div>
                            </div>

                            <div className="col-md-6">

                                <div className="js-form-message mb-6">
                                    <label className="form-label">
                                        Last name
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input type="text" onChange={(event) => setlastname(event.target.value)} className="form-control" name="lastName" placeholder="Last name" defaultValue={user_details.lastname} aria-label="Last name" required="" data-msg="Please enter your last name." data-error-className="u-has-error" data-success-className="u-has-success" />
                                </div>

                            </div>
                            <div className="col-md-12">

                                <div className="js-form-message mb-6">
                                    <label className="form-label">
                                        Home Address
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input type="text" className="form-control" name="home_address" onChange={(event) => sethome_address(event.target.value)} defaultValue={user_details.home_address} placeholder="152/13 mirpur 12" aria-label="152/13 mirpur 12" required="" data-msg="Please enter a valid address." data-error-className="u-has-error" data-success-className="u-has-success" />
                                </div>

                            </div>

                            <div className="col-md-6">
                                <div className="js-form-message mb-6">
                                    <label className="form-label">
                                        Email address
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input type="email" className="form-control" name="emailAddress" value={user_details.email} placeholder="selldoom@gmail.com" aria-label="selldoom@gmail.com" required="" data-msg="Please enter a valid email address." data-error-className="u-has-error" data-success-className="u-has-success" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="js-form-message mb-6">
                                    <label className="form-label">
                                        Phone
                                    </label>
                                    <input type="text" onChange={(event) => setphone(event.target.value)} defaultValue={user_details.phone} className="form-control" placeholder="01*********" aria-label="+1 (062) 109-9222" data-msg="Please enter your last name." data-error-className="u-has-error" data-success-className="u-has-success" />
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

export default ProfileEdit
