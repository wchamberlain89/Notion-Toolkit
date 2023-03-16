'use client';

import { useState } from 'react';

function CounterWidget({ widgetData }) {
  const { id, count } = widgetData
  const [total, setTotal] = useState(count);

  function increment() {
    setTotal(total + 1);
  }

  function decrement() {
    setTotal(total - 1);
  }

    return (
      <>
        <h5>{id}</h5>
        <div className="flex items-center">
            <button
            className="bg-gray-200 text-gray-700 font-bold py-2 px-2 rounded-l-md hover:bg-gray-300"
            onClick={decrement}
            style={{ height: '2.5rem' }}
            >
            -
            </button>
            <h1 className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-none flex-grow-1 text-center shadow-none">
            {total}
            </h1>
            <button
            className="bg-gray-200 text-gray-700 font-bold py-2 px-2 rounded-r-md hover:bg-gray-300 flex-grow-2"
            onClick={increment}
            style={{ height: '2.5rem' }}
            >
            +
            </button>
        </div>
      </>
    );
}

export default CounterWidget;