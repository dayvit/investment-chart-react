import React, { Component } from 'react';

import Submit from '../Submit';

import './style.css';

export default class InvestmentChoices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investmentDate: '1',
      investmentType: 'Tesouro Direto pré-fixado 10%',
      investmentAmount: '2000',
    };
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
  }

  onTypeChange(event) {
    this.setState({ investmentType: event.target.value });
  }

  onDateChange(event) {
    this.setState({ investmentDate: event.target.value });
  }

  onAmountChange(event) {
    this.setState({ investmentAmount: event.target.value });
  }

  render() {
    const { investmentType, investmentDate, investmentAmount } = this.state;

    return (
      <div className="form">
        <label htmlFor="type" className="form__label">
          Escolha um tipo de investimento:{' '}
        </label>
        <select
          className="custom-select form__select col-8 col-sm-3"
          id="type"
          onChange={this.onTypeChange}
        >
          <option value="Tesouro Direto pré-fixado 10%">
            Tesouro Direto pré-fixado 10%
          </option>
          <option value="Bitcoin">Bitcoin</option>
        </select>

        <label htmlFor="date" className="form__label">
          Duração do investimento:{' '}
        </label>
        <select
          className="custom-select form__select col-8 col-sm-3"
          id="date"
          onChange={this.onDateChange}
        >
          <option value="1">1 ano</option>
          <option value="2">2 anos</option>
        </select>

        <label htmlFor="amount" className="form__label">
          Volume do aporte inicial (em R$):{' '}
        </label>
        <select
          className="custom-select form__select col-8 col-sm-3"
          id="amount"
          onChange={this.onAmountChange}
        >
          <option value="2000">R$2 mil</option>
          <option value="10000">R$10 mil</option>
        </select>

        <Submit
          type={investmentType}
          date={investmentDate}
          amount={investmentAmount}
          label="Simular Investimento"
        />
      </div>
    );
  }
}
