// import React, { useState } from 'react'

// const App = () => {

//   const [num, setnum] = useState(10)
//   const [username, setusername] = useState('sarthak')
//   const [first, setfirst] = useState([12,13,14])

//   function changenum(){
//     setnum(30)
//     setusername('aditya')
//     setfirst([12,10,3,4])
//   }
//   return (
//     <div>
//       <h1>value of num is {num} <br /> valve of user is {username}</h1>
//       <button onClick={changenum}>click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  
  const [num, setnum] = useState(0)
  function increasenum(){
    setnum(num+1)
  }
   function decreasenum(){
    setnum(num-1)
  }
  function jumpby5(){
    setnum(num+5)
  }
  function jumpby10(){
    setnum(num+10)
  }
  function jumpby100(){
    setnum(num+100)
  }
  function jumpby1000(){
    setnum(num+1000)
  }
  function jumpby1000000(){
    setnum(num+1000000)
  }
  function decreaseby1000000(){
    setnum(num-1000000)
  }
  
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increasenum}>increase</button>
      <button onClick={decreasenum}>decrease</button>
      <button onClick={jumpby5}>Jump by 5</button>
      <button onClick={jumpby10}>Jump by 10</button>
      <button onClick={jumpby100}>Jump by 100</button>
      <button onClick={jumpby1000}>Jump by 1000</button>
      <button onClick={jumpby1000000}>Jump by 10000000</button>
      <button onClick={decreaseby1000000}>decrease by 10000000</button>
    </div>
  )
}

export default App