export interface Building {
  sourceId: string
  name: string
  levels: Levels
}

export type Levels = {
  [name: string]: {
    elevationsIdx?: number
    rooms: Room[]
  }
}

export type Room = {
  name: string
}
