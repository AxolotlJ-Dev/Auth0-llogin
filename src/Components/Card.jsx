import React from 'react'
import "../style/Card.css"

const Card = () => {
  return (
    <div className='container posCard'>
        <div className='Card' >
            <div className='ContenidCard row'>
                <div className="col-4">
                    user
                </div>
                <div className="col-8">
                    message
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card