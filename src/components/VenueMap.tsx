import React, { useEffect, useMemo } from 'react'
import { TGetVenueOptions, getVenueMaker, showVenue } from '@mappedin/mappedin-js'
import '@mappedin/mappedin-js/lib/mappedin.css'

const VenueMap = () => {
  //   const venueOptions = {
  //     mapId: '65ce27cca391db7b4e9209a3',
  //     key: '65ce67d9a391db7b4e9209ba',
  //     secret: 'd6f13a5a11c7689aaf411692469798d1a6c6b2a0243000dc6b422c66487771cc',
  //   }
  const venueOptions = useMemo<any>(
    () => ({
      mapId: '65ce27cca391db7b4e9209a3',
      key: '65ce67d9a391db7b4e9209ba',
      secret: 'd6f13a5a11c7689aaf411692469798d1a6c6b2a0243000dc6b422c66487771cc',
    }),
    [],
  )
  useEffect(() => {
    async function init() {
      const venue = await getVenueMaker(venueOptions)
      const mapView = await showVenue(document.getElementById('app')!, venue, {
        multiBufferRendering: true,
        outdoorView: {
          enabled: true,
        },
      })

      mapView.Camera.minZoom = 0
      mapView.FloatingLabels.labelAllLocations()

      // Cleanup function
      return () => {
        mapView.destroy()
      }
    }

    init()

    // Unmount cleanup
    return () => {
      // Cleanup logic here if needed
    }
  }, [venueOptions]) // Include venueOptions in the dependency array

  return <div id="app" />
}

export default VenueMap
