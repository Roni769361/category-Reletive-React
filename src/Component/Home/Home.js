import React, { useContext } from "react";
import { CategoryContext } from "../../App";
import Cetagory from "../Cetagory/Cetagory";

const Home = ()=>{
    const category = useContext(CategoryContext);
    return(
        <div style={{border:'2px solid red'}}>
            <h1>This is Home Section : {category}</h1>
            <Cetagory></Cetagory>
        </div>
    )
}

export default Home;