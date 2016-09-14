function OrganicTrafficShareCtrl($location, $scope) {
    var vm = this;

     $scope.main.breadCrumbs = ['Organic Traffic Share'];


    vm.todaydate = new Date();
    vm.trafficVolumeColors = ['#45b7cd', '#ff6384', '#ff8e72'];
    vm.trafficVolumeLabels = ["Aug-15", "Sep-15", "Oct-15", "Nov-15", "Dec-15", "Jan-16", "Feb-16", "Mar-16", "Apr-16", "May-16", "Jun-16", "Jul-16"];
    vm.trafficVolumeData = [
        [1405, 1564, 1230, 1258, 1266, 1913, 1604, 2111, 1643, 1463, 1574, 1357],
        [2367, 2164, 1544, 2082, 1912, 2394, 1464, 2075, 1986, 2001, 2063, 1607],
    ];

    vm.trafficVolumeChartType = 'line';
    vm.trafficVolumeSeries = ["Organic Traffic Share", "Non-Organic Traffic Share"];
    vm.trafficVolumeDatasetOverride = [{
        label: "Organic Traffic Share",
        fill: false,
        type: 'line',
        backgroundColor: "rgba(91, 155, 213, 0.5)",
        borderColor: "rgba(91, 155, 213, 1)",
    }, {
        label: "Non-Organic Traffic Share",
        fill: false,
        type: 'line',
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
    }];
    vm.trafficVolumeOptions = {
        fontFamily: "'Montserrat', sans-serif;",
        fontSize: 9,
        fontColor: "#4C4C4C",
        responsive: false,
        scales: {
            display: true,
            yAxes: [{
                stacked: false,
                ticks: {
                    stepsize: 20,
                    max: 3000,
                    // min:600, 
                    beginAtZero: false,
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Dates'
                }
            }]
        }
    };



    //Organic Traffic Percentage
    vm.trafficPercentageColors = ['#45b7cd', '#ff6384', '#ff8e72'];
    vm.trafficPercentageLabels = ["Aug-15", "Sep-15", "Oct-15", "Nov-15", "Dec-15", "Jan-16", "Feb-16", "Mar-16", "Apr-16", "May-16", "Jun-16", "Jul-16"];
    vm.trafficPercentageData = [
        [37, 42, 44, 38, 40, 44, 52, 50, 45, 42, 43, 46],
        [67, 58, 56, 62, 60, 56, 48, 50, 55, 58, 57, 54]
    ];
    vm.trafficPercentageSeries = ["Organic Traffic Share in %", "Non-Organic Traffic Share in %"];
    vm.trafficPercentageChartType = 'line';
    vm.trafficPercentageDatasetOverride = [{
        label: "Organic Traffic Share in %",
        type: 'line',
        backgroundColor: "rgba(91, 155, 213, 0.5)",
        borderColor: "rgba(91, 155, 213, 1)",
    }, {
        label: "Non-Organic Traffic Share in %",
        type: 'line',
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
    }];
    vm.trafficPercentageOptions = {
        fontFamily: "'Montserrat', sans-serif;",
        fontSize: 6,
        fontColor: "#9A9A9A",
        responsive: false,
        scales: {
            yAxes: [{
                stacked: true,
                display: true,
                ticks: {
                    beginAtZero: true,
                    //maxTicksLimit:10,
                    stepSize: 20,
                    max: 100,
                },
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Dates'
                }
            }],
        }
    };

    //
    //Organic Traffic Yearly
    vm.trafficMobileColors = ['#45b7cd', '#ff6384', '#ff8e72'];
    vm.trafficMobileLabels = ["Aug-15", "Sep-15", "Oct-15", "Nov-15", "Dec-15", "Jan-16", "Feb-16", "Mar-16", "Apr-16", "May-16", "Jun-16", "Jul-16"];
    vm.trafficMobileData = [
        [594, 444, 342, 419, 420, 545, 426, 539, 440, 367, 424, 416],
        [3178, 3284, 2432, 2921, 2758, 3762, 2642, 3647, 3189, 3097, 3213, 2548],
    ];

    vm.trafficMobileChartType = 'line';
    vm.trafficMobileSeries = ["Organic Traffic Share", "Non-Organic Traffic Share"];
    vm.trafficMobileDatasetOverride = [{
        label: "Mobile",
        type: 'line',
        backgroundColor: "rgba(91, 155, 213, 0.5)",
        borderColor: "rgba(91, 155, 213, 1)",
    }, {
        label: "Desktop & Tablet",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        type: 'line',
    }];
    vm.trafficMobileOptions = {
        fontFamily: "'Montserrat', sans-serif;",
        fontSize: 9,
        fontColor: "#4C4C4C",
        responsive: false,
        scales: {
            yAxes: [{
                stacked: true,
                display: true,
                ticks: {
                    beginAtZero: true,
                    //maxTicksLimit:10,
                    //stepSize : 20,
                    max: 5000,
                },
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Dates'
                },
            }]
        }
    };
};


angular.module('sobold').controller('OrganicTrafficShareCtrl', OrganicTrafficShareCtrl)