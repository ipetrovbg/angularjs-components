; (function () {

    angular.module('ToDo')
        .component('gridRow', {
            bindings: {
                cols: '<',
                row: '<',
                onElementWasClicked: '&'
            },
            templateUrl: "public/app/components/grid/grid-row.html",
            controller: GridRowController
        });

    function GridRowController() {}
} ());