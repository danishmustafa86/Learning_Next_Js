import Link from "next/link" 
import Card from "@/app/components/Card1/card"
export default function Menu() {
 return (
<div>
 <Card  title="this is our menu page"/>
 <Card   title="This is our about page" data="you can check our menu" description="    which contain different dishes " showtag={true}/>
 <Card   title="Applying in computer science" data="string datatype"  description="development" showtag={true}/>
<Link href="/contact">contact Page</Link>

    <h1>menu Page</h1>

 </div>
 )
}