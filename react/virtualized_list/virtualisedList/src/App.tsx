import "./App.css";
import VirtualizedList from "./components/VirtualizedList.tsx";
import Text from "./components/Texr.tsx";

export default function App() {
  return (
    <div className="App">
      hehe
      <VirtualizedList itemHeight={50} windowHeight={400} />
      <Text />
    </div>
  );
}
