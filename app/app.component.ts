import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    // template: '<h1>My First Angular 2 App<custom-tag></custom-tag></h1>'
    templateUrl: './app.component.html'
})
export class AppComponent { 
    public breadcrumb: Object =  {
        class: 'testClass',
        options: [
            {
                label : 'Home',
                url : '#'
            }, {
                label : 'Contacts',
                url : '#'
            }, {
                label : 'Me',
                url : '#'
            }
        ]
    }
}
