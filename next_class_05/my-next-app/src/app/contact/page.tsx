import Link from "next/link" 
import Card from "@/app/components/Card1/card"
import blob from "@/app/components/blobs/blob"
export default function Contact() {
 return (
<div>
 <Card   title="This is our about page" data="you can contact us " description="without any hesitation"/>
 <Card   title="Applying in computer science" data="string datatype"  description="development" showtag={true}/>
<Link href="/about">about Page</Link>



    <h1>contact Page</h1>

 </div>
 )
}