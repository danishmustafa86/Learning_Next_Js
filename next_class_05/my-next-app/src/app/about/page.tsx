import Link from "next/link" 
import Card from "@/app/components/Card1/card"
export default function About() {
 return (
<div>
 <Card   title="This is our about page" data="Users cantact us and know about us without anu hesitation" description="development"/>
 <Card   title="Applying in computer science" data="string datatype"  description="development" showtag={true}/>
<Link href="/">Home Page</Link>

  <h1>about Page</h1>

 </div>
 )
}