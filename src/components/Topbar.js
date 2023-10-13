import React from 'react'
import topoff from "../images/topoffers.webp";
import mobile from "../images/mobilesandtabs.webp";
import electroics from "../images/electronics.webp";
import tv from "../images/tv.webp";
import fashion from "../images/fashion.webp";
import beuty from "../images/beauty.webp";
import home from "../images/home.webp";
import furniture from "../images/furniture.webp";
import flight from "../images/flight.webp";
import grocery from "../images/grocery.webp";
export default function Products() {
  return (
    <>
    <div className='row justify-content-center bg-white mb-2 container-fluid produtsmainrow'>
        
        <div id="productsrow" className='mt-2'>
        <div className='justify-content-center'>
            <img src={topoff} width="70px"/>
            <h6>TopOffers</h6>
        </div>
        <div className='justify-content-center'>
            <img src={mobile} width="70px"/>
            <h6>Mobiles&Tablets</h6>
        </div>
        <div className='justify-content-center'>
            <img src={electroics} width="70px"/>
            <h6>Electronics</h6>
        </div>
        <div className='justify-content-center'>
            <img src={tv} width="70px"/>
            <h6>Tv&Appiliances</h6>
        </div>
        <div className='justify-content-center'>
            <img src={fashion} width="70px"/>
            <h6>Fashion</h6>
        </div>
        <div className='justify-content-center'>
            <img src={beuty} width="70px"/>
            <h6>Beauty</h6>
        </div>
        <div className='justify-content-center'>
            <img src={home} width="70px"/>
            <h6>Home&Kitchen</h6>
        </div>
        <div className='justify-content-center'>
            <img src={furniture} width="70px"/>
            <h6>Furniture</h6>
        </div>
        <div className='justify-content-center'>
            <img src={flight} width="70px"/>
            <h6>Flights</h6>
        </div>
        <div className='justify-content-center'>
            <img src={grocery} width="70px"/>
            <h6>Grocery</h6>
        </div>
    </div>
    </div>
    </>
  )
}