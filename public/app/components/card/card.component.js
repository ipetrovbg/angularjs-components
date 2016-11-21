; (function () {
    angular.module('ToDo')
        .component('card', {
            bindings: {
                user: '<',
                onSelected: '&'
            },
            templateUrl: "public/app/components/card/card.html",
            controller: CardController
        });
    function CardController() {
        this.$onChanges = function (changesObj) {
            if (changesObj.user.currentValue) {
                console.log(changesObj.user.currentValue);
            }
        }

        this.cardWasSelected = function (selected) {
            this.onSelected({
                $event: {
                selected: selected
                }
            });
        }

    }
})();