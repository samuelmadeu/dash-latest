function run($rootScope, $state, auth, store, jwtHelper, $location) {
    $rootScope.$state = $state;
    //$rootScope.$on('$locationChangeStart', function () {
    //    // Get the JWT that is saved in local storage
    //    // and if it is there, check whether it is expired.
    //    // If it isn't, set the user's auth state
    //    var token = store.get('token');
    //    if (token) {
    //        if (!jwtHelper.isTokenExpired(token)) {
    //            if (!auth.isAuthenticated) {
    //                auth.authenticate(store.get('profile'), token);
    //            }
    //        }
    //    }
    //    else {
    //        // Otherwise, redirect to the home route
    //        $location.path('/app');
    //    }
    //});
    
};

angular.module('sobold').run(run);