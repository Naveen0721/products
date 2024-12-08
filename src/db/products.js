
// const products=()=>
// {
//     const pricefilter=(e)=>
//         {
//           dispatch(
//             {
//               type:"PRICE",
//               payload:e.target.value
      
//             }
           
//           )
//         }
      
//     return(
//         <div className='ml-8 ' >
//       <h1 >Products</h1>
//       <div className='flex gap-16 mt-4 mb-6 '>
//       <span className=''>Filters </span>
//       <input className="border-2 rounded-xl ml-9" onChange={pricefilter}placeholder='set price limit'/>
//       {/* <input className="border-2 rounded-xl" onChange={discountfilter} placeholder='set discount limit'/> */}
//       <input className="border-2 rounded-xl" onChange={ratingfilter} placeholder='set rating limit'/>

//       </div>
//       <div className='grid grid-cols-6 gap-y-3 gap-x-4'>
//         {
//            newratingfilter.length>0 && newratingfilter.map(item=>(
//               <div className='border border-black p-4'>
                
//             <div className=''>
//             <img className='ml-4 mb-10 h-40 w-32 object-contain' src={item.image} alt="bhb"/>
             
//             </div>
           
//             <div className='flex flex-col gap-4'>
//             <p>{item.category}</p>
//               <p>price:{item.price}</p>
//               {/* <p>{item.description}</p> */}
//               <p>rating:{item.rating.rate}</p>
              
//             </div>
//               </div>

//             ))
             

//         }
      
//       </div>
     
//     </div>
//     )

// }

// export default products;

