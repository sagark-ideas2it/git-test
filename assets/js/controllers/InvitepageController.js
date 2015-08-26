/**
 * InvitepageController
 * @author      :: sagar
 * @date        :: 14 Aug 2015
 * @description :: angular controller to handle front end
 */


angular.module('barmaddenApp').directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    }
    }])
    .service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }
}])
 .controller('InvitepageController', ['$scope','$http','fileUpload', function($scope,$http,fileUpload){
    
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "/invite";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    }

     $scope.sendEmailto = function(){

        // Set the loading state (i.e. show loading spinner)
        $scope.emailForm.loading = true;
        console.log('------Client invite ctrl',$scope.emailForm.email);
        // Submit request to Sails.
        $http.post('/Sendemail', {
            email: $scope.emailForm.email
        })
        .then(function onSuccess(sailsResponse){
            window.location = '#/job';
        })
        .catch(function onError(sailsResponse){

        // Handle known error type(s).
        // If using sails-disk adpater -- Handle Duplicate Key
        var emailAddressAlreadyInUse = sailsResponse.status == 409;

        if (emailAddressAlreadyInUse) {
            toastr.error('That email address has already been taken, please try again.', 'Error');
            return;
        }

        })
        .finally(function eitherWay(){
            $scope.emailForm.loading = false;
        })
    };
    

}]);