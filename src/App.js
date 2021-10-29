import EnterPage from "./pages/EnterPage.js";
import Dashboard from "./pages/Dashboard";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header.js"





function App() {
  return (
    
      <Router>
        <div>
        <Route exact path="/" component={EnterPage} />
        <Header />       
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/aboutMe" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />
            {/* <Route exact path="/subscribe" component={Subscribe} />
            <Route exact path="/CreateEvent" component={CreateEvent} />
            <Route exact path="/Signup" component={Signup} /> */}
          </Switch>
        </div>
      </Router>
   
  

  )
}

export default App;