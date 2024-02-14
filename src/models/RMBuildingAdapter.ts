import { Building } from './interfaces/Building'
import { BuildingAdapter } from './interfaces/BuildingAdapter'

export class RMBuildingAdapter implements BuildingAdapter<RMBuilding> {
  sourceBuilding: RMBuilding
  constructor(orgId: string, beacons: any[]) {
    let floors: any = {}
    // const allFloors = beacons.map(b => b.attributes.floor)

    // const uniqueFloors = Array.from(new Set(allFloors)) // Cast set to array
    for (const b of beacons) {
      // Dynamically generate floors object with rooms arrays

      if (!floors[b.attributes?.floor]) {
        floors[b.attributes.floor] = []
        floors[b.attributes.floor].push({ name: b.attributes.room })
      } else {
        floors[b.attributes.floor].push({ name: b.attributes.room })
      }
    }
    this.sourceBuilding = { orgId: orgId, floors: floors }
    // Object.entries(this.sourceBuilding.floors).map(([_, rooms]: [string, { rooms: Room[] }]) =>
    //   console.log(rooms.rooms[0].name),
    // )
  }
  toBuilding(): Building | null {
    // const levels: Level[] = this.sourceBuilding.floors.map(floor => {
    //   const rooms: Room[] = floor.rooms.map(room => ({ id: room.id }))
    //   return { id: floor.id, rooms }
    // })

    // return { levels }
    return null
  }
}
