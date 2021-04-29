import { RECEIVE_TODOS } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    // added comment
    
    
    switch (action.type) {

        default:
            return state;
    }
};



export default todosReducer;