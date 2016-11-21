; (function () {

    angular.module('ToDo')
        .component('grid', {
            bindings: {
                rows: '<',
                cols: '<',
            },
            templateUrl: "public/app/components/grid/grid.html",
            controller: GridController
        });

    function GridController() {
        this.receiveClick = function(col, row){
            this.grid = {
                row: row,
                col: col
            }
        }
    }


} ());