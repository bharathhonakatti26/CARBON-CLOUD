import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the GoogleOAuthProvider

// Your Google Client ID (make sure to replace it with your actual Client ID)
// const GOOGLE_CLIENT_ID = '392493820492-6gfqm2ttjc60nv8dc0uv2i45t34nk0f5.apps.googleusercontent.com';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the App component with GoogleOAuthProvider */}
    <GoogleOAuthProvider clientId='392493820492-6gfqm2ttjc60nv8dc0uv2i45t34nk0f5.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
);
