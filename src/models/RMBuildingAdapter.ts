import { Building, Levels } from './interfaces/Building'
import { BuildingAdapter } from './interfaces/BuildingAdapter'
import { RMBuilding, Floors, Room } from './interfaces/RMBuilding'

export class RMBuildingAdapter implements BuildingAdapter<RMBuilding> {
  sourceBuilding: RMBuilding
  constructor(orgId: string, beacons: any[]) {
    let floors: Floors = {}

    for (const b of beacons) {
      // Dynamically generate floors object with rooms arrays
      if (!floors[b.attributes?.floor]) {
        floors[b.attributes.floor] = { rooms: [] }
        floors[b.attributes.floor].rooms.push({ name: b.attributes.room })
      } else {
        floors[b.attributes.floor].rooms.push({ name: b.attributes.room })
      }
    }
    this.sourceBuilding = { orgId: orgId, floors: floors }
  }
  toBuilding(): Building {
    const levels: Levels = this.sourceBuilding.floors

    return {
      sourceId: this.sourceBuilding.orgId,
      name: '',
      levels: levels,
    }
  }
}
