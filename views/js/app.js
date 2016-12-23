var profile = angular.module('profile', []);

profile.directive('skills', function() {

    return {
        template : "<div>" +
                        "<div data-ng-repeat='d in data'>" +
                            "<span class='skill_row'>{{d.name}}</span><span class='skill_row'>{{d.version}}</span><span class='skill_row'>{{d.numberOfYear}}</span><span class='skill_row'>{{d.rating}}</span>" +
                        "</div>" +
                    "</div>"

        , controller : function($http, $scope) {

            $http({
                url:'/skills',
                method:'GET'
            }).success(function(data){
                $scope.data = data;
                console.log(data);
            });
        }
    };
});