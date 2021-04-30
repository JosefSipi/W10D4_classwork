import {combineReducers} from 'redux';
import todosReducer from './todos_reducer';
import stepsReducer from './steps_reducer';

const rootReducer = (state, action) => {
    return {
        todos: todosReducer(state.todos, action),
        steps: stepsReducer(state.steps, action),
    }
}

export default rootReducer;
