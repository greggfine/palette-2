import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Generator from './components/Generator';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter,
    Link,
    Route
} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <nav>
      <ul id="nav-ul">
        <Link className="link" to="/create">
          <li className="link-li">Create</li>
        </Link>
        <Link className="link" to="/generate">
          {" "}
          <li className="link-li">Generate</li>
        </Link>
      </ul>
      <Route path="/create" component={App} />
      <Route path="/generate" component={Generator} />
    </nav>
  </BrowserRouter>,

  document.getElementById("root")
);
registerServiceWorker();
