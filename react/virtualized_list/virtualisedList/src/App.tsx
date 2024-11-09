import "./App.css";
import VirtualizedList from "./components/VirtualizedList.js";

export default function App() {
  return (
    <div className="App">
      hehe
      <VirtualizedList itemHeight={50} windowHeight={400} />
    </div>
  );
}
