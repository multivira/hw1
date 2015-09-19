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
