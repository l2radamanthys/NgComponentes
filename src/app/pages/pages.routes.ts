import { ComponentsListComponent } from './components-list/components-list.component';
import { RouterModule, Routes } from '@angular/router';

const _routes: Routes = [
    {
        path: '',
        component: ComponentsListComponent
    }
];

export const PagesRoutes = RouterModule.forRoot(_routes, { useHash: true });