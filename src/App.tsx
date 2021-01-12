import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Movie, DetailMovie } from "./Pages"
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Movie} />
        <Route path="/detail" component={DetailMovie} />
        <Redirect to="/detail" />
      </Switch>
    </Router>
  )
}

export default App
