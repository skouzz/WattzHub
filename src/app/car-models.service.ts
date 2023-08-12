import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarModelsService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>('assets/models.json').pipe(
      map((data) => {
        // Extract only the desired properties from each item
        return data.map((item) => ({
          vehicleMake: item.vehicleMake,
          vehicleModel: item.vehicleModel,
          vehicleModelVersion: item.vehicleModelVersion,
          drivetrainPowerHP: item.drivetrainPowerHP,
          performanceAcceleration: item.performanceAcceleration,
          performanceTopspeed: item.performanceTopspeed,
          rangeWLTP: item.rangeWLTP,
          rangeReal: item.rangeReal,
          efficiencyReal: item.efficiencyReal,
          chargePlug: item.chargePlug,
          chargeStandardPower: item.chargeStandardPower,
          chargeStandardPhase: item.chargeStandardPhase,
          chargeStandardPhaseAmp: item.chargeStandardPhaseAmp,
          fastChargePlug: item.fastChargePlug,
          fastChargePowerMax: item.fastChargePowerMax,
          batteryCapacityFull: item.batteryCapacityFull,
          image: item.image,
          id: item.id,
          canRead: item.canRead,
          makerImage: item.makerImage,
          images: item.images,
        }));
      })
    );
  }
}
