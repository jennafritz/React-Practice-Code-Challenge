import React, { Fragment } from 'react'
import Wallet from '../components/Wallet'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.budget} remaining!
      </h1>
      <div className="table">
      <Wallet handleWalletSubmit={props.handleWalletSubmit}/>
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            
            renderPlates([props.eatenSushi])
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table