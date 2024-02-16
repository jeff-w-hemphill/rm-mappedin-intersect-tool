export interface MIBuilding {
  venueId: string
  maps: Map[]
}

export type Map = {
  name: string
  locations: Location[]
}
export type Location = {
  locationId: string
  name: string
}
