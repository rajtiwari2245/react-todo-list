import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Completed from './pages/Completed';




export default function App() {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-300 m-22">
      <h1 className="text-2xl font-bold mb-4 text-center">📝 To-Do App</h1>
      <nav className="flex gap-4 mb-6">
        <NavLink to="/" className={({ isActive }) => isActive ? "font-semibold" : ""}>All Tasks</NavLink>
        <NavLink to="/completed" className={({ isActive }) => isActive ? "font-semibold" : ""}>Completed</NavLink>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </div>

  );
}