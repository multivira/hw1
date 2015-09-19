'use strict';

describe("mainService", function () {

    var todoService;

    beforeEach(angular.mock.module('appModule'));

    beforeEach(inject(function ($injector) {
        todoService = $injector.get('todoService');
    }));

    it('is expected for service to be defined', function () {
        expect(todoService).toBeDefined();
    });
});