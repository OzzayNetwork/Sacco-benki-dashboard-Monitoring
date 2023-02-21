
Highcharts.setOptions({
   
    lang: {
        thousandsSep: ','
    },
    
   
    credits: {
        enabled: false
    },
    exporting: {
        enabled: true
    }
});

//daily revenue targets
Highcharts.chart('daily-target', {
		exporting: {
        enabled: false
    },
    chart: {
        marginTop: 40,
         inverted: true,
        marginLeft: 135,
        type: 'bullet',
		backgroundColor: 'transparent'
    },
    title: {
        text: null,
		
        style: {
            color: '#a5a8ad'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            pointPadding: 0.25,
            borderWidth: 0,
            color: '#091833',
            targetOptions: {
                width: '200%'
            }
        }
    },
    xAxis: {
        categories: ['<span class="hc-cat-title">Daily</span><br/>Today: 24-06-20'],
		gridLineWidth: 0,
    },
    yAxis: {
    
    		//qualitative ranges
    		gridLineWidth: 0,
        plotBands: [{
        
        		//poor
            from: 0,
            to: 150,
            color: '#ff0000'
        }, {
        		//avg
            from: 150,
            to: 225,
            color: '#ffe700'
        }, {
        		//excellent
            from: 225,
            to: 9e9,
            color: '#74ee15'
        }],
        //qualitative evaluation values
        title: null
    },
    series: [{
        data: [{
        	//actual collection
            y: 275,
            target: 300
        }]
    }],
    tooltip: {
        pointFormat: '<span style="color:#0abdc6;"><b style="color:#0abdc6;">{point.y}</b> (with target at {point.target})</span>'
    }
});

//monthly revenue targets
Highcharts.chart('monthly-target', {
exporting: {
        enabled: false
    },

title: {
        text: null
    },
    legend: {
        enabled: false
    },

	chart: {
        inverted: true,
        marginLeft: 135,
        type: 'bullet',
		backgroundColor: 'transparent'
    },
    plotOptions: {
        series: {
            pointPadding: 0.25,
            borderWidth: 0,
            color: '#091833',
            targetOptions: {
                width: '200%'
            }
        }
    },
    xAxis: {
        categories: ['<span class="hc-cat-title">Monthly</span><br/>June 2020'],
		gridLineWidth: 0,
    },
    yAxis: {
      	gridLineWidth: 0,
        plotBands: [{
            from: 0,
            to: 20,
            color: '#ff0000'
        }, {
            from: 20,
            to: 25,
            color: '#ffe700'
        }, {
            from: 25,
            to: 100,
            color: '#74ee15'
        }],
        /* labels: {
            format: 'KES {value}'
        }, */
        title: null
    },
    series: [{
        data: [{
            y: 22,
            target: 27
        }]
    }],
    tooltip: {
        pointFormat: '<span style="color:#0abdc6;"><b style="color:#0abdc6;">{point.y}</b> (with target at {point.target})</span>'
    }
});

//financial year target
Highcharts.chart('annual-target', {
exporting: {
        enabled: false
    },

title: {
        text: null
    },
    legend: {
        enabled: false
    },
chart: {
        inverted: true,
        marginLeft: 135,
        type: 'bullet',
		backgroundColor: 'transparent'
    },
    plotOptions: {
        series: {
            pointPadding: 0.25,
            borderWidth: 0,
            color: '#091833',
            targetOptions: {
                width: '200%'
            }
        }
    },
    xAxis: {
        categories: ['<span class="hc-cat-title">Financial Year</span><br/>2020/2019'],
		gridLineWidth: 0,
    },
    yAxis: {
   			gridLineWidth: 0,
        plotBands: [{
            from: 0,
            to: 1400,
            color: '#ff0000'
        }, {
            from: 1400,
            to: 2000,
            color: '#ffe700'
        }, {
            from: 2000,
            to: 9e9,
            color: '#74ee15'
        }],
        labels: {
            format: '{value}'
        },
        title: null
    },
    series: [{
        data: [{
            y: 1650,
            target: 2100
        }]
    }],
    tooltip: {
        pointFormat: '<span style="color:#0abdc6;"><b style="color:#0abdc6;">{point.y}</b> (with target at {point.target})</span>'
    },
   
});