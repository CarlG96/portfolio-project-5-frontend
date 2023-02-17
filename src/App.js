import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// import styles from "./App.module.css";
// import NavBar from "./components/NavBar";
// import SignUpForm from "./pages/auth/SignUpForm";
// import WelcomeText from "./components/WelcomeText";
// import Route from "react-router-dom/Route";
// import Switch from "react-router-dom/Switch";
import "./api/axiosDefaults";
// import SignInForm from "./pages/auth/SignInForm";
// import HeroImage from "./components/HeroImage";
// import TaskCreateForm from "./pages/tasks/TaskCreateForm";
// import TaskPage from "./pages/tasks/TaskPage";
// import EventCreateForm from "./pages/events/EventCreateForm";
// import EventPage from "./pages/events/EventPage";
// import TasksPage from "./pages/tasks/TasksPage";
// import EventsPage from "./pages/events/EventsPage";
// import ProfilePage from "./pages/profiles/ProfilePage";
// import Footer from "./components/Footer";
// import NoResults from "./components/NoResults";
// import genericStyles from "../src/styles/GenericStyles.module.css";
import React, {lazy, Suspense } from "react";

const styles = lazy(() => import("./App.module.css"));
const NavBar = lazy(() => import("./components/NavBar"));
const SignUpForm = lazy(() => import("./pages/auth/SignUpForm"));
const WelcomeText = lazy(() => import("./components/WelcomeText"));
const Route = lazy(() => import("react-router-dom/Route"));
const Switch = lazy(() => import("react-router-dom/Switch"));
const SignInForm = lazy(() => import("./pages/auth/SignInForm"));
const HeroImage = lazy(() => import("./components/HeroImage"));
const TaskCreateForm = lazy(() => import("./pages/tasks/TaskCreateForm"));
const TaskPage = lazy(() => import("./pages/tasks/TaskPage"));
const EventCreateForm = lazy(() => import("./pages/events/EventCreateForm"));
const EventPage = lazy(() => import("./pages/events/EventPage"));
const TasksPage = lazy(() => import("./pages/tasks/TasksPage"));
const EventsPage = lazy(() => import("./pages/events/EventsPage"));
const ProfilePage = lazy(() => import("./pages/profiles/ProfilePage"));
const Footer = lazy(() => import("./components/Footer"));
const NoResults = lazy(() => import("./components/NoResults"));
const genericStyles = lazy(() => import("../src/styles/GenericStyles.module.css"));


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
          <Suspense fallback={<></>}>
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
          </Suspense>
        </Switch>
      </Container>
      <Footer />

    </div>
  );
}

export default App;
