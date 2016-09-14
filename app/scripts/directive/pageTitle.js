(function () {
    angular.module('sobold').directive('pageTitle', pageTitle);

    pageTitle.$inject = ['$rootScope','$timeout'];
    function pageTitle($rootScope, $timeout) {
        return {
            link: link
        };

        function link(scope, element) {
            var listener = function (event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1
                var title = 'SoBold | Dashboard';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'SoBold | ' + toState.data.pageTitle;
                $timeout(function () {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
})();
