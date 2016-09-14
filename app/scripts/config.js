
function config($provide, authProvider, $httpProvider, jwtInterceptorProvider) {
    var envName = 'development';
    //authProvider.init({
    //    domain: 'ooa.auth0.com',
    //    clientID: envName === 'production' ? 'in7lxgBEOd78r51daMeQLMmcVW1sXuZ0' : "hWbRy8DBJRwjGmTkZzMRhr1HRfSbkzVM",
    //    loginUrl: '/app'
    //});

    $provide.value('API_PATH', envName === 'production' ? 'https://api.castme.today/' : 'https://api.castme.today:2443/');


    //var refreshingToken = null;
    //jwtInterceptorProvider.tokenGetter = function (store, $http, jwtHelper) {
       
    //    var idToken = store.get('token');
    //    var refreshToken = store.get('refreshToken');
    //    if (!idToken || !refreshToken) {
    //        return null;
    //    }
    //    if (jwtHelper.isTokenExpired(idToken)) {
    //        return auth.refreshIdToken(refreshToken).then(function (idToken) {
    //            store.set('token', idToken);
    //            return idToken;
    //        });
    //    } else {
    //        return idToken;
    //    }
    //}

   // $httpProvider.interceptors.push('jwtInterceptor');

}
angular.module('sobold').config(config);
