import { Building } from './Building'

export interface BuildingAdapter<Source> {
  sourceBuilding: Source
  toBuilding: () => Building
}
