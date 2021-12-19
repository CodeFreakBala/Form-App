import React, { useState } from 'react';

import Card from '../../components/UI/Card/Card';
import ProgressBar from '../../components/UI/ProgressBar/ProgressBar';
import classes  from './CreateContact.module.scss'

function CreateComponent() {

  const [stepVal,setStepVal] = useState(false);
  const [listContactDetails,setListContactDetails] = useState([]);
  const [contactDetails,setContactDetails] = useState({});
  const [billingAdddess,setBillingAdddess] = useState({});
  const [shippingAddress,setShippingAdddess] = useState({});


  const slideForWard = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0)
    setStepVal(true)
  }
  const slideBackWard = () => {
    setStepVal(false)
  }
  const handleChangeInput = (event) => {
    setContactDetails({
      ...contactDetails,
      [event.target.name]: event.target.value
    })
    
  }
  const requestOptions = {
    
  }
  const handleSumbit = (event) => {
    event.preventDefault();
    console.log(contactDetails);
    
  }
  const handleChangeBillingAddress = (event) => {
      setBillingAdddess({
        ...billingAdddess,
        [event.target.name]: event.target.value
      })
      setContactDetails({
        ...contactDetails,
        billing_address: billingAdddess
      })
  }
  const handleChangeShippingAddress = (event) => {
    setShippingAdddess({
      ...shippingAddress,
      [event.target.name]: event.target.value
    })
    setContactDetails({
      ...contactDetails,
      shipping_address: shippingAddress
    })
}
  return (
      <>
      <div className="container content-space">
        <div className="row justify-content-center ">
          <div className="col-lg-8">
            <Card>
              <ProgressBar stepVal={stepVal}  />
              {stepVal &&
                <i onClick={slideBackWard} className={["fa fa-arrow-left",classes.back_icon].join(" ")} aria-hidden="true"></i>
              }
              <form>
                <div className={classes.multi_step_form}>
                  <div className={ stepVal ? [classes.form_step_one,classes.slided].join(" ") : classes.form_step_one}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Contact name *:</label>
                      <input onChange={handleChangeInput} name="contact_name" type="text" className="form-control" placeholder="Enter name" required />
                      {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Company name</label>
                      <input type="text" onChange={handleChangeInput} name="company_name" className="form-control" placeholder="Enter company" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Payment terms</label>
                      <input type="text" onChange={handleChangeInput}  name="payment_terms" className="form-control" placeholder="Enter payment term" />
                    </div>
                    <div className="form-group">  
                      <label htmlFor="exampleInputPassword1">Currency id</label>
                      <input type="text" onChange={handleChangeInput} name="currency_id" className="form-control" placeholder="Enter currency id " />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Website</label>
                      <input type="email" onChange={handleChangeInput} name="website" className="form-control" placeholder="Enter website" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Language code</label>
                      <input type="email" onChange={handleChangeInput} name="custom_fields" className="form-control" placeholder="Enter language code" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Facebook</label>
                      <input type="email" onChange={handleChangeInput} name="facebook" className="form-control" placeholder="Enter facebook" />
                    </div>
                  </div>
                  <div  className={ stepVal ? [classes.form_step_two_visible,classes.form_step_two,classes.slided].join(" ") :classes.form_step_two }>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Twitter</label>
                      <input type="text" className="form-control" placeholder="Enter twitter" />
                      {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Billing address</label>
                      <div className={classes.inline_input_wrapper}>
                        <input onChange={handleChangeBillingAddress} name="attention" type="text" className="form-control" placeholder="attention" />
                        <input onChange={handleChangeBillingAddress} name="address" type="text" className="form-control" placeholder="Address" />
                        <input onChange={handleChangeBillingAddress} name="street2" type="text" className="form-control" placeholder="Street" />
                        <input onChange={handleChangeBillingAddress} name="state_code" type="text" className="form-control" placeholder="State code" />
                        <input onChange={handleChangeBillingAddress} name="city" type="text" className="form-control" placeholder="City" />
                        <input onChange={handleChangeBillingAddress} name="state" type="text" className="form-control" placeholder="State" />
                        <input onChange={handleChangeBillingAddress} name="zip" type="text" className="form-control" placeholder="Zip" />
                        <input onChange={handleChangeBillingAddress} name="country" type="text" className="form-control" placeholder="Country" />
                        <input onChange={handleChangeBillingAddress} name="fax" type="text" className="form-control" placeholder="Fax" />
                        <input onChange={handleChangeBillingAddress} name="phone" type="text" className="form-control" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Shipping address</label>
                      <div className={classes.inline_input_wrapper}>
                        <input onChange={handleChangeShippingAddress} name="attention" type="text" className="form-control" placeholder="attention" />
                        <input onChange={handleChangeShippingAddress} name="address" type="text" className="form-control" placeholder="Address" />
                        <input onChange={handleChangeShippingAddress} name="street2" type="text" className="form-control" placeholder="Street" />
                        <input onChange={handleChangeShippingAddress} name="state_code" type="text" className="form-control" placeholder="State code" />
                        <input onChange={handleChangeShippingAddress} name="city" type="text" className="form-control" placeholder="City" />
                        <input onChange={handleChangeShippingAddress} name="state" type="text" className="form-control" placeholder="State" />
                        <input onChange={handleChangeShippingAddress} name="zip" type="text" className="form-control" placeholder="Zip" />
                        <input onChange={handleChangeShippingAddress} name="country" type="text" className="form-control" placeholder="Country" />
                        <input onChange={handleChangeShippingAddress} name="fax" type="text" className="form-control" placeholder="Fax" />
                        <input onChange={handleChangeShippingAddress} name="phone" type="text" className="form-control" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Contact Persons</label>
                      <div className={classes.inline_input_wrapper}>
                        <input type="text" className="form-control" placeholder="attention" />
                        <input type="text" className="form-control" placeholder="Address" />
                        <input type="text" className="form-control" placeholder="Street" />
                        <input type="text" className="form-control" placeholder="State code" />
                        <input type="text" className="form-control" placeholder="City" />
                        <input type="text" className="form-control" placeholder="State" />
                        <input type="text" className="form-control" placeholder="Zip" />
                        <input type="text" className="form-control" placeholder="Country" />
                        <input type="text" className="form-control" placeholder="Fax" />
                        <input type="text" className="form-control" placeholder="Phone" />
                        <input type="text" className="form-control" placeholder="Phone" />
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={stepVal ? handleSumbit : slideForWard } className="btn btn-primary">{stepVal ? "Submit" : "Next"}</button>
              </form>
            </Card>
          </div>
        </div>
      </div>
      </>
  );
}

export default CreateComponent;
