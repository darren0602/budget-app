import React from 'react'
import { AppContext } from '../context/AppContext'

export default function Remaining() {
    const {budget, expenses} = React.useContext(AppContext)
    const totalCost = expenses.reduce((total, item) => total=total+item.cost, 0)
    const totalRemaining = budget - totalCost

    const alertType = totalCost > budget ? 'danger' : 'success'

    return (
        <div className={`alert alert-${alertType}`}>
            <span>Remaining: {alertType==='danger' ? `-$${Math.abs(totalRemaining)}` : `$${totalRemaining}`}</span>
        </div>
    )
}