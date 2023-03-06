import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <section className="footerSection mb-4">

                    <div className="container">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-2">
                                <img src={require("../img/logo_footer.png")} alt="logo footer" />
                            </div>
                            <div className="col-6">
                                <hr />
                                <div className="copyright">
                                    <p>Copyright Little Lemon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer