
function MainCtrl($location) {
    var vm = this;
    vm.userName = 'Example CMT user';
    vm.helloText = 'Welcome in CMT SeedProject';
    vm.descriptionText = 'CMT It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';
   // vm.user = User.getCurrentUser();
    //vm.auth = auth;

    //vm.login = function() {
    //    auth.signin({
    //        authParams: {
    //            scope: 'openid email offline_access' // Specify the scopes you want to retrieve
    //        }
    //    }, function (profile, token, refreshToken) {
    //        store.set('profile', profile);
    //        store.set('token', token);
    //        store.set('refreshToken', refreshToken);
    //        $location.path('/');
    //    }, function (error) {
    //        console.log(error);
    //    })
    //}

    //vm.logout = function() {
    //    auth.signout();
    //    store.remove('profile');
    //    store.remove('token');
    //    $location.path('/');
    //}
};


angular.module('sobold').controller('MainCtrl', MainCtrl)