
"use client"
import Button from "@/app/components/button/button"
export default function ContactComponents() {
  const onClickHandler=()=>{
    alert(" ON click handler by contact components")
}
  return (
    <div>ContactComponents


<body className="bg-gray-100 p-6">

<div className="max-w-md mx-auto bg-white rounded p-8">
    <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

    <form action="#" method="post">
        <div className="mb-4">
            <label for="name" className="block text-gray-600 text-sm font-medium mb-2">Your Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded">
        </div>

        <div className="mb-4">
            {/* <label for="email" className="block text-gray-600 text-sm font-medium mb-2">Your Email</label> */}
            {/* <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded"> */}
        </div>

        <div className="mb-4">
            {/* <label for="message" className="block text-gray-600 text-sm font-medium mb-2">Your Message</label> */}
            {/* <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea> */}
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
</div>

</body>
    </div>
    
  )
}

