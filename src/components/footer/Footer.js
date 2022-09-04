import React from 'react';
import Wave from 'react-wavify';

function Footer() {
  return (
    <div className='Footer'>
        <div className='Wave'>
            <Wave fill='#000'
                paused={false}
                options={{
                    height: 20,
                    amplitude: 30,
                    speed: 0.15,
                    points: 4
                }}
            />
        </div>
        <div className='Block-fill'>
            <div className='Copyright'>
                © 2022 Sebastian Blackley. All Rights Reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer