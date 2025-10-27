import React from 'react'

const App = () => {
  function btnclicked(elem){
    console.log(elem)

  }
  return (
    <div>
      <button onClick={btnclicked}>Click</button>
    </div>
  )
}

export default App