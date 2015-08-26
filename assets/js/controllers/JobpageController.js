/**
 * JobController
 * @author      :: sagar
 * @date        :: 14 Aug 2015
 * @description :: angular controller to handle front end
 */

angular.module('barmaddenApp').controller('JobpageController', ['$scope', '$http','$location','toastr', function($scope, $http,$location,toastr){

  $scope.submitjobForm = function(){

    // Set the loading state (i.e. show loading spinner)
   
    console.log('hi in 1111 jobpage controller--------------------------');
    // Submit request to Sails.
    $http.post('/job', {
      name: $scope.jobForm.name,
      designation: $scope.jobForm.designation,
      expiriance: $scope.jobForm.expiriance,
     salary: $scope.jobForm.salary,
     
    })
    .then(function onSuccess(sailsResponse){
      var id = sailsResponse.data.id;
      //window.location = '#/question';
      $location.path('/question/'+id);
      
    })
   
   
  }



}]);
