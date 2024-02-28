import { Building, Room, Levels } from './Building'

export interface BuildingComparatorInterface {
  rm: Building
  mi: Building

  compareLevels: () => {
    intersection: Levels
    onlyRM: Levels
    onlyMI: Levels
  }

  compareRooms: (level: string) => {
    intersection: Room[]
    onlyRM: Room[]
    onlyMI: Room[]
  }

  createTableData: () => ComparisonTableRecord[]
}

type ComparisonTableRecord = {
  floorRoomKey: string
  inRM: boolean
  inMI: boolean
}[]
