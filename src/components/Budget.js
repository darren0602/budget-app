import React from 'react'
import { AppContext } from '../context/AppContext'

export default function Budget() {
    const { budget , dispatch } = React.useContext(AppContext)
    const [isEditBudget, setIsEditBudget] = React.useState(false)
    const [newBudget, setNewBudget] = React.useState('')

    // Dispatch EDIT_BUDGET type and new budget amount in int from string
    function handleEditBudget() {
        dispatch({
            type:"EDIT_BUDGET",
            payload: parseInt(newBudget)
        })
        setIsEditBudget(false)
    }

    
    return(
        isEditBudget ? 
        <form className='alert alert-secondary d-flex justify-content-between'>
            <input type='number' className='form-control' value={newBudget} onChange={(event) => setNewBudget(event.target.value)}></input>
            <button className='btn btn-primary btn-sm ms-5' onClick={handleEditBudget}>Save</button>
        </form>
        :
        <div className='alert alert-secondary d-flex justify-content-between'>
            <span>Budget: ${budget}</span>
            <button className='btn btn-primary btn-sm' onClick={() => setIsEditBudget(true)}>Edit</button> 
        </div>
    )
}