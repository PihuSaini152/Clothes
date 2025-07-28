import React, { useEffect, useState } from 'react'
import './shop.css'

function shop()  { 
    const[data,setdata]= useState ([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
       .then((response)=> response.json())
        .then((result)=> setdata(result))
         .catch((error)=> console.error('error',error))

    },[])
  return (
   
        <>

          <div className='btn'>
         <h1 className='New'>You might also like</h1>

    <div className="api">
        {data.slice(10,14).map((iteam)=>(
            <div   key= {iteam.id}>
                    <h2>{iteam.category}</h2>
                    <img src={iteam.image}/>
                   <h1><span>$</span>{iteam.price}</h1>
                   <p className='pragraph'>{iteam.title}</p>
                   <button >Buy Now</button>   
            </div>

        ))}
    </div>
    
    </div>
    
    </>
  )
}

export default shop