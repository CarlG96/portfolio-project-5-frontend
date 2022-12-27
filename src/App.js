import { Col, Row, Container } from "react-bootstrap";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import SignUpForm from "./pages/auth/SignUpForm";
import WelcomeText from "./components/WelcomeText";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignInForm from "./pages/auth/SignInForm";
import HeroImage from "./components/HeroImage";
import PostCreateForm from "./pages/tasks/PostCreateForm";



function App() {
  return (
        <div className="App">
          <NavBar />
          <Container fluid className={styles.Container}>
            <Switch>
              <Route exact path="/" render={() => (
                <>
                <Row className={styles.Row}>
                    <Col xl ={6} lg={12} className={styles.Col}>
                      <HeroImage />
                    </Col>
                    <Col xl ={6} lg={12} className={styles.Col}>
                      <WelcomeText />
                    </Col>
                </Row>
                </>
              )} />
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
              <Route exact path="/createtask" render={() => <PostCreateForm />} />
              <Route exact path="/profile" render={() => <h1>Sign In</h1>} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
      
  );
}

export default App;
