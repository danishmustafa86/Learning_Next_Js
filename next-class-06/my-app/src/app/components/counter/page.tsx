"use client"
// import {useState} from "react"
type types=[
onclicked:()=> null
]
export default function counting(props:types) {
    var count:number=0
    count=count+2
    // const [countState,setcountstate] = useState(0)
    // setcountstate(countState+2)
    const ondeleteclicked = ()=>{
        alert("delete data clicked")}
    const onaddclicked = ()=>{
        alert(" add data clicked")
    }
    return (
        <div>
            <button onClick={ondeleteclicked} title="delete data" style={{background:"green"}}>-</button>
            <span>{1}</span>
            <button title="add data"  onClick={onaddclicked} style={{background:"yellow"}}>+</button>
        </div>
    )
}