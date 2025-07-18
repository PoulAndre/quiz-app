'use client'
import React, { useState } from 'react'
import Image from "next/image"


function forside({startQuiz}) {
  
  return (
  
    

  <section className="flex flex-col justify-center items-center pt-40">

        <div className="flex flex-col rounded-xl border-gray-50 border-3 bg-gray-100 h-50 sm:w-1/3">
        
        <div className="flex h-10 w-auto justify-center">
          <h1 className="flex font-mono text-3xl text-center">Allmennkunnskap for folk flest!</h1>
        </div>
        
        <div className="flex mt-8 mb-5 h-10 justify-center">
          <p className="flex font-mono text-center text-xl">Hva husker du egentlig - uten å google?</p>
        </div>
        
        <div className="flex justify-center h-40">
          <ul className="flex space-x-30 justify-center items-center">
            <li>
              <button onClick={startQuiz} className="flex bg-white justify-center items-center font-mono text-lg font-bold p-2 w-50 h-15 rounded-2xl border-1 border-gray-300 hover:bg-green-300">Start quiz</button>
            </li>
          </ul>
          
        </div> 

        </div>
        

       



   </section>

  

  )
}

export default forside