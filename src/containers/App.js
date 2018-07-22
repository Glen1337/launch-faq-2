// This file did not exist pre-part 3
import LauncherShow from '../components/LauncherShow'
import LauncherList from '../components/LauncherList'
import React from 'react';
import FAQContainer from './FAQContainer'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

const App = props => {

  return(
    <div className='page'>
    <Router history={browserHistory}>
      <Route path='/' component={FAQContainer}/>
      <Route path='/launchers' component={LauncherList}/>
      <Route path='/launcher/:id' component={LauncherShow}/>
    </Router>
    </div>
  )
}

export default App;
