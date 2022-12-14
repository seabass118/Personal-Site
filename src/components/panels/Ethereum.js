import React from 'react'
import bg from '../../assets/eth1.png';

function Ethereum() {
  return (
    <div className='Panel Ethereum-panel' style={{ backgroundImage: `url(${bg})` }}>
        <div className='Panel-title Ethereum-title' >
            Ethereum
        </div>
        <div className='Panel-content'>
            <div className='Ens-name'>
                Blackley.eth
            </div>    
            <div className='Eth-address'>
                0x88A53922f55630A2F0dd888Ed902a15Ecb3b85aa
            </div>      
        </div>
    </div>
  )
}

export default Ethereum