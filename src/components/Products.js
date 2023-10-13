import React from 'react';
import axios from 'axios';
import {useEffect,useState} from 'react';
export default function Products() {
    const [products,setProducts]=useState([{}]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res=>setProducts(res.data.products))
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
    <h5 class="card-title">Card title</h5>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Product-id: {element.productid}</li>
    <li class="list-group-item">{element.title}</li>
    <li class="list-group-item">{element.price}</li>
    <li class="list-group-item">{element.rating}</li>
  </ul>
  <div class="card-body">
<button class="bg-info"><a class="card-link" style={{textDecoration:"none",color:"black"}}>Card link</a></button>
  </div>
</div>
                </>
            )

        })
    }
    </>
  )
}
