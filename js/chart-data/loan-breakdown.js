//=======================================================================================================================================================
/*revenue streams version two*/
//=======================================================================================================================================================
$(function() {

    // Create the chart
    $('#loanBreakdown').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        lang: {
            thousandsSep: ','
        },
        title: {
            text: 'Profit by Loan Type',
            style: {
                color: '#12263f'
            }
        },
        yAxis: {
            gridLineColor: '#95aac9',
            gridLineDashStyle: 'ShortDot',
            gridLineWidth: 0.3,
            min: 0,
            title: {
                text: 'Gross Profit collected'
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: '#12263f'
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
            borderColor: '#12263f',
            borderWidth: 1,
            itemStyle: {
                color: '#12263f',
                font: '600 10px "Muli", sans-serif'
            },
            itemHoverStyle: {
                color: '#333',
                font: '600 10px "Muli", sans-serif'
            },
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    style: {
                        color: 'white',
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
                borderColor: 'black',


            },
        },

        tooltip: {
            headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
            //		useHTML: true,
            pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">KES {point.y}</b><br/>',
            formatter: function() {

                var point = this.point,
                    s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><span style="color:' + point.color + '"><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' ' + '</span>';
                if (point.drilldown) {
                    s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' (' + Highcharts.numberFormat(this.percentage, 0, '.', ',') + '%)</p><br/>';
                    s += '<p>Click to view <b>' + point.name + '</b> Collections </p>';
                }
                return s;
            },
            crosshairs: true


        },

        series: [{
            //national bank collections by the months
            name: 'wezesha',
            data: [{

                    name: 'Jan',
                    y: 5,
                    drilldown: 'wezesha-jan',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'Feb',
                    y: 2,
                    drilldown: 'wezesha-feb',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'Mar',
                    y: 4,
                    drilldown: 'wezesha-mar',
                    //color: '#e7c500' //yellow
                }, {

                    name: 'Apr',
                    y: 5,
                    drilldown: 'wezesha-apr',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'May',
                    y: 2,
                    drilldown: 'wezesha-may',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'Jun',
                    y: 4,
                    drilldown: 'wezesha-jun',
                    //color: '#e7c500' //yellow
                }, {

                    name: 'Jul',
                    y: 5,
                    drilldown: 'wezesha-jul',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'Aug',
                    y: 12,
                    drilldown: 'wezesha-aug',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'Sep',
                    y: 4,
                    drilldown: 'wezesha-sep',
                    //color: '#e7c500' //yellow
                }, {

                    name: 'Oct',
                    y: 15,
                    drilldown: 'wezesha-oct',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'Nov',
                    y: 2,
                    drilldown: 'wezesha-nov',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'Dec',
                    y: 4,
                    drilldown: 'wezesha-dec',
                    //color: '#e7c500' //yellow
                }]
                //end of wezesha fee collections
        }, {
            //land rate collections
            name: 'Boresha',
            data: [{
                    name: 'Jan',
                    y: 11,
                    drilldown: 'lr-jan',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Feb',
                    y: 5,
                    drilldown: 'lr-feb',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Mar',
                    y: 2,
                    drilldown: 'lr-mar',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Apr',
                    y: 1,
                    drilldown: 'lr-apr',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'May',
                    y: 5,
                    drilldown: 'lr-may',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Jun',
                    y: 21,
                    drilldown: 'lr-jun',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Jul',
                    y: 11,
                    drilldown: 'lr-jul',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Aug',
                    y: 5,
                    drilldown: 'lr-aug',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Sep',
                    y: 2,
                    drilldown: 'lr-sep',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Oct',
                    y: 1,
                    drilldown: 'lr-oct',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Nov',
                    y: 5,
                    drilldown: 'lr-nov',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Dec',
                    y: 2,
                    drilldown: 'lr-dec',
                    //color: '#0aae8f' // blue
                }]
                //end of landrate collections
        }, {
            //SBP collections
            name: 'Mortgage Loan',
            data: [{
                    name: 'Jan',
                    y: 16,
                    drilldown: 'sbp-jan',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Feb',
                    y: 15,
                    drilldown: 'sbp-feb',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Mar',
                    y: 3,
                    drilldown: 'sbp-mar',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Apr',
                    y: 1,
                    drilldown: 'sbp-apr',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'May',
                    y: 5,
                    drilldown: 'sbp-may',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Jun',
                    y: 2,
                    drilldown: 'sbp-jun',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Jul',
                    y: 11,
                    drilldown: 'sbp-jul',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Aug',
                    y: 5,
                    drilldown: 'sbp-aug',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Sep',
                    y: 2,
                    drilldown: 'sbp-sep',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Oct',
                    y: 1,
                    drilldown: 'sbp-oct',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Nov',
                    y: 5,
                    drilldown: 'sbp-nov',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Dec',
                    y: 2,
                    drilldown: 'sbp-dec',
                    //color: '#0aae8f' // blue
                }]
                //end of SBP collections
        }, {
            //Market Fees collections
            name: 'Elimu Loan',
            data: [{
                    name: 'Jan',
                    y: 11,
                    drilldown: 'market-jan',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Feb',
                    y: 15,
                    drilldown: 'market-feb',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Mar',
                    y: 12,
                    drilldown: 'market-mar',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Apr',
                    y: 19,
                    drilldown: 'market-apr',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'May',
                    y: 15,
                    drilldown: 'market-may',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Jun',
                    y: 21,
                    drilldown: 'market-jun',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Jul',
                    y: 11,
                    drilldown: 'market-jul',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Aug',
                    y: 5,
                    drilldown: 'market-aug',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Sep',
                    y: 2,
                    drilldown: 'market-sep',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Oct',
                    y: 13,
                    drilldown: 'market-oct',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Nov',
                    y: 5,
                    drilldown: 'market-nov',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Dec',
                    y: 2,
                    drilldown: 'market-dec',
                    //color: '#0aae8f' // blue
                }]
                //end of landrate collections
        }, {
            //house and stall rents
            name: 'Car Loan',
            data: [{
                    name: 'Jan',
                    y: 1,
                    drilldown: 'rent-jan',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Feb',
                    y: 15,
                    drilldown: 'rent-feb',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Mar',
                    y: 2,
                    drilldown: 'rent-mar',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Apr',
                    y: 1,
                    drilldown: 'rent-apr',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'May',
                    y: 15,
                    drilldown: 'rent-may',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Jun',
                    y: 2,
                    drilldown: 'rent-jun',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Jul',
                    y: 11,
                    drilldown: 'rent-jul',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Aug',
                    y: 5,
                    drilldown: 'rent-aug',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Sep',
                    y: 7,
                    drilldown: 'rent-sep',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Oct',
                    y: 13,
                    drilldown: 'rent-oct',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Nov',
                    y: 5,
                    drilldown: 'rent-nov',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Dec',
                    y: 2,
                    drilldown: 'rent-dec',
                    //color: '#0aae8f' // blue
                }]
                //end of landrate collections
        }, ],
        drilldown: {
            activeDataLabelStyle: {
                color: 'white',
                textShadow: '0 0 2px black, 0 0 2px black'
            },
            series: [
                //wezesha collections by months and dates
                {
                    id: 'wezesha-jan',
                    name: 'wezesha collections in January 2020',
                    data: [
                        ['1st Jan', 4],
                        ['2nd Jan', 2],
                        ['3rd Jan', 1],
                        ['4th Jan', 2],
                        ['5th Jan', 1]
                    ]
                }, {
                    id: 'wezesha-feb',
                    name: 'wezesha collections in February 2020',
                    data: [
                        ['1st Feb', 4],
                        ['2nd Feb', 2]
                    ]
                }, {
                    id: 'wezesha-mar',
                    name: 'wezesha collections in March 2020',
                    data: [
                        ['1st Mar', 4],
                        ['2nd Mar', 2],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'wezesha-apr',
                    name: 'wezesha collections in April 2020',
                    data: [
                        ['1st Apr', 4],
                        ['2nd Apr', 2],
                        ['3rd Apr', 1],
                        ['4th Apr', 2],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'wezesha-may',
                    name: 'wezesha collections in May 2020',
                    data: [
                        ['1st May', 4],
                        ['2nd May', 2]
                    ]
                }, {
                    id: 'wezesha-jun',
                    name: 'wezesha collections in June 2020',
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 2],
                        ['3rd Jun', 2]
                    ]
                }, {
                    id: 'wezesha-jul',
                    name: 'wezesha collections in July 2020',
                    data: [
                        ['1st Jul', 4],
                        ['2nd Jul', 2],
                        ['3rd Jul', 1],
                        ['4th Jul', 2],
                        ['5th Jul', 1]
                    ]
                }, {
                    id: 'wezesha-aug',
                    name: 'wezesha collections in Auust 2020',
                    data: [
                        ['1st aug', 4],
                        ['2nd aug', 2]
                    ]
                }, {
                    id: 'wezesha-sep',
                    name: 'wezesha collections in September 2020',
                    data: [
                        ['1st sep', 4],
                        ['2nd sep', 2],
                        ['3rd sep', 2]
                    ]
                }, {
                    id: 'wezesha-oct',
                    name: 'wezesha collections in October 2020',
                    data: [
                        ['1st Oct', 4],
                        ['2nd Oct', 2],
                        ['3rd Oct', 1],
                        ['4th Oct', 2],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'wezesha-nov',
                    name: 'wezesha collections in November 2020',
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 2]
                    ]
                }, {
                    id: 'wezesha-dec',
                    name: 'wezesha collections in December  2020',
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 2],
                        ['3rd Dec', 2]
                    ]
                },

                //end of wezesha collections by months and dates

                //start of Boresha collections by months and dates
                {
                    id: 'lr-jan',
                    name: 'Landrates revenue collections for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'lr-feb',
                    name: 'Landrates revenue collections for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'lr-mar',
                    name: 'Landrates revenue collections for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'lr-apr',
                    name: 'Landrates revenue collections for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'lr-may',
                    name: 'Landrates revenue collections for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'lr-jun',
                    name: 'Landrates revenue collections for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'lr-jul',
                    name: 'Landrates revenue collections for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'lr-aug',
                    name: 'Landrates revenue collections for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'lr-sep',
                    name: 'Landrates revenue collections for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'lr-oct',
                    name: 'Landrates revenue collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'lr-nov',
                    name: 'Landrates revenue collections for November 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'lr-dec',
                    name: 'Landrates revenue collections for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                },

                //start of SBP daily collections
                {
                    id: 'sbp-dec',
                    name: 'SBP collections for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                }, {
                    id: 'sbp-jan',
                    name: 'SBP collections for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'sbp-feb',
                    name: 'SBP collections for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'sbp-mar',
                    name: 'SBP collections for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'sbp-apr',
                    name: 'Landrates revenue collections for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'sbp-may',
                    name: 'SBP collections for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'sbp-jun',
                    name: 'SBP collections for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'sbp-jul',
                    name: 'SBP collections for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'sbp-aug',
                    name: 'SBP collections for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'sbp-sep',
                    name: 'SBP collections for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'sbp-oct',
                    name: 'SBP collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                },
                {
                    id: 'sbp-nov',
                    name: 'SBP collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                },
                //end of SBP collections

                //start of market fee collections
                {
                    id: 'market-jan',
                    name: 'Market fee collections for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'market-feb',
                    name: 'Market fee collections for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'market-mar',
                    name: 'Market fee collections for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'market-apr',
                    name: 'Market fee collections for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'market-may',
                    name: 'Market fee collections for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'market-jun',
                    name: 'Market fee collections for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'market-jul',
                    name: 'Market fee collections for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'market-aug',
                    name: 'Market fee collections for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'market-sep',
                    name: 'Market fee collections for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'market-oct',
                    name: 'Market fee collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'market-nov',
                    name: 'Market fee collections for November 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'market-dec',
                    name: 'Market fee collections for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                },

                // end of market fees
                //start of house and stall rents
                {
                    id: 'rent-jan',
                    name: 'house & stall rents for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'rent-feb',
                    name: 'house & stall rents for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'rent-mar',
                    name: 'house & stall rents for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'rent-apr',
                    name: 'house & stall rents for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'rent-may',
                    name: 'house & stall rents for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'rent-jun',
                    name: 'house & stall rents for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'rent-jul',
                    name: 'house & stall rents for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'rent-aug',
                    name: 'house & stall rents for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'rent-sep',
                    name: 'house & stall rents for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'rent-oct',
                    name: 'house & stall rents for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'rent-nov',
                    name: 'house & stall rents for November 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'rent-dec',
                    name: 'house & stall rents for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
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
            color: '#12263f'
        }
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
                color: '#12263f'
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
        borderColor: '#12263f',
        borderWidth: 1,
        shadow: false
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderColor: '#12263f',
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
        footerFormat: '<table></tbody><tr style="border-top:1px solid black 0.5px; color:white;"><th>Total: </th>' +
            '<td style="text-align:right"><b>KES {point.total:,.0f}</b></td></tr>' +
            '</tbody></table>',
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
        name: 'wezesha Fees',
        data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3]
    }, {
        name: 'Billboards and Advertisements',
        data: [2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2]
    }, {
        name: 'Other incomes',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Market Fees',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Single Business Permits',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Boresha',
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
    return function() {
        const x = this.x
        const color = Highcharts.color
        const colors = Highcharts.getOptions().colors

        this.series.chart.series.forEach((series, i) => {
            series.data.forEach(point => {
                const basePointColor = color(colors[i])

                point.update({
                    color: alpha === 0 ?
                        basePointColor.get() // set original color
                        :
                        point.x === x ?
                        basePointColor.brighten(-alpha).get() // brighten original color
                        :
                        basePointColor.brighten(alpha).get() // dim orignal color
                }, false)
            })
        })

        this.series.chart.redraw(false)
    }
}


//		hover effect