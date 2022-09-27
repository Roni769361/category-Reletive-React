import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const Header = ()=>{
    const [category, setCategory] = useContext(CategoryContext);
    return(
        <div>
            <h1>This is Header Section: {category}</h1>
            <button onClick={()=> setCategory("laptop")}>Laptop</button>
            <button onClick={()=> setCategory("Mobile")}>Mobile</button>
            <button onClick={()=> setCategory("Camera")}>Camera</button>

        </div>
    )
}

export default Header;