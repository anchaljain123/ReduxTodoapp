import React  from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import {browserHistory} from 'react-router';
import App from './App'

const Container = () => {
    return (
        <Router history = { browserHistory }>
         <div>
           <Link to ="/">home</Link>
            <App/>
         </div>
        </Router>
    )
};
export default Container;