import { ComponentsListComponent } from './components-list/components-list.component';
import { PagesRoutes } from './pages.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from './../pipes/pipes.module';
import { ServicesModule } from './../services/services.module';
import { ComponentesModule } from './../componentes/componentes.module';

import { PagesComponent } from './pages.component';



@NgModule({
    imports: [
        CommonModule,
        ComponentesModule,
        ServicesModule,
        PipesModule,
        PagesRoutes
    ],
    declarations: [
        PagesComponent,
        ComponentsListComponent
    ],
    exports: [],
    providers: [],
})
export class PagesModule {}

