import { AccountProps } from "../types/types";

const Balance: React.FC<AccountProps> = ({ account }) => {
    const balance = account.movements.reduce((acc, mov) => acc + mov, 0)
    return (
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="text-2xl font-medium mb-1">Current balance: {balance}</p>
          <p className="text-sm text-gray-500">
            As of <span className="font-semibold">05/03/2037</span>
          </p>
        </div>
        <p className="text-5xl font-light">0000€</p>
      </div>
    );
  }
  
  export default Balance;
  