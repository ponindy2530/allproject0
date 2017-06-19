import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { PmoComponent } from './pmo/pmo/pmo.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: PmoComponent
            },
            {
                path: 'Pmo',
                component: PmoComponent
            }          
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
