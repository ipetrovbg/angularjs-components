;(function(){
    angular.module('ToDo')
        .factory('github', github);
        github.$inject = ['$http'];
        function github($http){
            var endpoint = 'https://api.github.com/';
            var service = {
                user: getUser
            }
            return service;

            function getUser(user){
                return $http.get(endpoint + 'users/' + user)
                .then(function(response){
                    return response.data;
                });
            }

        }
})();