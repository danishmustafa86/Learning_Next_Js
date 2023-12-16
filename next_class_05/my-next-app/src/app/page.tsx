 import Link from "next/link" 
 import { log } from "console"
 import Card from "@/app/components/Card1/card"
 import blob from "@/app/components/blobs/blob"
 export default function Home() {
  return (
    <div>

<Card description="I am danish jajja .Jajja is my cast. we belong to jutt family. My grandhfather migrate from Sialkot in 1928 to Bahawalnagar , Tehsil :Fort Abbas" title="this is our Home page"></Card>
<h1>This is our home page</h1>
<Card   title="This is our Home page" data="which contain every important information about us" description="development"/>
   <Link href="./Menu">menu Page</Link>
   <h1>Home Page</h1>
  <h1 >Education Qualities</h1>
  {/* <Card   title="Applying in computer science" data="string datatype"  derscription="development" showtag={true}/> */}
  <Card   title="Applying in computer science" data="string datatype"  description="development" howtag={4}/>

  </div>
  )
}