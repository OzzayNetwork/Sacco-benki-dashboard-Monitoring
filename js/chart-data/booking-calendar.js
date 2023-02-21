function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

Highcharts.chart('booking_calendar', {

    chart: {
        type: 'heatmap',
        backgroundColor: 'transparent',
        marginTop: 40,
        marginBottom: 80,
        style: {
            color: "#0553a1"
        },
        plotBorderWidth: 1
    },


    title: {
        text: null
    },

    xAxis: {
        title: "Drivers",
        categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
    },

    yAxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        title: null,
        reversed: true
    },

    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var ix = point.index + 1,
                    xName = getPointCategoryName(point, 'x'),
                    yName = getPointCategoryName(point, 'y'),
                    val = point.value;
                return ix + '. ' + xName + ' drives ' + yName + ', ' + val + '.';
            }
        }
    },

    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: '#FFFFFF'
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    tooltip: {
        formatter: function () {
            return '<b>' + getPointCategoryName(this.point, 'x') + '</b> drives <br><b>' +
                this.point.value + '</b>  on <b>' + getPointCategoryName(this.point, 'y') + '</b>';
        }
    },

    series: [{
        name: 'Sales per employee',
        color: '#000000',
        borderWidth: 1,
        data: [
            [0, 0, "Gina"],
            [0, 1, "Chamaendeleo"],
            [0, 2, "Nouveta"],
            [0, 3, " "],
            [0, 4, " "],
            [1, 0, " "],
            [1, 1, " "],
            [1, 2, " "],
            [1, 3, " "],
            [1, 4, "SwedKen"],
            [2, 0, "Kelvin"],
            [2, 1, " "],
            [2, 2, " "],
            [2, 3, "Eric"],
            [2, 4, " "],
            [3, 0, "Liquid"],
            [3, 1, " "],
            [3, 2, "Oppo"],
            [3, 3, " "],
            [3, 4, "Huawei"],
            [4, 0, " "],
            [4, 1, " "],
            [4, 2, " "],
            [4, 3, "NCCG"],
            [4, 4, " "],
            [5, 0, " "],
            [5, 1, "Nigel"],
            [5, 2, " "],
            [5, 3, "KRA"],
            [5, 4, " "],
            [6, 0, " "],
            [6, 1, "Thermos"],
            [6, 2, " "],
            [6, 3, "Jeremy"],
            [6, 4, " "],
            [7, 0, "Sara"],
            [7, 1, " "],
            [7, 2, "Joan"],
            [7, 3, " "],
            [7, 4, " "],
            [8, 0, " "],
            [8, 1, " "],
            [8, 2, "Sharon"],
            [8, 3, " "],
            [8, 4, "SGA"],
            [9, 0, "Esther"],
            [9, 1, " "],
            [9, 2, " "],
            [9, 3, "Kabura"],
            [9, 4, 0]
        ],
        dataLabels: {
            enabled: true,
            color: '#000000'
        }
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        formatter: function () {
                            return this.value.charAt(0);
                        }
                    }
                }
            }
        }]
    }

});