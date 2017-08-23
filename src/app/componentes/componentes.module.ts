import { ImageWithPreloadComponent } from './image-with-preload/image-with-preload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesComponent } from './componentes.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ComponentesComponent,
        ImageWithPreloadComponent,
    ],
    exports: [
        ImageWithPreloadComponent,
    ],
    providers: [],
})
export class ComponentesModule {}

