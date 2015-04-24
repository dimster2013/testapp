'use strict';

angular.module('vodaApp')
  .controller('RichListCtrl', function ($scope,$http,_) {
    $scope.list=null;

    //debugger;

    function importJson()
    {
      $http.get('../../json/celebrityRichList.json')
        .then(function(res){
          $scope.list = res.data.celebrityList;
          console.log('list=',$scope.list)
          if ($scope.list) {
            loadCountries();
          }

        });
    }

    function loadCountries ()
    {
      //debugger;
      //console.log (_.pluck($scope.list, 'country'));
      $scope.countries= _.sortBy( _.uniq(_.pluck($scope.list, 'country')),function(country){
        return country;
      } );

      $scope.countries.push('');
    }

    importJson();

});
