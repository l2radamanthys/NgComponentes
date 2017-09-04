import { CalendarComponent } from './calendar/calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadImageComponent } from './preload-image/preload-image.component';
import { SeparadorComponent } from './separador/separador.component';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        PreloadImageComponent,
        SeparadorComponent,
        CalendarComponent,
    ],
    exports: [
        PreloadImageComponent,
        SeparadorComponent,
        CalendarComponent,
    ],
    providers: [],
})
export class ComponentesModule {}

