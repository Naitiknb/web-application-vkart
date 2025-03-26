import './App.css'
import Bank from "./pages/Bank"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add_Client from './pages/Add_Client'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bank />} />
        <Route path="/add" element={<Add_Client />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
