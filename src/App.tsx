
//import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.scss';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/DashboardPage';
import HomePage from './pages/Home/HomePage';

function App() {
 
  return (
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage page={1}/>} />
          <Route path="/home" element={<HomePage page={1}/>} />
          <Route path="/pricing" element={<HomePage page={2}/>} />
          <Route path="/privacy-policy" element={<HomePage page={3}/>} />
          <Route path="/login" element={<HomePage page={4}/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/blog" element={<HomePage page={5}/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
