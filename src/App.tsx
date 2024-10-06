import Navbar from "./components/Navbar";
import Balance from "./components/Balance";
import Movements from "./components/Movements";
import Summary from "./components/Summary";
import Operations from "./components/Operations";
import LogoutTimer from "./components/LogoutTimer";
import { useState } from "react";
import { Account } from "./types/types";

function App() {
  const [currentAccount, setCurrentAccount] = useState<Account | null>(null);

  const handleLogin = (account: Account) => {
    setCurrentAccount(account);
  }
  return (
    <div className="max-w-5xl mx-auto mt-8 p-4">
      {!currentAccount ? (
        <Navbar onLogin={handleLogin} />
      ): (
        <>
          <h1>Welcome, {currentAccount.owner}</h1>
          <Balance account={currentAccount}/>
          <Movements />
          <Summary />
          <Operations />
        </>
      )}
    </div>
  );
}

export default App;
