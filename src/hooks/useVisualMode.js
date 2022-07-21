import { useState } from 'react'

const useVisualMode = (initialMode) => {
  // Track the history of the modes of the Appointment component
  const [history, setHistory] = useState([initialMode])
  // Function to go from one mode to another
  function transition(newMode, replace = false) {
    setHistory((prev) => {
      return replace ? [...prev.slice(0, prev.length - 1), newMode] : [...prev, newMode];
    });
  };
  
  // Function to go back to a previous mode in the history
  function back() {
      setHistory((prev) => {
        return history.length > 1 ? prev.slice(0, prev.length - 1) : prev;
      });
  };

  return { mode: history[history.length - 1], transition, back }
};

export default useVisualMode;