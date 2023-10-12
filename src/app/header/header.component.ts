import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class Header {

    constructor(private router: Router) {

    }

    /**
     * Method
     */
    callCart() {
        this.router.navigate(['/cart']);
    }
}