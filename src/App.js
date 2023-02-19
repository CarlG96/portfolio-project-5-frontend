import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import SignUpForm from "./pages/auth/SignUpForm";
import WelcomeText from "./components/WelcomeText";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import "./api/axiosDefaults";
import SignInForm from "./pages/auth/SignInForm";
import HeroImage from "./components/HeroImage";
import TaskCreateForm from "./pages/tasks/TaskCreateForm";
import TaskPage from "./pages/tasks/TaskPage";
import EventCreateForm from "./pages/events/EventCreateForm";
import EventPage from "./pages/events/EventPage";
import TasksPage from "./pages/tasks/TasksPage";
import EventsPage from "./pages/events/EventsPage";
import ProfilePage from "./pages/profiles/ProfilePage";
import Footer from "./components/Footer";
import NoResults from "./components/NoResults";
import genericStyles from "../src/styles/GenericStyles.module.css";
import React from "react";


function App() {
  return (
    <div className="App">
      <Container fluid className={styles.Container}>
      <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Row className={styles.Row}>
                  <Col xl={6} lg={12} className={styles.Col}>
                    <HeroImage />
                  </Col>
                  <Col xl={6} lg={12} className={styles.Col}>
                    <WelcomeText />
                  </Col>
                </Row>
              </>
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/currenttasks" render={() => <TasksPage />} />
          <Route exact path="/createtask" render={() => <TaskCreateForm />} />
          <Route exact path="/createevent" render={() => <EventCreateForm />} />
          <Route exact path="/events/:id" render={() => <EventPage />} />
          <Route exact path="/tasks/:id" render={() => <TaskPage />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/currentevents" render={() => <EventsPage />} />
          <Route
            render={() => (
              <Container className={`${genericStyles.GenericForm} mt-3 mb-3`}>
                <NoResults message="Sorry, the page you are looking for couldn't be found!" />
              </Container>
            )}
          />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
