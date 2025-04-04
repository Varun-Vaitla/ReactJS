import React, { useContext, useState } from 'react'
import { ThemeContext } from './TheamContext'

const Container = () => {
    let [state,setState]=useState(false)
    let {light,dark}=useContext(ThemeContext)
    let boxRef=createRef()
    let handleChange=()=>{
        setState(!state)
        if(state)
        {
            boxRef.current.style.backgroundColor=light.backgroundColor
        }
        else{
            boxRef.current.style.backgroundColor=dark.backgroundColor
        }
    }
  return (
    <div>
        <div id='max' ref={boxRef}></div>
        <button onClick={handleChange}>{state ? "Yellow" :"blue" }</button>
    </div>
  )
}

export default Container