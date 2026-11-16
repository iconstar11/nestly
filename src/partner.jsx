import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PartnerDashboard from './components/PartnerDashboard';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PartnerDashboard />
  </StrictMode>
);
