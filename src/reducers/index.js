import { combineReducers } from 'redux';
import HistoryReducer from './reducer_history';
import AmountReducer from './reducer_amount';
import InvestReducer from './reducer_invest';
import PeriodReducer from './reducer_period';

const rootReducer = combineReducers({
  history: HistoryReducer,
  amount: AmountReducer,
  investment: InvestReducer,
  period: PeriodReducer,
});

export default rootReducer;
