import React from 'react'
import { Link, useParams } from "react-router-dom";

const MenuItemDetail = ({ meals }) => {

    // Getting id of clicked card from URL
    const params = useParams();
    const id = params.id;
    console.log(id)
    console.log(meals)

    let selectedMeal = meals.filter((prod) => prod.id === id)
    console.log(selectedMeal.id)
    return (
        <div className='container menuitemdet mt-5 mb-4'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-12">
                    <h2>Menu Item</h2>
                    <h4>{selectedMeal[0].name}</h4>
                    <p>{selectedMeal[0].description}</p>
                    <span>{selectedMeal[0].price}</span>
                </div>
            <div className="col-md-6 col-12">
                <div className="imgBox">
                <img src={require(`../img/${selectedMeal[0].imgLink}`)} alt=""/>
                </div>
                
            </div>
            </div>

        </div>

    )
}

export default MenuItemDetail