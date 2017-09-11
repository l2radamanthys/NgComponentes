import { Component, OnInit } from '@angular/core';


const MONTHS = [
    'ENERO',
    'FEBRERO',
    'MARZO',
    'ABRIL',
    'MAYO',
    'JUNIO',
    'JULIO',
    'AGOSTO',
    'SEPTIEMBRE',
    'OCTUBRE',
    'NOVIEMBRE',
    'DICIEMBRE',
];


const DAYS_OF_MONTH = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];


@Component({
    selector: 'mini-calendar',
    templateUrl: './mini-calendar.component.html',
    styleUrls: ['./mini-calendar.scss']
})
export class MiniCalendarComponent implements OnInit { 
    public daysOfWeek: string[];
    public year: number;
    public month: number;
    public weeks: any[];
    public today: Date;
    public activeDay: any;
    public monthName: string;


    constructor() {
        this.weeks = [];
        this.daysOfWeek = [ 'L', 'M', 'M', 'J', 'V', 'S', 'D'];
    }


    ngOnInit() {
        this.today = new Date();
        this.year = this.today.getFullYear();
        this.month = this.today.getMonth();
        this.monthName = MONTHS[this.month];
        this.weeks = this.calculateCalendar(this.month, this.year);
        this.activeDay = null;
    }


    /**
     * Calcula la organizacion de las semanas para un mes
     * @author Ricardo D. Quiroga
     * @param {number} month 
     * @param {number} year 
     * @return {any[]}
     */
    public calculateCalendar(month, year) {
        let nd = this.getDaysOfMonth(month, year);
        let fd = this.getFirstDay(month, year);
        let week = new Array();
        let weeks = new Array();

        for (let i = 1; i <= fd; i++) {
            week.push(null);
        }
        let k = 1;
        for (let d = 1; d <= nd; d++) {
            if (week.length === 7) {
                weeks.push(week);
                week = new Array();
                k += 1;
            }
            // correcion porque $scope.month va de 0 a 11 en ves de 1 a 12
            // let day_ = year + '-' + (month + 1) + '-' + this.pad(d);
            week.push(d);
        }

        while (week.length !== 7) {
            week.push(null);
        }
        weeks.push(week);
        let bwe = [
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ];
        while (k < 6) {
            weeks.push(bwe);
            k += 1;
        }
        console.log(weeks);
        return weeks;
    }


    private getDaysOfMonth(month: number, year: number) {
        if (month === 1 && year % 4 === 0) {
            return 29; // febrero año bisiesto
        } else {
            return DAYS_OF_MONTH[month];
        }
    }


    /**
     * Devuelve el dia de la semana que corresponde al primer dia
     * @author Ricardo D. Quiroga
     * @param {number} month 
     * @param {number} year 
     */
    private getFirstDay(month: number, year: number) {
        let d = new Date(year, month, 1);
        if (d.getDay() === 0) {
            return 6;
        } else {
            return d.getDay() - 1;
        }
    }

    /**
     * Cambia al mes siguiente
     * @author Ricardo D. Quiroga
     */
    public nextMonth() {
        if (this.month < 11) {
            this.month += 1;
        } else {
            this.month = 0;
            this.year += 1;
        }
        this.monthName = MONTHS[this.month];
        this.weeks = this.calculateCalendar(this.month, this.year);
    }


    /**
     * Cambia al mes anterior
     * @author Ricardo D. Quiroga
     */
    public prevMonth() {
        if (this.month > 0) {
            this.month -= 1;
        } else {
            this.month = 11;
            this.year -= 1;
        }
        this.monthName = MONTHS[this.month];
        this.weeks = this.calculateCalendar(this.month, this.year);
    }
}
