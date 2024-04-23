import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';

export const Button = ({onClick , children}: {onClick:() => void, children: React.ReactNode}) => {
    const navigate = useNavigate());

    return (button onClick={ onClick}
        navigate("game")
        <div button onClick = {()=>{
            navigate("/game")}
          } className="  mt-8 flex justify-center">
              <button className=" p-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                 {children}
              </button>
      <div>
        
      </div>
    )

}
