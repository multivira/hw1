(function(){
    'use strict';

    angular.module('appModule').controller('TodoController', TodoController);

    TodoController.$inject = ['todoService'];

    function TodoController(todoService) {
        var vm = this;
        vm.newItem = '';
        vm.todoList = todoService.getTodoList();
        vm.addItem = function(){
            todoService.addTodo(vm.newItem);
        }
    }
})();
