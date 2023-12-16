
"use client"
import Button from "@/app/components/button/button"
export default function ContactComponents() {
  const onClickHandler=()=>{
    alert(" ON click handler by contact components")
}
  return (
    <div>contactcomponents
       <Button inClickHandler={onClickHandler} title="Name:" name="ahmad" />
       <Button inClickHandler={onClickHandler} title="Name:" name="ahmad" />
    </div>
    
  )
}

