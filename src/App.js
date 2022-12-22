import { Container } from "react-bootstrap";
import styles from "./App.css";
import NavBar from "./components/NavBar";
import SignUpForm from "./pages/auth/SignUpForm";
import WelcomeText from "./components/WelcomeText";
import {Route, Switch} from 'react-router-dom';
import "./api/axiosDefaults";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" render={()=> <h1>Home Page</h1>} />
          <Route exact path="/signin" render={()=> <h1>Sign In</h1>} />
          <Route exact path="/signup" render={()=> <SignUpForm />} />
          <Route exact path="/logout" render={()=> <h1>Sign In</h1>} />
          <Route exact path="/currenttasks" render={()=> <h1>Sign In</h1>} />   
          <Route exact path="/archivedtasks" render={()=> <h1>Sign In</h1>} />
          <Route exact path="/createtask" render={()=> <h1>Sign In</h1>} />
          <Route exact path="/profile" render={()=> <h1>Sign In</h1>} />
          <Route render={()=><p>Page not found!</p>} />
        </Switch> 
        {/* <WelcomeText /> */}
      </Container>
    </div>
  );
}

export default App;
