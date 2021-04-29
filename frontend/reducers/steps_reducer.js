import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from './actions/step_actions'


const stepsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_STEPS:
            return action.steps;
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step
        case REMOVE_STEP:
            delete nextState[action.todo.id];
            return nextState;
        default:
            return state;
    }
}