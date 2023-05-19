import './App.css';
import './components/assets/css/component.css'
import { Route, Routes } from 'react-router-dom';
import Practise from './components/pages/practise/practise';
import Home from './components/pages/home/home';
import Portal from './components/pages/portal/portal';
import Footer from './components/nav/Footer';
import Dashboard from './components/pages/dashboard/dashboard';
export default function App() {

  return (
<div> 
    <Routes>
            <Route path="/" element={<Home />}/>
      <Route path="practise" element={<Practise />}/>
      <Route path="portal" element={<Portal />} />
      <Route path="dashboard" element={<Dashboard/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}
  