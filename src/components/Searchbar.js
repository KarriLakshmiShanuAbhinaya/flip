import React from 'react'
import logo2 from '../images/image1.jpg'
import { Link } from 'react-router-dom';
function Searchbar(props) {
    return (
      <>
   <div className='row bg-white ab'>
    <div className='col-md-2'>
        <img src={logo2} className='logo2'/>
    </div>
    <div className=" col-md-6 search">
            <div className="search-container">
            <input type="text" placeholder="search here..." className="search1"/>
            <button className='searchico btn'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
    </div>
    <div className='col-md-4 float-end'>
              <button className='create float-end'><i class="fa-solid fa-ellipsis-vertical"></i></button>
              <button className='create float-end'><i class="fa-solid fa-cart-shopping"></i><p className='sai'>Cart</p></button>
              <button className='create float-end'><i class="fa-regular fa-user"></i><p className='sai'>Abhinaya</p><i class="fa-solid fa-chevron-down"></i></button>
              <button className='create float-end'><i class="fa-solid fa-shop"></i><Link to="Forms" style={{textDecoration:"none",color:"black",fontSize:"19px",fontFamily:"'Times New Roman', Times, serif"}}> Become a seller</Link></button>
  
              </div>
  </div>
          <div className='row'>
            <div className='col-md-3 menu1'>
            <h1>{props.name}</h1>
            </div>
          </div>
          
      </>
    );
  }
  export default Searchbar;

