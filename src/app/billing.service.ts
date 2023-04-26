import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor() { }
  calculateCost(unitCost: number, unitsUsed: number): number {
    return unitCost * unitsUsed;
  }
}
