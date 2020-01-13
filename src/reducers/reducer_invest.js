import { GETINVEST } from '../actions/Types';

export default function(state = '', action) {
  switch (action.type) {
    case GETINVEST:
      return action.investment;
    default:
      return state;
  }
}
