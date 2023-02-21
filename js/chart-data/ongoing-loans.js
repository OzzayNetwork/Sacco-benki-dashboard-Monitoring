//ongoing loan applications
Highcharts.chart('ongoing-loans', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
		plotShadow: false,
		backgroundColor: 'transparent'
    },
    title: {
        text: 'Applications',
        align: 'center',
        verticalAlign: 'middle',
		y: 60,
		style: {
                color: '#a5a8ad'
            }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
					color: 'white',
					color: 'white',
					textShadow: '0 0 2px black, 0 0 2px black',
					font: '600 14px "Muli", sans-serif'
				}
				
				
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
			size: '110%',
			borderWidth: 0,
                
        }
	},
	legend: {
            enabled: true
		},
		

    series: [{
        type: 'pie',
        name: 'Applications',
		innerSize: '50%',
		
        data: [
			['Pending Appraisal', 186],
            ['Pending Approval', 123],
            ['Pending Disbursment', 106],
            
        ]
    }]
});
