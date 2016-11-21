;(function(){
    angular.module('ToDo')
        .controller('MainController', MainController);

        MainController.$inject = ['github'];
        function MainController(github){
            var vm = this;
            vm.grid = {rows: [],cols: []}

            vm.grid.rows = populate(5);
            vm.grid.cols = populate(15);

            github.user('ipetrovbg')
                .then(function(response){
                    vm.user = response;  
                });

                this.onSelectedCard = function(e){
                    console.log(e.selected);
                }


            function populate(data){
                var ar = [], i;

                for(i = 0; i <= data; i++){
                   ar.push(i);                
                }
                return ar;
            }
        }
})();