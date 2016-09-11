import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    // moduleId :: setting moduleId: module.id in the @Component decorator is the key here.
    //             If you don't have that then Angular 2 will be looking for your files at
    //             the root level.
    moduleId: module.id,
    // Tag for this component
    selector:'walk-through',
    // Styles to be picked for this component
    styleUrls: ['./walkthrough.component.css'],
    // Emplate to be picked for this component
    templateUrl: './walkthrough.component.html'
})

export class WalkThroughComponent implements OnInit {
    @Input() slides : string[];
    @Input() btnlabel : string;
    @Input() modalHeading : string;

    @Input() onClose : EventEmitter<any> = new EventEmitter();

    private modalOpened: boolean = false;
    private heading: string;

    // ngOnInit function gets exicuted when component is initiated.
    ngOnInit(){
    }


    openModal() {
        this.modalOpened = true;
    }
};