import Link from "next/link" 
import Card from "@/app/components/card/card"
export default function Menu() {
 return (
<div>
 <Card   title="This is our about page" data="you can check our menu" derscription="    which contain different dishes " showtag={true}/>
 <Card   title="Applying in computer science" data="string datatype"  derscription="development" showtag={true}/>
<Link href="/contact">contact Page</Link>

    <h1>menu Page</h1>

 </div>
 )
}