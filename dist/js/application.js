(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('appModule', ['ngNewRouter', 'ngMaterial', 'ngAria'])
        .config(applicationConfig);

    applicationConfig.$inject = ['$componentLoaderProvider', '$mdThemingProvider'];

    function applicationConfig($componentLoaderProvider, $mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('light-green')
            .backgroundPalette('light-green', {
                'default': '50'
            });

        /*istanbul ignore next*/
        $componentLoaderProvider.setTemplateMapping(function (name) {

            if (name.match(/^session/)) {
                var dashedName = name.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
                return 'components/' + name.substring(0, 8) + '/' + dashedName + '/' + dashedName + '.html';
            }
            else {
                return 'components/' + name + '/' + name + '.html';
            }

        });
    }

})();

require('./controllers/MainController.js');
require('./components/todo/TodoController.js');
require('./services/todoService.js');
require('../dist/views/appViews.js');

},{"../dist/views/appViews.js":5,"./components/todo/TodoController.js":2,"./controllers/MainController.js":3,"./services/todoService.js":4}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
(function () {
    'use strict';

    angular.module('appModule').controller('MainController', MainController);

    MainController.$inject = ['$router'];

    function MainController($router) {
        $router.config(
            [
                {
                    path: '/home',
                    component: 'todo'
                }
            ]
        );

    }
})();





},{}],4:[function(require,module,exports){
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


},{}],5:[function(require,module,exports){
angular.module("appModule").run(["$templateCache", function($templateCache) {$templateCache.put("components/todo/todo.html","<div layout=\"column\" layout-align=\"center center\">\r\n    <h1 class=\"md-display-3\">Q&A Angular Training</h1>\r\n    <h2 class=\"md-display-2\">Todo application</h2>\r\n    <div>{{todo.newItem}}</div>\r\n    <input type=\"text\" ng-model=\"todo.newItem\" />\r\n    <input type=\"button\" value=\"Add Todo\" ng-click=\"todo.addItem()\">\r\n    <div ng-repeat=\"todoItem in todo.todoList\">\r\n        <input type=\"checkbox\" ng-model=\"todoItem.done\"> <span data-ng-class=\"{\'bold-class\': todoItem.done, \'normal-class\': !todoItem.done}\">{{ todoItem.name }}</span>\r\n    </div>\r\n</div>");}]);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYXBwL2FwcC5qcyIsImFwcC9jb21wb25lbnRzL3RvZG8vVG9kb0NvbnRyb2xsZXIuanMiLCJhcHAvY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIuanMiLCJhcHAvc2VydmljZXMvdG9kb1NlcnZpY2UuanMiLCJkaXN0L3ZpZXdzL2FwcFZpZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHBNb2R1bGUnLCBbJ25nTmV3Um91dGVyJywgJ25nTWF0ZXJpYWwnLCAnbmdBcmlhJ10pXHJcbiAgICAgICAgLmNvbmZpZyhhcHBsaWNhdGlvbkNvbmZpZyk7XHJcblxyXG4gICAgYXBwbGljYXRpb25Db25maWcuJGluamVjdCA9IFsnJGNvbXBvbmVudExvYWRlclByb3ZpZGVyJywgJyRtZFRoZW1pbmdQcm92aWRlciddO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGxpY2F0aW9uQ29uZmlnKCRjb21wb25lbnRMb2FkZXJQcm92aWRlciwgJG1kVGhlbWluZ1Byb3ZpZGVyKSB7XHJcblxyXG4gICAgICAgICRtZFRoZW1pbmdQcm92aWRlci50aGVtZSgnZGVmYXVsdCcpXHJcbiAgICAgICAgICAgIC5wcmltYXJ5UGFsZXR0ZSgnZ3JlZW4nKVxyXG4gICAgICAgICAgICAuYWNjZW50UGFsZXR0ZSgnbGlnaHQtZ3JlZW4nKVxyXG4gICAgICAgICAgICAuYmFja2dyb3VuZFBhbGV0dGUoJ2xpZ2h0LWdyZWVuJywge1xyXG4gICAgICAgICAgICAgICAgJ2RlZmF1bHQnOiAnNTAnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBuZXh0Ki9cclxuICAgICAgICAkY29tcG9uZW50TG9hZGVyUHJvdmlkZXIuc2V0VGVtcGxhdGVNYXBwaW5nKGZ1bmN0aW9uIChuYW1lKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvXnNlc3Npb24vKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhc2hlZE5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcVysvZywgJy0nKS5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjb21wb25lbnRzLycgKyBuYW1lLnN1YnN0cmluZygwLCA4KSArICcvJyArIGRhc2hlZE5hbWUgKyAnLycgKyBkYXNoZWROYW1lICsgJy5odG1sJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnY29tcG9uZW50cy8nICsgbmFtZSArICcvJyArIG5hbWUgKyAnLmh0bWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIuanMnKTtcclxucmVxdWlyZSgnLi9jb21wb25lbnRzL3RvZG8vVG9kb0NvbnRyb2xsZXIuanMnKTtcclxucmVxdWlyZSgnLi9zZXJ2aWNlcy90b2RvU2VydmljZS5qcycpO1xyXG5yZXF1aXJlKCcuLi9kaXN0L3ZpZXdzL2FwcFZpZXdzLmpzJyk7XHJcbiIsIihmdW5jdGlvbigpe1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHBNb2R1bGUnKS5jb250cm9sbGVyKCdUb2RvQ29udHJvbGxlcicsIFRvZG9Db250cm9sbGVyKTtcclxuXHJcbiAgICBUb2RvQ29udHJvbGxlci4kaW5qZWN0ID0gWyd0b2RvU2VydmljZSddO1xyXG5cclxuICAgIGZ1bmN0aW9uIFRvZG9Db250cm9sbGVyKHRvZG9TZXJ2aWNlKSB7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICB2bS5uZXdJdGVtID0gJyc7XHJcbiAgICAgICAgdm0udG9kb0xpc3QgPSB0b2RvU2VydmljZS5nZXRUb2RvTGlzdCgpO1xyXG4gICAgICAgIHZtLmFkZEl0ZW0gPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0b2RvU2VydmljZS5hZGRUb2RvKHZtLm5ld0l0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwTW9kdWxlJykuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcik7XHJcblxyXG4gICAgTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHJvdXRlciddO1xyXG5cclxuICAgIGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCRyb3V0ZXIpIHtcclxuICAgICAgICAkcm91dGVyLmNvbmZpZyhcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvaG9tZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiAndG9kbydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiKGZ1bmN0aW9uKCl7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcE1vZHVsZScpLmZhY3RvcnkoJ3RvZG9TZXJ2aWNlJywgdG9kb1NlcnZpY2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZG9TZXJ2aWNlKCkge1xyXG4gICAgICAgIHZhciBzZXJ2aWNlID0ge1xyXG4gICAgICAgICAgICBnZXRUb2RvTGlzdDogbWFrZVRvZG9MaXN0LFxyXG4gICAgICAgICAgICBhZGRUb2RvOiBBZGRUb2RvXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHRvZG9MaXN0ID0gW107XHJcblxyXG4gICAgICAgIGluaXRUb2RvTGlzdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VydmljZTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gQWRkVG9kbyh0b2RvTmFtZSl7XHJcbiAgICAgICAgICAgIHZhciBuZXh0SWQgPSB0b2RvTGlzdC5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICB0b2RvTGlzdC5wdXNoKHtuYW1lOiB0b2RvTmFtZSwgaWQ6IG5leHRJZCwgZG9uZTogZmFsc2V9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluaXRUb2RvTGlzdCgpe1xyXG4gICAgICAgICAgICBBZGRUb2RvKFwiR28gc2hvcHBpbmdcIik7XHJcbiAgICAgICAgICAgIEFkZFRvZG8oXCJMb3NlIDIga2dcIik7XHJcbiAgICAgICAgICAgIEFkZFRvZG8oXCJCcmluZyB3aWZlIGZsb3dlcnNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYWtlVG9kb0xpc3QoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2RvTGlzdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcE1vZHVsZVwiKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21wb25lbnRzL3RvZG8vdG9kby5odG1sXCIsXCI8ZGl2IGxheW91dD1cXFwiY29sdW1uXFxcIiBsYXlvdXQtYWxpZ249XFxcImNlbnRlciBjZW50ZXJcXFwiPlxcclxcbiAgICA8aDEgY2xhc3M9XFxcIm1kLWRpc3BsYXktM1xcXCI+USZBIEFuZ3VsYXIgVHJhaW5pbmc8L2gxPlxcclxcbiAgICA8aDIgY2xhc3M9XFxcIm1kLWRpc3BsYXktMlxcXCI+VG9kbyBhcHBsaWNhdGlvbjwvaDI+XFxyXFxuICAgIDxkaXY+e3t0b2RvLm5ld0l0ZW19fTwvZGl2PlxcclxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmctbW9kZWw9XFxcInRvZG8ubmV3SXRlbVxcXCIgLz5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIkFkZCBUb2RvXFxcIiBuZy1jbGljaz1cXFwidG9kby5hZGRJdGVtKClcXFwiPlxcclxcbiAgICA8ZGl2IG5nLXJlcGVhdD1cXFwidG9kb0l0ZW0gaW4gdG9kby50b2RvTGlzdFxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJ0b2RvSXRlbS5kb25lXFxcIj4gPHNwYW4gZGF0YS1uZy1jbGFzcz1cXFwie1xcJ2JvbGQtY2xhc3NcXCc6IHRvZG9JdGVtLmRvbmUsIFxcJ25vcm1hbC1jbGFzc1xcJzogIXRvZG9JdGVtLmRvbmV9XFxcIj57eyB0b2RvSXRlbS5uYW1lIH19PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIik7fV0pOyJdfQ==
