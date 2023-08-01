import './App.css';
import './components/assets/css/component.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/home';
import Portal from './components/pages/portal/portal';
import Footer from './components/nav/Footer';
import Dashboard from './components/pages/dashboard/dashboard';
import Members from './components/pages/dashboard/members/members';
import Search from './components/pages/dashboard/search/Search'
import Guest from './components/pages/dashboard/guests/guests';
export default function App() {

  return (
<div> 
    <Routes>
            <Route path="/" element={<Home />}/>
      <Route path="portal" element={<Portal />} />
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="members" element={<Members/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="guests" element={<Guest/>}/>

    </Routes>
    </div>
  )
}
  