import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    // moduleId :: setting moduleId: module.id in the @Component decorator is the key here.
    //             If you don't have that then Angular 2 will be looking for your files at
    //             the root level.
    moduleId: module.id,
    // Tag for this component
    selector:'combo-box',
    // Styles to be picked for this component
    styleUrls: ['./combobox.component.css'],
    // Emplate to be picked for this component
    templateUrl: './combobox.component.html'
})

export class ComboBoxComponent implements OnInit {

    @Input() options: Object[];
    @Input() strictCompare: boolean;
    @Input() searchFor: string;
    @Input() selected: any;


    @Output() afterSelection: EventEmitter<any> = new EventEmitter();

    // string to hold the value being typed in combo's input
    private typeText: string;
    // boolean to check if dropdown is open
    private dropDownOpened: boolean = false;
    // boolean to keep track of when to clear the data/option selected
    private isClearEnabled: boolean = false;

    // ngOnInit function gets exicuted when component is initiated.
    ngOnInit(){
        this.typeText = this.selected[this.searchFor] || '';
    }

    // method to show dropdown
    typing(valueTyped : string){
        this.dropDownOpened = true;
    }

    // method to handle click
    selectThis(value:any){
        this.selected = value;
        this.dropDownOpened = false;
        this.typeText = value[this.searchFor];
        this.isClearEnabled = true;    

        // sending selected object as response
        this.afterSelection.next([this.selected]);
    }

    // method to cleat selection
    clearSelection() {
        this.selected = {};
        this.typeText = '';
        this.isClearEnabled = false;
    }

    // method to togle dropdwn..
    toggleDropDown() {
        // If there is text in input box then clear it and then toggle dropdown
        if (this.dropDownOpened) {
            this.typeText = '';
        }
        this.dropDownOpened = !this.dropDownOpened;        
    }

    // method that decised what action to be performed based of input value
    action() {
        if (this.isClearEnabled) {
            this.clearSelection();
        } else {
            this.toggleDropDown();
        }
    }
    
};
