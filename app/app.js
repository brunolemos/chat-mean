angular.module('app', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/login', {
      controller: 'LoginController as loginController',
      templateUrl: 'views/login'
    })

    .when('/signup', {
      controller: 'SignupController as signupController',
      templateUrl: 'views/signup'
    })

    .otherwise({
      redirectTo: '/login'
    })

  $locationProvider.html5Mode({enabled: true, requireBase: false})
})

.controller('LoginController', ['$scope', function($scope) {
  $scope.login = function() {
    console.log('login', $scope.email, $scope.password)
  }
}])

.controller('SignupController', ['$scope', function($scope) {
  $scope.signup = function() {
    console.log('signup', $scope.name, $scope.email, $scope.password, $scope.confirm_password)
  }
}])
