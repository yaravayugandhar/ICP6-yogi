import TopComponent from "./Components/TopComponent"
import ResturantContainer from "./Components/ResturantContainer"
import Recipi from "./Components/Recipi"
import {BrowserRouter} from "react-router-dom"
import {Route,Switch} from "react-router-dom"

import './App.css';




const App = ()=>(
  <div className="app_container">
    <BrowserRouter>
  
      <TopComponent/>
      <Switch>
        <Route exact path="/" component={Recipi}/>
        <Route exact path="/recipi" component={Recipi}/>
        <Route exact path="/resturant-finder" component={ResturantContainer}/>
      </Switch>
    </BrowserRouter>
  </div>
)

export default App;
