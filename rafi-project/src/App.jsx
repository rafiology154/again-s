import React from 'react'
import AppFooter from './componet/footer'
import AppHeader from './componet/header'

import './App.css'

function App() {
  
 return (
    <>
    <AppHeader/>   

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div class="
        rounded-xl shadow-2xl p-10 h-64 flex flex-col justify-center items-center text-white 
        bg-gradient-to-br from-violet-800 to-purple-500
        ">
        <p class="text-2xl font-light opacity-80 mb-4">In-Progress</p>
        <p class="text-8xl font-bold">0</p>
    </div>

    <div class="
        rounded-xl shadow-2xl p-10 h-64 flex flex-col justify-center items-center text-white
        bg-gradient-to-br from-emerald-600 to-green-400
        ">
        <p class="text-2xl font-light opacity-80 mb-4">Resolved</p>
        <p class="text-8xl font-bold">0</p>
    </div>

</div> 
     <AppFooter/>
      
       </>
  )
}

export default App
