import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequestProvider } from './context/RequestContext';

import RoleSelection from './pages/RoleSelection';
import QRPage from './pages/QRPage';
import VisitorForm from './pages/VisitorForm';
import VisitorStatus from './pages/VisitorStatus';
import EmployeeDashboard from './pages/EmployeeDashboard';
import GuardDashboard from './pages/GuardDashboard';
import AdminDashboard from './pages/AdminDashboard';

import Footer from './components/Footer';

function App() {
  return (
    <RequestProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow pb-16">
            <Routes>
              <Route path="/" element={<RoleSelection />} />
              <Route path="/qr" element={<QRPage />} />
              <Route path="/visitor-form" element={<VisitorForm />} />
              <Route path="/visitor-status/:id" element={<VisitorStatus />} />
              <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
              <Route path="/guard-dashboard" element={<GuardDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </RequestProvider>
  );
}

export default App;