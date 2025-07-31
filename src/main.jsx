import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil'; // ✅ Import RecoilRoot
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>         {/* ✅ Add this */}
      <BrowserRouter>    {/* ✅ And keep this */}
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);