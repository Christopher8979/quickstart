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


// Component Description:
// Walkthrough accepts following inputs
// slides : [strings]    : Strings have to be proper path of images
// btnlabel: string      : label of the button to be displayed
// modalHeading : string : Heading of the modal window
//
// This component emits event/callback on closing modal pop up
// Sending a object that has the status if Don't show again is checked or not


export class WalkThroughComponent implements OnInit {
    @Input() slides : string[];
    @Input() btnlabel : string;
    @Input() modalHeading : string;

    @Output() onClose : EventEmitter<any> = new EventEmitter();

    // checks if modal is open or not
    private modalOpened: boolean = false;
    // hold the message that has to be sent back to user
    private responseMessage: string = '';
    // holds boolean based on Dont show again selection
    private notAgain: boolean;
    // Holds the index of current view
    private currentIndex: number = 0;
    // Used to show message:: having it static
    private helperText: string;

    // ngOnInit function gets exicuted when component is initiated.
    ngOnInit(){
    }

    // method to open modal window
    openModal() {
        if (!this.notAgain) {
            this.modalOpened = true;
            // defaulting to start from 1st slide on opening
            this.currentIndex = 0;
        } else {
            this.helperText = 'Walk through is being skipped.';
        }
    }

    // method to close modal window
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

    // method to switch back to page
    prevPage() {
        this.currentIndex--;
    }
    
    // method to go to next page
    nextPage() {
        this.currentIndex++;
    }
};