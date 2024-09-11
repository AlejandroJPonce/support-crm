import './index.css'
import App from './App.jsx';
import DatabaseProvider from './context/databaseContext.jsx';
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <DatabaseProvider>
    <App />
  </DatabaseProvider>,
)