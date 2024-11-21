import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function useNavigationHistory() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setHistory((prevHistory) => [...prevHistory, location.pathname]);
  }, [location]);

  return { history, navigate };
}

export default useNavigationHistory;
