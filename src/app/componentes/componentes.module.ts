import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadImageComponent } from './preload-image/preload-image.component';
import { SeparadorComponent } from './separador/separador.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MiniCalendarComponent } from './mini-calendar/mini-calendar.component';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        PreloadImageComponent,
        SeparadorComponent,
        CalendarComponent,
        MiniCalendarComponent,
    ],
    exports: [
        PreloadImageComponent,
        SeparadorComponent,
        CalendarComponent,
        MiniCalendarComponent,
    ],
    providers: [],
})
export class ComponentesModule {}

