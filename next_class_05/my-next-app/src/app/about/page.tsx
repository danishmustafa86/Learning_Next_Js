import Link from "next/link" 
import Card from "@/app/components/card/card"
export default function About() {
 return (
<div>
 <Card   title="This is our about page" data="Users cantact us and know about us without anu hesitation" derscription="development"/>
 <Card   title="Applying in computer science" data="string datatype"  derscription="development" showtag={true}/>
<Link href="/">Home Page</Link>

  <h1>about Page</h1>

 </div>
 )
}