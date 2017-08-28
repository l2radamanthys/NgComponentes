import { Component, Input } from '@angular/core';



/**
 * @author Ricardo D. Quiroga
 */
@Component({
    selector: 'separador',
    templateUrl: './separador.component.html',
    styleUrls: ['./separador.scss']
})
export class SeparadorComponent {
    @Input() size: number;


    constructor() {
        this.size = 24;
    }
}
