Highcharts.chart('revenue-stream', {
    chart: {
        type: 'column',
		backgroundColor: 'transparent'
    },
    title: {
        text: "Today's Parking collection Against time",
		style:{
			color: '#a5a8ad'
		}
    },
    xAxis: {
        categories: ['12AM-1AM', '1AM-2AM', '2AM-3AM', '3AM-4AM', '4AM-5AM', '5AM-6AM', '6AM-7AM', '7AM-8AM', '8AM-9AM', '9AM-10AM', '10AM-11AM', '11AM-12PM', '12PM-1PM', '1PM-2PM', '2PM-3PM', '3PM-4PM', '4PM-5PM', '5PM-6PM', '6PM-7PM', '7PM-8PM', '8PM-9PM', '9PM-10PM', '10PM-11PM', '11PM-12AM']
    },
     yAxis: {
        gridLineColor: '#197F07',
        gridLineWidth: 0.3,
        min: 0,
        title: {
            text: 'Total revenue collected'
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
               color: '#a5a8ad'
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderColor: '#CCC',
        borderWidth: 1,
        itemStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
    },
    legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0,
            bottom: 200,
			backgroundColor:'transparent',
			borderColor: '#CCC',
			borderWidth: 1,
			itemStyle: {
            color: 'white',
			font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: 'white',
			font: '600 10px "Muli", sans-serif'
        },
        },
   tooltip:{
			borderRadius	: 2,
       pointFormat: '{point.y:,.0f}',
		    borderWidth		: 1,
		    borderColor		: '#999',
			shadow			: false,
		    shared			: true,
		    useHTML			: true,
			yDecimals		: 0,
            valueDecimals	: 0,
            headerFormat	: 
                 '<table class="tip text-white"><caption style="font-weight:bold; text-align:left; color:white">{point.key}</caption>'
                +'<tbody>', 
            pointFormat		: 
                  '<tr><th style="color: {series.color}">{series.name}: </th>'
            	+ '<td style="text-align: right">KES {point.y}</td></tr>',
            footerFormat	: 
                 '<tr style="border-top:1px solid black 0.5px; color:white;"><th>Total: </th>'
        		+'<td style="text-align:right"><b>KES {point.total:,.0f}</b></td></tr>'
            	+'</tbody></table>'
        },
         pointFormat: '{point.y:,.0f}',

    plotOptions: {
        column: {
            stacking: 'normal',
            grouping: false,
            dataLabels: {
                enabled: false
            },
            states: {
                hover: {
                    enabled: false
                }
            },
            point: {
                events: {
                    mouseOver: updateStackColor(0.2),
                    mouseOut: updateStackColor(0)
                }
            }

        },
        series: {
            //connectNulls: true

            pointWidth: 10,
            borderWidth: 0,
            borderColor: 'black',


        },
    },
    series: [{
        name: 'Onstreet Parking',
        data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2]
    }, {
        name: 'Offstreet Parking',
        data: [2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1]
    }, {
        name: 'Parking Penalties',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5]
    }, {
        name: 'Fleet Fix',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5]
    }, {
        name: 'Seasonal Parking',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5]
    }]
});


//===================================================================================
//***** Anual collections with breakdown from months to daily *****//
//===================================================================================

$(function() {
  // Create the chart
  $('#revenuestream-annual').highcharts({
chart: {
      type: 'column',
	backgroundColor: 'transparent',
      events: {
        drilldown: function(e) {
          var chart = this,
            drilldowns = chart.userOptions.drilldown.series,
            series = [];
          e.preventDefault();
          Highcharts.each(drilldowns, function(p, i) {
            if (p.id.includes(e.point.name)) {
              chart.addSingleSeriesAsDrilldown(e.point, p);
            }
          });
          chart.applyDrilldown();
        }
      }
    },
    title: {
      text: 'Parking revenue collection in recent months',
		style:{
			color: '#a5a8ad'
		}
    },
    
    xAxis: {
      type: 'category',
		style:{
			color: '#a5a8ad'
		}
    },
    yAxis: [{
      title: {
        text: 'Total Data Per Bulan'
      },
      stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }

    },],
     legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderColor: '#CCC',
        borderWidth: 1,
        itemStyle: {
            color: '#a5a8ad',
            font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
		 
    },
    
    plotOptions: {
      column: {
        stacking: 'normal',
        borderWidth: 0,
        dataLabels: {
          enabled: false,
          format: '{point.y:1f}',
        }
      }
    },

      tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:2f} TON</b> of total<br/>'
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

    series: [{
      name: 'Monthly Collections',
      colorByPoint: false,
		 color: '#67ff6b',
      data: [{
        name: 'Jan',
        y: 5633,
        drilldown: 'Jan'
      }, {
        name: 'Feb',
        y: 2403,
        drilldown: 'Feb'
      },{
        name: 'Mar',
        y: 4564,
        drilldown: 'Mar'
      },{
        name: 'Apr',
        y: 2403,
        drilldown: 'Apr'
      },{
        name: 'May',
        y: 2503,
        drilldown: 'May'
      },{
        name: 'Jun',
        y: 2203,
        drilldown: 'Jun'
      },{
        name: 'Jul',
        y: 2483,
        drilldown: 'Jul'
      },{
        name: 'Aug',
        y: 5203,
        drilldown: 'Aug'
      },{
        name: 'Sep',
        y: 2356,
        drilldown: 'Sep'
      },{
        name: 'Oct',
        y: 5895,
        drilldown: 'Oct'
      },{
        name: 'Nov',
        y: 2263,
        drilldown: 'Nov'
      },{
        name: 'Dec',
        y: 2256,
        drilldown: 'dec'
      }]
    }],
    drilldown: {    
      series: [{
        name: 'Seasonal Parking',
        id: 'Jan',
        type: 'column',
        color: '#4deeea',
        data: [
          ['1st', 25],
          ['2nd', 17],
          ['3rd', 8],
          ['4th', 5],
          ['5th', 3],
        ]
      }, {
        name: 'Daily Parking',
        id: 'Jan',
        color: '#74ee15',
        type: 'column',
        data: [
          ['1st', 50],
          ['2nd', 40],
          ['3rd', 60],
          ['4th', 65],
          ['5th', 73]
        ]
      },{
        name: 'Fleetfix',
        id: 'Jan',
         color: '#ffe700',
        type: 'column',
        data: [
          ['1st', 50],
          ['2nd', 40],
          ['3rd', 60],
          ['4th', 65],
          ['5th', 73]
        ]
      },{
        name: 'Penalties',
        id: 'Jan',
         color: '#f000ff',
        type: 'column',
        data: [
          ['1st', 50],
          ['2nd', 40],
          ['3rd', 60],
          ['4th', 65],
          ['5th', 73]
        ]
      },{
        name: 'Offstreet',
        id: 'Jan',
         color: '#001eff',
        type: 'column',
        data: [
          ['1st', 50],
          ['2nd', 40],
          ['3rd', 60],
          ['4th', 65],
          ['5th', 73]
        ]
      }]
    }
  });
});



//===================================================================================
//***** Anual collections with breakdown from months to daily *****//
//===================================================================================


//===================================================================================
//***** comparison of sub revenue streams against months *****//
//===================================================================================

$(function () {

    // Create the chart
    $('#substreams').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
		lang: {
        thousandsSep: ','
    },
        title: {
            text: 'Substream revenue collections',
            style: {
                color: '#a5a8ad'
            }
        },
        yAxis: {
            gridLineColor: '#197F07',
            gridLineWidth: 0.3,
            min: 0,
            title: {
                text: 'Total revenue collected'
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: '#a5a8ad'
                }
            }
        },
        xAxis: {
            type: 'category'
        },
		
		

        legend: {
            enabled: true
        },
		
		legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderColor: '#CCC',
        borderWidth: 1,
        itemStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
    },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    style: {
                        color: 'white',
                        textShadow: '0 0 2px black, 0 0 2px black'
                    }
                },
                stacking: 'normal'
            }
        },
		
		 plotOptions: {
        column: {
            stacking: 'normal',
            grouping: false,
            dataLabels: {
                enabled: false
            },
            states: {
                hover: {
                    enabled: false
                }
            },
//            point: {
//                events: {
//                    mouseOver: updateStackColor(0.2),
//                    mouseOut: updateStackColor(0)
//                }
//            }

        },
        series: {
            //connectNulls: true

            pointWidth: 15,
            borderWidth: 0,
            borderColor: 'black',


        },
    },
		
		 tooltip: {
        headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
//		useHTML: true,
        pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">KES {point.y}</b><br/>',
        formatter: function () {

            var point = this.point,
                s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><span style="color:' + point.color + '"><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' ' + '</span>';
            if (point.drilldown) {
				s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' (' +Highcharts.numberFormat(this.percentage, 0, '.', ',') + '%)</p><br/>';
                s += '<p>Click to view <b>' + point.name + '</b> Collections </p>';
            }
            return s;
        },
        crosshairs: true


    },

        series: [{
            //national bank collections by the months
            name: 'Daily Parking',
            data: [{

                name: 'Jan',
                y: 5,
                drilldown: 'daily-jan',
                //color: '#e7c500' //yellow
            }, {
                name: 'Feb',
                y: 2,
                drilldown: 'daily-feb',
                //color: '#e7c500' //yellow
            }, {
                name: 'Mar',
                y: 4,
                drilldown: 'daily-mar',
                //color: '#e7c500' //yellow
            }, {

                name: 'Apr',
                y: 5,
                drilldown: 'daily-apr',
                //color: '#e7c500' //yellow
            }, {
                name: 'May',
                y: 2,
                drilldown: 'daily-may',
                //color: '#e7c500' //yellow
            }, {
                name: 'Jun',
                y: 4,
                drilldown: 'daily-jun',
                //color: '#e7c500' //yellow
            }, {

                name: 'Jul',
                y: 5,
                drilldown: 'daily-jul',
                //color: '#e7c500' //yellow
            }, {
                name: 'Aug',
                y: 12,
                drilldown: 'daily-aug',
                //color: '#e7c500' //yellow
            }, {
                name: 'Sep',
                y: 4,
                drilldown: 'daily-sep',
                //color: '#e7c500' //yellow
            }, {

                name: 'Oct',
                y: 15,
                drilldown: 'daily-oct',
                //color: '#e7c500' //yellow
            }, {
                name: 'Nov',
                y: 2,
                drilldown: 'daily-nov',
                //color: '#e7c500' //yellow
            }, {
                name: 'Dec',
                y: 4,
                drilldown: 'daily-dec',
                //color: '#e7c500' //yellow
            }]
            //end of parking fee collections
        }, {
            //land rate collections
            name: 'Offstreet Parking',
            data: [{
                name: 'Jan',
                y: 11,
                drilldown: 'offstreet-jan',
                //color: '#0aae8f' // blue
            }, {
                name: 'Feb',
                y: 5,
                drilldown: 'offstreet-feb',
                //color: '#0aae8f' // blue
            }, {
                name: 'Mar',
                y: 2,
                drilldown: 'offstreet-mar',
                //color: '#0aae8f' // blue
            }, {
                name: 'Apr',
                y: 1,
                drilldown: 'offstreet-apr',
                //color: '#0aae8f' // blue
            }, {
                name: 'May',
                y: 5,
                drilldown: 'offstreet-may',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jun',
                y: 21,
                drilldown: 'offstreet-jun',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jul',
                y: 11,
                drilldown: 'offstreet-jul',
                //color: '#0aae8f' // blue
            }, {
                name: 'Aug',
                y: 5,
                drilldown: 'offstreet-aug',
                //color: '#0aae8f' // blue
            }, {
                name: 'Sep',
                y: 2,
                drilldown: 'offstreet-sep',
                //color: '#0aae8f' // blue
            }, {
                name: 'Oct',
                y: 1,
                drilldown: 'offstreet-oct',
                //color: '#0aae8f' // blue
            }, {
                name: 'Nov',
                y: 5,
                drilldown: 'offstreet-nov',
                //color: '#0aae8f' // blue
            }, {
                name: 'Dec',
                y: 2,
                drilldown: 'offstreet-dec',
                //color: '#0aae8f' // blue
            }]
            //end of landrate collections
        }, {
            //SBP collections
            name: 'Seasonal Parking',
            data: [{
                name: 'Jan',
                y: 16,
                drilldown: 'seasonal-jan',
                //color: '#0aae8f' // blue
            }, {
                name: 'Feb',
                y: 15,
                drilldown: 'seasonal-feb',
                //color: '#0aae8f' // blue
            }, {
                name: 'Mar',
                y: 3,
                drilldown: 'seasonal-mar',
                //color: '#0aae8f' // blue
            }, {
                name: 'Apr',
                y: 1,
                drilldown: 'seasonal-apr',
                //color: '#0aae8f' // blue
            }, {
                name: 'May',
                y: 5,
                drilldown: 'seasonal-may',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jun',
                y: 2,
                drilldown: 'seasonal-jun',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jul',
                y: 11,
                drilldown: 'seasonal-jul',
                //color: '#0aae8f' // blue
            }, {
                name: 'Aug',
                y: 5,
                drilldown: 'seasonal-aug',
                //color: '#0aae8f' // blue
            }, {
                name: 'Sep',
                y: 2,
                drilldown: 'seasonal-sep',
                //color: '#0aae8f' // blue
            }, {
                name: 'Oct',
                y: 1,
                drilldown: 'seasonal-oct',
                //color: '#0aae8f' // blue
            }, {
                name: 'Nov',
                y: 5,
                drilldown: 'seasonal-nov',
                //color: '#0aae8f' // blue
            }, {
                name: 'Dec',
                y: 2,
                drilldown: 'seasonal-dec',
                //color: '#0aae8f' // blue
            }]
            //end of SBP collections
        },{
            //parking penalties Fees collections
            name: 'Penalties Fees',
            data: [{
                name: 'Jan',
                y: 11,
                drilldown: 'penalties-jan',
                //color: '#0aae8f' // blue
            }, {
                name: 'Feb',
                y: 15,
                drilldown: 'penalties-feb',
                //color: '#0aae8f' // blue
            }, {
                name: 'Mar',
                y: 12,
                drilldown: 'penalties-mar',
                //color: '#0aae8f' // blue
            }, {
                name: 'Apr',
                y: 19,
                drilldown: 'penalties-apr',
                //color: '#0aae8f' // blue
            }, {
                name: 'May',
                y: 15,
                drilldown: 'penalties-may',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jun',
                y: 21,
                drilldown: 'penalties-jun',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jul',
                y: 11,
                drilldown: 'penalties-jul',
                //color: '#0aae8f' // blue
            }, {
                name: 'Aug',
                y: 5,
                drilldown: 'penalties-aug',
                //color: '#0aae8f' // blue
            }, {
                name: 'Sep',
                y: 2,
                drilldown: 'penalties-sep',
                //color: '#0aae8f' // blue
            }, {
                name: 'Oct',
                y: 13,
                drilldown: 'penalties-oct',
                //color: '#0aae8f' // blue
            }, {
                name: 'Nov',
                y: 5,
                drilldown: 'penalties-nov',
                //color: '#0aae8f' // blue
            }, {
                name: 'Dec',
                y: 2,
                drilldown: 'penalties-dec',
                //color: '#0aae8f' // blue
            }]
            //end of landrate collections
        },{
            //fleet fix
            name: 'Fleet fix',
            data: [{
                name: 'Jan',
                y: 1,
                drilldown: 'fleet-jan',
                //color: '#0aae8f' // blue
            }, {
                name: 'Feb',
                y: 15,
                drilldown: 'fleet-feb',
                //color: '#0aae8f' // blue
            }, {
                name: 'Mar',
                y: 2,
                drilldown: 'fleet-mar',
                //color: '#0aae8f' // blue
            }, {
                name: 'Apr',
                y: 1,
                drilldown: 'fleet-apr',
                //color: '#0aae8f' // blue
            }, {
                name: 'May',
                y: 15,
                drilldown: 'fleet-may',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jun',
                y: 2,
                drilldown: 'fleet-jun',
                //color: '#0aae8f' // blue
            }, {
                name: 'Jul',
                y: 11,
                drilldown: 'fleet-jul',
                //color: '#0aae8f' // blue
            }, {
                name: 'Aug',
                y: 5,
                drilldown: 'fleet-aug',
                //color: '#0aae8f' // blue
            }, {
                name: 'Sep',
                y: 7,
                drilldown: 'fleet-sep',
                //color: '#0aae8f' // blue
            }, {
                name: 'Oct',
                y: 13,
                drilldown: 'fleet-oct',
                //color: '#0aae8f' // blue
            }, {
                name: 'Nov',
                y: 5,
                drilldown: 'fleet-nov',
                //color: '#0aae8f' // blue
            }, {
                name: 'Dec',
                y: 2,
                drilldown: 'fleet-dec',
                //color: '#0aae8f' // blue
            }]
            //end of landrate collections
        },],
        drilldown: {
            activeDataLabelStyle: {
                color: 'white',
                textShadow: '0 0 2px black, 0 0 2px black'
            },
            series: [
                //parking collections by months and dates
                {
                    id: 'daily-jan',
                    name: 'Daily Parking collections for January 2020',
                    data: [
                        ['1st Jan', 4],
                        ['2nd Jan', 2],
                        ['3rd Jan', 1],
                        ['4th Jan', 2],
                        ['5th Jan', 1]
                    ]
                }, {
                    id: 'daily-feb',
                    name: 'Daily Parking collections for February 2020',
                    data: [
                        ['1st Feb', 4],
                        ['2nd Feb', 2]
                    ]
                }, {
                    id: 'daily-mar',
                    name: 'Daily Parking collections for March 2020',
                    data: [
                        ['1st Mar', 4],
                        ['2nd Mar', 2],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'daily-apr',
                    name: 'Daily Parking collections for April 2020',
                    data: [
                        ['1st Apr', 4],
                        ['2nd Apr', 2],
                        ['3rd Apr', 1],
                        ['4th Apr', 2],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'daily-may',
                    name: 'Daily Parking collections for May 2020',
                    data: [
                        ['1st May', 4],
                        ['2nd May', 2]
                    ]
                }, {
                    id: 'daily-jun',
                    name: 'Daily Parking collections for June 2020',
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 2],
                        ['3rd Jun', 2]
                    ]
                }, {
                    id: 'daily-jul',
                    name: 'Daily Parking collections for July 2020',
                    data: [
                        ['1st Jul', 4],
                        ['2nd Jul', 2],
                        ['3rd Jul', 1],
                        ['4th Jul', 2],
                        ['5th Jul', 1]
                    ]
                }, {
                    id: 'daily-aug',
                    name: 'Daily Parking collections for Auust 2020',
                    data: [
                        ['1st aug', 4],
                        ['2nd aug', 2]
                    ]
                }, {
                    id: 'daily-sep',
                    name: 'Daily Parking collections for September 2020',
                    data: [
                        ['1st sep', 4],
                        ['2nd sep', 2],
                        ['3rd sep', 2]
                    ]
                }, {
                    id: 'daily-oct',
                    name: 'Daily Parking collections for October 2020',
                    data: [
                        ['1st Oct', 4],
                        ['2nd Oct', 2],
                        ['3rd Oct', 1],
                        ['4th Oct', 2],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'daily-nov',
                    name: 'Daily Parking collections for November 2020',
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 2]
                    ]
                }, {
                    id: 'daily-dec',
                    name: 'Daily Parking collections for December  2020',
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 2],
                        ['3rd Dec', 2]
                    ]
                },

                //end of parking collections by months and dates

                //start of land rates collections by months and dates
                {
                    id: 'offstreet-jan',
                    name: 'Offstreet colletions for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'offstreet-feb',
                    name: 'Offstreet colletions for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'offstreet-mar',
                    name: 'Offstreet colletions for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'offstreet-apr',
                    name: 'Offstreet colletions for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'offstreet-may',
                    name: 'Offstreet colletions for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'offstreet-jun',
                    name: 'Offstreet colletions for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'offstreet-jul',
                    name: 'Offstreet colletions for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'offstreet-aug',
                    name: 'Offstreet colletions for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'offstreet-sep',
                    name: 'Offstreet colletions for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'offstreet-oct',
                    name: 'Offstreet colletions for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'offstreet-nov',
                    name: 'Offstreet colletions for November 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'offstreet-dec',
                    name: 'Offstreet colletions for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                },
				
				//start of offstreet daily collections
				 {
                    id: 'seasonal-dec',
                    name: 'seasonal Parking collections for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                },{
                    id: 'seasonal-jan',
                    name: 'seasonal Parking collections for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'seasonal-feb',
                    name: 'seasonal Parking collections for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'seasonal-mar',
                    name: 'seasonal Parking collections for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'seasonal-apr',
                    name: 'Seasonal parking collections for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'seasonal-may',
                    name: 'seasonal Parking collections for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'seasonal-jun',
                    name: 'seasonal Parking collections for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'seasonal-jul',
                    name: 'seasonal Parking collections for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'seasonal-aug',
                    name: 'seasonal Parking collections for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'seasonal-sep',
                    name: 'seasonal Parking collections for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'seasonal-oct',
                    name: 'seasonal Parking collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                },
				{
                    id: 'seasonal-nov',
                    name: 'seasonal Parking collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                },
				//end of SBP collections
				
				//start of market fee collections
				{
                    id: 'penalties-jan',
                    name: 'Parking penalties collections for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'penalties-feb',
                    name: 'Parking penalties collections for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'penalties-mar',
                    name: 'Parking penalties collections for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'penalties-apr',
                    name: 'Parking penalties collections for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'penalties-may',
                    name: 'Parking penalties collections for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'penalties-jun',
                    name: 'Parking penalties collections for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'penalties-jul',
                    name: 'Parking penalties collections for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'penalties-aug',
                    name: 'Parking penalties collections for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'penalties-sep',
                    name: 'Parking penalties collections for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'penalties-oct',
                    name: 'Parking penalties collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'penalties-nov',
                    name: 'Parking penalties collections for November 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'penalties-dec',
                    name: 'Parking penalties collections for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                },
				
				// end of market fees
				//start of house and stall rents
				{
                    id: 'fleet-jan',
                    name: 'Fleet fix collections for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'fleet-feb',
                    name: 'Fleet fix collections for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'fleet-mar',
                    name: 'Fleet fix collections for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'fleet-apr',
                    name: 'Fleet fix collections for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'fleet-may',
                    name: 'Fleet fix collections for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'fleet-jun',
                    name: 'Fleet fix collections for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'fleet-jul',
                    name: 'Fleet fix collections for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'fleet-aug',
                    name: 'Fleet fix collections for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'fleet-sep',
                    name: 'Fleet fix collections for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'fleet-oct',
                    name: 'Fleet fix collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'fleet-nov',
                    name: 'Fleet fix collections for November 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'fleet-dec',
                    name: 'Fleet fix collections for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                },
				
            ]
        }
    })
});
//		hover effect
function updateStackColor(alpha) {
    return function () {
        const x = this.x
        const color = Highcharts.color
        const colors = Highcharts.getOptions().colors

        this.series.chart.series.forEach((series, i) => {
            series.data.forEach(point => {
                const basePointColor = color(colors[i])

                point.update({
                    color: alpha === 0
                        ? basePointColor.get() // set original color
                        : point.x === x
                        ? basePointColor.brighten(-alpha).get() // brighten original color
                        : basePointColor.brighten(alpha).get() // dim orignal color
                }, false)
            })
        })

        this.series.chart.redraw(false)
    }
}


//		hover effect


//===================================================================================
//***** comparison of sub revenue streams against months *****//
//===================================================================================

