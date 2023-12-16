
import link from "next" 
import {ButtonProp} from "@/app/types/type" 
import Card from "@/app/components/Card1/card"
import { type } from "os"
export default function button(props:ButtonProp) {
    var num1:string="computer"
 return (
<div><h1>button Page</h1>
<h2>{props.title}</h2>
<h2>{props.description}</h2>
 <Card   title={num1} description="science" />
 <Card   title="Applying in computer science" data="string datatype" description="PIAIC"/>

 </div>
 )
}