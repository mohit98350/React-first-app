import React from "react";
import { NavLink } from "react-router-dom";

const Card=(props)=>{

return(
<>

        <div className="col-md-4 col-10 mx-auto">
        <div className="img" >
  <img src={props.imgsrc} className="card-img-top m-auto" alt={props.imgsrc}/>
  </div>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.p}</p>
    <NavLink to="" class="btn btn-primary">Go Somewhere</NavLink>
  </div>

</div>
    



</>

);

};
export default Card;