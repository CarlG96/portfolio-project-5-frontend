import { Container } from "react-bootstrap";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import SignUpForm from "./pages/auth/SignUpForm";
import WelcomeText from "./components/WelcomeText";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignInForm from "./pages/auth/SignInForm";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className="App">
          <NavBar />
          <Container>
            <Switch>
              <Route exact path="/" render={() => <h1>Home Page</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/logout" render={() => <h1>Logout</h1>} />
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
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
