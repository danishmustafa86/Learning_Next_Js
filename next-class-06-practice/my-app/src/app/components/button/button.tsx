"use client"
// import React from 'react'


import {Buttonprop} from "@/app/components/types/type"


 function Button(props:Buttonprop) {
  return (
    <>
    <button  onClick={props.inClickHandler } >{props.title}  </button>
    </>
  )
}


export default Button
