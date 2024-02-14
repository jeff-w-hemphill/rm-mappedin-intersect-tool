export interface Building {
  id: string
  name: string
  levels: Levels
}

type Levels = {
  [name: string]: {
    elevationsIdx?: number
    rooms: Room[]
  }
}

type Room = {
  name: string
}
