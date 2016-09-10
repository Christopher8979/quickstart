import { Component, Input, OnInit } from '@angular/core';

@Component({
    // moduleId :: setting moduleId: module.id in the @Component decorator is the key here.
    //             If you don't have that then Angular 2 will be looking for your files at
    //             the root level.
    moduleId: module.id,
    // Tag for this component
    selector:'breadcrumb',
    // Styles to be picked for this component
    styleUrls: ['./breadcrumb.component.css'],
    // Emplate to be picked for this component
    templateUrl: './breadcrumb.component.html'
})


export class BreadcrumbComponent implements OnInit {
    @Input() options: Object[];
    @Input() continerClass : String;

    constructor() {
        console.log('input config ::', this.options);
    }

    ngOnInit(){
        console.log('input config  from init::', this.options);
        console.log('input config  from init::', this.continerClass);
    }
};