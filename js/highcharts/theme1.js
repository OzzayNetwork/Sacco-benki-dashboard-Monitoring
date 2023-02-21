
Highcharts.createElement('link', {
    href: 'https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"',
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);
Highcharts.theme = {
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',   
    '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(255, 255, 255)'],
                [1, 'rgb(240, 240, 255)']
            ]
        },
		 plotBorderColor: 'transparent'
    },
	 style: {
            fontFamily: '\'Muli\', sans-serif'
        },
    title: {
        style: {
            color: '#000',
            font: '800 16px "Muli", sans-serif'
        }
    },
	 labels: {
        style: {
            color: 'black',
			font: '600 "Muli", sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 12px "Muli", sans-serif'
        }
    },
	xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: 'black',
				font: '600 10px "Muli", sans-serif'
            }
        },
        lineColor: 'transparent',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: 'black',
				font: '600 13px "Muli", sans-serif'
            }
        }
    },
	
	 yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
               color: 'black',
				font: '800 10px "Muli", sans-serif'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
//        tickWidth: 1,
        title: {
            style: {
                color: 'black',
				font: '600 13px "Muli", sans-serif'
            }
        }
    },
    tooltip: {
        backgroundColor: 'black',
        style: {
            color: 'white',
			font: '600 12px "Muli", sans-serif'
        }
    },
	
	legend: {
        backgroundColor: 'white',
        itemStyle: {
            color: 'black',
			font: '600 12px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: 'black',
			font: '600 12px "Muli", sans-serif'
        },
        itemHiddenStyle: {
            color: 'black',
			font: '600 12px "Muli", sans-serif'
        },
        title: {
            style: {
                color: 'black',
				font: '600 12px "Muli", sans-serif'
            }
        }
    },
	
   
	
	credits: {
        style: {
            color: 'black',
			font: '600 "Muli", sans-serif'
        }
    },
    labels: {
        style: {
            color: 'black',
			font: '600 "Muli", sans-serif'
        }
    },
	
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);