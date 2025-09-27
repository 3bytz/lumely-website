import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';
import TermsOfService from './pages/TermsOfService';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;