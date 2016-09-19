angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider






    .state('controlePCP', {
      url: '/controlePCP',
      templateUrl: 'templates/controlePCP.html'
    })





    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
    })





    .state('signup', {
      url: '/singup',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })





    .state('tabsController.dashboard', {
      url: '/dashboard',
      views: {
        'tab4': {
          templateUrl: 'templates/dashboard.html'
        }
      }
    })





    .state('tabsController.produtos', {
      url: '/products',
      views: {
        'tab5': {
          templateUrl: 'templates/produtos.html'
        }
      }
    })





    .state('tabsController.clientes', {
      url: '/clients',
      views: {
        'tab6': {
          templateUrl: 'templates/clientes.html'
        }
      }
    })




    .state('tabsController', {
      url: '/page12',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })




    .state('produtoXX', {
      url: '/produto-xx',
      templateUrl: 'templates/produtoXX.html'
    })


    ;

  // if none of the above states are matched, use this as the fallback

  $urlRouterProvider.otherwise('/controlePCP');




});