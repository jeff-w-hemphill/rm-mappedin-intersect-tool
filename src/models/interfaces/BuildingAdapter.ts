import { Building } from './Building'

export interface BuildingAdapter<T> {
  sourceBuilding: T
  toBuilding: () => Building
}
