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




