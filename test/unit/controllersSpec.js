'use strict';

/* jasmine specs for controllers go here */

// Uses Karma for unit tests

/* Updated Controller for $http (dependency injection) */

describe('PhoneCat controllers', function() {
  describe('PhoneListCtrl', function() {
    var scope, ctrl, $httpBackend;
    beforeEach(module('phonecatApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json').
      respond([{
        name: 'Nexus S'
      }, {
        name: 'Motorola DROID'
      }]);
      scope = $rootScope.$new();
      ctrl = $controller('PhoneListCtrl', {
        $scope: scope
      });
    }));
    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();
      expect(scope.phones).toEqual([{
        name: 'Nexus S'
      }, {
        name: 'Motorola DROID'
      }]);
    });
    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });
});

// describe('controllers', function() {

//   describe('PhoneListCtrl', function(){
//     var scope, ctrl;

//     beforeEach(module('phonecatApp')); //Before each test we tell Angular to load the phonecatApp module.

//     beforeEach(inject(function($controller) {
//       scope = {};
//       ctrl = $controller('PhoneListCtrl', {$scope:scope}); //We use $controller to create an instance of the PhoneListCtrl
//     }));

//     it('should create "phones" model with 3 phones', function() {
//       expect(scope.phones.length).toBe(3); //With this instance, we verify that the phones array property on the scope contains three records.
//     });


//     it('should set the default value of orderProp model', function() {
//       expect(scope.orderProp).toBe('age');
//     });

    // beforeEach(inject(function($controller) {
    //   scope = {};
    //   ctrl = $controller('PhoneListCtrl', {$scope:scope});
    // }));

    // it('should create "phones" model with 3 phones', inject(function($controller) { //We ask Angular to inject the $controller service into our test function
    //   var scope = {},
    //       ctrl = $controller('PhoneListCtrl', {$scope:scope}); //We use $controller to create an instance of the PhoneListCtrl

    //   expect(scope.phones.length).toBe(3); //With this instance, we verify that the phones array property on the scope contains three records.
      
    // }));

//   });

// });
