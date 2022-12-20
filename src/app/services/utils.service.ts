import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  //#region Methods

  /**
   * Sort an array of object's
   * @param objArr Array of objects to sort
   * @param sortField Name of field to sort by
   * @param sortOrder Sort order (possible values are 'ascending' and 'descending', default value is 'ascending')
   * @returns Sorted obj array
   */
  objArrSort(objArr: any[] = [], sortField: string = '', sortOrder: string = 'ascending'): any[] {
    let objArrSorted: any[] = [];
    if (objArr.length > 0) {
      const isString = typeof objArr[0][sortField.toString()] === 'string' ? true : false;
      if (isString) {
        // string sort with locale compare
        objArrSorted = objArr.sort((a, b) => a[sortField.toString()].localeCompare(b[sortField.toString()]));
      } else {
        // not string sort with number compare
        objArrSorted = objArr.sort((a, b) => (a[sortField] > b[sortField]) ? 1 : ((b[sortField] > a[sortField]) ? -1 : 0));
      }
    }
    return sortOrder === 'ascending' ? objArrSorted : objArrSorted.reverse();
  }

  //#endregion

}
