import { Building, Levels } from './interfaces/Building'
import { BuildingAdapter } from './interfaces/BuildingAdapter'
import { MIBuilding, Map, Location } from './interfaces/MIBuilding'

export class MIBuildingAdapter implements BuildingAdapter<MIBuilding> {
  sourceBuilding: MIBuilding
  constructor(private venue: any) {
    this.sourceBuilding = {
      venueId: venue.venue.id,
      maps: venue.maps,
    }
  }

  toBuilding(): Building {
    const levels: Levels = {}
    this.sourceBuilding.maps.forEach(m => {
      levels[m.name] = { rooms: m.locations.map(l => ({ name: l.name })) }
    })
    return {
      sourceId: this.sourceBuilding.venueId,
      name: '',
      levels: levels,
    }
  }
}
