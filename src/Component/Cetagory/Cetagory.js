import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../App";
import CategoryDetails from "../CategoryDetails/CategoryDetails";

const allProduct = [
    {name:'Lenovo', category:'laptop'}, {name:'Hp', category:'laptop'}, {name:'Dell', category:'laptop'},
    {name:'Samarang', category:'Mobile'}, {name:'Nokia', category:'Mobile'}, {name:'RedmiNote8', category:'Mobile'},
    {name:'cannon', category:'Camera'}, {name:'Sony', category:'Camera'}, {name:'Epson', category:'Camera'},

]

const Cetagory = ()=>{
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        console.log({category})
        const matchProduct = allProduct.filter(pd => pd.category === category && category.toLowerCase());
        setProducts(matchProduct);
    }, [category])
    return(
        <div>
            <h1>Seleted your Category : {category}</h1>
            {
                products.map(pd => <CategoryDetails product={pd}></CategoryDetails>)
            }
        </div>
    )
}

export default Cetagory;