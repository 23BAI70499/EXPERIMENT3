import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom'

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path = "/Profile" element = {<Profile/>}/>
      <Route path = "/Dashboard" element = {<Dashboard/>}/>
    </Routes>
    <Link to = "/Profile"><button>Go to profile</button></Link>
    <Link to = "/Dashboard"><button>Go to dashboard</button></Link>    
    </BrowserRouter>
  )
}
function Dashboard(){
  return (
    <>
    <h1>Artificial Intelligence</h1>
    <h2>Public speaking</h2>
    <h3>Confidence is my Strength</h3>
    </>
  )
}
function Profile(){
  return(
    <div>
      <marquee loop = "5">
        <h1>Welcome to Lion's den</h1>
      </marquee>
      <h1>Nikunj Jain</h1>
      <h2>Beyond ordinary ! Beyond Doubt !</h2>
    </div>
  )
}
export default App
