import "./App.css";
import ColorRenderer from "./01-color-render/colorRender";
import DarkMode from "./02-dark-mode/darkmode";
import FormValidator from "./03-form-validator/form";
import DogPics from "./04-dog-picture/dogpic";
import ScoreKeeper from "./05-score-keeping/scorekeeper";
import ToggleWindowEvent from "./06-add-window-event/toggle-window-event";

function App() {
  return (
    <div className="App">
      <ColorRenderer />
      <DarkMode  />
      <FormValidator />
      <DogPics/>
      <ScoreKeeper/>
      <ToggleWindowEvent/>
    </div>

  );
}

export default App;
