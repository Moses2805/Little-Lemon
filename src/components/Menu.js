import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem'
import MenuItemDetail from './MenuItemDetail'
import { Routes, Route } from 'react-router-dom'


const Menu = ({meals}) => {



  return (
    <div>
      <main>
        <div className="container menu">
          <div className="row">
            <div className="col-3 mt-4">
              <h2>Menu</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-between">

            {
              meals.map((prod, index) => (
                <MenuItem key={prod.id} id={prod.id} name={prod.name} price={prod.price} />
              )
              )
            }

          </div>
        </div>
      </main>
    </div>
  )
}

export default Menu