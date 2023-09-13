import React from 'react'

export default function Carousal() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id="carousal">
          <div className="carousel-caption d-none d-md-block" style={{zIndex:"10"}}>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              
            </form>
          </div>
          <div className="carousel-item active">
            <img src="https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg" className="d-block w-100" style={{filter:"brightness(45%)"}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.foodandwine.com/thmb/dCBqp4GlxvlH0YoWU-KbxmRynFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/miso-caramel-apple-danish-FT-RECIPE0920-005dcb017b23462383ea77c4549b1a44.jpg" className="d-block w-100" style={{filter:"brightness(45%)"}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg" className="d-block w-100" style={{filter:"brightness(45%)"}} alt="..." />
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  )
}
