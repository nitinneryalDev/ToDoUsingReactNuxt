'use client'
import React, { useState } from 'react'

export  const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler  = (e) => {
    setMainTask([...mainTask ,{title , desc}])
    e.preventDefault()
    console.log('add a task' , title ,  desc)
    settitle('')
    setdesc('')
  }
let renderTask = <h2> No task Available</h2>

const deleteHandler = (i) => {
  let copytask = [...mainTask]
  copytask.splice(i,1)
  setMainTask(copytask)
}


if(mainTask.length > 0) {
  renderTask = mainTask.map((t,i) => {
return (
  <li>
    <div className='flex justify-between mb-5' >
       <h5 className='text-2xl font-semibold' >{t.title} </h5>
       <h6 className='text-xl font-semibold' >{t.desc} </h6>
    </div>
    <button className='bg-red-700 rounded-4 py-2 px-2'  onClick={() => deleteHandler(i)} >
Delete
    </button>
  </li>
) } ) 
}
  return (


    <div> 
<h1 className='mt-20   text-5xl text-center' >Nitin Neryal</h1>
<p className='mt-5  text-center'>Tow way binding</p>
    <form  onSubmit={submitHandler} className=' text-center'>
    <input type="text"  value={title} onChange={(e) => {settitle(e.target.value)}} className='m-5 border-4 text-black  border-zing-800 px-4 py-2' placeholder='Enter task here' ></input>
    <input type="text"  value={desc} onChange={(e) => {setdesc(e.target.value)}} className='m-5 border-4 text-black border-zing-800 px-4 py-2' placeholder='Enter Discription here' ></input>
<br></br>
<button className='bg-white text-black py-2 px-4' >Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bs-slate-200' >
<ul>{renderTask}</ul>

    </div>
    </div>
  )
}

export default page
