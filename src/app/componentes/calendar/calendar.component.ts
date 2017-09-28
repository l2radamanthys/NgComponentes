import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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


const DAYS = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
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


const COLOURS = [
    '#03A9F4',
    '#009688',
    '#F44336',
    '#9C27B0',
    '#E91E63',
    '#FFEB3B',
    '#00BCD4',
    '#FFC107',
    '#FF9800'
];


@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.scss']
})
export class CalendarComponent implements OnInit {
    @Input() config: any;
    @Input() eventos: any[];
    @Output() onDayClick: EventEmitter<any> = new EventEmitter();
    public year: number;
    public month: number;
    public weeks: any[];
    public today: Date;
    public activeDay: any;


    ngOnInit () {
        this.today = new Date();
        this.year = this.today.getFullYear();
        this.month = this.today.getMonth();
        if (this.eventos === undefined) { this.eventos = []; }
        this.eventos.forEach((evt, i) => {
            evt.start = typeof evt.start === 'string' ? new Date(evt.start) : evt.start;
            evt.start.setHours(0, 0, 0, 0);
            evt.end = typeof evt.end === 'string' ? new Date(evt.end) : evt.end;
            evt.end.setHours(23, 59, 59, 999);
            // evt.color = this.getRandomColor();
            evt.color = this.getIndexColor(i);
        });
        this.weeks = this.calculateCalendar(this.month, this.year);
        this.activeDay = null;
        console.log('>', this.eventos);
    }


    /**
     * Devuelve el mes siguiente como texto
     * @author Ricarao D. Quiroga
     * @return {string}
     */
    public getNextMonthText(): string {
        return MONTHS[this.month < 11 ? this.month + 1 : 0];
    }


    /**
     * Devuelve el mes anterior como texto
     * @author Ricardo D. Quiroga
     * @return {string}
     */
    public getPrevMonthText(): string {
        return MONTHS[this.month > 0 ? this.month - 1 : 11];
    }


    /**
     * Devuelve el mes actual como texto
     * @author Ricardo D. Quiroga
     * @return {string}
     */
    public getCurrentMonthText(): string {
        return MONTHS[this.month];
    }


    /**
     * Devuelve la constante DAYS
     * @author Ricardo D. Quiroga
     * @return {any[]}
     */
    public getDays(): any[] {
        return DAYS;
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
            week.push({ day: null });
        }
        let k = 1;
        for (let d = 1; d <= nd; d++) {
            if (week.length === 7) {
                weeks.push(week);
                week = new Array();
                k += 1;
            }
            // correcion porque $scope.month va de 0 a 11 en ves de 1 a 12
            let day_ = year + '-' + (month + 1) + '-' + this.pad(d);
            week.push({
                day: d,
                type: '',
            });
        }

        while (week.length !== 7) {
            week.push({day: null });
        }
        weeks.push(week);
        let bwe = [
            { day: null },
            { day: null },
            { day: null },
            { day: null },
            { day: null },
            { day: null },
            { day: null }
        ];
        while (k < 6) {
            weeks.push(bwe);
            k += 1;
        }
        return weeks;
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
        this.weeks = this.calculateCalendar(this.month, this.year);
    }


    /**
     * Rellena con ceros a la izquierda
     * @author Ricardo D. Quiroga
     * @param {number} d valor entre 1 y 31
     * @return {string} numero rellenado con 0 a la izquierda 
     */
    public pad(d: number) {
        return d !== null ? (d > 9 ? d : '0' + d) : '';
    }


    /**
     * Devuelve los eventos correspondientes de una fecha especifica
     * @author Ricardo D. Quiroga
     * @param {number} date
     * @param {number} month
     * @param {number} year
     */
    public dayEvents(date, month, year): any[] {
        let d_ = new Date(year, month, date);
        return this.eventos.filter(evt => evt.start <= d_ && evt.end >= d_);
    }


    /**
     * Captura el evento clic en los elemento del calendario, y devuelve la fecha 
     * y los eventos afectados
     * @author Ricardo D. Quiroga
     * @param {any} day
     */
    public dayClick(day): void {
        if (day.day !== null) {
            let result = {
                date: new Date(this.year, this.month, day.day),
                eventos: this.dayEvents(day.day, this.month, this.year)
            };
            this.activeDay = day;
            this.onDayClick.emit(result);
        }
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
     * asigna un color al azar de una tabla de colores
     * @author Ricardo D. Quiroga
     */
    private getRandomColor() {
        return COLOURS[this.getRandomNumber(0, COLOURS.length - 1)];
    }


    private getIndexColor(i) {
        return COLOURS[i % (COLOURS.length - 1)];
    }


    /**
     * Devuelve un numero aleatorio entre min y max inclusive
     * @author Ricardo D. Quiroga
     * @param {number} min valor minimo
     * @param {number} max valor maximo
     */
    private getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}


