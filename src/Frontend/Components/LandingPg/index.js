import React from 'react'


/*
 Presentation Component : Landing page of app
 */
const LandingPg = () =>{
    return(

            <div className="jumbotron text-center">
              <h1>Every day’s to-do list</h1>
              <p>1. Listen</p><p>2. Trust</p><p>3. Do</p>
                <div className="input-group">
                    <div className="input-group-btn">
                      <a href = "/login" className="btn btn-danger">Login Here</a>
                    </div>
                </div>
            </div>

    )
};

export default LandingPg;