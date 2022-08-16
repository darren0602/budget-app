import React from 'react'
import { nanoid } from 'nanoid'
function AppReducer(state, action) {
    switch(action.type){
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            };
        case "EDIT_BUDGET":
            return {
                ...state,
                budget: action.payload
            }
        case "CLEAR_EXPENSE":
            return {
                ...state,
                expenses: []
            }
        default:
            return state;
    }
}

const initialState = {
    budget: 2000,
    expenses: [
        {id: nanoid(), name: 'Shopping', cost: 50},
        {id: nanoid(), name: 'Holiday', cost: 300},
        {id: nanoid(), name: 'Transportation', cost: 100},
    ]
}

// If localStorage is empty initialize state with initialState, otherwise fetch item from local storage
// localStorage will be empty on first load
function initializer() {
    return JSON.parse(localStorage.getItem('expensesData')) || initialState;
}

export const AppContext = React.createContext()

export function AppProvider(props) {
    const [state, dispatch] = React.useReducer(AppReducer, undefined, initializer)
    
    // Update localStorage with state whenever state is changed
    React.useEffect(() => {
        localStorage.setItem('expensesData', JSON.stringify(state))
    }, [state])

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>
    )    
}