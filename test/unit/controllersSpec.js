'use strict';

/* jasmine specs for controllers go here */
// Uses Karma for unit tests

describe('controllers', function() {

  describe('PhoneListCtrl', function(){

    beforeEach(module('phonecatApp')); //Before each test we tell Angular to load the phonecatApp module.

    it('should create "phones" model with 3 phones', inject(function($controller) { //We ask Angular to inject the $controller service into our test function
      var scope = {},
          ctrl = $controller('PhoneListCtrl', {$scope:scope}); //We use $controller to create an instance of the PhoneListCtrl

      expect(scope.phones.length).toBe(3); //With this instance, we verify that the phones array property on the scope contains three records.
      expect(scope.name).toBe('World');
    }));

  });

});
