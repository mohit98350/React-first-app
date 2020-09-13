import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Services=()=>{

return(
<>
<div className="my-5">
<h1 className="text-center mb-2 mt-1">Our Services</h1>

</div>
<div className="container-fluid mb-5 mt-1 ">
    <div className="row">
    <div className="col-10 mx-auto">
    <div className="row gy-4">
    {
        Sdata.map((val, ind)=>
        {
            return <Card key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            p={val.p}
            link={val.link}
            />
        })
    }
    
    </div>

    </div>
        
    </div>
</div>



</>

);

};
export default Services;