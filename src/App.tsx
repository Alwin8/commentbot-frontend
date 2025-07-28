
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LoginPage from './pages/Home/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/DashboardPage';
import HomePage from './pages/Home/HomePage';
import PrivacyPolicy from './pages/Home/PrivacyPolicy';

function App() {
 
  return (
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
