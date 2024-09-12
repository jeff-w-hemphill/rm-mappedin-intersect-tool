import React, { useEffect, useState } from 'react'
// import { TGetVenueOptions, getVenueMaker, showVenue } from '@mappedin/mappedin-js'
import '@mappedin/mappedin-js/lib/index.css'
import { TCameraTarget, getMapData, show3dMap } from '@mappedin/mappedin-js'
import { options } from '../config/mappedin'

// async function init() {
//   console.log('Running init')
//   const mapData = await getMapData(options)
//   const mapView = await show3dMap(document.getElementById('mappedin-map') as HTMLDivElement, mapData)
//   // Set the floor to Floor.id 'm_987654321'.
//   mapView.setFloor(`m_18663e4d9e0bff84`)

//   // Set each space to be interactive.
//   mapData.getByType('space').forEach(space => {
//     mapView.updateState(space, {
//       interactive: true,
//     })
//   })

//   // Add a label on each space with a name and make the labels interactive.
//   mapData.getByType('space').forEach(space => {
//     if (space.name) {
//       mapView.Labels.add(space, space.name, {
//         interactive: true,
//       })
//     }
//   })

//   const defaultCameraPosition: TCameraTarget = {
//     bearing: mapView.Camera.bearing,
//     pitch: mapView.Camera.pitch,
//     zoomLevel: mapView.Camera.zoomLevel,
//     center: mapView.Camera.center,
//   }

//   // Set each space to be interactive and its hover color to orange.
//   mapData.getByType('space').forEach(space => {
//     mapView.updateState(space, {
//       interactive: true,
//       hoverColor: '#f26336',
//     })
//   })

//   let focused: boolean = false

//   // Act on the click event to focus on the Space that was clicked or reset the camera.
//   mapView.on('click', async event => {
//     if (focused) {
//       // Reset the camera to its default position.
//       mapView.Camera.set(defaultCameraPosition)
//       focused = false
//     } else {
//       // Focus on the space that was clicked.
//       mapView.Camera.focusOn(event.spaces[0])
//       focused = true
//     }
//   })
// }

const VenueMap = () => {
  const [initialized, setInitialized] = useState(false)

  // useEffect(() => {
  //   console.log('running effect')
  //   console.log('init:', initialized)

  //   if (!initialized) init()
  //   setInitialized(true)
  //   // Unmount cleanup
  //   return () => {}
  // }, [initialized]) // Include venueOptions in the dependency array

  return <div style={{ width: '100%', height: '1000px' }} id="mappedin-map" />
}

export default VenueMap
