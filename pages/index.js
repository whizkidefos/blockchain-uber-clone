import Head from 'next/head'
import Image from 'next/image'
import Map from '../components/Map'
import Navbar from '../components/Navbar'

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      {/* Navbar */}
      <Navbar />
      <div className={style.main}>
        {/* Map */}
        <Map />
      </div>

      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          {/* Location selector */}
          {/* Confirm ride */}
        </div>
      </div>
      
    </div>
  )
}
