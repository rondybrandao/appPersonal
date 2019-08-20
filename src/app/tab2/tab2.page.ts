import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit {
  @ViewChild('chartLineAvaliacaoFisica') chartLineAvaliacaoFisica
  @ViewChild('chartLineTorax') chartLineTorax
  @ViewChild('chartLineInferiores') chartLineInferiores
  @ViewChild('chartRadar') chartRadar
  @ViewChild('chartBarTMBXV') chartBarTMBXV


  chartAvaliacao: any
  lineTorax: any
  lineInferiores: any
  radarChart
  barChartTMBXV

  constructor() {}

  ngAfterViewInit(): void {
    //this.showLineChartAvaliacaoFisica()
    this.showLineTorax()
    this.showLineInferiores()
    this.showChartRadar()
    this.showBarChartTMBXV()
  }

  showLineChartAvaliacaoFisica() {
    
		this.chartAvaliacao = new Chart(this.chartLineAvaliacaoFisica.nativeElement, {
			type: 'line',
			data: {
				datasets: [{
					label: 'ombros',
					backgroundColor: 'rgba(231, 83, 50, 1.0)',
					borderColor: 'rgba(255, 25, 0, 0.1)',
					data: [10, 20, 30, 40, 50],
					type: 'line',
					pointRadius: 1,
					fill: false,
					lineTension: 1,
					borderWidth: 2
				}]
			},
			options: {
				scales: {
					xAxes: [{
						//type: 'time',
						//distribution: 'series',
						// ticks: {
						// 	source: ['jan', 'fev', 'mar', 'abr', 'mai'],
						// 	autoSkip: true
						// }
					}],
					yAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'Perimetro (cm)'
						}
					}]
				},
				tooltips: {
					intersect: false,
					mode: 'index',
					callbacks: {
						label: function(tooltipItem, myData) {
							var label = myData.datasets[tooltipItem.datasetIndex].label || '';
							if (label) {
								label += ': ';
							}
							label += parseFloat(tooltipItem.value).toFixed(2);
							return label;
						}
					}
				}
			}
		});
  }

  //chart line torax
  showLineTorax(){
    this.lineTorax = new Chart(this.chartLineTorax.nativeElement, {
 
      type: 'line',
      data: {
          labels: ['29/01', '30/02', '31/03', '01/04', '02/05', '03/06'],
          //labels: this.datas,
          datasets: [
            {
              label: "Ombros",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(102,0,153,1)",
              borderColor: "rgba(102,0,153,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(102,0,153,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(102,0,153,1)",
              pointHoverBorderColor: "rgba(102,0,153,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              //data: this.arrayTristeza,
              data: [92.5, 94.0, 92.0, 94.0, 93.5, 96.0],
              spanGaps: false,
          },

              {
                  label: "Torax",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(35,132,122,2)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  //data: this.arrayTristeza,
                  data: [90.1, 91.5, 92.8, 93, 94, 92.5],
                  spanGaps: false,
              },
              {
                label: "Cintura",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(255,0,0,1)",
                borderColor: "rgba(255,0,0,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(255,0,0,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(255,0,0,1)",
                pointHoverBorderColor: "rgba(255,0,0,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                //data: this.arrayTristeza,
                data: [68.5, 65.0, 65.0, 66.0, 67.5, 67.0],
                spanGaps: false,
            },
            {
              label: "Abdominal",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(255,102,0,1)",
              borderColor: "rgba(255,102,0,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(255,102,0,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(255,102,0,1)",
              pointHoverBorderColor: "rgba(255,102,0,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              //data: this.arrayTristeza,
              data: [75.5, 77.5, 78.5, 75.0, 77.5, 78.5],
              spanGaps: false,
          },
          {
            label: "Quadril",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,51,204,1)",
            borderColor: "rgba(255,51,204,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255,51,204,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,51,204,1)",
            pointHoverBorderColor: "rgba(255,51,204,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            //data: this.arrayTristeza,
            data: [94.5, 94.0, 94.0, 95.0, 95.5, 96.0],
            spanGaps: false,
        },
          ]
      },
      options: {
				scales: {
					xAxes: [{
	
						ticks: {
							source: 'labels'
						}
					}],
					yAxes: [{
						ticks: {
							userCallback: function(tick) {
								return tick.toString() + 'cm';
							}
						},

					}]
				}
			}

  });
}

showLineInferiores(){
  this.lineInferiores = new Chart(this.chartLineInferiores.nativeElement, {

    type: 'line',
    data: {
        labels: ['29/01', '30/02', '31/03', '01/04', '02/05', '03/06'],
        //labels: this.datas,
        datasets: [
          {
            label: "Coxa Superior",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(102,0,153,1)",
            borderColor: "rgba(102,0,153,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(102,0,153,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(102,0,153,1)",
            pointHoverBorderColor: "rgba(102,0,153,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            //data: this.arrayTristeza,
            data: [92.5, 94.0, 92.0, 94.0, 93.5, 96.0],
            spanGaps: false,
          },

            {
                label: "Coxa Medial",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(35,132,122,2)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                //data: this.arrayTristeza,
                data: [90.1, 91.5, 92.8, 93, 94, 92.5],
                spanGaps: false,
            },
            {
              label: "Coxa Inferior",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(255,0,0,1)",
              borderColor: "rgba(255,0,0,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(255,0,0,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(255,0,0,1)",
              pointHoverBorderColor: "rgba(255,0,0,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              //data: this.arrayTristeza,
              data: [68.5, 65.0, 65.0, 66.0, 67.5, 67.0],
              spanGaps: false,
          },
          {
            label: "Pernas",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,102,0,1)",
            borderColor: "rgba(255,102,0,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255,102,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(255,102,0,1)",
            pointHoverBorderColor: "rgba(255,102,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            //data: this.arrayTristeza,
            data: [75.5, 77.5, 78.5, 75.0, 77.5, 78.5],
            spanGaps: false,
          },
        ]
    },
    options: {
      scales: {
        xAxes: [{

          ticks: {
            source: 'labels'
          }
        }],
        yAxes: [{
          ticks: {
            userCallback: function(tick) {
              return tick.toString() + 'cm';
            }
          },

        }]
      }
    }

  });
  }
  //ordem das variaveis no data, data['Peitoral', 'Braços', 'Abdomen', 'Pernas', 'Gluteos', 'Cardio']
  showChartRadar(){
    const data = {
      labels: ['Peitoral', 'Braços', 'Abdomen', 'Pernas', 'Gluteos', 'Cardio' ],
      datasets: [{
        backgroundColor: 'rgba(0,51,255,0.2)',
        borderColor: 'rgba(0,51,255,0.2)',
        data: [27, 13, 15, 20, 22, 10],
        label: 'jan'
      }, {
        backgroundColor: 'rgba(204,0,0,0.2)',
        borderColor: 'rgba(204,0,0,0.2)',
        data:  [30, 10, 20, 15, 22, 18],
        //hidden: true,
        label: 'fev',
        fill: 'fev'
      }, {
        backgroundColor: 'rgba(204,0,0,0.2)',
        borderColor: 'rgba(204,0,0,0.2)',
        data: [32, 8, 15, 20, 20, 20],
        label: 'mar',
        fill: 1
      }, {
        backgroundColor: 'rgba(153,255,255,1)',
        borderColor: 'rgba(153,255,255,1)',
        data: [27, 13, 20, 20, 10, 10],
        label: 'abr',
        fill: '-1'
      }]
    };
    const options = {
      maintainAspectRatio: true,
      spanGaps: false,
      elements: {
        line: {
          tension: 0.000001
        }
      },
      plugins: {
        filler: {
          propagate: false
        },
        'samples-filler-analyser': {
          target: 'chart-analyser'
        }
      }
    };
    this.radarChart = new Chart(this.chartRadar.nativeElement, {
      type: 'radar',
      data: data,
      options: options
    });
  }

  showBarChartTMBXV(){
    var MONTHS = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
		var horizontalBarChartData = {
			labels: ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho'],
			datasets: [{
				label: 'TMB (kcal)',
				backgroundColor: 'rgba(182, 46, 235, 1.0)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
				data: [1256, 1260, 1265, 1262, 1271, 1265]
      }
    ]
		};
		this.barChartTMBXV = new Chart(this.chartBarTMBXV.nativeElement, {
				type: 'bar',
				data: horizontalBarChartData,
				options: {
					// Elements options apply to all of the options unless overridden in a dataset
					// In this case, we are setting the border of each horizontal bar to be 2px wide
					elements: {
						rectangle: {
							borderWidth: 2,
						}
					},
					responsive: true,
					legend: {
						position: 'top',
					},
					title: {
						display: false,
						//text: 'Predias x Materiais '
					}
				}
			});
    };
  

}
