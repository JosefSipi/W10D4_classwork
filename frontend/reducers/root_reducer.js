import {combineReducers} from 'redux';
import todosReducer from './todos_reducer';

const rootReducer = (state, action) => {

    return {
        // todos: todosReducer(state.todos, action)
        todos: {}
    }


}



export default rootReducer;
