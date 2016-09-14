function OrganicTrafficIndexCtrl($location, $scope) {
    var vm = this;

    $scope.main.breadCrumbs = ['Traffic Index'];


    vm.todaydate = new Date();
    vm.trafficKeywordColors = ['#45b7cd', '#ff6384', '#ff8e72'];
    vm.trafficKeywordLabels = ["20th of July", "27th of July"];
    vm.trafficKeywordData = [
        [13, 12],
    ];

    vm.trafficKeywordChartType = 'line';
    vm.trafficKeywordSeries = ["20th of July", "27th of July"];
    vm.trafficKeywordDatasetOverride = [{
        label: "Keyword Positions",
        type: 'line',
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1
    }];
    vm.trafficKeywordOptions = {
        scales: {
            yAxes: [{
                reverse: true
            }],
            xAxes: [{
                scalelabel: {
                    display: true,
                    labelString: 'Dates'
                },
            }],
        },
        fontFamily: "'Montserrat', sans-serif;",
        fontSize: 6,
        fontColor: "#9A9A9A",
        responsive: false,
        min: 0,
        max: 13,
        maxTicksLimit: 6
    };



    //Best Keyword Positions
    vm.trafficPositionColors = ['#45b7cd', '#ff6384', '#ff8e72'];
    vm.trafficPositionLabels = ["proactive Investors", "angle plc", "proactive Investors", "others"];
    vm.trafficPositionData = [32, 50, 17, 1];
    vm.trafficPositionSeries = ["proactive Investors", "angle plc", "proactive Investors", "others"];
    vm.trafficPositionChartType = 'doughnut';
    vm.trafficPositionDatasetOverride = {
        backgroundColor: ["#FF6384", "#5B9BD5", "#FFCE56", "#50C3AC"],
        borderColor: ["#FF6384", "#5B9BD5", "#FFCE56", "#50C3AC"],
        borderWidth: 1
    };
    vm.trafficPositionOptions = {
        fontFamily: "'Montserrat', sans-serif;",
        fontSize: 6,
        fontColor: "#9A9A9A",
        responsive: false,
    };

    //
    //Traffic Index
    vm.trafficIndexColors = ['#45b7cd', '#ff6384', '#ff8e72'];
    vm.trafficIndexLabels = ["TI 1", "TI 2", "TI 3", "TI 4", "TI 5", "TI 6"];
    vm.trafficIndexData = [
        [69, 74],
    ];

    vm.trafficIndexChartType = 'line';
    vm.trafficIndexSeries = ["TI 1", "TI 2", "TI 3", "TI 4", "TI 5", "TI 6"];
    vm.trafficIndexDatasetOverride = [{
        label: "Traffic index",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1
    }];
    
    vm.trafficIndexOptions = {
        fontFamily: "'Montserrat', sans-serif;",
        fontSize: 6,
        fontColor: "#9A9A9A",
        xAxes: {
            scaleLabel: {
                display: true,
                labelString: ''
            }
        },
        responsive: false,
        min: 68,
        max: 75,
        maxTicksLimit: 6
    };
};


angular.module('sobold').controller('OrganicTrafficIndexCtrl', OrganicTrafficIndexCtrl)