import Navbar from "./components/Navbar";
import Balance from "./components/Balance";
import Movements from "./components/Movements";
import Summary from "./components/Summary";
import Operations from "./components/Operations";
import LogoutTimer from "./components/LogoutTimer";

function App() {
  return (
    <div className="max-w-5xl mx-auto mt-8 p-4">
      <div className="md:col-span-1">
        <Navbar />
      </div>
      <main className="col-span-4">
        <Balance />
        <Movements />
        <Summary />
        <Operations />
        <LogoutTimer />
      </main>
    </div>
  );
}

export default App;
