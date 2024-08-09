import React, { useState } from 'react';
import './Billing.css';

function Billing() {

  const [payid, setPayid] = useState(null);

  const handlePayment = (e) => {
    e.preventDefault();
    var options = {
      key: "rzp_live_gTySGvD5vC4R2U",
      key_secret: "P4xjMaaJpp2gl11eQ7cWp485",
      amount: "100",
      currency: "INR",
      name: "My Trade Journal",
      description: "Testing only",
      handler: function (response) {
        const paymentid = response.razorpay_payment_id;
        setPayid(paymentid);
        console.log(paymentid);
      },
      theme: {
        color: "green"
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  }

  return (
    <div className='test'> 
        <div style={{margin: "30px"}}><span className='headi'>Billing</span></div>
        <div className='boxes'>
          <div className='info1'>
            <div className='info1-headi'>Billing Information</div>
            <div className='inputs1'>
              <div className='names'><input className='inp' type="text" placeholder="First Name*"/></div>
              <div className='names'><input className='inp' type="text" placeholder="Last Name*"/></div>
            </div>
            <div className='inputs1'>
              <div className='names'><input className='inp' type="text" placeholder="Email*"/></div>
              <div className='names'><input className='inp' type="text" placeholder="Contact"/></div>
            </div>
            <div className='inputs1'>
              <div className='names2'><textarea className='inp2' type="text" placeholder="Address"/></div>
            </div>
            <div className='inputs1'>
              <div className='names'><input className='inp' type="text" placeholder="Pincode*"/></div>
              <div className='names'><input className='inp' type="text" placeholder="City"/></div>
            </div>
            <div className='inputs1'>
              <div className='names'><input className='inp' type="text" placeholder="State"/></div>
            </div>
          </div>
          <div className='info2'>
            <div className='info2-headi'>Payment Information</div>
            <div className='cou'>
              <div><input className='inp3' type='text' placeholder='COUPON'/></div>
              <div className='apply_button'>APPLY</div>
            </div>
            <hr className='line'/>
            <div className='amounts'>
              <div className='amount_type'>Amount</div>
              <div>:</div>
              <div className='amount_num'>$50</div>
            </div>
            <div className='amounts'>
              <div className='amount_type'>Discount</div>
              <div>:</div>
              <div className='amount_num'>- $5</div>
            </div>
            <div className='amounts'>
              <div className='amount_type'>Total</div>
              <div>:</div>
              <div className='amount_num' id='total'>$45</div>
            </div>
            <div><button className='pay_button' onClick={handlePayment}>Confirm and Pay</button></div>
            {payid && (
              <div className='payid'>Payment Done with id '{payid}'</div>
            )}
          </div>
        </div>
    </div>
  )
}

export default Billing