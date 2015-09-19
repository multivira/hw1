(function(){
    'use strict';

    angular.module('appModule').factory('todoService', todoService);

    function todoService() {
        var service = {
            getTodoList: makeTodoList
        };

        return service;

        function makeTodoList() {
            return [{name: 'go shopping', id: 1}, {name:'loose 2kg', id: 2}, {name:'bring wife flowers', id: 3}];
        }
    }
})();

