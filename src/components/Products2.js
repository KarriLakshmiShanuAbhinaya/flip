import React from 'react';
import axios from 'axios';
import {useEffect,useState} from 'react';
export default function Products() {
    const [products,setProducts]=useState([{}]);
    useEffect(()=>{
        axios.get(' http://localhost:3002/products')
        .then(res=>setProducts(res.data))
    },0)
    console.log(products)
  return (
    <>
{
        products.map((element,index)=>{
            return(
                <>
                <div class="card float-start mt-3 ml"  style={{width:"25rem",height:"32rem"}}>
  <img src={element.thumbnail} style={{width:"25rem",height:"15rem",marginRight:"29px",marginLeft:"-12px"}} class="card-img-top" alt="..."  ></img>
  <div class="card-body">
    <h5 class="card-title">{element.title}</h5>
  </div>
  <ul class="list-group list-group-flush">
     <li class="list-group-item">Product-id: {element.productId}</li>
    <li class="list-group-item">Product-Price: {element.price}</li>
    <li class="list-group-item">Product-Brand: {element.brand}</li>
    <li class="list-group-item">Product Description: {element.description}</li>
  </ul>
  <div class="card-body">
    <button class="bg-info"><a href={element.card} class="card-link" style={{textDecoration:"none",color:"black"}}>Card link</a></button>
  </div>
</div>
                </>
            )

        })
    }
    </>
  )
}
