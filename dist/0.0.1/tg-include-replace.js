/*! 
 PROJECT: tg-include-replace 
 VERSION: 0.0.1 
 AUTHOR: Ruther John Guevarra 
 GITHUB: https://github.com/terguevarra/
 LATEST BUILD DATE AND TIME: June 14, 2019 11:57 AM PHILIPPINE TIME*/
(function(){
    'use strict';

    var moduleName = 'tgIncludeReplace';

    var appDependencies = [];

    angular.module(moduleName, appDependencies);
})();
(function(){
    'use strict';
    
    angular
        .module('tgIncludeReplace')
        .directive('includeReplace', includeReplace);

        includeReplace.$inject = [];

        function includeReplace() {
            return {
                require: 'ngInclude',
                restrict: 'A',
                link: function (scope, elem, attrs) {
                    elem.replaceWith(elem.children());
                }
            };
        }
})();