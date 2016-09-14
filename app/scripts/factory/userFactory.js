
function User(store) {
    var service = {
        getCurrentUser: getCurrentUser
    };

    return service;

    function getCurrentUser() {
        return store.get('profile');
    }
};


angular.module('sobold').factory('User', User)