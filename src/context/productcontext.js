import { createContext,useContext,useReducer } from "react";
import { reducefilter } from "../reducers/reducefilter";

const ProductContext=createContext();

//provider

const ContextProvider=({children})=>
{
    const initialstate={
        newprice:'',
        discount:'',
        rating:'',
        result:'',
        search:''

    }


    const [{newprice,discount,rating,result,search},dispatch]=useReducer(reducefilter,initialstate)
    return(
        <ProductContext.Provider value={{newprice,discount,rating,result,search,dispatch}}>
        {children}

        </ProductContext.Provider>


    )
   
}

//consumer

const useResult=()=>useContext(ProductContext);

export {ContextProvider,useResult}