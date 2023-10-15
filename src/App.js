import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Task1 from './task1/Task1';
import Task2 from './task2/Task2';
import Task4 from './task4/Task4';
import Task5 from './task5/Task5';
import Appp from './task6/app';
import ColorPickerApp from './task3/colorPickerApp';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/task1">Task 1</Link>
          </li>
          <li>
            <Link to="/task2">Task 2</Link>
          </li>
          <li>
            <Link to="/task3">Task 3</Link>
          </li>
          <li>
            <Link to="/task4">Task 4</Link>
          </li>
          <li>
            <Link to="/task5">Task 5</Link>
          </li>
          <li>
            <Link to="/task6">Task 6</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<ColorPickerApp />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
        <Route path="/task6" element={<Appp />} />
      </Routes>
    </Router>
  );
}

export default App;
