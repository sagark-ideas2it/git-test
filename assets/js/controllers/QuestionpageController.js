/**
 * JobController
 * @author      :: sagar 
 * @date        :: 14 Aug 2015
 * @description :: angular controller to handle front end
 */

angular.module('barmaddenApp').controller('QuestionpageController', ['$scope', '$http', 'toastr','$routeParams', function($scope, $http, toastr,$routeParams){

  // set-up questionForm loading state
  $scope.questionForm = {
    loading: false
  }

  $scope.submitquestionForm = function (){

   var jsonObject = JSON.parse($scope.questionForm.question);
    // Submit request to Sails.
    $http.post('/question', {
     question:jsonObject,
     jobid:$routeParams.id,
     timeForQuestion:$scope.questionForm.timeForQuestion,
     totalQuestion:$scope.questionForm.totalQuestion
     
    })
    .then(function onSuccess (){
      // Refresh the page now that we've been logged in.
      window.location = '#/invite';
    })
    .finally(function eitherWay(){
      $scope.questionForm.loading = false;
    });
  };


}]);
