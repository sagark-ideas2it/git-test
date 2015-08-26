var barmadden = angular.module('barmaddenApp', ['ngRoute','toastr', 'compareTo']);
barmadden.config(function ($routeProvider) {
  $routeProvider
      .when('/', {
      templateUrl: 'views/homepage.html',
      controller: 'HomepageController'
    })
     .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'SignupController'
    })

      .when('/job', {
      templateUrl: 'views/job.html',
      controller: 'JobpageController'
    })


      .when('/question/:id', {
      templateUrl: 'views/question.html',
      controller: 'QuestionpageController'
    })
   
   .when('/dashboard', {
      templateUrl: 'views/dashboard.html'
    })
   .when('/invite', {
      templateUrl: 'views/invite.html',
      controller: 'InvitepageController'
    })

   .when('/sendemail', {
      templateUrl: 'views/sendemail.html',
      controller: 'InvitepageController'
    })
   .when('/upload-file',{
    templateUrl:'views/uploadfile.html',
    controller:'FilepageController'
   })

});