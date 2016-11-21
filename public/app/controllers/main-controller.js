;(function(){
    angular.module('ToDo')
        .controller('MainController', MainController);

        MainController.$inject = [];
        function MainController(){
            var vm = this;
            vm.grid = {rows: [],cols: []}

            vm.grid.rows = populate(5);
            vm.grid.cols = populate(15);

            function populate(data){
                var ar = [], i;

                for(i = 0; i <= data; i++){
                   ar.push(i);                
                }
                return ar;
            }
        }
})();