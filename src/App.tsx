import React, { useContext, useEffect, useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import { getBeacons } from './models/API'
import { RMBuildingAdapter } from './models/RMBuildingAdapter'
import useVenue from './hooks/useVenue'
// import { TGetVenueMakerOptions, TGetVenueOptions, getVenueMaker, showVenue } from '@mappedin/mappedin-js'
import { MIBuildingAdapter } from './models/MIBuildingAdapter'
import CompareForm from './components/CompareForm'
import ComparisonTable from './components/ComparisonTable'
import VenueMap from './components/VenueMap'

import { Box } from '@mui/material'
import HeaderBar from './components/HeaderBar'
import DropdownSelector from './components/DropdownSelector'
import { AppProvider, useAppContext } from './contexts/AppProvider'
import { click } from '@testing-library/user-event/dist/click'
const RM_SAMPLE_ORG_ID = '6e5a4fb3-d880-47c3-8be5-5b830ded5fdc' // Property1 in Dev

function App() {
  const [beacons, setBeacons] = useState<any[]>([])
  const [mapInitialized, setMapInitialized] = useState(false)
  const { floors, mapView, clickedCoord } = useAppContext()
  console.log('app floors', floors)

  let rmBuilding = new RMBuildingAdapter(RM_SAMPLE_ORG_ID, beacons)

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
    beacons.length && console.log('___ RM source = beacons: ', beacons)
    rmBuilding = new RMBuildingAdapter(RM_SAMPLE_ORG_ID, beacons)
    beacons.length && console.log('___ rmBuilding -> building: ', rmBuilding.toBuilding())

    // Object.entries(rmBuilding.sourceBuilding.floors).forEach(([k, v]: [string, any]) => console.log(v[0].name))
  }, [beacons])

  return (
    <div className="App">
      <HeaderBar />
      <Box display="flex" flexDirection="column">
        {/* <CompareForm /> */}
        <Box width="20%" margin="20px" display="flex" flexDirection={'row'}>
          <DropdownSelector
            title={'select floor'}
            options={floors}
            displayKey="name"
            onChange={(id: string) => mapView.setFloor(id)}
          />
          {/* <DropdownSelector
            title={'select room'}
            options={floors}
            displayKey="name"
            onChange={(id: string) => mapView.setFloor(id)}
          /> */}
        </Box>

        <Box
          margin="20px"
          width="50%"
          maxHeight={'800px'}
          // overflow="hidden"
          sx={{ boxSizing: 'border-box', border: '1px solid #D3D3D3' }}
        >
          <div>
            Lat: {clickedCoord?.latitude || ''} Long: {clickedCoord?.longitude || ''}
          </div>
          <VenueMap />
        </Box>
      </Box>

      <ComparisonTable />
    </div>
  )
}

export default App
