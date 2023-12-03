import Link from "next/link" 
import Card from "@/app/components/card/card"
export default function Contact() {
 return (
<div>
 <Card   title="This is our about page" data="you can contact us " derscription="without any hesitation"/>
 <Card   title="Applying in computer science" data="string datatype"  derscription="development" showtag={true}/>
<Link href="/about">about Page</Link>

    <h1>contact Page</h1>

 </div>
 )
}