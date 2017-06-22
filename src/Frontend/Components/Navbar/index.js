import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/dashboard/feeds">Feeds</Link>
          <Link to="/dashboard/todos">Todos</Link>
          <hr/>
        </div>
      </div>
    )
  }
}

export default Navbar;