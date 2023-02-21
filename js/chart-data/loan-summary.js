// Make monochrome colors
var pieColors = ['#09AF00', '#1aadce', '#808080', '#FFFF00', '#FC1808'];

// Create the chart
Highcharts.chart('loanSummary', {
  chart: {
      type: 'pie',
      backgroundColor: 'transparent'
  },
  title: {
      text: 'Loaning summary statuses'
  },
  

  accessibility: {
      announceNewData: {
          enabled: true
      },
      /* point: {
          valueSuffix: '%'
      } */
  },

  plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        startAngle: 90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '75%'
    },
      series: {
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
      }
  },

  tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>KES {point.y:,.0f}</b> of total<br/>'
  },

  series: [
      {
          name: "Loan Statuses",
          innerSize: '50%',
          colorByPoint: true,
          data: [
              {
                  name: "Perfornming",
                  y: 2335895,
                  drilldown: "performing"
              },
              {
                  name: "Watch",
                  y: 1045643,
                  drilldown: "watch"
              },
              {
                  name: "Sudstandard",
                  y: 4561223,
                  drilldown: "substandard"
              },
              {
                  name: "Doubtful",
                  y: 2315312,
                  drilldown: "doubtful"
              },
              {
                  name: "Loss",
                  y: 1235684,
                  drilldown: "loss"
              },
              
          ]
      }
  ],
  drilldown: {
      series: [
          {
              name: "Performing Loans",
              id: "performing",
              data: [
                  [
                      "Wezesha",
                      3123
                  ],
                  [
                      "Boresha",
                      45643
                  ],
                  [
                      "Mortgage Loan",
                      45623
                  ],
                  [
                      "Boresha",
                      52365
                  ],
                  [
                      "Elimu Loan",
                      4526
                  ],
                  [
                      "Car Loan",
                      12365
                  ],
                 
              ]
          },
          {
              name: "Watch",
              id: "watch",
              data: [
                  [
                      "Wezesha",
                      3123
                  ],
                  [
                      "Boresha",
                      45643
                  ],
                  [
                      "Mortgage Loan",
                      45623
                  ],
                  [
                      "Boresha",
                      52365
                  ],
                  [
                      "Elimu Loan",
                      4526
                  ],
                  [
                      "Car Loan",
                      12365
                  ],
                 
              ]
          },
          {
              name: "substandard",
              id: "substandard",
              data: [
                  [
                      "Wezesha",
                      3123
                  ],
                  [
                      "Boresha",
                      45643
                  ],
                  [
                      "Mortgage Loan",
                      45623
                  ],
                  [
                      "Boresha",
                      52365
                  ],
                  [
                      "Elimu Loan",
                      4526
                  ],
                  [
                      "Car Loan",
                      12365
                  ],
                 
              ]
          },
          {
              name: "Doubtful",
              id: "doubtful",
               data: [
                  [
                      "Wezesha",
                      3123
                  ],
                  [
                      "Boresha",
                      45643
                  ],
                  [
                      "Mortgage Loan",
                      45623
                  ],
                  [
                      "Boresha",
                      52365
                  ],
                  [
                      "Elimu Loan",
                      4526
                  ],
                  [
                      "Car Loan",
                      12365
                  ],
                 
              ]
          },
          {
              name: "Loss",
              id: "loss",
               data: [
                  [
                      "Wezesha",
                      3123
                  ],
                  [
                      "Boresha",
                      45643
                  ],
                  [
                      "Mortgage Loan",
                      45623
                  ],
                  [
                      "Boresha",
                      52365
                  ],
                  [
                      "Elimu Loan",
                      4526
                  ],
                  [
                      "Car Loan",
                      12365
                  ],
                 
              ]
          },
          {
              name: "Opera",
              id: "Opera",
              data: [
                  [
                      "v50.0",
                      0.96
                  ],
                  [
                      "v49.0",
                      0.82
                  ],
                  [
                      "v12.1",
                      0.14
                  ]
              ]
          }
      ]
  }
});