import React from 'react'


/*
 Presentation Component : Landing page of app
 */
const LandingPg = () =>{
    return(
          <div>
            <div className="jumbotron text-center">
              <h1>Every day’s to-do list</h1>
              <p>1. Listen</p><p>2. Trust</p><p>3. Do</p>
                <div className="input-group">
                    <div className="input-group-btn">
                      <a href = "/login" className="btn btn-danger">Login Here</a>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-8">
                  <h2>About To-Do</h2><br/>
                  <h4>Staying organized is one of the toughest things to do. Everything in your life requires at least some kind of organization and it’s also something you have to do and keep track of every day. It’s okay if you can’t keep track of it all because most of us can’t either. It’s almost certain that you’ll be more productive with a little organization.</h4><br/>
                </div>
                <div className="col-sm-4">
                  <i className="fa fa-list-alt logo" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <footer className="container-fluid text-center">
              <p>TO-DO Application Made By Anchal Jain</p>
            </footer>
          </div>

    )
};

export default LandingPg;