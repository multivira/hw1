(function(){
    'use strict';

    angular.module('appModule').controller('TodoController', TodoController);

    TodoController.$inject = ['todoService'];

    function TodoController(todoService) {
        var vm = this;

        vm.todoList = todoService.getTodoList();
    }
})();
