import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions.js';
const initialState = {
  
        1: { // this is the step with id = 1
            id: 1,
                title: 'walk to store',
                    done: false,
                        todo_id: 1
        },
        2: { // this is the step with id = 2
            id: 2,
                title: 'buy soap',
                    done: false,
           todo_id: 1
        }

}

const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_STEPS:
            return action.steps;
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step
        case REMOVE_STEP:
            delete nextState[action.step.id];
            return nextState;
        default:
            return state;
    }
}

export default stepsReducer;