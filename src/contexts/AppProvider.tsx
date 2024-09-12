import React, { createContext, useContext, useState, ReactNode } from 'react'
import { TCameraTarget, getMapData, show3dMap } from '@mappedin/mappedin-js'
import { options } from '../config/mappedin'
import { useEffect } from 'react'

// Define the shape of the context
interface AppContextType {
  mapData: any
  mapView: any
  floor: any
  floors: any[]
  clickedCoord: any
  setMapData: (val: any) => void
  setMapView: (val: any) => void
  setFloor: (val: any) => void
  setFloors: (val: any) => void
  setClickedCoord: (val: any) => void
}

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined)

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mapData, setMapData] = useState<any>()
  const [mapView, setMapView] = useState<any>(null)
  const [floor, setFloor] = useState<any>()
  const [floors, setFloors] = useState<any>([])
  const [clickedCoord, setClickedCoord] = useState<any>(null)

  useEffect(() => {
    getMapData(options).then(data => {
      console.log({ data })
      setMapData(data)
      const floors = data.getByType('floor')
      setFloors(floors)
      console.log('floors:', data.getByType('floor'))
    })

    async function init() {
      console.log('Running init')
      const mapData = await getMapData(options)

      const mapView = await show3dMap(document.getElementById('mappedin-map') as HTMLDivElement, mapData)
      // Set the floor to Floor.id 'm_987654321'. first floor
      mapView.setFloor(`m_18663e4d9e0bff84`)
      const markerTemplate = `
          <div style="display: grid; place-content: center; background-color: black; border-radius: 100px; width: 22px; height: 22px;">   
            <div class="marker" style="display: grid; place-content: center;">
                <img src="/Beacons_Icon.svg" alt="Marker Image"  />
            </div>
          </div>

 `
      mapView.Camera.set({
        bearing: 90,
        pitch: 20,
        zoomLevel: 10,
        //    center: e.coordinate,
      })
      mapView.Labels.all()
      // Set each space to be interactive.
      mapData.getByType('space').forEach(space => {
        console.log({ space })
        mapView.updateState(space, {
          interactive: true,
        })

        // const marker = mapView.Markers.add(space, markerTemplate, {
        //   interactive: true,
        //   anchor: 'center',
        //   rank: 'always-visible',
        // })
        // console.log({ marker })

        // if (space.name) {
        //   mapView.Labels.add(space, space.name, {
        //     interactive: true,
        //   })
        // }
      })

      // Iterate through each point of interest and label it.
      for (const poi of mapData.getByType('point-of-interest')) {
        // Label the point of interest if it's on the map floor currently shown.
        console.log({ poi })

        mapView.Markers.add(poi.coordinate, markerTemplate, {
          interactive: true,
          anchor: 'center',
          rank: 'always-visible',
        })
      }

      const defaultCameraPosition: TCameraTarget = {
        bearing: mapView.Camera.bearing,
        pitch: mapView.Camera.pitch,
        zoomLevel: mapView.Camera.zoomLevel,
        center: mapView.Camera.center,
      }

      // Set each space to be interactive and its hover color.
      mapData.getByType('space').forEach((space, i) => {
        mapView.updateState(space, {
          //   color: i % 2 == 1 ? 'red' : 'blue',
          interactive: true,
          hoverColor: '#D3D3D3',
        })
      })

      let focused: boolean = false

      // Act on the click event to focus on the Space that was clicked or reset the camera.
      mapView.on('click', async event => {
        console.log('clicked event:', event)
        setClickedCoord(event.coordinate)
        // mapView.Markers.animateTo(marker, event.coordinate)
        // if (focused) {
        //   // Reset the camera to its default position.
        //   mapView.Camera.set(defaultCameraPosition)
        //   focused = false
        // } else {
        // Focus on the space that was clicked.
        mapView.Camera.focusOn(event.spaces[0])
        focused = true
        // }
      })

      setMapView(mapView)
    }

    init()
  }, [])

  return (
    <AppContext.Provider
      value={{
        mapData,
        mapView,
        floor,
        floors,
        clickedCoord,
        setMapData,
        setMapView,
        setFloor,
        setFloors,
        setClickedCoord,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider')
  }
  return context
}
