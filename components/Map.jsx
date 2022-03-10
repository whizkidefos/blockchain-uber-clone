import React, { useEffect, useContext } from 'react';
import mapboxGl from 'mapbox-gl';
//import { UberContext } from '../context/uberContext';

const style = {
  wrapper: `flex-1 h-full w-full`,
}

//mapboxGl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
mapboxGl.accessToken = 'pk.eyJ1Ijoid2hpemtpZGVmb3MiLCJhIjoiY2t0bHJ2bXg5MW83ejJwbzY5anhueDVxbSJ9.rvXQ-7i9Z4aNs1kVvMD1tw';

const Map = () => {
  //const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext);

  useEffect(() => {
    const map = new mapboxGl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })
  }, []);

  return (
    <div className={style.wrapper} id="map">Map</div>
  )
}

export default Map;