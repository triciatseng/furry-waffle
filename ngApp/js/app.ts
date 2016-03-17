namespace app {
  angular.module('app', ['ui.router', 'ngResource'])
    .config(function(
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider
  ){
    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    });




    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
