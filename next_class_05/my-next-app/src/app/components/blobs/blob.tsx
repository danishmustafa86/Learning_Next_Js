 
 import Link from "next/link" 

 import { log } from "console"
import { blobss } from "@/app/types/type";
export default function blob(props:blobss) {
  return (
    <div>
                  <header className="bg-indigo-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Your Logo</div>

        {/* Navigation */}
        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-300"><Link href="/">Home</Link></a>
          <a href="#" className="hover:text-gray-300"><Link href="/about">About</Link></a>
          <a href="#" className="hover:text-gray-300"><Link href="/contact">Contact Us</Link></a>
          <a href="#" className="hover:text-gray-300"><Link href="/Menu">Menu</Link></a>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="py-1 px-2 mr-2 rounded-md focus:outline-none"
          />
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </header>
      
    <h1>blob page</h1>
    <h1>{props.admin}</h1>
    <h1>{props.data}</h1>
    <h1>{props.description}</h1>
    <h1>{props.title}</h1>






    
    </div>
  )
}
