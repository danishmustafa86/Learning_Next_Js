 import link from "next" 
 import Card from "./components/card/card"
 export default function Home() {
  return (
 <div><h1>Home Page</h1>
  <Card   title="Apply" data="string" derscription="development"/>
  <Card   title="Apply" data="string" derscription="development"/>
  <Card   title="Applying in computer science" data="string datatype"  derscription="development" showtag={true}/>

  </div>
  )
}