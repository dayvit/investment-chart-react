import axios from 'axios';

import moment from 'moment';
import * as types from './Types';

function bitcoinSuccess(request) {
  return {
    type: types.FETCHBITCOIN,
    payload: request,
  };
}

function bitcoinError(error) {
  return {
    type: types.BITCOINERROR,
    error,
  };
}

function getBitcoinfromAPI(period) {
  const days = period * 365;
  const ROOT_URL = `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=BRL`;
  const URL = `${ROOT_URL}&limit=${days}`;
  const request = axios.get(URL);
  return request;
}

export function fetchBitcoin(period) {
  return function(dispatch) {
    return getBitcoinfromAPI(period).then(
      data => dispatch(bitcoinSuccess(data)),
      error => dispatch(bitcoinError(error))
    );
  };
}

export function calculateTreasure(period) {
  const values = [];
  const days = period * 364;
  let amount = 1;
  let time = moment().subtract(period, 'years');
  for (let x = 0; x <= days; x++) {
    values[x] = {
      close: amount,
      time: time.unix(),
    };
    time = time.add(1, 'day');
    amount *= 1.000265;
  }
  return {
    type: types.CALCULATETREASURE,
    payload: values,
  };
}

export function getAmount(amount) {
  return {
    type: types.GETAMOUNT,
    amount,
  };
}

export function getPeriod(period) {
  return {
    type: types.GETPERIOD,
    period,
  };
}

export function getInvest(investment) {
  return {
    type: types.GETINVEST,
    investment,
  };
}
