import React from 'react'
import card from './component/card'
import nevbar from './component/nevbar' 

const App = () => {
  return (
    <div>
      
      {nevbar()}
      {card()}
    </div>
  )
}

export default App
// import React from 'react'
// import card from './component/card'
// const App = () => {

//   const user = 'aditya'
//   return (
//     <div>
//       <div>hello guys i am {user}</div>
//       <div className='card'>
//       <h1>aditya singh</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, distinctio.</p>
//     </div>
//      <div className='card'>
//       <h1>aditya singh</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, distinctio.</p>
//     </div>
//     <div>
//       <card />
//     </div>
//     </div>

    
//   )
// }

// export default App
