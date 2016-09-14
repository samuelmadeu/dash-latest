function TwitterCtrl($location, $scope) {
    var vm = this;

    $scope.main.breadCrumbs = ['Social Share','Twitter'];


    vm.todaydate = new Date();
    vm.twitterVolumeColors = ['#45b7cd', '#ff6384', '#ff8e72'];
    vm.twitterVolumeLabels = ["28/06/2016", "05/06/2016", "12/06/2016", "19/06/2016", "26/06/2016"];
    vm.twitterVolumeData = [
        [15289, 15528, 15692, 15737, 15749],
        [0, 239, 164, 45, 12],
    ];

    vm.twitterVolumeChartType = 'line';
    vm.twitterVolumeSeries = ['Aggregated Twitter Followers', 'Twitter Followers Gained'];
    vm.twitterVolumeDatasetOverride = [{
        type: 'line',
       // label: "Aggregated Twitter Followers",
        fill: false,
        backgroundColor: 'rgba(255, 206, 86, 0.7)',
        borderColor: 'rgba(255, 206, 86, 0.7)',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
    }, {
      //  label: "Twitter Followers Gained",
        type: 'bar',
        fill: false,
        backgroundColor: 'rgba(91, 155, 213, 0.7)',
        borderColor: 'rgba(91, 155, 213, 1.5)',

        borderWidth: 2,
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-2'
    }];
    vm.twitterVolumeOptions = {
        responsive: false,
        tooltips: {
            mode: 'label'
        },
        elements: {
            line: {
                fill: false
            }
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Dates'
                },
                display: true,
                gridLines: {
                    display: false
                },
                labels: {
                    show: true,
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: ''
                },
                type: "linear",
                display: true,
                position: "left",
                id: "y-axis-1",
                gridLines: {
                    display: false
                },
                labels: {
                    show: true,
                }
            }, {
                type: "linear",
                display: true,
                position: "right",
                id: "y-axis-2",
                gridLines: {
                    display: false
                },
                labels: {
                    show: true,
                }
            }]
        }
    };



    //Twitter Engagement
    vm.trafficEngagementColors = ['#45b7cd', '#ff6384', '#ff8e72'];
    vm.trafficEngagementLabels = ["28/06/2016", "05/06/2016", "12/06/2016", "19/06/2016", "26/06/2016"];
    vm.trafficEngagementData = [
        [2, 2, 1, 1, 1],
    ];
    vm.trafficEngagementSeries = ["Organic Traffic Share in %", "Non-Organic Traffic Share in %"];
    vm.trafficEngagementChartType = 'bar';
    vm.trafficEngagementDatasetOverride = [{
        label: "Twitter Engagement",

        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2
    }];
    vm.trafficEngagementOptions = {
        fontFamily: "'Montserrat', sans-serif;",
        fontSize: 9,
        fontColor: "#4C4C4C",
        responsive: false,

        scales: {
            yAxes: [{
                stacked: false,
                display: true,
                ticks: {
                    beginAtZero: true,
                    //maxTicksLimit:10,
                    //stepSize : 20,
                    // max: 3
                }

            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Dates'
                }
            }],
        } // Closed the scale
    };

    //
    //Twitter Activity
    vm.twitterActivityColors = ['#45b7cd', '#ff6384', '#ff8e72'];
    vm.twitterActivityLabels = ["28/06/2016", "05/06/2016", "12/06/2016", "19/06/2016", "26/06/2016"];
    vm.twitterActivityData = [
        [200, 33, 17, 14, 33],
    ];

    vm.twitterActivityChartType = 'bar';
    vm.twitterActivitySeries = ["Twitter Followers Volume and Gained"];
    vm.twitterActivityDatasetOverride = [{
        label: "Twitter Followers Volume and Gained",
        borderWidth: 2,
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
    }];
    vm.twitterActivityOptions = {
        fontFamily: "'Montserrat', sans-serif;",
        fontSize: 9,
        fontColor: "#4C4C4C",
        responsive: false,
        scales: {
            yAxes: [{
                stacked: false,
                display: true,
                ticks: {
                    beginAtZero: true,
                    //maxTicksLimit:10,
                    //stepSize : 20,
                    // max: 3
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Dates'
                }
            }],
        } // Closed the scale
    };
};


angular.module('sobold').controller('TwitterCtrl', TwitterCtrl)