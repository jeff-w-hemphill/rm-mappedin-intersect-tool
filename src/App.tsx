import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import { getBeacons } from './models/API'
import { RMBuildingAdapter } from './models/RMBuildingAdapter'
import useVenue from './hooks/useVenue'
import { TGetVenueMakerOptions, TGetVenueOptions, getVenueMaker, showVenue } from '@mappedin/mappedin-js'
import { MIBuildingAdapter } from './models/MIBuildingAdapter'
import CompareForm from './components/CompareForm'
import ComparisonTable from './components/ComparisonTable'
import VenueMap from './components/VenueMap'

import { Box } from '@mui/material'
const RM_SAMPLE_ORG_ID = '3b54ce47-2ff6-4e00-87c6-04885bea4d8c' // Property1 in Dev

function App() {
  const [beacons, setBeacons] = useState<any[]>([])
  const [floors, setFloors] = useState<any>({}) // Initialize with an empty set
  const [mapInitialized, setMapInitialized] = useState(false)
  const [options, setOptions] = useState<TGetVenueOptions>({
    venue: 'mappedin-demo-mall',
    clientId: '5eab30aa91b055001a68e996',
    clientSecret: 'RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1',
  })

  // const [venueOptions] = useState<TGetVenueMakerOptions>({
  //   mapId: '65ce27cca391db7b4e9209a3',
  //   key: '65ce67d9a391db7b4e9209ba',
  //   secret: 'd6f13a5a11c7689aaf411692469798d1a6c6b2a0243000dc6b422c66487771cc',
  // })

  // const venue = useVenue(options)

  let rmBuilding = new RMBuildingAdapter(RM_SAMPLE_ORG_ID, beacons)
  // let miBuilding = venue ? new MIBuildingAdapter(venue) : null
  // useEffect(() => {
  //   console.log('** ue__')
  //   console.log('** map initialized1: ', mapInitialized)
  //   async function init() {
  //     console.log('** init running')
  //     const venueOptions = {
  //       mapId: '65ce27cca391db7b4e9209a3',
  //       key: '65ce67d9a391db7b4e9209ba',
  //       secret: 'd6f13a5a11c7689aaf411692469798d1a6c6b2a0243000dc6b422c66487771cc',
  //     }
  //     const venue = await getVenueMaker(venueOptions)

  //     const mapView = await showVenue(document.getElementById('map')!, venue, {
  //       multiBufferRendering: true,
  //       outdoorView: {
  //         enabled: true,
  //       },
  //     })

  //     mapView.Camera.minZoom = 0
  //     mapView.FloatingLabels.labelAllLocations()

  //     // Cleanup function
  //     return () => {
  //       mapView.destroy()
  //     }
  //   }

  //   if (!mapInitialized) init()
  //   setMapInitialized(true)

  //   // Unmount cleanup
  //   return () => {
  //     // Cleanup logic here if needed
  //     setMapInitialized(true)
  //   }
  // }, []) // Include venueOptions in the dependency array

  useEffect(() => {
    console.log('** map init2: ', mapInitialized)
  }, [mapInitialized])

  useEffect(() => {
    getBeacons(RM_SAMPLE_ORG_ID)
      .then(fetchedBeacons => {
        setBeacons(fetchedBeacons) // Set beacons state with fetched array
      })
      .catch(error => {
        console.error('Error fetching beacons:', error)
      })
  }, [])

  // useEffect(() => {
  //   venue && console.log('___ MI Source = miVenue:', venue)
  //   // miBuilding && console.log('miBuilding source:', miBuilding.sourceBuilding)
  //   miBuilding && console.log('___ miBuilding -> building: ', miBuilding.toBuilding())
  // }, [venue])

  useEffect(() => {
    beacons.length && console.log('___ RM source = beacons: ', beacons)
    rmBuilding = new RMBuildingAdapter(RM_SAMPLE_ORG_ID, beacons)
    beacons.length && console.log('___ rmBuilding -> building: ', rmBuilding.toBuilding())

    // Object.entries(rmBuilding.sourceBuilding.floors).forEach(([k, v]: [string, any]) => console.log(v[0].name))
  }, [beacons])

  return (
    <div className="App">
      {/* {Object.entries(rmBuilding.sourceBuilding.floors).map(([k, v]: [string, any]) => (
        <ul key={k}>
          <h1>{k}</h1>

          {v.rooms.map((r: any) => (
            <li>{r.name}</li>
          ))}
        </ul>
      ))} */}
      <Box display="flex" flexDirection="row">
        <CompareForm />
        <Box
          margin="20px"
          width="50%"
          maxHeight={'400px'}
          overflow="hidden"
          sx={{ boxSizing: 'border-box', border: '1px solid black' }}
        >
          <VenueMap />
        </Box>
      </Box>

      <ComparisonTable />
    </div>
  )
}

export default App
