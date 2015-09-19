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

        vm.todoList = todoService.getTodoList();
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
            getTodoList: makeTodoList
        };

        return service;

        function makeTodoList() {
            return [{name: 'go shopping', id: 1}, {name:'loose 2kg', id: 2}, {name:'bring wife flowers', id: 3}];
        }
    }
})();


},{}],5:[function(require,module,exports){
angular.module("appModule").run(["$templateCache", function($templateCache) {$templateCache.put("components/todo/todo.html","<div layout=\"column\" layout-align=\"center center\">\r\n    <h1 class=\"md-display-3\">Q&A Angular Training</h1>\r\n    <h2 class=\"md-display-2\">Todo application</h2>\r\n\r\n    <div ng-repeat=\"todoItem in todo.todoList\">\r\n        Todo item name: {{ todoItem.name }}\r\n    </div>\r\n</div>");}]);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsImFwcC9hcHAuanMiLCJhcHAvY29tcG9uZW50cy90b2RvL1RvZG9Db250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXJzL01haW5Db250cm9sbGVyLmpzIiwiYXBwL3NlcnZpY2VzL3RvZG9TZXJ2aWNlLmpzIiwiZGlzdC92aWV3cy9hcHBWaWV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHBNb2R1bGUnLCBbJ25nTmV3Um91dGVyJywgJ25nTWF0ZXJpYWwnLCAnbmdBcmlhJ10pXG4gICAgICAgIC5jb25maWcoYXBwbGljYXRpb25Db25maWcpO1xuXG4gICAgYXBwbGljYXRpb25Db25maWcuJGluamVjdCA9IFsnJGNvbXBvbmVudExvYWRlclByb3ZpZGVyJywgJyRtZFRoZW1pbmdQcm92aWRlciddO1xuXG4gICAgZnVuY3Rpb24gYXBwbGljYXRpb25Db25maWcoJGNvbXBvbmVudExvYWRlclByb3ZpZGVyLCAkbWRUaGVtaW5nUHJvdmlkZXIpIHtcblxuICAgICAgICAkbWRUaGVtaW5nUHJvdmlkZXIudGhlbWUoJ2RlZmF1bHQnKVxuICAgICAgICAgICAgLnByaW1hcnlQYWxldHRlKCdncmVlbicpXG4gICAgICAgICAgICAuYWNjZW50UGFsZXR0ZSgnbGlnaHQtZ3JlZW4nKVxuICAgICAgICAgICAgLmJhY2tncm91bmRQYWxldHRlKCdsaWdodC1ncmVlbicsIHtcbiAgICAgICAgICAgICAgICAnZGVmYXVsdCc6ICc1MCdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8qaXN0YW5idWwgaWdub3JlIG5leHQqL1xuICAgICAgICAkY29tcG9uZW50TG9hZGVyUHJvdmlkZXIuc2V0VGVtcGxhdGVNYXBwaW5nKGZ1bmN0aW9uIChuYW1lKSB7XG5cbiAgICAgICAgICAgIGlmIChuYW1lLm1hdGNoKC9ec2Vzc2lvbi8pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhc2hlZE5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcVysvZywgJy0nKS5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnY29tcG9uZW50cy8nICsgbmFtZS5zdWJzdHJpbmcoMCwgOCkgKyAnLycgKyBkYXNoZWROYW1lICsgJy8nICsgZGFzaGVkTmFtZSArICcuaHRtbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NvbXBvbmVudHMvJyArIG5hbWUgKyAnLycgKyBuYW1lICsgJy5odG1sJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pKCk7XG5cbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIuanMnKTtcbnJlcXVpcmUoJy4vY29tcG9uZW50cy90b2RvL1RvZG9Db250cm9sbGVyLmpzJyk7XG5yZXF1aXJlKCcuL3NlcnZpY2VzL3RvZG9TZXJ2aWNlLmpzJyk7XG5yZXF1aXJlKCcuLi9kaXN0L3ZpZXdzL2FwcFZpZXdzLmpzJyk7XG4iLCIoZnVuY3Rpb24oKXtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwTW9kdWxlJykuY29udHJvbGxlcignVG9kb0NvbnRyb2xsZXInLCBUb2RvQ29udHJvbGxlcik7XHJcblxyXG4gICAgVG9kb0NvbnRyb2xsZXIuJGluamVjdCA9IFsndG9kb1NlcnZpY2UnXTtcclxuXHJcbiAgICBmdW5jdGlvbiBUb2RvQ29udHJvbGxlcih0b2RvU2VydmljZSkge1xyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZtLnRvZG9MaXN0ID0gdG9kb1NlcnZpY2UuZ2V0VG9kb0xpc3QoKTtcclxuICAgIH1cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwTW9kdWxlJykuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcik7XHJcblxyXG4gICAgTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHJvdXRlciddO1xyXG5cclxuICAgIGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCRyb3V0ZXIpIHtcclxuICAgICAgICAkcm91dGVyLmNvbmZpZyhcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvaG9tZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiAndG9kbydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiKGZ1bmN0aW9uKCl7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcE1vZHVsZScpLmZhY3RvcnkoJ3RvZG9TZXJ2aWNlJywgdG9kb1NlcnZpY2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZG9TZXJ2aWNlKCkge1xyXG4gICAgICAgIHZhciBzZXJ2aWNlID0ge1xyXG4gICAgICAgICAgICBnZXRUb2RvTGlzdDogbWFrZVRvZG9MaXN0XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcnZpY2U7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VUb2RvTGlzdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt7bmFtZTogJ2dvIHNob3BwaW5nJywgaWQ6IDF9LCB7bmFtZTonbG9vc2UgMmtnJywgaWQ6IDJ9LCB7bmFtZTonYnJpbmcgd2lmZSBmbG93ZXJzJywgaWQ6IDN9XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcE1vZHVsZVwiKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21wb25lbnRzL3RvZG8vdG9kby5odG1sXCIsXCI8ZGl2IGxheW91dD1cXFwiY29sdW1uXFxcIiBsYXlvdXQtYWxpZ249XFxcImNlbnRlciBjZW50ZXJcXFwiPlxcclxcbiAgICA8aDEgY2xhc3M9XFxcIm1kLWRpc3BsYXktM1xcXCI+USZBIEFuZ3VsYXIgVHJhaW5pbmc8L2gxPlxcclxcbiAgICA8aDIgY2xhc3M9XFxcIm1kLWRpc3BsYXktMlxcXCI+VG9kbyBhcHBsaWNhdGlvbjwvaDI+XFxyXFxuXFxyXFxuICAgIDxkaXYgbmctcmVwZWF0PVxcXCJ0b2RvSXRlbSBpbiB0b2RvLnRvZG9MaXN0XFxcIj5cXHJcXG4gICAgICAgIFRvZG8gaXRlbSBuYW1lOiB7eyB0b2RvSXRlbS5uYW1lIH19XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiKTt9XSk7Il19
