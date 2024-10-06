function Movements() {
    return (
      <div className="overflow-scroll bg-white rounded-md shadow-lg">
        <div className="flex items-center border-b p-6">
          <div className="bg-green-500 text-white text-sm px-2 py-1 rounded-full mr-4">2 deposit</div>
          <div className="text-gray-500 text-sm mr-auto">3 days ago</div>
          <div className="text-lg">4 000€</div>
        </div>
        <div className="flex items-center border-b p-6">
          <div className="bg-red-500 text-white text-sm px-2 py-1 rounded-full mr-4">1 withdrawal</div>
          <div className="text-gray-500 text-sm mr-auto">24/01/2037</div>
          <div className="text-lg">-378€</div>
        </div>
      </div>
    );
  }
  
  export default Movements;
  