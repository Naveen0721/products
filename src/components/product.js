import Navbar from "./navbar"
import { useResult } from "../context/productcontext";
import { useNavigate } from "react-router-dom";

const Product=()=>
{
    const Navigate=useNavigate();
    const {newprice,discount,rating,result,search,dispatch}=useResult();

  const pricefilter=(e)=>
  {
    dispatch(
      {
        type:"PRICE",
        payload:e.target.value

      }
     
    )
  }

const ratingfilter=(e)=>
  {
    dispatch(
      {
        type:"RATING",
        payload:e.target.value
      }
    )
  }
  const searchproducts=(e)=>
  {
    dispatch(
      {
        type:"search",
        payload:e.target.value
      }
    )
  }
  const details=(item)=>
  {
    // console.log(item.item.id)
    Navigate(`/productdetails/${item.item.id}`)

  }
  
const searchfilter=search.length>0?result.filter((item)=>
    {
      return item.category.toLowerCase().includes(search.toLowerCase())
    }):result
     
    console.log(searchfilter)
  
    const newpricefilter=newprice>0?searchfilter.filter((item)=>newprice>=item.price):searchfilter
  
    const newratingfilter=rating>0?newpricefilter.filter((item)=>rating>=item.rating.rate):newpricefilter
  
    console.log(rating)
    return(
        <div className='w-full box-border' >
     <Navbar/>
     
      <div className='flex flex-row ml-4 md:ml-8 mt-4 mb-6 overflow-x-hidden box-border'>

  <div className='flex border-2 rounded-xl items-center p-2 w-28 mr-2  md:w-auto overflow-x-hidden box-border'>
  <img className="h-8 ml-1npm" src="https://cdn-icons-png.flaticon.com/512/2652/2652234.png" alt='dwda'/>
  <input
    className="border-none outline-none ml-2 w-14 md:w-auto"
    onChange={searchproducts}
    placeholder="Search"
  />

  </div>
  
  <input
    className="border-2 rounded-xl p-2 w-24 md:w-auto mr-2 "
    onChange={pricefilter}
    placeholder="price limit"
  />
  <input
    className="border-2 rounded-xl p-2 w-24 md:w-auto mr-2 "
    onChange={ratingfilter}
    placeholder="rating limit"
  />
</div>


      <div className='grid grid-cols-2 md:grid-cols-4  overflow-x-hidden box-border ml-4 md:ml-8 mr-4 md:mr-2 lg:grid-cols-6 gap-y-3 gap-x-4'>
        {
           newratingfilter.length>0 && newratingfilter.map(item=>(
              <div className='border border-black p-4'>
                
            <div className='flex items-center justify-center '>
            <img onClick={()=>details({item})}className=' mb-10 h-40 w-32 object-contain' src={item.image} alt="bhb"/>
             
            </div>
           
            <div className='flex flex-col justify-center items-center gap-4'>
            <p><b>{item.category}</b></p>
              <p>price:{item.price}</p>
              {/* <p>{item.description}</p> */}
              <p>rating:{item.rating.rate}</p>
              <button className='border rounded-lg p-2 transition duration-700 ease-linear hover:bg-blue-700 hover:scale-110 text-white bg-blue-500'>Add to cart</button>
              
            </div>
              </div>

            ))
             

        }
      
      </div>
     
    </div>
    )
}

export default Product;