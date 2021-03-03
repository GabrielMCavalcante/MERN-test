import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import UserPage from "./pages/UserPage/UserPage"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/:name" component={UserPage} />
      </Switch>
    </Router>
  )
}

export default App