import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoute from './Route';
import { useEffect } from 'react';
import { fetchAllQuestions } from './Actions/question';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './Actions/users';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoute />
      </Router>

    </div>
  );
}

export default App;
