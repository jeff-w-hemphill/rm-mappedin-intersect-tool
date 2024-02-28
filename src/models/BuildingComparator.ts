import { Building } from './interfaces/Building'
import { BuildingComparatorInterface } from './interfaces/BuildingComparator'

export class BuildingComparator implements BuildingComparatorInterface {
  rm: Building
  mi: Building
  constructor(rm: Building, mi: Building) {
    this.rm = rm
    this.mi = mi
  }

  compareLevels() {
    return {
      intersection: {},
      onlyRM: {},
      onlyMI: {},
    }
  }

  compareRooms(level: string) {
    return {
      intersection: [],
      onlyRM: [],
      onlyMI: [],
    }
  }

  createTableData() {
    return []
  }
}
