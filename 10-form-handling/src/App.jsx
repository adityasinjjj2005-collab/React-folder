import React from 'react'

const App = () => {

  const submithandler = (el)=>{
    el.preventDefault()
    console.log('form submitted')
  }
  return (
    <div>
      <form onSubmit={(el)=>{
        submithandler(el)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App