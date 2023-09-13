import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async() =>{
    let response = await fetch("http://localhost:5000/api/foodData",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0],response[1]);
  }

  useEffect(()=>{
    loadData()
  },)
  
  
  
  return (
    <div>
      <div> <Navbar /> </div>
      <div>  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id="carousal">
          <div className="carousel-caption d-none d-md-block" style={{zIndex:"10"}}>
            <div className="d-flex justify-content-center">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
              {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
            </div>
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
      </div> </div>
      {(localStorage.getItem("authToken"))?
      <div className='container'>
        {
          foodCat!==[]?foodCat.map((data)=>{
            return (
              <div className='row mb-3' key={data._id}>
                <div className='fs-3 m-3'>{data.CategoryName}</div>
                <hr/>
                {foodItem !== [] ? foodItem
                  .filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                  .map(filterItems => (
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                      <Cards foodItem={filterItems} options={filterItems.options[0]}></Cards>
                    </div>
                  ))
                  : <div>No Such Data Found</div>
                }
              </div>
            );
            
          }):""
        } 
      </div>
      : <div><div className='container fs-1'>Welcome to FlashFood!
      <div className='fs-2'>Login and order your favorite foods!</div></div>
      </div>}
      <div> <Footer /> </div>
    </div>
  )
}
