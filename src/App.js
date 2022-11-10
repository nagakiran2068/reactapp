import "./styles.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1> */}
      {/* <h2>Start editing to see some magic happen!</h2> */}
      {/* <Greet name="Anusha">
        <p>Hello Children</p>
      </Greet>
      <Greet name="Naga" />
      <Greet name="Eeshan" />
      <Greet name="Sanavi" />

      <Welcome name="Naga" />
      <Welcome name="Anu" />*/}
      {/* <Welcome name="Sanu" /> */}

      {/* <Message /> */}

      {/* <Counter /> */}

      {/* <FunctionClick /> */}

      {/* <EventBind /> */}

      <ParentComponent />
    </div>
  );
}
