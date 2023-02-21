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
        title: {
        color: '#FFC200 ',
        text: 'Total Revenue Collected in Ksh'
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
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderColor: '#CCC',
        borderWidth: 1,
        itemStyle: {
            color: '#696969',
            font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: '#000000',
            font: '600 10px "Muli", sans-serif'
        },
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
        name: 'Daily Parking',
        color: '#009600',
        marker: {
        symbol: ''
        },
        data: [1415461, 2024151, 8011699, 3381876, 8891892, 4139096, 9100727, 8120147, 6141997, 1548612, 
            1705956, 2436481, 2674835, 2781751, 957829, 1799122, 1193017, 1248491, 1764687, 685737,
            445742, 1995726, 307046, 866452]

    }, {
        name: 'Enclosed',
        color: '#1666c0',
        marker: {
        symbol: null
        },
        data: [170956, 43481, 64835, 2171751, 2195829, 2179122, 119017, 128491, 176487, 168537,
            266478, 153703, 218518, 927169, 172542, 167552, 1319059, 1149129, 237067, 137077, 
            173923, 129891, 176945, 524498]

    },{
        name: 'Seasonal Parking',
        color: '#FFC400',
        marker: {
        symbol: ''
        },
        data: [45742, 99726, 30046, 86642, 561519, 1943851, 2947959, 358273, 5920433, 1513,
            123603, 505, 874, 884, 291, 122, 944, 423046, 850, 63868,
            72715, 4533, 1691, 631]

    },{
        name: 'Clamping',
        color: '#d70000',
        marker: {
        symbol: ''
        },
        data: [3887, 8536, 1028899, 1094, 7737, 8632, 8867, 4914, 3952, 2377,
             1113, 3185, 1178, 3355, 5269844, 2343974, 4565590, 7424, 451266, 8758,
             1323490, 184618, 1012699, 18104]

    },{
        name: 'Others',
        color: '#e09326 ',
        marker: {
        symbol: ''
        },
        data: [3145, 1842, 5542, 5932, 1413, 7301, 6560, 732503, 710783 ,889124,
             407930, 3646, 33578, 4502, 2069, 9037, 16500, 1057205, 3500, 6700, 
             2552, 4953, 6291, 1960]

    }]
    });