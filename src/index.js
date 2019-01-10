import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Generator from './components/Generator';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter,
    Link,
    Route
} from 'react-router-dom'

ReactDOM.render(

  <BrowserRouter>
    <div className="container">

      <nav className="d-flex justify-content-end mt-3">
        <ul className="btn btn-group">
          <li className="btn btn-warning"><Link className="link text-white text-decoration-none text-uppercase font-weight-bold" to="/create">Creator</Link></li>
          <li className="btn btn-warning"><Link className="link text-white text-decoration-none text-uppercase font-weight-bold" to="/generate">Generator</Link></li>
        </ul>
      </nav>

      <Route path="/create" component={App} />
      <Route path="/generate" component={Generator} />

    </div>
  </BrowserRouter>,

  document.getElementById("root")
);
registerServiceWorker();
