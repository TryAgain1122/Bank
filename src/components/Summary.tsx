function Summary() {
    return (
      <div className="flex items-baseline mt-4">
        <p className="mr-4 text-sm font-medium uppercase">In</p>
        <p className="text-2xl text-green-500 mr-6">0000€</p>
        <p className="mr-4 text-sm font-medium uppercase">Out</p>
        <p className="text-2xl text-red-500 mr-6">0000€</p>
        <p className="mr-4 text-sm font-medium uppercase">Interest</p>
        <p className="text-2xl text-green-500">0000€</p>
        <button className="ml-auto text-lg text-gray-600 transition duration-300 hover:text-gray-500">
          &darr; SORT
        </button>
      </div>
    );
  }
  
  export default Summary;
  