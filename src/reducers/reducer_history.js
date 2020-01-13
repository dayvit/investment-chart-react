import {
  FETCHBITCOIN,
  CALCULATETREASURE,
  BITCOINERROR,
} from '../actions/Types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCHBITCOIN:
      return action.payload.data.Data;
    case CALCULATETREASURE:
      return action.payload;
    case BITCOINERROR:
      return { error: action.error };
    default:
      return state;
  }
}
