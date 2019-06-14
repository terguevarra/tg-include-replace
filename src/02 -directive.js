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