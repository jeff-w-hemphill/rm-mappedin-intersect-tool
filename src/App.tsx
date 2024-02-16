import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import { getBeacons } from './models/API'
import { RMBuildingAdapter } from './models/RMBuildingAdapter'
import useVenue from './hooks/useVenue'
import { TGetVenueOptions } from '@mappedin/mappedin-js'
import { MIBuildingAdapter } from './models/MIBuildingAdapter'
const RM_SAMPLE_ORG_ID = '3b54ce47-2ff6-4e00-87c6-04885bea4d8c' // Property1 in Dev

function App() {
  const [beacons, setBeacons] = useState<any[]>([])
  const [floors, setFloors] = useState<any>({}) // Initialize with an empty set
  const [options, setOptions] = useState<TGetVenueOptions>({
    venue: 'mappedin-demo-mall',
    clientId: '5eab30aa91b055001a68e996',
    clientSecret: 'RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1',
  })

  const venue = useVenue(options)

  let rmBuilding = new RMBuildingAdapter(RM_SAMPLE_ORG_ID, beacons)
  let miBuilding = venue ? new MIBuildingAdapter(venue) : null

  useEffect(() => {
    getBeacons(RM_SAMPLE_ORG_ID)
      .then(fetchedBeacons => {
        setBeacons(fetchedBeacons) // Set beacons state with fetched array
      })
      .catch(error => {
        console.error('Error fetching beacons:', error)
      })
  }, [])

  useEffect(() => {
    venue && console.log('___ miBuilding:', venue)
    // miBuilding && console.log('miBuilding source:', miBuilding.sourceBuilding)
    miBuilding && console.log('___ miBuilding -> building: ', miBuilding.toBuilding())
  }, [venue])

  useEffect(() => {
    beacons.length && console.log('___ beacons: ', beacons)
    rmBuilding = new RMBuildingAdapter(RM_SAMPLE_ORG_ID, beacons)
    beacons.length && console.log('___ rmBuilding -> building: ', rmBuilding.toBuilding())

    // Object.entries(rmBuilding.sourceBuilding.floors).forEach(([k, v]: [string, any]) => console.log(v[0].name))
  }, [beacons])

  return (
    <div className="App">
      {Object.entries(rmBuilding.sourceBuilding.floors).map(([k, v]: [string, any]) => (
        <ul key={k}>
          <h1>{k}</h1>

          {v.rooms.map((r: any) => (
            <li>{r.name}</li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default App
