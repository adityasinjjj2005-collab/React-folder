import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState({user:'aditya',age:20})

  const btnclicked = ()=>{
    const newnum = {...num};
    newnum.user='saransh'
    setnum(newnum)

  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnclicked}>Click</button>
    </div>
  )
}

export default App