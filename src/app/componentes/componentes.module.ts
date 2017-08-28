import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesComponent } from './componentes.component';

import { PreloadImageComponent } from './preload-image/preload-image.component';
import { SeparadorComponent } from './separador/separador.component';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ComponentesComponent,
        PreloadImageComponent,
        SeparadorComponent,
    ],
    exports: [
        PreloadImageComponent,
        SeparadorComponent,
    ],
    providers: [],
})
export class ComponentesModule {}

