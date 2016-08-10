import { SHOW_LEFT_SIDEBAR, HIDE_LEFT_SIDEBAR } from '../actions/leftsidebar_actions';

const initialState = {
  display: true
};

export default function leftsidebar(state = initialState, action) {
  switch (action.type) {
    case SHOW_LEFT_SIDEBAR:
      return Object.assign({}, state, {
        display: true
      });
    case HIDE_LEFT_SIDEBAR:
      return Object.assign({}, state, {
        display: false
      });
    default:
      return state;
  }
}
