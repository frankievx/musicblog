import { SHOW_RIGHT_SIDEBAR, HIDE_RIGHT_SIDEBAR } from '../actions/rightsidebar_actions';

const initialState = {
  display: false
};

export default function rightsidebar(state = initialState, action) {
  switch (action.type) {
    case SHOW_RIGHT_SIDEBAR:
      return Object.assign({}, state, {
        display: true,

      });
    case HIDE_RIGHT_SIDEBAR:
      return Object.assign({}, state, {
        display: false
      });
    default:
      return state;
  }
}
