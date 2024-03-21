import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, deletetodo } from '../Redux/Slice/AddSlice';

function Add() {
const dispatch = useDispatch()
const todoList = useSelector(state=>state.AddReducer)


 const [todo,settodo]= useState([])
 console.log();

const createtodo = ()=>{
    if(todo){dispatch(addtodo(todo))
    settodo("")}
else{
    alert("Please Enter a Activity Todo")
}
}

const handleDelete = () => {
    dispatch(deletetodo());
}


    return (
        <div className='container w-100'>
            <h1 className=''>My Todo List</h1>
            <hr />
            <div>
                <input value={todo}  onChange={e=>settodo(e.target.value)} className='form-control w-50 rounded' type="text" placeholder='Todo List' />
                <button onClick={createtodo} className='btn btn-primary rounded mt-3'>Create</button>
            </div>
            <hr />

{/*****************************************************   Todo List ************************************************************* */}

           { todoList?.map((item,index)=>(<div className='mt-3 border p-3 rounded'>
                <div key={index} className='d-flex justify-content-between'>
                    <div class="form-check">
                        <input onChange={()=>(dispatch(icreaseselected()))} class="form-check-input" type="checkbox" value="" id="" />
                        <label class="form-check-label" for="">{item}  </label>
                    </div>
                    <div>
                        <button onClick={()=>handleDelete(index)}   className='btn'><i class="fa-solid fa-trash text-danger"></i></button></div>

                </div>

            </div>))
            }
            <hr />
            <h3 className='mt-3'>Total Completed items :</h3>
        </div>

    )
}

export default Add