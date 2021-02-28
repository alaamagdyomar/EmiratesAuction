import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware , compose} from 'redux';
import TargetReducer from "./Store/Reducers/TargetReducer";
import {fetchGetTarget} from "./Store/Actions/TargetActions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = store => {
    return next => {
        return action => {
            console.log('[MIDDLEWARE]' , action);
            const result = next(action)
            console.log('[MIDDLEWARE] next' , store.getState())
            return result ;
        };
    }
};


const store = createStore(TargetReducer ,  composeEnhancers(applyMiddleware(middleware , ReduxThunk)) )
store.dispatch(fetchGetTarget());


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />

      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

