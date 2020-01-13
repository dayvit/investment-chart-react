import React, { Component } from 'react';
import Submit from '../../resources/Submit';
import './style.css';

export default class Box extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }

  getOtherInvestment(type) {
    if (type === 'Bitcoin') {
      return 'Tesouro Direto pré-fixado 10%';
    }
    return 'Bitcoin';
  }

  getFinalReturn(initial, final) {
    const finalReturn = final - initial;
    const prettyReturn =
      Math.round(finalReturn * Math.pow(10, 2)) / Math.pow(10, 2);

    return prettyReturn;
  }

  getPeriodString() {
    const { period } = this.props;
    if (period === '1') {
      return '1 ano';
    }
    return `${period} anos`;
  }

  render() {
    const { investment, period, amount, finalamount } = this.props;

    return (
      <div className="box" ref={node => (this.node = node)}>
        <h2 className="box__title">Seu investimento em {investment}</h2>

        <ul className="box__text">
          <li>
            Inicial: R${' '}
            <strong>
              {amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </strong>
          </li>
          <li>
            Final: R${' '}
            <strong>
              {finalamount.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
              })}
            </strong>
          </li>
          <li>
            Período: <strong>{this.getPeriodString()}</strong>
          </li>
          <li>
            Rendimento total: R${' '}
            <strong>
              {this.getFinalReturn(amount, finalamount).toLocaleString(
                'pt-BR',
                {
                  minimumFractionDigits: 2,
                }
              )}
            </strong>
          </li>
          <li>
            <Submit
              amount={amount}
              date={period}
              type={this.getOtherInvestment(investment)}
              label={
                this.getOtherInvestment(investment) === 'Bitcoin'
                  ? 'Bitcoin'
                  : 'Tesouro'
              }
            />
          </li>
        </ul>
      </div>
    );
  }
}
