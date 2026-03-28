import TrafficController from "./TrafficController";

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
  }
];

function App() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <TrafficController data={data} />
      </div>
    </>
  );
}

export default App;