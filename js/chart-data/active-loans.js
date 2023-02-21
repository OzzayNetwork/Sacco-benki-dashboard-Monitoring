
			Highcharts.chart('active-loans', {
                chart: {
                    type: 'bar',
                    backgroundColor: 'transparent'
                },
                title: {
                    text: 'Loan Gurantors',
                    style: {
                        color: '#12263f'
                    }
                },
                xAxis: {
                    categories: ['Wezesha', 'Boresha', 'Morgage Loan', 'Elimu Loan', 'Car Loan']
                },
                yAxis: {
                    gridLineColor: '#95aac9',
                    gridLineDashStyle: 'ShortDot',
                    gridLineWidth: 0.3,
                    min: 0,
                    title: {
                        text: 'Value Of Loans Given'
                    }
                },
                legend: {
                    reversed: true
                },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },
                series: [{
                    name: 'With Guarantors',
                    data: [52132, 33212, 41213, 72321, 21312],
                    color:'#06af00'
                }, {
                    name: 'Without Garantors',
                    data: [25654, 24353, 33454, 34532, 64571],
                    color: '#fc1909'
                }]
            });
            