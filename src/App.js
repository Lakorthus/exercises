import "./App.css";
import ColorRenderer from "./01-color-render/colorRender";
import DarkMode from "./02-dark-mode/darkmode";
import FormValidator from "./03-form-validator/form";

function App() {
  return (
    <div className="App">
      <ColorRenderer />
      <DarkMode  />
      <FormValidator />
    </div>

  );
}

export default App;
