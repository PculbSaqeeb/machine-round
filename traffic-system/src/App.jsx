import "./App.css";
import TrafficSystem from "./TrafficSystem";

const data = [
  {
    color: "red",
    timer: 4000,
    order: 3,
    displayColorOrder: 1,
  },
  {
    color: "yellow",
    timer: 2000,
    order: 1,
    displayColorOrder: 2,
  },
  {
    color: "green",
    timer: 3000,
    order: 2,
    displayColorOrder: 3,
  },
  {
    color: "purple",
    timer:5000,
    order: 4,
    displayColorOrder: 4,
  },
];

function App() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <TrafficSystem data={data} />
      </div>
    </>
  );
}

export default App;
