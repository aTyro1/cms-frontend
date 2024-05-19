import { useEffect, useRef, useState } from "react"

const Attribute = (props) => {

    const attribute  = useRef('')
    const tablename = props.tableName
    const [reply, setReply] = useState('')

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

postData('/createTable',{"attribute" : attribute.current}).then((data) => {
})

    return (
        <>

<div className='container mx-auto px-4 w-full h-full bg-sky-950 shadow-sm border-2 p-4'>
    <label htmlFor='attribute' className='text-cyan-300'>Attribute Name</label>
    <input onBlur={(event)=> postData('/alterTable',{"attribute" : event.currentTarget.value,
        "tableName" : tablename
    }).then((data)=>{
        setReply(data['reply'])
    })} type="text" id="tableName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="id" required />
        <div className='p-4'>
        <div className='p-4 container inline'>
      <input type="checkbox" id="primaryKey" required />
      <label htmlFor='primaryKey' className='text-cyan-300 ml-2' >Primary Key</label>
      </div>
      <div className='p-4 container inline'>
        <select name='attr_type' id='attr_type' className="p-2 text-cyan-900">
          <option>int</option>
          <option>float</option>
          <option>char</option>
          <option>varchar</option>
  
        </select>
        <label htmlFor ='attr_type' className='text-cyan-300 ml-2'>Attribute Type</label>
  
      </div>
      </div>
      <div className="mt-1">
        <p className="text-cyan-300">{reply}</p>
      </div>
      </div>


        </>
    )
}

export default Attribute