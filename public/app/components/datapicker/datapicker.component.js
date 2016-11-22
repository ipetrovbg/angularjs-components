; (function () {
    'use strict';
    angular.module('ToDo')
        .component('datapicker', {
            bindings: {
                onSelected: '&'
            },
            templateUrl: "public/app/components/datapicker/datapicker.html",
            controller: DataPickerController
        });
    function DataPickerController() {


        var months = new Months();
        this.numberDays = [];
        this.calendar = [];
        var prevMonth = 0;
        var nextMonth = 0;
        this.selected;




        function makeCalendar(year, month) {
            var calendar = [],
                week = {
                    week: []
                };
            for (var i = 1; i <= months._dayInMonth(year, month); i++) {


                week.week.push(i);

                if (i % 7 == 6 || i == months._dayInMonth(year, month)) {

                    if (i == months._dayInMonth(year, month)) {
                        week.week.push(0);
                    }

                    if (week.week.length < 7) {
                        for (var c = 0; c <= (7 - week.week.length); c++) {
                            week.week.push(0);
                        }

                        if (i % 7 == 6) {
                            week.week.sort();
                        }


                    }

                    calendar.push(week);
                    week = {
                        week: []
                    };
                }
            }
            console.log(calendar);
            return calendar;
        }



        this.currentDay = months.current.currentDate;
        this.days = months.data.daysInMonthArray;
        this.month = months.data.montName;
        this.monthNumber = months.data.monthNumber;
        this.year = months.data.year;

        this.calendar = makeCalendar(2016, 11);

        this.prevMonth = function (month) {
            var monthNumber = moment().month(month).format("M");
            var prev = moment().month(parseInt(monthNumber) - 2).format("M");
            prevMonth = prev;
            this.calendar = makeCalendar(this.year, prev);
        }
        this.nextMonth = function (month) {

            var monthNumber = moment().month(month).format("M");
            var next = moment().month(parseInt(monthNumber)).format("M");
            nextMonth = next;
            this.calendar = makeCalendar(this.year, next);
        }

        this.dateWasSelected = function (selected) {
            if (selected) {
                this.selected = selected;
                this.onSelected({
                    $event: {
                        selected: selected
                    }
                });
            }

        }

    }
})();