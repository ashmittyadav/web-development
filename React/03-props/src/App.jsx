import React from 'react'
import Card from './components/Card'

const App = () => {
  return(
   <div className='parent'>
    {/* <Card user='hehe' age={18} /> */}
    <Card user='Ashmit Yadav' age = {21} img = 'https://img.freepik.com/premium-psd/psd-cartoon-character-3d-render-illustration_493627-96.jpg'/>
    <Card user='Kritika Bhol' age = {20} img = 'https://tse3.mm.bing.net/th/id/OIP.B1NoV3hXTTmrzrJ_4R3ccAHaHd?cb=thfvnextfalcon3&rs=1&pid=ImgDetMain&o=7&rm=3'/>
    <Card user='Meet' age = {19} img = 'https://img.freepik.com/premium-photo/realistic-adventurethemed-3d-rendering-character-with-camera_899449-312311.jpg?w=2000'/>
   </div>
  )
}

export default App
