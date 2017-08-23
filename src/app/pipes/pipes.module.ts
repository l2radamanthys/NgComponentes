import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesComponent } from './pipes.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        PipesComponent,
    ],
    exports:[],
    providers: [],
})
export class PipesModule {}

