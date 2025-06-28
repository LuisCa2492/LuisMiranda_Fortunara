import { useState } from 'react'
import './App.css'
import {Principal} from './ui/Principal';
import {NavBar} from './ui/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
      <Principal/>
    </>
  )
}

export default App
