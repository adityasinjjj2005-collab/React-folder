import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')

  const submithandler = (el)=>{
    el.preventDefault()
    console.log('form submitted')
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(el)=>{
        submithandler(el)
      }}>
        <input type="text" placeholder='Enter your name'
        value={title}
         onChange={(e)=>{
          console.log(e.target.value)
        }} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App