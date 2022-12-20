import { Container } from "react-bootstrap";
import styles from "./App.css";
import NavBar from "./components/NavBar";
import WelcomeText from "./components/WelcomeText";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container fluid> 
        <WelcomeText />
      </Container>
    </div>
  );
}

export default App;
