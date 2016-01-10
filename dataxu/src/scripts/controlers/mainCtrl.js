angular.module("mainCtrl", []) 
    .controller('mainCtrl', ['$scope', function($scope) {

        $scope.targeting = [
            {label: 'Inventory Suppliers', value: 80},
            {label: 'Georgraphy', value: 69},
            {label: 'Creatives', value: 53},
            {label: 'Brand Safety', value: 85}
        ];

    }])

    .directive('labeledProgressBar', function () {
        var ddo = {};
        
        ddo.template = '<p>{{target.label}}</p><div class="background-bar"><div class="flexible-bar" style="width:{{target.value}}%">{{target.value}}%</div></div>';
        ddo.restrict ='AE';
        ddo.link = function(scope, elem, attrs) {
          console.log(scope);  
          console.log(elem) ; 
          console.log(attrs)  ;
        };
                            
        
    
    
    
        return ddo;
    })
