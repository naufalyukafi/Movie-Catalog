import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Movie } from "./components"
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Movie} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
