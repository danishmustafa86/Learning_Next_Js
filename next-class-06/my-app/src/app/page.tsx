import Image from 'next/image'
import Link from "next/link"

type student ={
  name:string,
  gender:string,
  physics:number,
  maths:number,
  english:number
}
export default function Home() {
  const students:student[] = [  
    {  
       name:'arun',
       gender:'Male',
       physics:88,
       maths:87,
       english:78
    },
    {  
       name:'rajesh',
       gender:'Male',
       physics:96,
       maths:100,
       english:95
    },
    {  
       name:'moorthy',
       gender:'Male',
       physics:89,
       maths:90,
       english:70
    },
    {  
       name:'raja',
       gender:'Male',
       physics:30,
       maths:25,
       english:40
    },
    {  
       name:'usha',
       gender:'Female',
       physics:67,
       maths:45,
       english:78
    },
    {  
       name:'priya',
       gender:'Female',
       physics:56,
       maths:46,
       english:78
    },
    {  
       name:'Sundar',
       gender:'Male',
       physics:12,
       maths:67,
       english:67
    },
    {  
       name:'Kavitha',
       gender:'Female',
       physics:78,
       maths:71,
       english:67
    },
    {  
       name:'Dinesh',
       gender:'Male',
       physics:56,
       maths:45,
       english:67
    },
    {  
       name:'Hema',
       gender:'Female',
       physics:71,
       maths:90,
       english:23
    },
    {  
       name:'Gowri',
       gender:'Female',
       physics:100,
       maths:100,
       english:100
    },
    {  
       name:'Ram',
       gender:'Male',
       physics:78,
       maths:55,
       english:47
    },
    {  
       name:'Murugan',
       gender:'Male',
       physics:34,
       maths:89,
       english:78
    },
    {  
       name:'Jenifer',
       gender:'Female',
       physics:67,
       maths:88,
       english:90
    }
 ]

  return (


<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    student name
                </th>
                <th scope="col" className="px-6 py-3">
                    gender
                </th>
                <th scope="col" className="px-6 py-3">
                    physics
                </th>
                <th scope="col" className="px-6 py-3">
                    english
                </th>
                <th scope="col" className="px-6rud py-3">
                    Math
                </th>
                <th scope="col" className="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
          {
            students.map((student,index) =>{
              return(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {student.name}
                </td>
                <td className="px-6 py-4">
                    {student.gender}

                </td>
                <td className="px-6 py-4">
                    {student.physics}
                </td>
                <td className="px-6 py-4">
                    {student.english}
                </td>
                <td className="px-6 py-4">
                    {student.maths}
                </td>
                <td className="px-6 py-4">
                    <button 
                      type="button" 
                      className="text-white bg-red-500 hover:bg-yellow-400 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Delete
                    </button>
                </td>
            </tr>
              )
            })
          }
           
        </tbody>
    </table>
</div>

  )
}
