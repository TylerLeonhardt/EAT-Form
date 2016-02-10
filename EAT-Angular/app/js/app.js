'use strict';

// Declare app level module which depends on views, and components
angular
  .module('EAT'
  , ['ui.router'
    , 'EAT.begin'
    , 'EAT.signature'
    , 'EAT.yourself'
    , 'EAT.howmanychildren'
    , 'EAT.allfoster'
    , 'EAT.childrennames'
    , 'EAT.aboutchildren'
    , 'EAT.snap'
    , 'EAT.version'
    , 'EAT.review'
    , 'EAT.howmanyadults'
    , 'EAT.aboutadults'
    , 'EAT.confirmchildren'
    , 'EAT.confirmadults'
    , 'EAT.ssn'
    , 'EAT.done'
    , 'angular-loading-bar'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/begin");
  });

  function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
  }
