Highcharts.setOptions({
    colors: ['#0553a1', '#ffc721', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
   });

Highcharts.chart('taxi_utilization', {
    chart: {
        backgroundColor: 'transparent',
        plotBorderWidth: 0,
        plotShadow: false,
        margin: [0, 0, 0, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0
    },
    title: {
        text: '640<br>Total',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '100%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Taxi Utilization ',
        innerSize: '50%',
        data: [
            ['Utilized', 58.9],
            ['Unutilized', 13.29],
        ]
    }]
});
