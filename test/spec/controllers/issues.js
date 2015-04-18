'use strict';

describe('Controller: IssuesCtrl', function () {

  // load the controller's module
  beforeEach(module('yomanApp'));

  var IssuesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IssuesCtrl = $controller('IssuesCtrl', {
      $scope: scope
    });
  }));

  it('should testing be hello', function () {
    expect(scope.testing).toBe('hello');
  });

  it('should saveissue return desc is hi there', function () {
    expect(scope.desc).toBeUndefined();
    scope.saveIssue(scope);
    expect(scope.desc).toBeDefined();
  });
});
