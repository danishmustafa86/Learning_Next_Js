 
 import Link from "next/link" 

 import { log } from "console"
import { ButtonProp } from "@/app/types/type";
// type ButtonProp={
//     title:string,
//     data?:string
//     derscription?:String
//     showtag?:boolean
//     howtag?:number
// }
export default function caaaard(props:ButtonProp) {
    let st:string="your answer is true and very good"
    let strin:string="your answer is quite correct and very complex"
console.log(props.title,"props tittttle",props.data);

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
            <h1>card component</h1>
            <div>
                {props.title}
                {props.data}
                {props.description}
                {props.showtag  }
                {props.howtag  ? <span>555</span> : <h1>786</h1> }
                <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img className="w-full h-48 object-cover object-right" src={strin} alt="Card" />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{st}</h2>
        <p className="text-gray-600 mb-4">{st}</p>

        {/* Tags */}
        <div className="mb-4">
         
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-gray-500 hover:bg-indigo-700 text-white px-4 py-2 rounded-md focus:outline-none">
            Learn More
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none">
            Buy Now
          </button>
          <button className="bg-gray-500 hover:bg-indigo-700 text-white px-4 py-2 rounded-md focus:outline-none">
            Learn More
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none">
            Buy Now
          </button>
        </div>
      </div>

      {/* Additional Information */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <div className="flex items-center">
          <img className="w-8 h-8 rounded-full mr-2" src="https://via.placeholder.com/30" alt="Author" />
          <p className="text-sm text-gray-700">John Doe</p>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 6l3 3m0 0l3-3m-3 3v6a9 9 0 0 0 18 0V9l-3 3m-3-3v6a3 3 0 0 1-6 0V9l-3-3z"
            ></path>
          </svg>
          <p className="text-sm text-gray-700">23 Likes</p>
        </div>
      </div>
    </div>         
       
    </div>
    
    </div>
          
    )
}