import { useState } from 'react'
import './App.css'
import {Principal} from './ui/Principal';
import {NavBar} from './ui/NavBar';
import { Footer } from './ui/Footer';
function App() {

  return (
    <>
    <NavBar/>
    <Principal/>
    <Footer/>
    </>
  )
}

export default App
