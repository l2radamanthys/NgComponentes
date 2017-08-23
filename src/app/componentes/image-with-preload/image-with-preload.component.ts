import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';


/**
 * Imagen con imagen de precarga
 * @author Ricardo D. Quiroga
 */
@Component({
    selector: 'preload-image',
    templateUrl: './image-with-preload.component.html',
    styleUrls: ['./image-with-preload.scss']
})
export class ImageWithPreloadComponent implements OnInit {
    @Input() src: string;
    @Input() srcPreload: string;
    @Input() srcError: string;
    public imgSrc: string;
    private tmpImage: HTMLImageElement;


    constructor(private http: Http) {}


    ngOnInit() {
        this.imgSrc = this.srcPreload;
        if (this.tmpImage) {
            this.tmpImage.onload = null;
        }

        let loaded = () => { // wait for image to load then replace it with loadingGIF
            this.imgSrc = this.src;
        };

        let imgError = () => {
            console.error('Error al cargar la imagen', this.imgSrc);
            this.imgSrc = this.srcError;
        };

        this.tmpImage = new Image();
        this.tmpImage.onload = loaded;
        this.tmpImage.onerror = imgError;
        this.tmpImage.src = this.src;
    }



    onError($event) {
        console.log('On Error', $event);
    }
}
