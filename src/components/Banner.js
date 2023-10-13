import React from 'react'
import im1 from'../images/image1.webp';
import im2 from'../images/image2.webp';
import im3 from'../images/image3.webp';
import im4 from'../images/image4.webp';
import im5 from'../images/image5.webp';
import im6 from'../images/image6.webp';
import im7 from'../images/image7.webp';
export default function Banner() {
  return (
    <>
    <div id="carouselExampleControls" class="carousel slide productsrow mt-3" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={im1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src={im2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={im3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={im4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={im5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={im6} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={im7} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
