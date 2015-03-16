angular.module('ng-firebase', ['firebase'])
.factory('Users', function($firebaseObject) {
  var refURL = "https://careful-harmonica.firebaseio.com/users/";
  var data = {};
  var getUsers = function() {
    var users = [];
    var obj = $firebaseObject(new Firebase(refURL));
    // obj.$loaded().then(function(newData) {
    //   angular.forEach(newData, function(val, i) {
    //     users.push(val);
    //   });
    //   cb(users);
    // });
    return obj.$loaded();
  };

  var getEmployers = function(user) {
    var tasks = [];
    var obj = $firebaseObject(new Firebase(refURL + '0/'+user+'/user/employers'));
    obj.$loaded().then(function(newData) {
      angular.forEach(obj, function(val, i) {
        // console.log(val);
      })
    })
  }

  return {
    getUsers: getUsers,
    getEmployers: getEmployers
  }
})
.controller('firebaseCtrl', function($scope, $firebaseArray, $firebaseObject, Users) {
    var ref = new Firebase("https://careful-harmonica.firebaseio.com/" + 'users');
    // console.log($firebaseObject(ref));
    // debugger; 
    // Users.getUsers(function(users) {
    //   var users = users;
    //   console.log(users);
    // });
    Users.getUsers().then(function(data) {
      console.log(data);
    })
  })

