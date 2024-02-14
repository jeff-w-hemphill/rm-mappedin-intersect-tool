import { Building } from './interfaces/Building'
import { BuildingAdapter } from './interfaces/BuildingAdapter'

export class MIBuildingAdapter implements BuildingAdapter<MIBuilding> {
  sourceBuilding: MIBuilding
  constructor(private venue: MIBuilding) {
    this.sourceBuilding
  }

  toBuilding(): Building | null {
    // const levels: Level[] = this.building.levels.map((level) => {
    //   const rooms: Room[] = level.rooms.map((room) => ({ id: room.roomId }));
    //   return { id: level.levelId, rooms };
    // });

    // return { levels };
    return null
  }
}
