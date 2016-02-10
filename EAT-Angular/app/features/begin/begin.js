angular
  .module('EAT.begin', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('begin', {
        url: "/begin",
        templateUrl: "features/begin/begin.html",
        controller: 'BeginCtrl'
      })
    ;
  })
  .controller('BeginCtrl', function ($scope) {
    less.registerStylesheets();
    less.refresh(true);

    $(".progress-bar").animate({
        width: "0%"
    });
  });
