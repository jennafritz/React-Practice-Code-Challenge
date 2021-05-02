import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          props.displayFour().map((sushi) => <Sushi sushi={sushi} key={sushi.id} handleSushiClick={props.handleSushiClick} eatenSushi={props.eatenSushi}/>)
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton updateFour={props.updateFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer