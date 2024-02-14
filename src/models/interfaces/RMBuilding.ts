interface RMBuilding {
  orgId: string
  floors: {
    [name: string]: {
      rooms: Room[]
    }
  }
}

type Room = {
  name: string
}
