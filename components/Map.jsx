import React, { useEffect } from 'react';
import mapboxGl from 'mapbox-gl';

const style = {
  wrapper: `flex-1 h-full w-full`,
}

const Map = () => {
  useEffect(() => {
    const map = new mapboxGl.Map({})
  }, []);

  return (
    <div className={style.wrapper}>Map</div>
  )
}

export default Map;