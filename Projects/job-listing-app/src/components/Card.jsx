import React from 'react'
import {Bookmark} from 'lucide-react/'


const Card = (props) => {
  return (
    <div className='card'>
        <div className='top'>
        <img src= {props.img} />
        <button>Save <span> <Bookmark size={14} strokeWidth={3} /></span> </button>
        </div>
        <div className='center'>
           <h3>{props.user} <span> {props.days} days ago</span></h3>
           <h1>{props.role}</h1>
        </div>
        <div className='detail'>
            <h4 className='fdetail'>{props.duration}</h4>
            <h4 className='sdetail'>{props.position}</h4>
            
        </div>
        <div className='bottom'>
            <div>
                <h4>${props.payment}/hr</h4>
                <p>{props.city},{props.state}</p>
            </div>
                <button onClick={() => alert("Application Submitted!")}>
                Apply Now
                </button>
        </div>
      </div>
  )
}

export default Card
