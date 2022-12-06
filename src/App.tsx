import "./App.css";
import { Comments } from "./components/comments";
import { MeCursor } from "./components/MeCursor";
import { OtherCursors } from "./components/OtherCursors";

function App() {
  return (
    <div className="App">
      <MeCursor />
      <OtherCursors />
      <Comments />
    </div>
  );
}

export default App;
