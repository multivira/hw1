(function(){
    'use strict';

    angular.module('appModule').factory('todoService', todoService);

    function todoService() {
        var service = {
            getTodoList: makeTodoList,
            addTodo: AddTodo
        };

        var todoList = [];

        initTodoList();

        return service;

        function AddTodo(todoName){
            var nextId = todoList.length + 1;
            todoList.push({name: todoName, id: nextId, done: false});
        }

        function initTodoList(){
            AddTodo("Go shopping");
            AddTodo("Lose 2 kg");
            AddTodo("Bring wife flowers");
        }

        function makeTodoList() {
            return todoList;
        }
    }
})();

