import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import SignUp from './components/auth/SignUp';
import Dashboard from './pages/dashboard/dashboard.component';
import SignOut from './components/auth/SignOut';
import SignIn from './components/auth/SignIn';
import RecoverPassword from './components/auth/RecoverPassword';
import HistoryList from './components/history-list/history-list.component';
const store = createStore(
  reducers, {
    auth: { authenticated: localStorage.getItem('token') }
  }, applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signout" exact component={SignOut} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/recovery" exact component={RecoverPassword} />
        <Route path="/home" exact component={Dashboard} />
        <Route path="/history" exact component={HistoryList} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
