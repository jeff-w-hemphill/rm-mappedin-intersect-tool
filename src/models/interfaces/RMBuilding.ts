export interface RMBuilding {
  orgId: string
  floors: Floors
}

export type Floors = {
  [name: string]: {
    rooms: Room[]
  }
}

export type Room = {
  name: string
}
