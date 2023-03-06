import React from 'react'

const Book = () => {
    return (
        <div>
            <menu className='book'>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <h2>Make a reservation</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <form>
                                <label for="fname">First name:</label><br />
                                <input type="text" id="fname" name="fname" /><br />
                                <label for="lname">Last name:</label><br />
                                <input type="text" id="lname" name="lname" /><br />
                                <label for="gn">Guest number:</label><br />
                                <input type="number" id="gn" name="gn" /><br />
                                <label for="comment">Comment:</label><br />
                                <input type="text" id="comment" name="comment" /><br /><br />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>

            </menu>
        </div>
    )
}

export default Book