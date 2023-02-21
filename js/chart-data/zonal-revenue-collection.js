//=======================================================================================================================================================
/*revenue streams version two*/
//=======================================================================================================================================================
$(function () {

    // Create the chart
    $('#ZonalRevenueCollection').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
		lang: {
            numericSymbols: ['k', 'm']
    },
        title: {
            text: null,
            style: {
                color: '#a5a8ad'
            }
        },
        yAxis: {
            gridLineColor: '#197F07',
            gridLineWidth: 0.3,
            min: 0,
            title: {
                text: 'Total revenue collected'
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: '#a5a8ad'
                }
            }
        },
        xAxis: {
            type: 'category'
        },
		
		

        legend: {
            enabled: true
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

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    style: {
                        color: 'black',
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

            pointWidth: 15,
            borderWidth: 0,
            borderColor: 'white',


        },
    },
		
		 tooltip: {
        headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
//		useHTML: true,
        pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">KES {point.y}</b><br/>',
        formatter: function () {

            var point = this.point,
                s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><span style="color:' + point.color + '"><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' ' + '</span>';
            if (point.drilldown) {
				s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' (' +Highcharts.numberFormat(this.percentage, 0, '.', ',') + '%)</p><br/>';
                s += '<p>Click to view <b>' + point.name + '</b> Collections </p>';
            }
            return s;
        },
        crosshairs: true


    },

        series: [{
            //national bank collections by the months
            //Private collections
            name: 'Private',
            data: [{

                name: 'CBD',
                y: 5,
                drilldown: 'Private-CBD',
                //color: '#e7c500' //yellow
            }, {
                name: 'Kijabe',
                y: 2,
                drilldown: 'Private-Kijabe',
                //color: '#e7c500' //yellow
            }, {
                name: 'Westlands',
                y: 4,
                drilldown: 'Private-Westlands',
                //color: '#e7c500' //yellow
            }, {

                name: 'Kilimani',
                y: 5,
                drilldown: 'Private-Kilimani',
                //color: '#e7c500' //yellow
            }, {
                name: 'Upper-Hill',
                y: 2,
                drilldown: 'Private-Upper-Hill',
                //color: '#e7c500' //yellow
            }, {
                name: 'Kombo',
                y: 4,
                drilldown: 'Private-Kombo',
                //color: '#e7c500' //yellow
            }, {

                name: 'Comm',
                y: 5,
                drilldown: 'Private-Comm',
                //color: '#e7c500' //yellow
            }, {
                name: 'Ngara',
                y: 12,
                drilldown: 'Private-Ngara',
                //color: '#e7c500' //yellow
            }, {
                name: 'Highridge',
                y: 4,
                drilldown: 'Private-Highridge',
                //color: '#e7c500' //yellow
            }, {

                name: 'Ind. Area',
                y: 15,
                drilldown: 'Private-Ind. Area',
                //color: '#e7c500' //yellow
            }, {
                name: 'Yaya',
                y: 2,
                drilldown: 'Private-Yaya',
                //color: '#e7c500' //yellow
            }, {
                name: 'Buru',
                y: 4,
                drilldown: 'Private-Buru',
                //color: '#e7c500' //yellow
            }]
            //end of Private collections
        }, {
            //Pickup collections
            name: 'Pickups',
            data: [{
                name: 'CBD',
                y: 11,
                drilldown: 'pickup-CBD',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kijabe',
                y: 5,
                drilldown: 'pickup-Kijabe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Westlands',
                y: 2,
                drilldown: 'pickup-Westlands',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kilimani',
                y: 1,
                drilldown: 'pickup-Kilimani',
                //color: '#0aae8f' // blue
            }, {
                name: 'Upper-Hill',
                y: 5,
                drilldown: 'pickup-Upper-Hill',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kombo',
                y: 21,
                drilldown: 'pickup-Kombo',
                //color: '#0aae8f' // blue
            }, {
                name: 'Comm',
                y: 11,
                drilldown: 'pickup-Comm',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ngara',
                y: 5,
                drilldown: 'pickup-Ngara',
                //color: '#0aae8f' // blue
            }, {
                name: 'Highridge',
                y: 2,
                drilldown: 'pickup-Highridge',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ind. Area',
                y: 1,
                drilldown: 'pickup-Ind. Area',
                //color: '#0aae8f' // blue
            }, {
                name: 'Yaya',
                y: 5,
                drilldown: 'pickup-Yaya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Buru',
                y: 2,
                drilldown: 'pickup-Buru',
                //color: '#0aae8f' // blue
            }]
            //end of Pickup collections
        }, {
            //Nissan collections
            name: 'Nissan',
            data: [{
                name: 'CBD',
                y: 16,
                drilldown: 'nissan-CBD',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kijabe',
                y: 15,
                drilldown: 'nissan-Kijabe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Westlands',
                y: 3,
                drilldown: 'nissan-Westlands',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kilimani',
                y: 1,
                drilldown: 'nissan-Kilimani',
                //color: '#0aae8f' // blue
            }, {
                name: 'Upper-Hill',
                y: 5,
                drilldown: 'nissan-Upper-Hill',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kombo',
                y: 2,
                drilldown: 'nissan-Kombo',
                //color: '#0aae8f' // blue
            }, {
                name: 'Comm',
                y: 11,
                drilldown: 'nissan-Comm',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ngara',
                y: 5,
                drilldown: 'nissan-Ngara',
                //color: '#0aae8f' // blue
            }, {
                name: 'Highridge',
                y: 2,
                drilldown: 'nissan-Highridge',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ind. Area',
                y: 1,
                drilldown: 'nissan-Ind. Area',
                //color: '#0aae8f' // blue
            }, {
                name: 'Yaya',
                y: 5,
                drilldown: 'nissan-Yaya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Buru',
                y: 2,
                drilldown: 'nissan-Buru',
                //color: '#0aae8f' // blue
            }]
            //end of Nissan collections
        },{
            //Canter collections
            name: 'Canter',
            data: [{
                name: 'CBD',
                y: 11,
                drilldown: 'canter-CBD',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kijabe',
                y: 15,
                drilldown: 'canter-Kijabe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Westlands',
                y: 12,
                drilldown: 'canter-Westlands',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kilimani',
                y: 19,
                drilldown: 'canter-Kilimani',
                //color: '#0aae8f' // blue
            }, {
                name: 'Upper-Hill',
                y: 15,
                drilldown: 'canter-Upper-Hill',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kombo',
                y: 21,
                drilldown: 'canter-Kombo',
                //color: '#0aae8f' // blue
            }, {
                name: 'Comm',
                y: 11,
                drilldown: 'canter-Comm',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ngara',
                y: 5,
                drilldown: 'canter-Ngara',
                //color: '#0aae8f' // blue
            }, {
                name: 'Highridge',
                y: 2,
                drilldown: 'canter-Highridge',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ind. Area',
                y: 13,
                drilldown: 'canter-Ind. Area',
                //color: '#0aae8f' // blue
            }, {
                name: 'Yaya',
                y: 5,
                drilldown: 'canter-Yaya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Buru',
                y: 2,
                drilldown: 'canter-Buru',
                //color: '#0aae8f' // blue
            }]
            //end of Canter collections
        },{
            //Lorry rents
            name: 'Lorry',
            data: [{
                name: 'CBD',
                y: 1,
                drilldown: 'lorry-CBD',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kijabe',
                y: 15,
                drilldown: 'lorry-Kijabe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Westlands',
                y: 2,
                drilldown: 'lorry-Westlands',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kilimani',
                y: 1,
                drilldown: 'lorry-Kilimani',
                //color: '#0aae8f' // blue
            }, {
                name: 'Upper-Hill',
                y: 15,
                drilldown: 'lorry-Upper-Hill',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kombo',
                y: 2,
                drilldown: 'lorry-Kombo',
                //color: '#0aae8f' // blue
            }, {
                name: 'Comm',
                y: 11,
                drilldown: 'lorry-Comm',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ngara',
                y: 5,
                drilldown: 'lorry-Ngara',
                //color: '#0aae8f' // blue
            }, {
                name: 'Highridge',
                y: 7,
                drilldown: 'lorry-Highridge',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ind. Area',
                y: 13,
                drilldown: 'lorry-Ind. Area',
                //color: '#0aae8f' // blue
            }, {
                name: 'Yaya',
                y: 5,
                drilldown: 'lorry-Yaya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Buru',
                y: 2,
                drilldown: 'lorry-Buru',
                //color: '#0aae8f' // blue
            }]
            //end of lorry collections
        },{
            //Minibus rents
            name: 'Minibus',
            data: [{
                name: 'CBD',
                y: 1,
                drilldown: 'minibus-CBD',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kijabe',
                y: 15,
                drilldown: 'minibus-Kijabe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Westlands',
                y: 2,
                drilldown: 'minibus-Westlands',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kilimani',
                y: 1,
                drilldown: 'minibus-Kilimani',
                //color: '#0aae8f' // blue
            }, {
                name: 'Upper-Hill',
                y: 15,
                drilldown: 'minibus-Upper-Hill',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kombo',
                y: 2,
                drilldown: 'minibus-Kombo',
                //color: '#0aae8f' // blue
            }, {
                name: 'Comm',
                y: 11,
                drilldown: 'minibus-Comm',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ngara',
                y: 5,
                drilldown: 'minibus-Ngara',
                //color: '#0aae8f' // blue
            }, {
                name: 'Highridge',
                y: 7,
                drilldown: 'minibus-Highridge',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ind. Area',
                y: 13,
                drilldown: 'minibus-Ind. Area',
                //color: '#0aae8f' // blue
            }, {
                name: 'Yaya',
                y: 5,
                drilldown: 'minibus-Yaya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Buru',
                y: 2,
                drilldown: 'minibus-Buru',
                //color: '#0aae8f' // blue
            }]
            //end of minibus collections
        },{
            //Bus rents
            name: 'Bus',
            data: [{
                name: 'CBD',
                y: 1,
                drilldown: 'bus-CBD',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kijabe',
                y: 15,
                drilldown: 'bus-Kijabe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Westlands',
                y: 2,
                drilldown: 'bus-Westlands',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kilimani',
                y: 1,
                drilldown: 'bus-Kilimani',
                //color: '#0aae8f' // blue
            }, {
                name: 'Upper-Hill',
                y: 15,
                drilldown: 'bus-Upper-Hill',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kombo',
                y: 2,
                drilldown: 'bus-Kombo',
                //color: '#0aae8f' // blue
            }, {
                name: 'Comm',
                y: 11,
                drilldown: 'bus-Comm',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ngara',
                y: 5,
                drilldown: 'bus-Ngara',
                //color: '#0aae8f' // blue
            }, {
                name: 'Highridge',
                y: 7,
                drilldown: 'bus-Highridge',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ind. Area',
                y: 13,
                drilldown: 'bus-Ind. Area',
                //color: '#0aae8f' // blue
            }, {
                name: 'Yaya',
                y: 5,
                drilldown: 'bus-Yaya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Buru',
                y: 2,
                drilldown: 'bus-Buru',
                //color: '#0aae8f' // blue
            }]
            //end of bus collections
        },{
            //Trailer rents
            name: 'Trailer',
            data: [{
                name: 'CBD',
                y: 1,
                drilldown: 'trailer-CBD',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kijabe',
                y: 15,
                drilldown: 'trailer-Kijabe',
                //color: '#0aae8f' // blue
            }, {
                name: 'Westlands',
                y: 2,
                drilldown: 'trailer-Westlands',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kilimani',
                y: 1,
                drilldown: 'trailer-Kilimani',
                //color: '#0aae8f' // blue
            }, {
                name: 'Upper-Hill',
                y: 15,
                drilldown: 'trailer-Upper-Hill',
                //color: '#0aae8f' // blue
            }, {
                name: 'Kombo',
                y: 2,
                drilldown: 'trailer-Kombo',
                //color: '#0aae8f' // blue
            }, {
                name: 'Comm',
                y: 11,
                drilldown: 'trailer-Comm',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ngara',
                y: 5,
                drilldown: 'trailer-Ngara',
                //color: '#0aae8f' // blue
            }, {
                name: 'Highridge',
                y: 7,
                drilldown: 'trailer-Highridge',
                //color: '#0aae8f' // blue
            }, {
                name: 'Ind. Area',
                y: 13,
                drilldown: 'trailer-Ind. Area',
                //color: '#0aae8f' // blue
            }, {
                name: 'Yaya',
                y: 5,
                drilldown: 'trailer-Yaya',
                //color: '#0aae8f' // blue
            }, {
                name: 'Buru',
                y: 2,
                drilldown: 'trailer-Buru',
                //color: '#0aae8f' // blue
            }]
            //end of trailer collections
        }],
        drilldown: {
            activeDataLabelStyle: {
                color: 'black',
                textShadow: '0 0 2px white, 0 0 2px black'
            },
            series: [
                //Private collections by months and dates
                {
                    id: 'Private-CBD',
                    name: 'Private collections in CBD 2020',
                    data: [
                        ['1st CBD', 4],
                        ['2nd CBD', 2],
                        ['3rd CBD', 1],
                        ['4th CBD', 2],
                        ['5th CBD', 1]
                    ]
                }, {
                    id: 'Private-Kijabe',
                    name: 'Private collections in Kijabe 2020',
                    data: [
                        ['1st Kijabe', 4],
                        ['2nd Kijabe', 2]
                    ]
                }, {
                    id: 'Private-Westlands',
                    name: 'Private collections in Westlands 2020',
                    data: [
                        ['1st Westlands', 4],
                        ['2nd Westlands', 2],
                        ['3rd Westlands', 2]
                    ]
                }, {
                    id: 'Private-Kilimani',
                    name: 'Private collections in Kilimani 2020',
                    data: [
                        ['1st Kilimani', 4],
                        ['2nd Kilimani', 2],
                        ['3rd Kilimani', 1],
                        ['4th Kilimani', 2],
                        ['5th Kilimani', 1]
                    ]
                }, {
                    id: 'Private-Upper-Hill',
                    name: 'Private collections in Upper-Hill 2020',
                    data: [
                        ['1st Upper-Hill', 4],
                        ['2nd Upper-Hill', 2]
                    ]
                }, {
                    id: 'Private-Kombo',
                    name: 'Private collections in Kombo 2020',
                    data: [
                        ['1st Kombo', 4],
                        ['2nd Kombo', 2],
                        ['3rd Kombo', 2]
                    ]
                }, {
                    id: 'Private-Comm',
                    name: 'Private collections in Comm 2020',
                    data: [
                        ['1st Comm', 4],
                        ['2nd Comm', 2],
                        ['3rd Comm', 1],
                        ['4th Comm', 2],
                        ['5th Comm', 1]
                    ]
                }, {
                    id: 'Private-Ngara',
                    name: 'Private collections in Ngara 2020',
                    data: [
                        ['1st Ngara', 4],
                        ['2nd Ngara', 2]
                    ]
                }, {
                    id: 'Private-Highridge',
                    name: 'Private collections in Highridge 2020',
                    data: [
                        ['1st Highridge', 4],
                        ['2nd Highridge', 2],
                        ['3rd Highridge', 2]
                    ]
                }, {
                    id: 'Private-Ind. Area',
                    name: 'Private collections in Ind. Area 2020',
                    data: [
                        ['1st Ind. Area', 4],
                        ['2nd Ind. Area', 2],
                        ['3rd Ind. Area', 1],
                        ['4th Ind. Area', 2],
                        ['5th Ind. Area', 1]
                    ]
                }, {
                    id: 'Private-Yaya',
                    name: 'Private collections in Yaya 2020',
                    data: [
                        ['1st Yaya', 4],
                        ['2nd Yaya', 2]
                    ]
                }, {
                    id: 'Private-Buru',
                    name: 'Private collections in Buru  2020',
                    data: [
                        ['1st Buru', 4],
                        ['2nd Buru', 2],
                        ['3rd Buru', 2]
                    ]
                },

                //end of Private collections by months and dates

                //start of Pickups collections by months and dates
                {
                    id: 'lr-CBD',
                    name: 'Landrates revenue collections for CBD 2020',
                    data: [
                        ['1st CBD', 3],
                        ['2nd CBD', 5],
                        ['3rd CBD', 6],
                        ['4th CBD', 2],
                        ['5th CBD', 2]
                    ]
                }, {
                    id: 'lr-Kijabe',
                    name: 'Landrates revenue collections for Kijabe 2020',
                    data: [
                        ['1st Kijabe', 1],
                        ['2nd Kijabe', 5]
                    ]
                }, {
                    id: 'lr-Westlands',
                    name: 'Landrates revenue collections for Westlands 2020',
                    data: [
                        ['1st Westlands', 2],
                        ['2nd Westlands', 3],
                        ['3rd Westlands', 2]
                    ]
                }, {
                    id: 'lr-Kilimani',
                    name: 'Landrates revenue collections for Kilimani 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Kilimani', 2],
                        ['2nd Kilimani', 3],
                        ['3rd Kilimani', 1],
                        ['4th Kilimani', 1],
                        ['5th Kilimani', 1]
                    ]
                }, {
                    id: 'lr-Upper-Hill',
                    name: 'Landrates revenue collections for Upper-Hill 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Upper-Hill', 4],
                        ['2nd Upper-Hill', 3]
                    ]
                }, {
                    id: 'lr-Kombo',
                    name: 'Landrates revenue collections for Kombo 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Kombo', 4],
                        ['2nd Kombo', 3],
                        ['3rd Kombo', 3]
                    ]
                }, {
                    id: 'lr-Comm',
                    name: 'Landrates revenue collections for Comm 2020',
                    data: [
                        ['1st Comm', 3],
                        ['2nd Comm', 5],
                        ['3rd Comm', 6],
                        ['4th Comm', 2],
                        ['5th Comm', 2]
                    ]
                }, {
                    id: 'lr-Ngara',
                    name: 'Landrates revenue collections for Ngara 2020',
                    data: [
                        ['1st Ngara', 1],
                        ['2nd Ngara', 5]
                    ]
                }, {
                    id: 'lr-Highridge',
                    name: 'Landrates revenue collections for Highridge 2020',
                    data: [
                        ['1st Highridge', 2],
                        ['2nd Highridge', 3],
                        ['3rd Highridge', 2]
                    ]
                }, {
                    id: 'lr-Ind. Area',
                    name: 'Landrates revenue collections for Ind. Area 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Ind. Area', 2],
                        ['2nd Ind. Area', 3],
                        ['3rd Ind. Area', 1],
                        ['4th Ind. Area', 1],
                        ['5th Ind. Area', 1]
                    ]
                }, {
                    id: 'lr-Yaya',
                    name: 'Landrates revenue collections for Yaya 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Yaya', 4],
                        ['2nd Yaya', 3]
                    ]
                }, {
                    id: 'lr-Buru',
                    name: 'Landrates revenue collections for Buru 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Buru', 4],
                        ['2nd Buru', 3],
                        ['3rd Buru', 3]
                    ]
                },
				
				//start of SBP daily collections
				 {
                    id: 'sbp-Buru',
                    name: 'SBP collections for Buru 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Buru', 4],
                        ['2nd Buru', 3],
                        ['3rd Buru', 3]
                    ]
                },{
                    id: 'sbp-CBD',
                    name: 'SBP collections for CBD 2020',
                    data: [
                        ['1st CBD', 3],
                        ['2nd CBD', 5],
                        ['3rd CBD', 6],
                        ['4th CBD', 2],
                        ['5th CBD', 2]
                    ]
                }, {
                    id: 'sbp-Kijabe',
                    name: 'SBP collections for Kijabe 2020',
                    data: [
                        ['1st Kijabe', 1],
                        ['2nd Kijabe', 5]
                    ]
                }, {
                    id: 'sbp-Westlands',
                    name: 'SBP collections for Westlands 2020',
                    data: [
                        ['1st Westlands', 2],
                        ['2nd Westlands', 3],
                        ['3rd Westlands', 2]
                    ]
                }, {
                    id: 'sbp-Kilimani',
                    name: 'Landrates revenue collections for Kilimani 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Kilimani', 2],
                        ['2nd Kilimani', 3],
                        ['3rd Kilimani', 1],
                        ['4th Kilimani', 1],
                        ['5th Kilimani', 1]
                    ]
                }, {
                    id: 'sbp-Upper-Hill',
                    name: 'SBP collections for Upper-Hill 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Upper-Hill', 4],
                        ['2nd Upper-Hill', 3]
                    ]
                }, {
                    id: 'sbp-Kombo',
                    name: 'SBP collections for Kombo 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Kombo', 4],
                        ['2nd Kombo', 3],
                        ['3rd Kombo', 3]
                    ]
                }, {
                    id: 'sbp-Comm',
                    name: 'SBP collections for Comm 2020',
                    data: [
                        ['1st Comm', 3],
                        ['2nd Comm', 5],
                        ['3rd Comm', 6],
                        ['4th Comm', 2],
                        ['5th Comm', 2]
                    ]
                }, {
                    id: 'sbp-Ngara',
                    name: 'SBP collections for Ngara 2020',
                    data: [
                        ['1st Ngara', 1],
                        ['2nd Ngara', 5]
                    ]
                }, {
                    id: 'sbp-Highridge',
                    name: 'SBP collections for Highridge 2020',
                    data: [
                        ['1st Highridge', 2],
                        ['2nd Highridge', 3],
                        ['3rd Highridge', 2]
                    ]
                }, {
                    id: 'sbp-Ind. Area',
                    name: 'SBP collections for Ind. Area 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Ind. Area', 2],
                        ['2nd Ind. Area', 3],
                        ['3rd Ind. Area', 1],
                        ['4th Ind. Area', 1],
                        ['5th Ind. Area', 1]
                    ]
                },
				{
                    id: 'sbp-Yaya',
                    name: 'SBP collections for Ind. Area 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Ind. Area', 2],
                        ['2nd Ind. Area', 3],
                        ['3rd Ind. Area', 1],
                        ['4th Ind. Area', 1],
                        ['5th Ind. Area', 1]
                    ]
                },
				//end of SBP collections
				
				//start of market fee collections
				{
                    id: 'market-CBD',
                    name: 'Market fee collections for CBD 2020',
                    data: [
                        ['1st CBD', 3],
                        ['2nd CBD', 5],
                        ['3rd CBD', 6],
                        ['4th CBD', 2],
                        ['5th CBD', 2]
                    ]
                }, {
                    id: 'market-Kijabe',
                    name: 'Market fee collections for Kijabe 2020',
                    data: [
                        ['1st Kijabe', 1],
                        ['2nd Kijabe', 5]
                    ]
                }, {
                    id: 'market-Westlands',
                    name: 'Market fee collections for Westlands 2020',
                    data: [
                        ['1st Westlands', 2],
                        ['2nd Westlands', 3],
                        ['3rd Westlands', 2]
                    ]
                }, {
                    id: 'market-Kilimani',
                    name: 'Market fee collections for Kilimani 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Kilimani', 2],
                        ['2nd Kilimani', 3],
                        ['3rd Kilimani', 1],
                        ['4th Kilimani', 1],
                        ['5th Kilimani', 1]
                    ]
                }, {
                    id: 'market-Upper-Hill',
                    name: 'Market fee collections for Upper-Hill 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Upper-Hill', 4],
                        ['2nd Upper-Hill', 3]
                    ]
                }, {
                    id: 'market-Kombo',
                    name: 'Market fee collections for Kombo 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Kombo', 4],
                        ['2nd Kombo', 3],
                        ['3rd Kombo', 3]
                    ]
                }, {
                    id: 'market-Comm',
                    name: 'Market fee collections for Comm 2020',
                    data: [
                        ['1st Comm', 3],
                        ['2nd Comm', 5],
                        ['3rd Comm', 6],
                        ['4th Comm', 2],
                        ['5th Comm', 2]
                    ]
                }, {
                    id: 'market-Ngara',
                    name: 'Market fee collections for Ngara 2020',
                    data: [
                        ['1st Ngara', 1],
                        ['2nd Ngara', 5]
                    ]
                }, {
                    id: 'market-Highridge',
                    name: 'Market fee collections for Highridge 2020',
                    data: [
                        ['1st Highridge', 2],
                        ['2nd Highridge', 3],
                        ['3rd Highridge', 2]
                    ]
                }, {
                    id: 'market-Ind. Area',
                    name: 'Market fee collections for Ind. Area 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Ind. Area', 2],
                        ['2nd Ind. Area', 3],
                        ['3rd Ind. Area', 1],
                        ['4th Ind. Area', 1],
                        ['5th Ind. Area', 1]
                    ]
                }, {
                    id: 'market-Yaya',
                    name: 'Market fee collections for Yaya 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Yaya', 4],
                        ['2nd Yaya', 3]
                    ]
                }, {
                    id: 'market-Buru',
                    name: 'Market fee collections for Buru 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Buru', 4],
                        ['2nd Buru', 3],
                        ['3rd Buru', 3]
                    ]
                },
				
				// end of Canter
				//start of house and stall rents
				{
                    id: 'rent-CBD',
                    name: 'Lorry for CBD 2020',
                    data: [
                        ['1st CBD', 3],
                        ['2nd CBD', 5],
                        ['3rd CBD', 6],
                        ['4th CBD', 2],
                        ['5th CBD', 2]
                    ]
                }, {
                    id: 'rent-Kijabe',
                    name: 'Lorry for Kijabe 2020',
                    data: [
                        ['1st Kijabe', 1],
                        ['2nd Kijabe', 5]
                    ]
                }, {
                    id: 'rent-Westlands',
                    name: 'Lorry for Westlands 2020',
                    data: [
                        ['1st Westlands', 2],
                        ['2nd Westlands', 3],
                        ['3rd Westlands', 2]
                    ]
                }, {
                    id: 'rent-Kilimani',
                    name: 'Lorry for Kilimani 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Kilimani', 2],
                        ['2nd Kilimani', 3],
                        ['3rd Kilimani', 1],
                        ['4th Kilimani', 1],
                        ['5th Kilimani', 1]
                    ]
                }, {
                    id: 'rent-Upper-Hill',
                    name: 'Lorry for Upper-Hill 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Upper-Hill', 4],
                        ['2nd Upper-Hill', 3]
                    ]
                }, {
                    id: 'rent-Kombo',
                    name: 'Lorry for Kombo 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Kombo', 4],
                        ['2nd Kombo', 3],
                        ['3rd Kombo', 3]
                    ]
                }, {
                    id: 'rent-Comm',
                    name: 'Lorry for Comm 2020',
                    data: [
                        ['1st Comm', 3],
                        ['2nd Comm', 5],
                        ['3rd Comm', 6],
                        ['4th Comm', 2],
                        ['5th Comm', 2]
                    ]
                }, {
                    id: 'rent-Ngara',
                    name: 'Lorry for Ngara 2020',
                    data: [
                        ['1st Ngara', 1],
                        ['2nd Ngara', 5]
                    ]
                }, {
                    id: 'rent-Highridge',
                    name: 'Lorry for Highridge 2020',
                    data: [
                        ['1st Highridge', 2],
                        ['2nd Highridge', 3],
                        ['3rd Highridge', 2]
                    ]
                }, {
                    id: 'rent-Ind. Area',
                    name: 'Lorry for Ind. Area 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Ind. Area', 2],
                        ['2nd Ind. Area', 3],
                        ['3rd Ind. Area', 1],
                        ['4th Ind. Area', 1],
                        ['5th Ind. Area', 1]
                    ]
                }, {
                    id: 'rent-Yaya',
                    name: 'Lorry for Yaya 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Yaya', 4],
                        ['2nd Yaya', 3]
                    ]
                }, {
                    id: 'rent-Buru',
                    name: 'Lorry for Buru 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Buru', 4],
                        ['2nd Buru', 3],
                        ['3rd Buru', 3]
                    ]
                },
				
            ]
        }
    })
});
//========================================================================================================================================================
/*revenue streams version two*/
//=======================================================================================================================================================



Highcharts.chart('RevenueStreams', {
    chart: {
        type: 'column',
        backgroundColor: 'transparent'

    },
    title: {
        text: 'Collection by Revenue stream',
        style: {
            color: '#a5a8ad'
        }
    },
    xAxis: {
        categories: ['CBD', 'Kijabe', 'Westlands', 'Kilimani', 'Upper-Hill', 'Kombo', 'Comm', 'Ngara', 'Highridge', 'Ind. Area', 'Yaya', 'Buru']
    },
    yAxis: {
        gridLineColor: '#197F07',
        gridLineWidth: 0.3,
        min: 0,
        title: {
            text: 'Total revenue collected'
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: '#a5a8ad'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
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
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
    },
    tooltip: {
        headerFormat: '<h3><strong class="mb-3" style="font-size: 20px !important;">{point.x}</strong></h3><br/><br/><br/>',
        /*  pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}', */
        pointFormat: '<strong style="color:{series.color}; font-weight:bold;">{series.name}</strong>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/><br/>',
		footerFormat	: 
                 '<table></tbody><tr style="border-top:1px solid black 0.5px; color:white;"><th>Total: </th>'
        		+'<td style="text-align:right"><b>KES {point.total:,.0f}</b></td></tr>'
            	+'</tbody></table>',
        shared: true,
        crosshairs: true


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
            point: {
                events: {
                    mouseOver: updateStackColor(0.2),
                    mouseOut: updateStackColor(0)
                }
            }

        },
        series: {
            //connectNulls: true

            pointWidth: 10,
            borderWidth: 0,
            borderColor: 'black',


        },
    },
    series: [{
        name: 'Private Fees',
        data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3]
    }, {
        name: 'Billboards and Advertisements',
        data: [2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2]
    }, {
        name: 'Other incomes',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Canter',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Nissan',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Pickups',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Plans and Inspections',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Fire Inspection Certificate',
        data: [2, 5, 3, 4, 3, 4, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'House and stall rents',
        data: [5, 3, 4, 3, 4, 4, 4, 2, 2, 5, 3, 4]
    }]
});
//		hover effect
function updateStackColor(alpha) {
    return function () {
        const x = this.x
        const color = Highcharts.color
        const colors = Highcharts.getOptions().colors

        this.series.chart.series.forEach((series, i) => {
            series.data.forEach(point => {
                const basePointColor = color(colors[i])

                point.update({
                    color: alpha === 0
                        ? basePointColor.get() // set original color
                        : point.x === x
                        ? basePointColor.brighten(-alpha).get() // brighten original color
                        : basePointColor.brighten(alpha).get() // dim orignal color
                }, false)
            })
        })

        this.series.chart.redraw(false)
    }
}


//		hover effect

