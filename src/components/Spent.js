import React from 'react'
import { AppContext } from '../context/AppContext'

export default function Spent() {
    const {expenses} = React.useContext(AppContext)
    const totalCost = expenses.reduce((total, item) => total=total+item.cost, 0)

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: ${totalCost}</span>
        </div>
    )
}