 import Link from "next/link" 
 import Card from "./components/card/card"
 export default function Home() {
  return (
    <div>


  <Card   title="This is our Home page" data="which contain every important information about us" derscription="development"/>
   <Link href="./Menu">menu Page</Link>
   <h1>Home Page</h1>
  <h1 >Education Qualities</h1>
  {/* <Card   title="Applying in computer science" data="string datatype"  derscription="development" showtag={true}/> */}
  <Card   title="Applying in computer science" data="string datatype"  derscription="development" howtag={4}/>

  </div>
  )
}