import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitCostService {
  private _electricityUnitCost: number = 0;
  private _waterUnitCost: number = 0;
  private _telephoneUnitCost: number = 0;

  get electricityUnitCost(): number {
    return this._electricityUnitCost;
  }

  set electricityUnitCost(value: number) {
    this._electricityUnitCost = value;
  }

  get waterUnitCost(): number {
    return this._waterUnitCost;
  }

  set waterUnitCost(value: number) {
    this._waterUnitCost = value;
  }

  get telephoneUnitCost(): number {
    return this._telephoneUnitCost;
  }

  set telephoneUnitCost(value: number) {
    this._telephoneUnitCost = value;
  }
}
