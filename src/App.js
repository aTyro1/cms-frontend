import logo from './logo.svg';
import { useState, useRef } from 'react';
import Attribute from './components/Attribute';

function App() {
  const [creationReply , setCreationReply ] = useState('')
  const tablename = 'aman'
  const postData = async(url, data)=>{
    const response = await fetch(url,{
        method: 'POST',
        mode: 'cors',
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    const result = await response.json()
    return result
}
console.log(creationReply.current)
  return (
   <div>
<div className="max-w-sm mx-auto p-4">
  <div className="mb-5">
    <label htmlFor="tableName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Table Name</label>
    <input onBlur={(event)=> postData('/createTable', {'name' : event.currentTarget.value}).then((data)=>{
      setCreationReply(data['reply'])
    })} type="email" id="tableName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="employee" required />
     <div className='mt-2'>
    <p className='text-sky-950'>{creationReply }</p>
  </div>
 </div>
  </div>
 
 <Attribute tableName ={tablename}  />

      
    <img src='add.svg' className='mx-auto mt-2' alt=''  />

  <button type="submit" className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto ml-32">Submit</button>
   </div>
  );
}

export default App;
