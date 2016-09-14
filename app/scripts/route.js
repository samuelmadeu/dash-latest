
function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

   // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/dashboards/trafficcomparison");
    $stateProvider
      .state('login', {
             url: '/login',
             templateUrl: 'views/login.html',
             controller: 'LoginCtrl',
             controllerAs: 'login',
                data : {
                 pageTitle : 'Login'
             }
         })
        .state('dashboards', {
            abstract: true,
            url: "/dashboards",
            templateUrl: "views/dashboard/dashboard.html",
        })
         .state('dashboards.organictrafficcomparison', {
             url: '/trafficcomparison',
             templateUrl: 'views/dashboard/organictrafficcomparison.html',
             controller: 'OrganicTrafficComparisonCtrl',
             controllerAs: 'trafficcomparison',
             data : {
                 pageTitle : 'Organic Traffic Comparison'
             }
         })
           .state('dashboards.organictrafficshare', {
             url: '/organictrafficshare',
             templateUrl: 'views/dashboard/organictrafficshare.html',
             controller: 'OrganicTrafficShareCtrl',
             controllerAs: 'trafficshare',
             data : {
                 pageTitle : 'Organic Traffic Share'
             }
         })
         .state('dashboards.organictrafficindex', {
             url: '/organictrafficindex',
             templateUrl: 'views/dashboard/organictrafficindex.html',
             controller: 'OrganicTrafficIndexCtrl',
             controllerAs: 'trafficindex',
              data : {
                 pageTitle : 'Organic Traffic Index'
             }
         })
          .state('dashboards.twitter', {
             url: '/twitter',
             templateUrl: 'views/dashboard/twitter.html',
             controller: 'TwitterCtrl',
             controllerAs: 'twitter',
              data : {
                 pageTitle : 'Twitter',
                 parent: ['Social Media']
             }
         });
       
};

angular.module('sobold').config(routeConfig)