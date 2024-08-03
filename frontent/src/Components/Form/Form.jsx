import React, { useContext, useState } from 'react'
import './Form.css'
import { StoreContext } from '../../Context/StoreContext'
const Form = () => {
  const {fetchInfo}  = useContext(StoreContext)
  const [input,setInput] = useState("")

  const changeHandler = (e)=>{
    setInput(e.target.value)
  }
  const submitHandler = (e)=>{
    e.preventDefault()
    fetchInfo(input)
  }
  return (
    <div className='form'>
      <form onSubmit={submitHandler}>
        <input type="text" className="user-input" placeholder='Enter the ID' value={input} onChange={changeHandler} name="input" required/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
