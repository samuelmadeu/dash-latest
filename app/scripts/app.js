/**
 * INSPINIA - Responsive Admin Theme
 *
 */
(function () {
    angular.module('sobold', [
        'ui.router',                    // Routing
        'ui.bootstrap',                 // Bootstrap
        'auth0', 'angular-storage', 'angular-jwt', 'datePicker',
        'pascalprecht.translate',
        'ajaxHandlerModule',
        'ngSanitize', 'chart.js'
    ]);
})();