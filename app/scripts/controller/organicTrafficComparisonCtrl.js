function OrganicTrafficComparisonCtrl($location, $scope) {
    var vm = this;

    $scope.main.breadCrumbs = ['Organic Traffic Comparison'];


    var growthDataY1 = [],
        growthDataY2 = [],
        growthDataY3 = [],
        growthDataLabels = [];

    function getData() {
        alasql.promise('select * from xlsx("ANGLE_adjusted.xlsx")')
            .then(function(data) {
                angular.forEach(data, function(item) {
                    if (item.Month && item.Month != "YEARLY:") {
                        growthDataY1.push(item['2015']);
                        growthDataY2.push(item['2016']);
                        growthDataY3.push(item['16vs15']);
                        growthDataLabels.push(item.Month);


                    } else if (item.Month && item.Month == "YEARLY:") {
                        vm.Y1 = item['2015'];
                        vm.Y2 = item['2016'];
                        vm.diff = item['16vs15'];
                    }
                })
                vm.trafficGrowthData.push(growthDataY1);
                vm.trafficGrowthData.push(growthDataY2);
                vm.trafficGrowthData.push(growthDataY3);
                vm.trafficGrowthLabels = growthDataLabels;

                vm.trafficMonthlyLabels = growthDataLabels;
                vm.trafficMonthlyData.push(growthDataY1);
                vm.trafficMonthlyData.push(growthDataY2);


                 vm.trafficYearlyLabels = ["2015", "2016"];
                 vm.trafficYearlyData = [  vm.Y1,vm.Y2];
            }).catch(function(err) {
                console.log('Error:', err);
            });

    }
    getData();

    vm.todaydate = new Date();
    vm.trafficGrowthColors = ['#45b7cd', '#ff6384', '#ff8e72'];
    vm.trafficGrowthLabels = [];
    vm.trafficGrowthData = [];
    vm.trafficGrowthSeries = ["2016", "2015", "Growth"];
    vm.trafficGrowthDatasetOverride = [{
            label: "2016",
            type: 'line',
            fill: false,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            yAxisID: 'y-axis-2'
        },

        {
            label: "2015",
            type: 'line',
            fill: false,
            backgroundColor: "rgba(91, 155, 213, 0.5)",
            borderColor: "rgba(91, 155, 213, 1)",
            yAxisID: 'y-axis-2'
        }, {
            type: 'bar',
            label: "Growth",
            fill: false,
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            borderColor: 'rgba(75, 192, 192, 1)',
            yAxisID: 'y-axis-1'
        }
    ];
    vm.trafficGrowthOptions = {
        size: {
            height: 285,
            width: 694
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
                type: "linear",
                display: true,
                position: "right",
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
                position: "left",
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



    //Organic Traffic Monthly
    vm.trafficMonthlyColors = ['#45b7cd', '#ff6384', '#ff8e72'];
    vm.trafficMonthlyLabels = [];
    vm.trafficMonthlyData = [];
    vm.trafficMonthlySeries = ["2016", "2015"];
    vm.trafficMonthlyChartType = 'line';
    vm.trafficMonthlyDatasetOverride = [{
            type: 'line',
            label: "2015",
            backgroundColor: "rgba(91, 155, 213, 0.5)",
            borderColor: "rgba(91, 155, 213, 1)",
        },

        {
            type: 'line',
            label: "2016",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
        }
    ];
    vm.trafficMonthlyOptions = {
        fontFamily: "'Montserrat', sans-serif;",
        fontSize: 6,
        fontColor: "#9A9A9A",
        responsive: false,
        size: {
            height: 285,
            width: 660
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Dates'
                },

                ticks: {
                    beginAtZero: true,
                    max: 3000,
                },
            }]
        }
    };

    //
    //Organic Traffic Yearly
    vm.trafficYearlyColors = ['#45b7cd', '#ff6384', '#ff8e72'];
    vm.trafficYearlyLabels = ["2015", "2016"];
    vm.trafficYearlyData = [
        [20960, 17962]
    ];
    vm.trafficYearlySeries = ["Organic Yearly Traffic"];
    vm.trafficYearlyChartType = 'bar';
    vm.trafficYearlyDatasetOverride = [{
        type: 'bar',
        label: "Organic Yearly Traffic",
        backgroundColor: "rgba(91, 155, 213, 0.5)",
        borderColor: "rgba(91, 155, 213, 1)",
        borderWidth: 2
    }];
    vm.trafficYearlyOptions = {
        fontFamily: "'Montserrat', sans-serif;",
        fontSize: 6,
        fontColor: "#9A9A9A",
        responsive: false,
        size: {
            height: 317,
            width: 285
        },
        title: {
            display: false
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Years'
                },
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                    min: 17000,
                    max: 21000,
                    maxTicksLimit: 6

                }
            }]
        }
    };
};


angular.module('sobold').controller('OrganicTrafficComparisonCtrl', OrganicTrafficComparisonCtrl)