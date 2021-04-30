import React from 'react';
import App from '../components/app'


export const allTodos = (state) => {
    let stateArray = Object.values(state.todos);
    return stateArray
}

export default allTodos;