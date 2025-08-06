
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/toast.css'

// Mount the React application
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}
