import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(2);
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + step);
  }

  function decreaseCount() {
    setCount(count - step);
  }

  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + count);

  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-300 p-6">
      <div className="w-full max-w-lg p-10 bg-white rounded-3xl shadow-lg border-2 border-gray-200">
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-green-700 mb-4">Set Step Value: {step}</h1>
          <input 
            type="range"
            min="1"
            max="20"
            value={step}
            onChange={(e) => setStep(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-green-300 accent-green-700 rounded-lg cursor-pointer"
          />
        </div>

        <Step 
          title="Counter:" 
          initialValue={count} 
          increase={addCount} 
          decrease={decreaseCount} 
        />

        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold text-gray-600">
            {count} day(s) from today is:
          </h2>
          <p className="text-2xl font-bold text-green-900">
            {dayOfWeek[futureDate.getDay()]} {monthOfYear[futureDate.getMonth()]} {futureDate.getDate()}, {futureDate.getFullYear()}
          </p>
        </div>

        <div className="mt-10 text-center">
          <button 
            onClick={() => setCount(0)} 
            className="bg-yellow-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 ease-in-out">
            Reset Counter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

function Step({ title, initialValue, increase, decrease }) {
  return (
    <div className="flex items-center justify-between space-x-6">
      <button 
        onClick={decrease} 
        className="px-6 py-3 bg-purple-600 text-white text-xl font-bold rounded-lg shadow-md hover:bg-purple-500 transform hover:scale-105 transition-all duration-300 ease-in-out">
        -
      </button>
      <h1 className="text-4xl font-semibold text-gray-700">
        {title} {initialValue}
      </h1>
      <button 
        onClick={increase} 
        className="px-6 py-3 bg-blue-600 text-white text-xl font-bold rounded-lg shadow-md hover:bg-blue-500 transform hover:scale-105 transition-all duration-300 ease-in-out">
        +
      </button>
    </div>
  );
}
