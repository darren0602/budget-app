import React from 'react'
import { AppContext } from '../context/AppContext'
import { nanoid } from 'nanoid'

export default function AddExpenseForm() {
    const {dispatch} = React.useContext(AppContext)
    const [name, setName] = React.useState('')
    const [cost, setCost] = React.useState('')
    
    // Dispatch ADD_EXPENSE type & prevent submit button from submitting form which will refresh page
    function onSubmit(event) {
        event.preventDefault()
        dispatch({
            type: 'ADD_EXPENSE',
            payload: {
                id:  nanoid(),
                name: name,
                cost: parseInt(cost)
            }
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor='name' className='form-label'>Name</label>
                    <input  id='name' type='text' className='form-control' required
                            value={name} onChange={(event) => setName(event.target.value)}>
                    </input>
                </div>
                <div className='col-sm'>
                    <label htmlFor='cost' className='form-label'>Cost</label>
                    <input  id='cost' type='number' className='form-control' required
                            value={cost} onChange={(event) => setCost(event.target.value)}>
                    </input>
                </div>
            </div>
            <button className='btn btn-primary mt-1'>Save</button>
            
        </form>
    )
}