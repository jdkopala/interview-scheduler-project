import { useState } from 'react'

const useVisualMode = (initialMode) => {
  // Use mode to track the state of the Appointment component
  const [mode, setMode] = useState(initialMode);
  // Track the history of the modes of the Appointment component
  const [history, setHistory] = useState([initialMode])
  // Function to go from one mode to another
  function transition(newMode, replace = false) {
    if (replace) {
      history.pop()
      setHistory([...history, newMode])
    }
    setMode(newMode);
    setHistory([...history, newMode])
  };
  // Function to go back to a previous mode in the history array
  function back() {
    if (history.length > 1) {
      history.pop()
      setMode(history[history.length - 1])
    }
  };

  return { mode, transition, back }
};

export default useVisualMode;