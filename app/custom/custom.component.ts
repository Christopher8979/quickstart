import { Component } from '@angular/core';

@Component({
    // moduleId :: setting moduleId: module.id in the @Component decorator is the key here.
    //             If you don't have that then Angular 2 will be looking for your files at
    //             the root level.
    moduleId: module.id,
    // Tag for this component
    selector:'custom-tag',
    // Styles to be picked for this component
    styleUrls: ['./custom.component.css'],
    // Emplate to be picked for this component
    templateUrl: './custom.component.html'
})

export class CustomComponent {};