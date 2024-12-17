import Navbar from "../components/navbar";
import { useResult } from "../context/productcontext";
import { useParams } from "react-router-dom";

const ProductDetails=()=>
{
    const params=useParams();
    const {result}=useResult();
    // const singleProduct=result.find((item)=>Number(params.id)===params.id)
    const singleProduct = Array.isArray(result)
        ? result.find((item) => item.id === Number(params.id))
        : null;

    console.log(singleProduct)
    
    return(
        <div>
            <Navbar/>
            <img className="w-40 h-40 object-contain"src={singleProduct.image} alt="loading"/>
            

        </div>

    )
}

export default ProductDetails;