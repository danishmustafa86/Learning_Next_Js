import React from 'react'
import { useState } from 'react'
type Buttonprop={
    onClick:()=>void
}
export default function page(props:Buttonprop) {
  let counted:number=0
  const [count, setCount] = useState(0)

  const onClickHandler=()=>{
    setCount(count+3)
// })}
  return (
  <div>
<button title='button' onClick={useState} style={{background:"red"}}></button>
<button title='submit' onClick={useState} style={{background:"yellow"}}></button>
  </div>
  )
}
}
