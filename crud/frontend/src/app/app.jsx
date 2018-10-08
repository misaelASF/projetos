import React from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from '../component/template/logo/logo'
import Nav from '../component/template/nav/nav'
import Footer from '../component/template/footer/footer'
import { HashRouter } from 'react-router-dom'
import Routes from './roules'

export default props => 
      <HashRouter>
      <div className="app">
          <Logo/>
          <Nav/>
          <Routes />
          <Footer/>          
      </div>
      </HashRouter>

