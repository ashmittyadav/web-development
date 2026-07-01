import React from 'react'

const card = (props) => {
    console.log(props.user);
    
  return (
      <div className='card'>
            <img src={props.img} alr=''/>
            <h1>{props.user},{props.age }</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View profile</button>
         </div>
  )
}

export default card