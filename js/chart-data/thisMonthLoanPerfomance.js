const chart = Highcharts.chart('thisMonthLoans', {
    title: {
        text: 'Loan Perfomace For this Month'
    },
   
    
    chart: {
            inverted: true,
            backgroundColor: 'transparent'
            
        },
        
    xAxis: {
        type: 'category',
        // labels: {
        //     enabled: false
        // }
    },
     legend: {
            enabled: true
        },
        
         tooltip: {
        headerFormat: '<span style="font-size:16px; font-weight:800;">Gross Profit</span><br>',
//		useHTML: true,
        pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">KES {point.y}</b><br/>',
        formatter: function () {

            var point = this.point,
                s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + point.name + '</span><br/><span style="color:' + point.color + '"><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + 'Gross Profit' + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' ' + '</span>';
            if (point.drilldown) {
				s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' (' +Highcharts.numberFormat(this.percentage, 0, '.', ',') + '%)</p><br/>';
                s += '<p>Click to view <b>' + point.name + '</b> Collections </p>';
            }
            return s;
        },
        crosshairs: true


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
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
            borderWidth: 0,
            backgroundColor: 'transparent',
            borderColor: '#12263f',
            borderWidth: 1,
            itemStyle: {
                color: '#12263f',
                font: '600 10px "Muli", sans-serif'
            },
            itemHoverStyle: {
                color: '#333',
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

                pointWidth: 10,
                borderWidth: 0,
                borderColor: 'black',


            },
        },

       
    
    
    
    series: [{
        type: 'column',
        colorByPoint: true,
        data: [{
          name:'Wezesha',
          y:45223231
        },{
        
          name:'Boresha',
          y:32123231
        },{
        
          name:'Mortgage Loan',
          y:12523231
        },{
        
          name:'Elimu Loan',
          y:52323231
        },{
        
          name:'Car Loan',
          y:24561231
        }
        
        
        ],
        showInLegend: false
    }]
});