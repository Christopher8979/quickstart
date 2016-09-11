import { Component, Input, OnInit } from '@angular/core';

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

    private typeText: string;
    private dropDownOpened: boolean = false;
    private isClearEnabled: boolean = false;

    // ngOnInit function gets exicuted when component is initiated.
    ngOnInit(){
        this.typeText = this.selected[this.searchFor] || '';
    }

    typing(valueTyped : string){
        this.dropDownOpened = true;
    }

    // method to handle click
    selectThis(value:any){
        this.selected = value;
        this.dropDownOpened = false;
        this.typeText = value[this.searchFor];
        this.isClearEnabled = true;    

        // Event to be emitted    
    }

    clearSelection() {
        this.selected = {};
        this.typeText = '';
        this.isClearEnabled = false;
    }

    toggleDropDown() {
        // If there is text in input box then clear it and then toggle dropdown
        if (this.dropDownOpened) {
            this.typeText = '';
        }
        this.dropDownOpened = !this.dropDownOpened;        
    }

    action() {
        if (this.isClearEnabled) {
            this.clearSelection();
        } else {
            this.toggleDropDown();
        }
    }
    
};
