import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Home } from './Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import 'antd/dist/reset.css';
import '@ant-design/v5-patch-for-react-19';
import { CurrentEmployees } from './CurrentEmployees.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees-list" element={<CurrentEmployees />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
