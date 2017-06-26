import React  from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import {browserHistory} from 'react-router';
import App from './App'

const Container = () => {
    return (
        <Router history = { browserHistory }>
          <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <Link className="navbar-brand" to ="/">TO DO&nbsp;<i className="fa fa-list-alt" aria-hidden="true"></i></Link>
              </div>
            </div>
          </nav>
          <App/>
          </div>
        </Router>
    )
};
export default Container;