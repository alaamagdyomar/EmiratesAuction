import './App.css';
import Navbar from './Component/navbar/navbar';
import HomeComponent from "./Component/Home/HomeComponent";
import React from "react";
import About from './Component/about';
import Info from './Component/Info';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import {Switch , Route } from 'react-router-dom';
import {connect} from "react-redux";
import { IntlProvider } from 'react-intl';
import { fetchGetTarget } from './Store/Actions/TargetActions';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App(props) {
  return (
    <div className='ui container'>
    <Router>
    <div className='ui container'>
    <Navbar/>
    </div>
    <Switch>
    <IntlProvider locale={props.locale} messages={props.Target.Target[props.locale]}>
        <Route exact path='/' component={HomeComponent} />
        <Route  path='/About' component={About} />
        <Route  path='/Info' component={Info} />
        </IntlProvider>
    </Switch>
    </Router> 
    </div>
  );
}

const MapStateToProps = state => {
  return {
      Target : state.Target,
      locale : state.locale
  };
};
const MapDispatchToProps = dispatch => {
  return {
      onGetTarget: () => dispatch(fetchGetTarget()),
  };
};

export default connect(MapStateToProps , MapDispatchToProps)(App);
