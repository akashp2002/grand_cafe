import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Banner from '../Components/Banner/Banner'
import Header from '../Components/Header/Header'
import SideBarComponent from '../Components/SideBarComponent/SideBarComponent/SideBarComponent'
function LayoutRouter() {
  return (
    <>
    <Router>
    <Header/>
     <Routes>
     <Route path='/' element={<SideBarComponent/>} />
     <Route path='/grand_cafe' element={<SideBarComponent/>} />
    <Route path='/banner' element={<Banner/>}/>    
    </Routes>   
    </Router>     
    </>
  )
}

export default LayoutRouter