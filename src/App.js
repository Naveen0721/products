import './App.css';
import { useEffect,useState } from 'react';
import { useResult } from './context/productcontext';
import Product from './components/product';
import { Routes,Route } from 'react-router-dom';
import ProductDetails from './pages/productdetails';


function App() {

  const {dispatch}=useResult();
  const [loading,setloading]=useState(false)

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
        setloading(true)
    }

  useEffect(()=>
    {
      products1();
    },[])

    if(!loading)
    {
      return <div>loading....</div>
    }

  return (
    <div className='w-full box-border' >
      {/* <Product/> */}
     
    <Routes>
      <Route path='/' element={<Product/>}/>
      <Route path="/productdetails/:id" element={<ProductDetails/>}/>
    </Routes>
     
     
    </div>
  );
}

export default App;
