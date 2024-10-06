function Operations() {
    return (
      <div className="grid gap-4 mt-8">
        {/* Transfer Section */}
        <div className="bg-yellow-400 p-8 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Transfer money</h2>
          <form className="grid grid-cols-3 gap-4">
            <input type="text" placeholder="To" className="form-input col-span-1 rounded-md px-2"/>
            <input type="number" placeholder="Amount" className="form-input col-span-1 rounded-md px-2"/>
            <button className="col-span-1 text-3xl">&rarr;</button>
          </form>
        </div>
  
        {/* Loan Section */}
        <div className="bg-green-400 p-8 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Request loan</h2>
          <form className="grid grid-cols-3 gap-4">
            <input type="number" placeholder="Amount" className="form-input col-span-2 rounded-md px-2"/>
            <button className="col-span-1 text-3xl">&rarr;</button>
          </form>
        </div>
  
        {/* Close Account Section */}
        <div className="bg-red-400 p-8 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Close account</h2>
          <form className="grid grid-cols-3 gap-4">
            <input type="text" placeholder="Username" className="form-input col-span-1 rounded-md px-2"/>
            <input type="password" placeholder="PIN" className="form-input col-span-1 rounded-md px-2"/>
            <button className="col-span-1 text-3xl">&rarr;</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Operations;
  