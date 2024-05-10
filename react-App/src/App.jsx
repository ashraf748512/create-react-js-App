

import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState('olive')
  

  return (
    
     <div className='bg-gray-500 w-full h-screen flex  justify-center items-end '
     style={{backgroundColor:color}} >
    <div className='bg-red-400 h-12 w-3/4  shadow-lg p-7 mb-12 flex justify-center items-center rounded-full'>
    <button  onClick={()=>setColor('red')} className='bg-red-500 rounded-full  shadow-lg px-2 ml-2 '>Red</button>
    <button onClick={()=>setColor('white')} className='bg-white rounded-full  shadow-lg px-2 ml-2  '>White</button>
    <button onClick={()=>setColor('green')} className='bg-green-400 rounded-full shadow-lg px-2 ml-2 '>Green</button>
    <button onClick={()=>setColor('blue')} className='bg-blue-400 rounded-full shadow-lg px-2 ml-2 '>Blue</button>
    </div>
     </div>
    //  <div className='w-full h-screen duration-200'
    //  style={{backgroundColor:color}}
    //  >
    //   <div className='fixed flex flex-wrap justify-center  bottom-12 px-2 inset-x-0'>
    //     <div className='fixed flex flex-wrap justify-center px-3 py-2
    //      bg-white gap-2 shadow-lg rounded-3xl'>
    //       <button 
    //       onClick={()=>setColor('red')}
    //       style={{backgroundColor:"red"}}
    //       className='outline-none shadow-lg px-4 py-1 rounded-full text-white'>
    //         Red
    //       </button>
    //       <button 
    //       onClick={()=>setColor('green')}
    //       style={{backgroundColor:"green"}}
    //       className='outline-none shadow-lg px-4 py-1 rounded-full text-white'>
    //        Green 
    //       </button>
    //       <button 
    //       onClick={()=>setColor('blue')}
    //       style={{backgroundColor:"blue"}}
    //       className='outline-none shadow-lg px-4 py-1 rounded-full text-white'>
    //         Blue
    //       </button>
    //       <button 
    //       onClick={()=>setColor('olive')}
    //       style={{backgroundColor:"olive"}}
    //       className='outline-none shadow-lg px-4 py-1 rounded-full text-white'>
    //         Olive
    //       </button>
    //       <button 
    //       onClick={()=>setColor('gray')}
    //       style={{backgroundColor:"gray"}}
    //       className='outline-none shadow-lg px-4 py-1 rounded-full text-white'>
    //         Gray
    //       </button>
    //       <button 
    //       onClick={()=>setColor('yellow')}
    //       style={{backgroundColor:"yellow"}}
    //       className='outline-none shadow-lg px-4 py-1 rounded-full text-black'>
    //         Yellow
    //       </button>
    //       <button 
    //       onClick={()=>setColor('pink')}
    //       style={{backgroundColor:"pink"}}
    //       className='outline-none shadow-lg px-4 py-1 rounded-full text-black'>
    //         Pink
    //       </button>
    //       <button 
    //       onClick={()=>setColor('purple')}
    //       style={{backgroundColor:"purple"}}
    //       className='outline-none shadow-lg px-4 py-1 rounded-full text-white'>
    //         Purple
    //       </button>
    //       <button 
    //       onClick={()=>setColor('lavender')}
    //       style={{backgroundColor:"lavender"}}
    //       className='outline-none shadow-lg px-4 py-1 rounded-full text-black'>
            
    //         lavender
    //       </button>
    //       <button 
    //       onClick={()=>setColor('white')}
    //       style={{backgroundColor:"white"}}
    //       className='outline-none shadow-lg px-4 py-1 rounded-full text-black'>
    //         White
    //       </button>
    //       <button 
    //       onClick={()=>setColor('black')}
    //       style={{backgroundColor:"black"}}
    //       className='outline-none shadow-lg px-4 py-1 rounded-full text-white'>
    //         Black
    //       </button>
    //     </div>
    //   </div>
    //  </div>
  
    
  )
}

export default App
