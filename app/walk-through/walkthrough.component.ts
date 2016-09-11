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

    @Output() onClose : EventEmitter<any> = new EventEmitter();

    private modalOpened: boolean = false;
    private heading: string;
    private responseMessage: string = '';
    private notAgain: boolean;
    private currentIndex: number;

    // ngOnInit function gets exicuted when component is initiated.
    ngOnInit(){
        this.currentIndex = 0;
    }


    openModal() {
        this.modalOpened = true;
    }

    closeModal() {
        if (this.notAgain) {
            this.responseMessage = 'Don\'t Show me again is selected';
        } else {
            this.responseMessage = 'Don\'t Show me again is not selected';
        }
        this.modalOpened = false;

        this.onClose.next([{
            selected : this.notAgain || false,
            message : this.responseMessage
        }]);
    }

    prevPage() {
        this.currentIndex--;
    }
    
    nextPage() {
        this.currentIndex++;
    }
};