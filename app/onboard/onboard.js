(function() {
  'use strict';

  angular.module('app.onboard', ['ngMaterial', 'firebase'])
    .controller('OnboardCtrl', OnboardCtrl);
      
    OnboardCtrl.$inject = ['$scope', '$firebaseObject'];
    function OnboardCtrl($scope, $firebaseObject) {
      $scope.user = {};
      var refURL = 'https://careful-harmonica.firebaseio.com/';
      var ref = new Firebase(refURL);
      ref.onAuth(function(authData) {
        var user = ref.child('users').child(authData.uid);
        var obj = $firebaseObject(user);
        obj.$loaded().then(function(data) {
          data.$bindTo($scope, 'user');
        });

      });

      angular.element(document).ready(function () {
        var fileUpload = document.querySelector('#resumeUpload');
        fileUpload.addEventListener('change', function(e) {
          console.log(e);
          var f = e.target.files[0];
          var reader = new FileReader();
          reader.readAsArrayBuffer(f);

          reader.onloadend = function(e) {
            // Firebase only allows strings so the binary is converted to a base64 string
            function _arrayBufferToBase64( buffer ) {
                var binary = '';
                var bytes = new Uint8Array( buffer );
                var len = bytes.byteLength;
                for (var i = 0; i < len; i++) {
                    binary += String.fromCharCode( bytes[ i ] );
                }
                return window.btoa( binary );
            }

            var base64File = _arrayBufferToBase64(reader.result);

            // Since this is an async operation, $apply is required for data binding
            $scope.$apply(function() {$scope.user.resume = base64File});
          };


        }, false);
    });
  }
})();
