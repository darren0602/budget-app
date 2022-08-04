import React from 'react'
import { AppContext } from '../context/AppContext'

export default function ClearExpenseForm() {
    const {dispatch} = React.useContext(AppContext)
    function handleClear() {
        dispatch({
            type: 'CLEAR_EXPENSE',
        })
    }
    return(
        <button className='btn btn-primary' onClick={handleClear}>Clear</button>
    )
}