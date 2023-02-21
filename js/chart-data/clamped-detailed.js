var colors = Highcharts.getOptions().colors;
Highcharts.chart('stram_clamped_chart', {

    chart: {
        type: 'streamgraph',
        marginBottom: 30,
        zoomType: 'x'
    },

    // Make sure connected countries have similar colors
    colors: [
        colors[0],
        colors[1],
        colors[2],
        colors[3],
        colors[4],
        // East Germany, West Germany and Germany
        Highcharts.color(colors[5]).brighten(0.2).get(),
        Highcharts.color(colors[5]).brighten(0.1).get(),

        colors[5],
        colors[6],
        colors[7],
        colors[8],
        colors[9],
        colors[0],
        colors[1],
        colors[3],
        // Soviet Union, Russia
        Highcharts.color(colors[2]).brighten(-0.1).get(),
        Highcharts.color(colors[2]).brighten(-0.2).get(),
        Highcharts.color(colors[2]).brighten(-0.3).get()
    ],

    title: {
        floating: true,
        align: 'left',
        text: null
    },
    subtitle: {
        floating: true,
        align: 'left',
        y: 30,
        text: null
    },

    xAxis: {
        type: 'category',
        crosshair: false,
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
            '11 PM - 12 AM',
            ''
        ],
        labels: {
            align: 'left',
            reserveSpace: false,
            rotation: 270
        },
        lineWidth: 10,
        margin: 40,
        tickWidth: 0
    },

    yAxis: {
        visible: false,
        startOnTick: true,
        endOnTick: true,
        gridLineColor: '#197F07',
        gridLineWidth: 0.3,
        title: {
        color: '#FFC200 ',
        text: 'Vehicle Parking Status'
        },
        lang: {
            numericSymbols: ['k', 'm']
        }
    },

    legend: {
        enabled: false,
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


    annotations: [{
        labels: [{
            point: {
                x: 5.5,
                xAxis: 0,
                y: 30,
                yAxis: 0
            },
            text: 'Peak Hour<br>'
        }, {
            point: {
                x: 18,
                xAxis: 0,
                y: 90,
                yAxis: 0
            },
            text: 'End of Day'
        }],
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'silver'
        }
    }],

    plotOptions: {
        series: {
            animation: {
                duration: 2000
            },
            label: {
                minFontSize: 5,
                maxFontSize: 15,
                style: {
                    color: 'rgba(255,255,255,0.75)'
                }
            },
    
            dataLabels:{
                enabled:false
            }
        }
    },

    // Data parsed with olympic-medals.node.js
    series: [{
        name: "Compliant",
        data: [
            2409, 7134, 9379, 8406, 5475, 3878, 7733, 5895, 615, 2680, 9422, 2765, 2223, 2335, 1864, 3234, 6643,
             8082, 6364, 1354, 1578, 5427, 5605
        ]
    }, {
        name: "To be Clamped",
        data: [
            5831, 5558, 4212, 3377, 4390, 5352, 8475, 1561, 4904, 4945, 1618, 9992, 8565, 259, 7635, 8521, 4845, 
            5045, 7581, 1375, 1867, 145, 6658
        ]
    }, {
        name: "To be unclamped",
        data: [
            4739, 387, 2591, 2136, 1595, 9737, 31, 7248, 28, 6571, 133, 4684, 361, 1325, 2853, 6803, 8491, 1300,
             8182, 3394, 5096, 5294, 5337
        ]
    }, {
        name: "Clamped",
        data: [
            2803, 4398, 5759, 6916, 6822, 6420, 9255, 3614, 5243, 4579, 7036, 1143, 1152, 115, 3333, 4182, 3245, 1543,
             7788, 9712, 9881, 65, 5100
        ]
    }, {
        name: "Unclamped",
        data: [
            6539, 3052, 4741, 4425, 4857, 7820, 9902, 8531, 1663, 8668, 6469, 6627, 2066, 8181, 6242, 7351, 7045, 6208,
             8118, 6300, 6126, 2502, 4784
        ]
    }, {
        name: "Impounded",
        data: [
            3199, 6174, 748, 6583, 188, 8170, 9149, 1095, 4161, 2811, 4084, 3377, 1305, 15, 5781, 9944, 8867, 7940, 6931,
             3456, 2988, 3754, 7204
        ]
    }, {
        name: "To be relinquished",
        data: [
            1785, 2731, 1251, 7174, 7993, 4013, 1762, 9635, 4516, 1594, 7278, 1641, 9670, 7384, 4809, 3915, 4375, 9408,
             6444, 64, 7042, 7339, 3200
        ]
    }, {
        name: "Impounded",
        data: [
            9669, 7065, 6375, 4418, 1037, 8720, 1586, 6426, 2730, 8019, 4901, 3898, 5879, 5630, 3342, 3716, 9758, 2634,
             2301, 576, 5348, 7404, 3995
        ]
    }],

    exporting: {
        sourceWidth: 800,
        sourceHeight: 600
    }

});
