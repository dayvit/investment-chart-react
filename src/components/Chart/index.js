import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './style.css';

export default class Chart extends Component {
  returnData(data, labels, type) {
    let plotData;
    if (type === 'Tesouro Direto pré-fixado 10%') {
      plotData = {
        labels,
        datasets: [
          {
            label: 'Tesouro Direto p.f. 10% a/a',
            fill: false,
            lineTension: 0.6,
            backgroundColor: 'rgba(48, 63, 159, 1)',
            borderColor: 'rgba(48, 63, 159, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(48, 63, 159, 1)',
            pointBackgroundColor: 'rgba(48, 63, 159, 1)',
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(48, 63, 159, 1)',
            pointHoverBorderColor: 'rgba(48, 63, 159, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data,
          },
        ],
      };
    } else if (type === 'Bitcoin') {
      plotData = {
        labels,
        datasets: [
          {
            label: 'Bitcoin',
            fill: false,
            lineTension: 0.6,
            backgroundColor: 'rgba(247, 220, 111, 1)',
            borderColor: 'rgba(245, 176, 65, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(247, 220, 111, 1)',
            pointBackgroundColor: 'rgba(245, 176, 65, 1)',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(247, 220, 111, 1)',
            pointHoverBorderColor: 'rgba(245, 176, 65, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data,
          },
        ],
      };
    }
    return plotData;
  }

  render() {
    const { data, labels, type } = this.props;

    return (
      <div onClick={this.props.onChartClick} className="chart">
        <div className="alert alert-info">
          <strong>Clique no gráfico para mais detalhes.</strong>
        </div>

        <h2>{type}</h2>
        <Line data={this.returnData(data, labels, type)} />
      </div>
    );
  }
}
