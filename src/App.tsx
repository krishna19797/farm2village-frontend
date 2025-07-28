import { useEffect, useState } from 'react';
import { fetchData } from './api/api';
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./auth/SignIn";
import { SignUp } from "./auth/signup";
import Home from "./pages/Home";

function App() {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData('/')
      .then(setMessage)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!message) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;