import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchBitcoin,
  calculateTreasure,
  getAmount,
  getPeriod,
  getInvest,
} from '../../actions/Actions';

import './style.css';

export class Submit extends Component {
  constructor(props) {
    super(props);
    this.onInvestSubmit = this.onInvestSubmit.bind(this);
  }

  onInvestSubmit(event) {
    event.preventDefault();

    const {
      type,
      date,
      amount,
      fetchBitcoin,
      calculateTreasure,
      getAmount,
      getPeriod,
      getInvest,
    } = this.props;

    type === 'Bitcoin' ? fetchBitcoin(date) : calculateTreasure(date);

    getAmount(amount);
    getPeriod(date);
    getInvest(type);

    window.scrollTo(0, 0);
  }

  render() {
    const { label } = this.props;

    return (
      <form className="form_onInvest" onSubmit={this.onInvestSubmit}>
        <button type="submit" className="btn btn-primary submit__button">
          {label}
        </button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchBitcoin, calculateTreasure, getAmount, getPeriod, getInvest },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Submit);
