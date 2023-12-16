import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Cards from '../Components/Cards'
import Carousel from '../Components/Carousel'



const Home = () => {
    const [foodCat, setfoodCat] = useState([]);
    const [foodItem, setfoodItem] = useState([]);

    const loadData = async () => {
        let response = fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await (await response).json();

        setfoodItem(response[0]);
        setfoodCat(response[1]);
        // console.log(response[0],response[1]);
    }

    useEffect(() => {
        loadData()
    }, [])
    return (
        <div>
            <div><Navbar /></div>
            <div><Carousel /></div>
            <div className='container'>
                {
                    foodCat.length > 0 &&
                    foodCat.map((data) => {
                        return (
                            <div className='row mb-3'>
                                <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
                                <hr />
                                {foodItem.length > 0 ? foodItem.filter((item) =>
                                    item.CategoryName === data.CategoryName
                                ).map(filterItems => {
                                    return (
                                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                            <Cards //foodName = {filterItems.name}
                                                foodItem={filterItems}
                                                option={filterItems.options[0]}
                                            // imgsrc = {filterItems.img}
                                            // desc   =  {filterItems.description}
                                            ></Cards>
                                        </div>
                                    )
                                }) : (
                                    <div>No such data found</div>
                                )}

                            </div>
                        )
                    })
                }

            </div>
            <div><Footer /></div>
        </div>
    )
}

export default Home