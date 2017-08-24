import { Component } from '@angular/core';



@Component({
    selector: 'app-components-list',
    templateUrl: './components-list.component.html',
    styleUrls: ['./components-list.scss']
})
export class ComponentsListComponent {
    public selected: any;
    public componentes = [
        {
            key: 'preload-image',
            name: 'Imagen con animación de pre-carga',
            params: [
                {
                    key: 'src',
                    type: 'string',
                    description: 'ruta de la imagen a cargar'
                },
                {
                    key: 'srcPreload',
                    type: 'string',
                    description: 'ruta de la imagen que se usara de animación para la carga'
                },
                {
                    key: 'srcError',
                    type: 'string',
                    description: 'ruta de la imagen que se mostrara si no se pudo cargar la imagen principal'
                },
            ],
            example: '<preload-image [src]="imagen.png" [preloadSrc]="loading.gif" [preloadSrc]="loading-error.png"><preload-image>'
        }
    ];



    constructor() {
        this.selected = null;
    }


    public set(element) {
        this.selected = element;
    }


    public unSet() {
        this.selected = null;
    }


    public toggle(element: any) {
        if (this.selected === null) {
            this.selected = element;
        } else if (this.selected.key === element.key) {
            this.selected = null;
        } else {
            this.selected = element;
        }
    }

}
