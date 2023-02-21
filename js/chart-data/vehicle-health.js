Highcharts.chart('vehicle_health', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: 'transparent',
    },

    title: {
        text: null,

    },

    pane: {
        size: '110%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
            innerRadius: '100%',
            outerRadius: '100%',
            shape: 'arc'
        },
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Out of 100',
            verticalAlign: 'middle',
            y: 30
        },
        plotBands: [{
            from: 60,
            to: 100,
            color: '#55BF3B' // green
        }, {
            from: 40,
            to: 60,
            color: '#DDDF0D' // yellow
        }, {
            from: 0,
            to: 40,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Health',
        data: [80],
        tooltip: {
            valueSuffix: ' out of 100'
        }
    }]

},
// Add some life
function (chart) {
    if (!chart.renderer.forExport) {
        setInterval(function () {
            var point = chart.series[0].points[0],
                newVal,
                inc = Math.round((Math.random() - 0.5) * 20);

            newVal = point.y + inc;
            if (newVal < 0 || newVal > 100) {
                newVal = point.y - inc;
            }

            point.update(newVal);

        }, 3000);
    }
});