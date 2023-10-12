import { NgModule } from "@angular/core";
import { CartComponent } from "./cart.component";
import { RouterModule } from "@angular/router";


/**
 * Cart Module
 */
@NgModule({
    declarations: [
        CartComponent,
        
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: CartComponent
            },
            {
                path:':id',
                component: CartComponent
            }
        ])
    ],
    exports: [],
    providers: []
})
export class CartModule {

}