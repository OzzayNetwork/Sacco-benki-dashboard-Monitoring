Highcharts.chart('spline_chart_container', {
    chart: {
        type: 'spline',
        backgroundColor: 'transparent',
        events: {
            load: function () {
                makeSumSeries(this);
            }
        }
        
    },
    title: {
        text: null
    },
    lang: {
        thousandsSep: ','
    },
    xAxis: {
        labels: {
            enabled: false
        },       
        categories: [
        '12 AM - 1 AM ',
        '1 AM - 2 AM',
        '2 AM - 3 AM',
        '3 AM - 4 AM',
        '4 AM - 5 AM',
        '5 AM - 6 AM',
        '6 AM - 7 AM',
        '7 AM - 8 AM',
        '8 AM - 9 AM',
        '9 AM - 10 AM',
        '10 AM - 11 AM',
        '11 AM - 12 PM',
        '12 PM - 1 PM',
        '1 PM - 2 PM',
        '2 PM - 3 PM',
        '3 PM - 4 PM',
        '4 PM - 5 PM',
        '5 PM - 6 PM',
        '6 PM - 7 PM',
        '7 PM - 8 PM',
        '8 PM - 9 PM',
        '9 PM - 10 PM',
        '10 PM - 11 PM',
        '11 PM - 12 AM'

        ]
    },
    yAxis: {
        gridLineColor: '#197F07',
        gridLineWidth: 0.3,
        labels: {
            enabled: false
        },
        lang: {
            numericSymbols: ['k', 'm']
        },
        events: {
            hide: function () {
                makeSumSeries(this.chart);
            },
            show: function () {
                makeSumSeries(this.chart);
            }
        },
    },
    legend: {
        enable: false
    }, 
    tooltip:{
        crosshairs: true,
        shared: true,
        borderRadius	: 2,
        borderWidth		: 1,
        borderColor		: '#999',
        shadow			: false,
        shared			: true,
        useHTML			: true,
        yDecimals		: 0,
        valueDecimals	: 0,
        formatter: function() {
            var points='<table class="tip"><caption style="color: #66ff00">Deration '+this.x+'</caption>'
            +'<tbody>';
            sum = 0;
            $.each(this.points,function(i,point){
                points+='<tr><th style="color: '+point.series.color+'">'+point.series.name+': </th>'
                + '<td style="text-align: right">'+point.y+'</td></tr>'
                sum += point.y;
            });
            points+='<tr><th>Total: </th>'
            +'<td style="text-align:right"><b>'+sum+'</b></td></tr>'
            +'</tbody></table>';
            return points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    plotOptions: {

        series: {
            animation: {
                duration: 2000
            },
            dataLabels:{
                enabled:false
            }
        },
        spline: {
        marker: {
            radius: 0.2,
            lineColor: '#666666',
            lineWidth: 0.5
        }
        }
    },
    series: [{
        dataLabels:{
            enabled:false
        },
        name: 'Safety Score',
        color: '#009600',
        marker: {
        symbol: ''
        },
        data: [1415461, 2024151, 8011699, 3381876, 8891892, 4139096, 9100727, 8120147, 6141997, 1548612, 
            1705956, 2436481, 2674835, 2781751, 957829, 1799122, 1193017, 1248491, 1764687, 685737,
            445742, 1995726, 307046, 866452]

    }]
    });