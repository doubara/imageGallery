import React from "react";

const Image = (props) =>{

    return <div className="h-60 overflow-hidden" key={props.id} >
    <img className="w-full h-full object-cover" src={props.url} alt=""  />
</div>
};

export default Image;