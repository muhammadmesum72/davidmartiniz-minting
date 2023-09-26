import React, { useState } from 'react'
import LightRoom from "../assets/light room.jpg"
import DarkRoom from "../assets/dark room.jpg"

const Home = () => {
    const [isLightSwitch, setIsLightSwitch] = useState(false)

    const handleSwitch = () => setIsLightSwitch(!isLightSwitch)
    
    return (
    <div>
        <div className=''>

        {
            isLightSwitch ?
            <img src={LightRoom} alt=""  />
            :
            <img src={DarkRoom} alt="" />
        }
        </div>

        <div className='absolute top-0'>
            <button onClick={() => handleSwitch()} className='px-6 py-2 bg-white rounded-md'> 
            Swicth
            </button>
        </div>

    </div>
  )
}

export default Home