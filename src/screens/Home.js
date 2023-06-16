import React, { useEffect, useState } from 'react'

import Footer from "../components/Footer";
import NavBars from '../components/NavBars';
import Crousels from "../components/Crousels";
import Cards from "../components/Cards";

const Home = () => {

  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
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

  useEffect(() => {
    loadData();

  }, []);





  return (
    <div>
      <NavBars />
      <Crousels />


      <div className='container'>

        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3  m-3 '>
                    {data.CategoryName}
                  </div>
                  <hr></hr>
                  {foodItem !== []
                    ?
                    foodItem.filter((item) =>
                      item.CategoryName === data.CategoryName)
                      .map(filterItems => {
                        return (
                          <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                            <Cards foodName={filterItems.name}
                              imgsrc={filterItems.img}
                              description ={filterItems.description}


                            ></Cards>
                          </div>
                        )
                      })

                    : <div>No such data found</div>}

                </div>
              )
            })
            : <div> """"""""""</div>
        }



      </div>

      <Footer />
    </div>
  )
}

export default Home