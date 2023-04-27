import { Injectable } from '@angular/core';
let totalunitCost:number=1;

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  
  constructor() { }
  
  calculateCost(unitCost: number, unitsUsed: number): number {
    totalunitCost=unitCost;
    return unitCost * unitsUsed;
  }
  cost(unitsused:number):number{
    return unitsused*totalunitCost;
  }
}
