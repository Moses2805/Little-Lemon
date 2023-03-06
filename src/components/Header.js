import React from 'react'

const Header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="row d-flex justify-content-center mt-5">
                        <div className="col-lg-5 col-md-10 col-12">
                            <div className="logoBox d-flex justify-content-center">
                                <img src={require("../img/logo.png")} alt="logo for lemon" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header