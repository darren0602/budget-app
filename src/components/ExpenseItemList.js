import React from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'
import { nanoid } from 'nanoid'

export default function ExpenseItemList() {
    const {expenses} = React.useContext(AppContext)
    const [search, setSearch] = React.useState([])

    // Load expenses into search state on page load & each time expenses changes i.e. add/remove expenses
    React.useEffect(() => {
        setSearch(expenses)
    }, [expenses])

    // Filter out matching expense names from search bar input, then set into search state
    function handleSearch(event) {
        const searchResults = expenses.filter(expense => expense.name.toLowerCase().includes(event.target.value.toLowerCase())) // Convert both the typed expense and actual expense name to lower case to ignore all casing while matching
        setSearch(searchResults)
    }

    // Map out all expense items from search state
    const expenseItemElement = search.map(item => (
        <ExpenseItem 
            key = {nanoid()}
            id={item.id}
            name={item.name}
            cost={item.cost}
        />
    ))

    return (
        <>
            <input type='text' className='form-control' placeholder='🔍 Search Expense' onChange={handleSearch}/>
            <ul className='list-group mt-3'>
                {expenseItemElement}
            </ul>   
        </>
    )
}