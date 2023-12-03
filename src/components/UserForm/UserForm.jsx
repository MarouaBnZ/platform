import { useState } from 'react';
import styles from './styles.module.css'

const {classeForm}=styles;

const UserForm = () => {
  const [form,setForm] = useState({
    name:"",
    age:"",
    location:"",
    phone:""
  })

  const inputHandler=(event)=>{
const key =event.target.name;
const value =event.target.value;
setForm((prev)=>{
  return ({...prev,[key]:value})
 })
}
  return (
    
    <div className={classeForm}>
<form>
    <label htmlFor="name">Name</label>
    <input type="text"  name="name"  value={form.name}  onChange={(e)=>{inputHandler(e)}}/>

    <label htmlFor="age">Age</label>
    <input type="text"  name="age" value={form.age} onChange={(e)=>{(inputHandler(e))}} />

    <label htmlFor="location">Location</label>
    <input type="text"  name="location" value={form.location} onChange={(e)=>{(inputHandler(e))}} />

    <label htmlFor="phone">Phone</label>
    <input type="text"  name= "phone" value={form.phone} onChange={(e)=>{(inputHandler(e))}}/>
  
    <input type="submit" value="Submit"/>
    </form>
    </div>
  )
}

export default UserForm