import React from 'react';
const Details = ({ show, onHide, name, setName, email, setEmail, mobile, setMobile, showReceipt, setShowReceipt}) => {
  if (!show) return null; // Don't render the modal if show is false

  // Function to handle Proceed button click
  const handleProceed = () => {
    setShowReceipt(true); // Show the Receipt component
    onHide(); // Close the modal
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Add Details (Optional) </h2>
          <button onClick={onHide} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>

        <div className="mt-4">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder=""
                value={name}
                onChange={(e)=> setName(e.target.value)}
                autoFocus
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="name@example.com"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                autoFocus
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="number"
                id="mobile"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={mobile}
                onChange={(e)=> setMobile(e.target.value)}
                autoFocus
              />
            </div>
          </form>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onHide}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
          >
            Close
          </button>
          <button
            onClick={handleProceed}
            className="px-4 py-2 text-sm font-medium text-white bg-blue rounded-md focus:outline-none hover:bg-hoverBlue"

          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
