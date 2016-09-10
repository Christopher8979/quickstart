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

// Component Description ::
//
// Breadcrumb accepts
// 
// 1. options ::  an array of Objects
//    structure of each Object ::
//    {
//       label : String : title to be displayed
//       url   : String : Url to redirect on clicking that cumb
//    }
//  
// 2. containerClass :: String
//    This is additional string that is given to the breadcrumb.
//    This will be added to container of the component.

export class BreadcrumbComponent implements OnInit {
    @Input() options: Object[];
    @Input() continerClass : String;

    // ngOnInit function gets exicuted when component is initiated.
    ngOnInit(){
        // console.log('options provided::', this.options);
        // console.log('container class provided::', this.continerClass);
    }
};