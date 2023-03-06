import React from 'react'
import { Link, useNavigate } from "react-router-dom";


const MenuItem = (props) => {

    const navigate = useNavigate();

    console.log(props)
    return (
        <>
            <div className="col-lg-2 col-6 mt-5 mb-3">
                <div className="menuItemBox d-flex justify-content-center flex-column align-items-center">
                <Link to={`/${props.id}`} style={{textDecoration: "none"}}><p>{props.name}</p></Link>
                <span>{props.price}</span>
                </div>

            </div>

        </>
    )
}

export default MenuItem