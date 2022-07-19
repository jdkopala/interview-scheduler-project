import { useState } from 'react'

const useVisualMode = (initialMode) => {
  // Use mode to track the state of the Appointment component
  const [mode, setMode] = useState(initialMode);
  // Track the history of the modes of the Appointment component
  const [history, setHistory] = useState([initialMode])
  // Function to go from one mode to another
  function transition(newMode, replace = false) {
    console.log("newMode; ", newMode)
    if (replace) {
      setMode(newMode)
      setHistory((prev) => {
        return [...prev.slice(0, prev.length - 1), mode]
      })
    } else {
      setMode(newMode);
      setHistory([...history, newMode])
    }
  };
  // Function to go back to a previous mode in the history
  function back() {
    if (history.length === 1) {
      return
    } else {
      const temp = history;
      temp.pop()
      setHistory(temp)
      setMode(temp[temp.length - 1])
    }
  };

  return { mode, transition, back }
};

export default useVisualMode;