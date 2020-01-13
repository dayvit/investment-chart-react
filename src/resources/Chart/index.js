import React, { Component } from 'react';

import { connect } from 'react-redux';

import './style.css';

import Chart from '../../components/Chart';
import Box from '../../components/Box';

const months = [
  'Jan',
  'Fev',
  'Mar',
  'Apr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dec',
];

export class InvestmentChart extends Component {
  constructor(props) {
    super(props);
    this.state = { boxDisplay: false };
    this.onChartClick = this.onChartClick.bind(this);
  }

  onChartClick() {
    if (this.state.boxDisplay === false) {
      this.setState({ boxDisplay: true });
    } else {
      this.setState({ boxDisplay: false });
    }
  }

  getClosingPrice(investmentData) {
    const { history, investment, amount } = this.props;
    let closingPrice;

    if (investment === 'Bitcoin') {
      const bitcoins = amount / history[0].close;
      closingPrice = bitcoins * investmentData.close;
    } else if (investment === 'Tesouro Direto pré-fixado 10%') {
      closingPrice = investmentData.close * amount;
    }

    const prettyPrice =
      Math.round(closingPrice * Math.pow(10, 2)) / Math.pow(10, 2);

    return prettyPrice;
  }

  getTime(investmentData) {
    const time = new Date(investmentData.time * 1000);
    const day = time.getUTCDate();
    const month = months[time.getUTCMonth()];
    const year = time.getUTCFullYear();
    const date = `${day} - ${month} - ${year}`;
    return date;
  }

  getFinalAmount() {
    const { history, investment, amount } = this.props;
    const historylength = history.length;
    let bitcoins;
    let finalAmount;

    if (investment === 'Bitcoin') {
      bitcoins = amount / history[0].close;
      finalAmount = bitcoins * history[historylength - 1].close;
      finalAmount = Math.round(finalAmount * Math.pow(10, 2)) / Math.pow(10, 2);
    } else if (investment === 'Tesouro Direto pré-fixado 10%') {
      finalAmount = amount * history[historylength - 1].close;
    }
    finalAmount = Math.round(finalAmount * Math.pow(10, 2)) / Math.pow(10, 2);

    return finalAmount;
  }

  shouldDisplay() {
    return this.state.boxDisplay;
  }

  render() {
    const { history, investment, amount, period } = this.props;
    const ChartActive = history;

    if (ChartActive.length > 0) {
      return (
        <div className="flex-container">
          <Chart
            data={history.map(this.getClosingPrice, this)}
            labels={history.map(this.getTime)}
            type={investment}
            amount={amount}
            period={period}
            onChartClick={this.onChartClick}
          />
          {this.shouldDisplay() ? (
            <Box
              amount={amount}
              investment={investment}
              period={period}
              finalamount={this.getFinalAmount()}
            />
          ) : null}
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps({ amount, history, investment, period }) {
  return { amount, history, investment, period };
}

export default connect(mapStateToProps)(InvestmentChart);
