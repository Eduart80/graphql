import React, {useState} from 'react';
import './App.css';
import {atom, Provider, useAtom} from 'jotai'

const userNameAtom = atom("Red")
const countAtom = atom((get)=>get(userNameAtom).length)

const App =()=> {
  <Provider>
    <Nav />
    <Body />
  </Provider>
}
const Nav = ()=>{
  const [userName]= useAtom(userNameAtom)
  return (
    <nav>
      <p>{userName}</p>
    </nav>
  )
}
const Body =()=>{
  return (
    <div className='container'>
      <Profile />
      <Count />
    </div>
  )
}
const Profile =()=>{
  const [userfirst, setUserFirst]= useAtom(userNameAtom)
  return(
    <>
    <h2>Profile:</h2>
    <p>{userfirst}</p>
    <input value={userfirst} onChange={(event)=>setUserFirst(event.target.value)}/>
    </>
  )
}
const Count =()=>{
  const count = useAtom(countAtom)
  return <p>Count: {count}</p>
}

export default App;
