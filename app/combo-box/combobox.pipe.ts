import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name : 'filter'
})

export class FilterPipe implements PipeTransform{
    // value - Array to be filtered
    // keyToFilter - key with which filtering has to happen
    // term - value with which filetering has to happen
    // comparator - used in determining if the expected value should be considered a match
    transform(value:any[], keyToFilter: string, term: any, comparator: any): Object[] {
        term = term.toLocaleLowerCase(); 
        comparator = comparator || false;

        if (!term) {
            return value;
        }

        if (comparator) {
            return value.filter(item => item[keyToFilter].toLowerCase().startsWith(term));
        } else {
            return value.filter(item => (item[keyToFilter].toLowerCase().indexOf(term)!== -1));
        }
    }
}