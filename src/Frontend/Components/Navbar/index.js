import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
      <div className="row">
        <ul className="nav nav-tabs">
          <li>
            <Link to="/dashboard/feeds">
              Feeds &nbsp;<i className="fa fa-rss" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/todos">
              Todos &nbsp;<i className="fa fa-list-alt" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;