angular.module('ng-firebase', ['firebase'])
.factory('Users', function($firebaseObject, $firebaseArray) {
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
    var obj = $firebaseObject(new Firebase(refURL + '0/'+user+'/employers'));
    obj.$loaded().then(function(obj) {
      angular.forEach(obj, function(val, i) {
        // console.log(val);
      })
    })
  };

  var createNewUser = function(email) {
    var obj = $firebaseArray(new Firebase(refURL + email));
    obj[email] = {name: 'Ryan'};
    return obj.$save();
  };

  return {
    getUsers: getUsers,
    getEmployers: getEmployers,
    createNewUser: createNewUser
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
    Users.createNewUser('nextemail').then(function(data) {
      console.log('User saved', data);
    })
    
    Users.getUsers().then(function(data) {
      console.log(data);
    })
  })

