import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
      <div className="row slideanim slide">
        <div className="col-sm-6">
          <Link to="/dashboard/feeds">
            <div className="panel panel-default text-center panel-heading">
              <h1>Feeds &nbsp;<i className="fa fa-rss" aria-hidden="true"></i>
              </h1>
            </div>
          </Link>
        </div>
        <div className="col-sm-6">
        <Link to="/dashboard/todos">
          <div className="panel panel-default text-center panel-heading">
            <h1>Todos &nbsp;<i className="fa fa-list-alt" aria-hidden="true"></i></h1>
          </div>
        </Link>
        </div>
          <hr/>
      </div>
    )
  }
}

export default Navbar;