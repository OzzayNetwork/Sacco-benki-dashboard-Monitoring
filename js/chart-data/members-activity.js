Highcharts.chart('members-activity', {
    chart: {
        backgroundColor: 'transparent',
        type: 'spline'
    },
    title: {
        text: 'Member Activity Summary',
		style: {
            color: '#12263f'
        }
    },
    subtitle: {
        text: 'Comparisons between member exits and entry.',
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
            text: 'Members Number',
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
            '<td style="padding:0"><b> {point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        spline: {
            marker: {
                enabled: false
            }
        }
    },
    series: [
        {
        name: 'Exits',
        color: '#FC1808',
        data: [{
                name: 'Jan',
                y :4809,
                drilldown: 'jan'
            },{
                name: 'Feb',
                y :3808,
                drilldown: 'feb'
            },{ 
                name: 'Mar',
                y :3903,
                drilldown: 'mar'
            },{
                name: 'Apr', 
                y: 4104,
                drilldown: 'apr'
            },{ 
                name: 'May',
                y:4700,
                drilldown: 'may'
            },{ 
                name: 'Jun',
                y:4803,
                drilldown: 'jun'
            },{ 
                name: 'Jul',
                y:5900,
                drilldown: 'jul'
            },{ 
                name: 'Aug',
                y:5906,
                drilldown: 'aug'
            },{ 
                name: 'Sep',
                y:5204,
                drilldown: 'sep'
            },{ 
                name: 'Oct',
                y:6502,
                drilldown: 'oct'
            },{ 
                name: 'Nov',
                y:5903,
                drilldown: 'nov',
            },{ 
                name: 'Dec',
                y:5102,
                drilldown: 'dec'
            }]

    },{
        name: 'Entry',
        color: '#09AF00',
        data: [
            {
                name: 'Jan',
                y:4909,
                drilldown: 'jan'
            },{ 
                name: 'Feb',
                y:7105,
                drilldown: 'feb'
            },{ 
                name: 'Mar',
                y:10604,
                drilldown: 'mar'
            },{ 
                name: 'Apr',
                y:12902,
                drilldown: 'apr'
            },{ 
                name: 'May',
                y:14400,
                drilldown: 'may'
            },{ 
                name: 'Jun',
                y:17600,
                drilldown: 'jun'
            },{ 
                name: 'Jul',
                y:13506,
                drilldown: 'jul'
            },{ 
                name: 'Aug',
                y:14805,
                drilldown: 'aug'
            },{ 
                name: 'Sep',
                y:21604,
                drilldown: 'sep'
            },{ 
                name: 'Oct',
                y:19401,
                drilldown: 'oct'
            },{ 
                name: 'Nov',
                y:9506,
                drilldown: 'nov'
            },{ 
                name: 'Dec',
                y:5404,
                drilldown: 'dec'
            }]

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