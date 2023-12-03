import Link from "next/link"
import Card from "@/app/components/card/card"
export default function about() {
 return (
<div><h1>about Page</h1>
   <Link href="/" >Home Page</Link>

 <Card title="how are you" derscription="I am fine"/>
 </div>
 )
}