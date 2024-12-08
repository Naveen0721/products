import logo from './logo.svg';
import './App.css';
import { products } from './db/products';
import { useReducer } from 'react';
import { reducefilter } from './reducers/reducefilter';
import { useEffect } from 'react';

function App() {
  const initialstate={
    newprice:'',
    discount:'',
    rating:'',
    result:''
  }

  const [state,dispatch]=useReducer(reducefilter,initialstate)

  const pricefilter=(e)=>
  {
    dispatch(
      {
        type:"PRICE",
        payload:e.target.value

      }
     
    )
  }

const discountfilter=(e)=>
{
  dispatch(
    {
      type:"DISCOUNT",
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
  const products1= async ()=>
    {
        const data= await fetch('https://fakestoreapi.com/products')
        const json1=await data.json()
       // console.log(json1)
        dispatch(
          {
            type:"Result",
            payload:json1
          }
        )
    }

  useEffect(()=>
    {
      products1();
    },[])
console.log(state.result)
   

  const newpricefilter=state.newprice>0?state.result.filter((item)=>state.newprice>=item.price):state.result

  
  //const newdiscountfilter=state.discount>0?newpricefilter.filter((item)=>state.discount>=item.discount):newpricefilter

  const newratingfilter=state.rating>0?newpricefilter.filter((item)=>state.rating>=item.rating.rate):newpricefilter

  console.log(state.rating)

  return (
    <div className='ml-8 ' >
      <h1 >Products</h1>
      <div className='flex gap-16 mt-4 mb-6 '>
      <span className=''>Filters </span>
      <input className="border-2 rounded-xl ml-9" onChange={pricefilter}placeholder='set price limit'/>
      {/* <input className="border-2 rounded-xl" onChange={discountfilter} placeholder='set discount limit'/> */}
      <input className="border-2 rounded-xl" onChange={ratingfilter} placeholder='set rating limit'/>

      </div>
      <div className='grid grid-cols-5 md:grid-cols-4 lg:grid-cols-6 gap-y-3 gap-x-4'>
        {
           newratingfilter.length>0 && newratingfilter.map(item=>(
              <div className='border border-black p-4'>
                
            <div className=''>
            <img className='ml-4 mb-10 h-40 w-32 object-contain' src={item.image} alt="bhb"/>
             
            </div>
           
            <div className='flex flex-col gap-4'>
            <p>{item.category}</p>
              <p>price:{item.price}</p>
              {/* <p>{item.description}</p> */}
              <p>rating:{item.rating.rate}</p>
              
            </div>
              </div>

            ))
             

        }
      
      </div>
     
    </div>
  );
}

export default App;
