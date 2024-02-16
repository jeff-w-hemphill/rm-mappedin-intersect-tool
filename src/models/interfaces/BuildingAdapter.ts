import { Building } from './Building'

// Source type is Either RMBuilding or MIBuilding
export interface BuildingAdapter<Source> {
  sourceBuilding: Source
  toBuilding: () => Building
}
