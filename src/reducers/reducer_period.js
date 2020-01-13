import { GETPERIOD } from '../actions/Types';

export default function(state = '', action) {
  switch (action.type) {
    case GETPERIOD:
      return action.period;
    default:
      return state;
  }
}
