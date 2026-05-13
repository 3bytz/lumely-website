import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';
import TermsOfService from './pages/TermsOfService';
import LandingPage from './pages/LandingPage';
import SubscribePage from './pages/SubscribePage';
import SubscribeCallbackPage from './pages/SubscribeCallbackPage';
import InvitePage from './pages/InvitePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />

        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/subscribe/callback" element={<SubscribeCallbackPage />} />

        <Route path="/invite/:code" element={<InvitePage />} />

        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;