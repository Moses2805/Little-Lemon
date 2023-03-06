import React from 'react'

const About = () => {
  return (
    <div>
      <main>
        <div className="container mt-4">
            <div className="row d-flex justify-content-between aboutRow align-items-center">
                <div className="col-md-6 col-12">

                    <h2>About Us</h2>
                    <p>Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <p>The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.</p>
                    <p>The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
                    <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>
                    <p>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.</p>
                    <p>Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region.</p>
                </div>

                <div className="col-md-6 col-12">
                    <img src={require("../img/mario-and-adrian.jpg")} alt="mario-and-adrian" className='chefs'/>
                    <span>Little Lemon owners Mario and Adrian.</span>
                </div>
            </div>
        </div>
        </main>
    </div>
  )
}

export default About