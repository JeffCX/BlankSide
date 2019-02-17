import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router, Route,Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import history from "./History/History"
import store from "./Redux/ConfigureStore"

import Header from "./Component/Header"
import Home from "./Component/Home"
import DashBoard from "./Component/Dashboard"

import Error from "./Component/Error/Error"





console.log(store.getState())

const AppRouter = () =>{
  return <Router history={history}>

          <main>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={DashBoard} />
              <Route exact component={Error} />
            </Switch>
  
          </main>
        </Router>
}

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
      <React.Fragment>
        <CssBaseline />
        <AppRouter />
     </React.Fragment>
    </Provider>
      
    );
  }
}
 
export default App
export {history}


