 // Create the chart
//Highcharts.setOptions({
//    colors: ['#f26b2cf2']
//});
Highcharts.chart('all-loans', {
    chart: {
        backgroundColor: 'transparent',
        type: 'column'
    },
    title: {
        text: 'Gross profit collected by the Months',
        style: {
            color: '#12263f'
        }
    },

    accessibility: {
        announceNewData: {
            enabled: true
        }
    },

    plotOptions: {
        series: {
            borderWidth: 0,
            borderColor: '#f26b2cf2',
            animation: {
                duration: 2000
            }
        }
    },

    

    xAxis: {
        crosshair: true,
        type: 'category',
        lineColor: '#12263f',
        lineWidth: 1,
        labels: {
            style: {
                color: '#12263f'
            }
        }
    },
    yAxis: {

        gridLineColor: '#95aac9',
        gridLineDashStyle: 'ShortDot',
        gridLineWidth: 0.3,
        min: 0,

        title: {
            text: 'Gross Profit In KES',
            labels: {
                style: {
                    color: '#12263f'
                }
            }
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: '#12263f'
            }
        }

    },
    legend: {
        enabled: true,
        backgroundColor: 'transparent',
		 color: '#12263f',
		  itemStyle: {
//                 fontSize:'35px',
//                 font: '35pt Trebuchet MS, Verdana, sans-serif',
                 color: '#12263f'
              },
              itemHoverStyle: {
                 color: 'white'
              },
              itemHiddenStyle: {
                 color: '#444'
              },
        style: {
            color: '#12263f',

        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
        pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">KES {point.y}</b><br/>',
        formatter: function () {

            var point = this.point,
                s = '<span style="font-size:16px; font-weight:800;">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:{point.color}>' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + '' + '<br/></p>';
            if (point.drilldown) {
                s += '<p><br/> Click to view <b>' + point.name + '</b> Collections </p>';
            }
            return s;
        },
        crosshairs: true


    },
    lang: {
        thousandsSep: ','
    },

    series: [{
        animation: {
            duration: 5000,
            // Uses Math.easeOutBounce
            easing: 'easeOutBounce'
        },
        name: "Monthly Transactions",
        colorByPoint: false,
		color: '#f26b2cf2', // blue
        data: [{
                name: "Jan",
                y: 2000000,
                drilldown: "january"
            },
            {
                name: "Feb",
                y: 300000,
                drilldown: "february"
            },
            {
                name: "Mar",
                y: 2536000,
                drilldown: "march"
            },
            {
                name: "Apr",
                y: 3258023,
                drilldown: "april"
            },
            {
                name: "May",
                y: 2225895,
                drilldown: "may"
            },
            {
                name: "Jun",
                y: 1956895,
                drilldown: "june"
            },
            {
                name: "jul",
                y: 2356987,
                drilldown: "july"
            },
            {
                name: "Aug",
                y: 2758956,
                drilldown: "august"
            },
            {
                name: "Sep",
                y: 3569263,
                drilldown: "september"
            },
            {
                name: "Oct",
                y: 2658956,
                drilldown: "october"
            },
            {
                name: "Nov",
                y: 3258596,
                drilldown: "november"
            },
            {
                name: "Dec",
                y: 3256968,
                drilldown: "dec"
            }
        ]
    }],
    drilldown: {
        series: [{
            name: 'December 2020',
            id: 'dec',
            data: [{
                    name: '1st',
                    y: 22,
                    drilldown: 'dec1'
                },
                {
                    name: '2nd',
                    y: 22,
                    drilldown: 'dec2'
                },
                {
                    name: '3rd',
                    y: 224,
                    drilldown: 'dec3'
                },
                {
                    name: '4th',
                    y: 202,
                    drilldown: 'dec3'
                },
                {
                    name: '5th',
                    y: 272,
                    drilldown: 'dec5'
                },
                {
                    name: '6th',
                    y: 172,
                    drilldown: 'dec6'
                }, {
                    name: '7th',
                    y: 122,
                    drilldown: 'dec6'
                }, {
                    name: '8th',
                    y: 172,
                    drilldown: 'dec8'
                }, {
                    name: '9th',
                    y: 105,
                    drilldown: 'dec9'
                }, {
                    name: '10th',
                    y: 272,
                    drilldown: 'dec10'
                }, {
                    name: '11th',
                    y: 272,
                    drilldown: 'dec11'
                }, {
                    name: '12th',
                    y: 572,
                    drilldown: 'dec12'
                }, {
                    name: '13th',
                    y: 72,
                    drilldown: 'dec13'
                }, {
                    name: '13th',
                    y: 292,
                    drilldown: 'dec13'
                }, {
                    name: '14th',
                    y: 472,
                    drilldown: 'dec14'
                }, {
                    name: '15th',
                    y: 272,
                    drilldown: 'dec15'
                }, {
                    name: '16th',
                    y: 394,
                    drilldown: 'dec16'
                }, {
                    name: '17th',
                    y: 27,
                    drilldown: 'dec17'
                }, {
                    name: '18th',
                    y: 372,
                    drilldown: 'dec18'
                }, {
                    name: '19th',
                    y: 524,
                    drilldown: 'dec19'
                }, {
                    name: '20th',
                    y: 564,
                    drilldown: 'dec20'
                }, {
                    name: '21st',
                    y: 272,
                    drilldown: 'dec21'
                }, {
                    name: '22nd',
                    y: 22,
                    drilldown: 'dec22'
                }, {
                    name: '23rd',
                    y: 272,
                    drilldown: 'dec23'
                }, {
                    name: '24th',
                    y: 272,
                    drilldown: 'dec24'
                }, {
                    name: '25th',
                    y: 172,
                    drilldown: 'dec25'
                }, {
                    name: '26th',
                    y: 272,
                    drilldown: 'dec26'
                }, {
                    name: '27th',
                    y: 272,
                    drilldown: 'dec27'
                }, {
                    name: '28th',
                    y: 452,
                    drilldown: 'dec28'
                }, {
                    name: '29th',
                    y: 458,
                    drilldown: 'dec29'
                }, {
                    name: '30th',
                    y: 226,
                    drilldown: 'dec30'
                }, {
                    name: '31st',
                    y: 152,
                    drilldown: 'dec31'
                }
            ]
        }, {
            name: 'Chrome',
            id: 'Chrome',
            data: [
                ['v40.0', 5],
                ['v50.0', 7],
                ['v60.0', 8],
                ['v70.0', 17],
                ['v80.0', 37],
                ['v89.0', 27]
            ]
        }, {
            name: '3rd December 2020',
            id: 'dec3',
			type: 'spline',
            data: [
                ['12AM', 17.2],
                ['1AM', 25.2],
                ['2AM', 25.2],
                ['3AM', 5],
                ['4AM', 7],
                ['5AM', 8],
                ['6AM', 17],
                ['7AM', 37],
                ['8AM', 27],
                ['9AM', 17.2],
                ['10AM', 25.2],
                ['11AM', 5],
                ['12PM', 7],
                ['1PM', 8],
                ['2PM', 17],
                ['3PM', 37],
                ['4PM', 27],
                ['5PM', 27],
                ['5PM', 8],
                ['6PM', 17],
                ['7PM', 37],
                ['8PM', 27],
                ['9PM', 17.2],
                ['10PM', 25.2],
                ['11PM', 5],
            ]
        }]
    }
});
