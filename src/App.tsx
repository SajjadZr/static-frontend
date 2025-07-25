// function App() {
//   return (
//     <div style={{ fontFamily: 'system-ui', textAlign: 'center', padding: '50px' }}>
//       <h1>Hello to SE Lab</h1>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import './index.css'; // We'll use this for styling
import Quote from './component/Quote';

function App() {
  // Set up state to hold the current date and time
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Use an effect to set up a timer that updates the time every second
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the timer when the component is removed
    return () => {
      clearInterval(timerId);
    };
  }, []); // The empty array [] means this effect runs only once on mount

  // Format the date and time for display
  const formattedDate = currentDateTime.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return (
    <div className="container">
      <div className="datetime-card">
        <h1>Today's Date</h1>
        <p className="date">{formattedDate}</p>
        <h2>Current Time</h2>
        <p className="time">{formattedTime}</p>
      </div>
      <Quote />
    </div>
  );
}

export default App;