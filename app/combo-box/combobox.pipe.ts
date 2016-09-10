import { Pipe, PipeTransform, Injectable } from '@angular/core';


@Pipe({
    name : 'filter'
})

@Injectable()
export class FilterPipe implements PipeTransform{
    transform(value:any[], term: any, comparator: any): Object[] {
        console.log(value, term);
        term = term.toLocaleLowerCase(); 
        comparator = comparator || false;

        if (!term) {
            return value;
        }

        if (comparator) {
            console.log(value.filter(item => item.name.toLowerCase().startsWith(term));
            return value.filter(item => item.name.toLowerCase().startsWith(term));
            // return value.filter(function (item: Object) :item {});
        } else {
            console.log(value.filter(item => (item.name.toLowerCase().indexOf(term)!== -1)));
            return value.filter(item => (item.name.toLowerCase().indexOf(term)!== -1));
        }
    }
}