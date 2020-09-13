import React, { useState } from "react";

const Contact=()=>{
    const [data , setData]= useState({

        fullname:"",
        phone:"",
        msg:"",
    });

    const InputEvent=(event)=>{
        const{name , value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value
            };
        });
    };

    const formSubmit =(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what i want to sat ${data.msg}`);
    };

return(
<>
<div className="my-5">
    <h1 className="text-center mt-5">Contact US</h1>
</div>
<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            
            <form onSubmit={formSubmit}>
  <div class="form-group  align-center">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name"/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Phone no</label>
    <input type="number" class="form-control" id="exampleFormControlInput1"name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile no"/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1"name="email" value={data.email} onChange={InputEvent} placeholder="Enter your email"/>
  </div>
  
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Mesaage</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
  </div>
  <div className="col-12 mt-2">
  <button class="btn btn-outline-primary" type="submit">Submit form</button>
</div>
            </form>
        </div>
    </div>
</div>

</>

);

};
export default Contact;