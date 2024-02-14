// Define interfaces for building, level, and room
export interface Building {
  id: string
  name: string
  levels: Levels
}

interface Levels {
  [name: string]: {
    elevationsIdx?: string | null
    rooms: Room[]
  }
}

interface Room {
  name: string
  // Additional properties for room if needed
}

interface RMBuilding {
  orgId: string
  floors: {
    [name: string]: {
      rooms: Room[]
    }
  }
}

interface Location {
  locationId: string
  name: string
}

interface MIBuilding {
  venueId: string
  maps: Location[]
}

interface BuildingAdapter {
  sourceBuilding: RMBuilding | MIBuilding | null
  toBuilding: () => Building | null
}
// Adapter for system1's building model
export class RMBuildingAdapter implements BuildingAdapter {
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

// Adapter for MappedIn building model
export class MIBuildingAdapter implements BuildingAdapter {
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

// Example usage
//   const system1Building: System1Building = { floors: [...] }; // Assume this is system1's building model
//   const system2Building: System2Building = { levels: [...] }; // Assume this is system2's building model

//   const system1Adapter = new System1BuildingAdapter(system1Building);
//   const system2Adapter = new System2BuildingAdapter(system2Building);

//   const building1 = system1Adapter.toBuilding();
//   const building2 = system2Adapter.toBuilding();

// Now you have both buildings in a unified format and can perform calculations on them
// For example, you can compare levels and rooms, calculate differences, or find intersections
