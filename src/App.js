import "./styles.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Greet name="Anusha">
        <p>Hello Children</p>
      </Greet>
      <Greet name="Naga" />
      <Greet name="Eeshan" />
      <Greet name="Sanavi" />

      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}
