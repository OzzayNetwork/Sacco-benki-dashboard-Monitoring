Highcharts.chart('transaction-activity', {
    chart: {
        backgroundColor: 'transparent',
        type: 'column'
    },
    title: {
        text: 'Transaction Summary',
		style: {
            color: '#12263f'
        }
    },
    subtitle: {
        text: 'Comparisons between deposits & withdrawals',
		style: {
            color: '#12263f'
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
            text: 'Cash in KES',
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
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>KES {point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
        name: 'Withdrawals',
        color: '#FC1808',
        data: [{
            name: "Jan",
            y: 20000,
            drilldown: "january"
        },
        {
            name: "Feb",
            y: 3000,
            drilldown: "february"
        },
        {
            name: "Mar",
            y: 25300,
            drilldown: "march"
        },
        {
            name: "Apr",
            y: 32023,
            drilldown: "april"
        },
        {
            name: "May",
            y: 22295,
            drilldown: "may"
        },
        {
            name: "Jun",
            y: 19595,
            drilldown: "june"
        },
        {
            name: "jul",
            y: 23587,
            drilldown: "july"
        },
        {
            name: "Aug",
            y: 27589,
            drilldown: "august"
        },
        {
            name: "Sep",
            y: 35263,
            drilldown: "september"
        },
        {
            name: "Oct",
            y: 26956,
            drilldown: "october"
        },
        {
            name: "Nov",
            y: 32596,
            drilldown: "november"
        },
        {
            name: "Dec",
            y: 32968,
            drilldown: 'dec'
        }
    ]
    },{
        name: 'Deposits',
        color: '#09AF00',
        data: [{
            name: "Jan",
            y: 200000,
            drilldown: "january"
        },
        {
            name: "Feb",
            y: 30000,
            drilldown: "february"
        },
        {
            name: "Mar",
            y: 253600,
            drilldown: "march"
        },
        {
            name: "Apr",
            y: 325023,
            drilldown: "april"
        },
        {
            name: "May",
            y: 225895,
            drilldown: "may"
        },
        {
            name: "Jun",
            y: 156895,
            drilldown: "june"
        },
        {
            name: "jul",
            y: 256987,
            drilldown: "july"
        },
        {
            name: "Aug",
            y: 258956,
            drilldown: "august"
        },
        {
            name: "Sep",
            y: 369263,
            drilldown: "september"
        },
        {
            name: "Oct",
            y: 258956,
            drilldown: "october"
        },
        {
            name: "Nov",
            y: 358596,
            drilldown: "november"
        },
        {
            name: "Dec",
            y: 356968,
            drilldown: 'dec'
        }
    ]
    }],
    drilldown: {
        series: [{
            name: 'December 2020',
            id: 'dec',
            data: [{
                    name: '1st',
                    y: 2200,
                    drilldown: 'dec1'
                },
                {
                    name: '2nd',
                    y: 2200,
                    drilldown: 'dec2'
                },
                {
                    name: '3rd',
                    y: 22400,
                    drilldown: 'dec3'
                },
                {
                    name: '4th',
                    y: 20200,
                    drilldown: 'dec3'
                },
                {
                    name: '5th',
                    y: 27200,
                    drilldown: 'dec5'
                },
                {
                    name: '6th',
                    y: 17200,
                    drilldown: 'dec6'
                }, {
                    name: '7th',
                    y: 12200,
                    drilldown: 'dec6'
                }, {
                    name: '8th',
                    y: 17200,
                    drilldown: 'dec8'
                }, {
                    name: '9th',
                    y: 10500,
                    drilldown: 'dec9'
                }, {
                    name: '10th',
                    y: 27200,
                    drilldown: 'dec10'
                }, {
                    name: '11th',
                    y: 27200,
                    drilldown: 'dec11'
                }, {
                    name: '12th',
                    y: 57200,
                    drilldown: 'dec12'
                }, {
                    name: '13th',
                    y: 72000,
                    drilldown: 'dec13'
                }, {
                    name: '13th',
                    y: 29200,
                    drilldown: 'dec13'
                }, {
                    name: '14th',
                    y: 47200,
                    drilldown: 'dec14'
                }, {
                    name: '15th',
                    y: 27200,
                    drilldown: 'dec15'
                }, {
                    name: '16th',
                    y: 39400,
                    drilldown: 'dec16'
                }, {
                    name: '17th',
                    y: 2700,
                    drilldown: 'dec17'
                }, {
                    name: '18th',
                    y: 37200,
                    drilldown: 'dec18'
                }, {
                    name: '19th',
                    y: 52400,
                    drilldown: 'dec19'
                }, {
                    name: '20th',
                    y: 56400,
                    drilldown: 'dec20'
                }, {
                    name: '21st',
                    y: 27200,
                    drilldown: 'dec21'
                }, {
                    name: '22nd',
                    y: 2200,
                    drilldown: 'dec22'
                }, {
                    name: '23rd',
                    y: 27200,
                    drilldown: 'dec23'
                }, {
                    name: '24th',
                    y: 27200,
                    drilldown: 'dec24'
                }, {
                    name: '25th',
                    y: 17200,
                    drilldown: 'dec25'
                }, {
                    name: '26th',
                    y: 27200,
                    drilldown: 'dec26'
                }, {
                    name: '27th',
                    y: 27200,
                    drilldown: 'dec27'
                }, {
                    name: '28th',
                    y: 45200,
                    drilldown: 'dec28'
                }, {
                    name: '29th',
                    y: 45800,
                    drilldown: 'dec29'
                }, {
                    name: '30th',
                    y: 22600,
                    drilldown: 'dec30'
                }, {
                    name: '31st',
                    y: 15200,
                    drilldown: 'dec31'
                }
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