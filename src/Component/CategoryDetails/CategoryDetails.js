import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const CategoryDetails = (props)=>{
    const {name} = props.product;
    return(
        <div>
            <h2>This is CategoryDetails Section</h2>
            <h3>Seleted Category: {name} </h3>
        </div>
    )
}

export default CategoryDetails;