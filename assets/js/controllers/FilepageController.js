angular.module('barmaddenApp').controller('FilepageController', ['$scope', '$http', function($scope, $http){

  $scope.submitfileForm = function(){

    // Set the loading state (i.e. show loading spinner)
   
    console.log('hi in filepage controller--------------------------');
    // Submit request to Sails.
    $http.post('/upload-file', {
     uploadFile : $scope.fileForm.uploadFile
      
    })
    .then(function onSuccess(sailsResponse){
      window.location = '#/question';
    })
   
   
  }



}]);