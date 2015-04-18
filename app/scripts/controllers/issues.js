'use strict';

angular.module('yomanApp').controller('IssuesCtrl',
  function($scope) {
    console.log('inside issues controller');
    $scope.testing = 'hello';
    $scope.selectedIssue=null;

    $scope.saveIssue = function($scope){
      //debugger;
      console.log ('saving desc',$scope.desc);

      $scope.desc='hidthere';

    };

    $scope.setSelected = function(issue){
      $scope.selectedIssue=issue;
    };

    $scope.issues= [{'id':1,'desc':'this is the first issue','priority':'hi'},
      {'id':2,'desc':'this is the second issue','priority':'hi'},
      {'id':3,'desc':'this is the third issue','priority':'hi'}];
  });
