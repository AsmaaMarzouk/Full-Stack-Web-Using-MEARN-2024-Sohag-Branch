import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount'
})
export class CalcDiscountPipe implements PipeTransform {

  transform(value: number,discountValue:number=25): number {
    // return value*10;
    // value =400
    // discountValue = 50
    var disDivRes=discountValue/100; // 50/100=.5
    var mulOriginalValueByDivRes=value*disDivRes;//400 * .5 = 200
    var result=value-mulOriginalValueByDivRes //400-200=200
    return result;//200
  }

}
