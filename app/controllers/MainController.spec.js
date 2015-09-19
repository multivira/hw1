'use strict';

describe('MainControllerTests', function () {
    var $scope, controllerService, $q, controller, mockRouter;

    beforeEach(angular.mock.module('appModule'));

    beforeEach(inject(function ($controller, $rootScope, $injector) {
        $scope = $rootScope.$new();
        controllerService = $controller;
        $q = $injector.get('$q');


        mockRouter = {
            config: function (config) {
            }
        };

        spyOn(mockRouter, 'config');

        createController();

    }));

    function createController() {
        controller = controllerService('MainController as vm', {
            '$scope': $scope,
            '$router': mockRouter
        });
    }

    it('should set the routing', function () {
        expect(mockRouter.config).toHaveBeenCalledWith( [
            {
                path: '/home',
                component: 'todo'
            }
        ]);

    });
});

