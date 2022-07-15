import { useState } from 'react'

const useVisualMode = (initialMode) => {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode])

  function transition(newMode, replace = false) {
    if (replace) {
      history.pop()
      setHistory([...history, newMode])
    }
    setMode(newMode);
    setHistory([...history, newMode])
  };

  function back() {
    if (history.length > 1) {
      history.pop()
      setMode(history[history.length - 1])
    }
  };

  return { mode, transition, back }
};

export default useVisualMode;