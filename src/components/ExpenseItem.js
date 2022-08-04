import React from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../context/AppContext'

export default function ExpenseItem(props) {
    const {dispatch} = React.useContext(AppContext)

    // Dispatch DELETE_EXPENSE type and the id of expense to be removed
    function handleDelete() {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
    }

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='badge rounded-pill bg-primary me-3'>${props.cost}</span>
                <TiDelete size="1.5em" onClick={handleDelete} cursor="pointer"></TiDelete>
            </div>
        </li>
    )
}