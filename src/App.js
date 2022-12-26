import { Container } from "react-bootstrap";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import SignUpForm from "./pages/auth/SignUpForm";
import WelcomeText from "./components/WelcomeText";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignInForm from "./pages/auth/SignInForm";
import HeroImage from "./components/HeroImage";



function App() {
  return (
        <div className="App">
          <NavBar />
          <Container fluid className={styles.Container}>
            <Switch>
              <Route exact path="/" render={() => <HeroImage />} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route
                exact
                path="/currenttasks"
                render={() => <h1>Sign In</h1>}
              />
              <Route
                exact
                path="/archivedtasks"
                render={() => <h1>Sign In</h1>}
              />
              <Route exact path="/createtask" render={() => <h1>Sign In</h1>} />
              <Route exact path="/profile" render={() => <h1>Sign In</h1>} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
            {/* <WelcomeText /> */}
          </Container>
        </div>
      
  );
}

export default App;
