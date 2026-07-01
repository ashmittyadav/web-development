import React from 'react'
import Card from './components/Card';

const App = () => {
  

  const jobOpenings = [
  {
    id: 1,
    user: "Amazon",
    img: "https://img.freepik.com/premium-photo/amazon-logo-icon-illustration-vector_895118-6116.jpg?w=2000",
    days: "5",
    payment: 120,
    role: "Senior UI/UX Designer",
    duration: "Part-Time",
    position: "Senior Level",
    city: "San Francisco",
    state: "CA",
  },
  {
    id: 2,
    user: "Google",
    img: "https://w7.pngwing.com/pngs/887/918/png-transparent-brand-brands-google-logo-logos-logos-brands-icon.png",
    days: "8",
    payment: 50,
    role: "Product Engineer",
    duration: "Full-Time",
    position: "Junior Level",
    city: "Mumbai",
    state: "Maharashtra",
  },
  {
    id: 3,
    user: "Apple",
    img: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    days: "2",
    payment: 100,
    role: "Software Developer",
    duration: "Full-Time",
    position: "Senior Level",
    city: "Gurugram",
    state: "Haryana",
  },
  {
    id: 4,
    user: "Microsoft",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    days: "4",
    payment: 110,
    role: "Frontend Developer",
    duration: "Full-Time",
    position: "Mid Level",
    city: "Hyderabad",
    state: "Telangana",
  },
  {
    id: 5,
    user: "Netflix",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
    days: "3",
    payment: 140,
    role: "Backend Engineer",
    duration: "Full-Time",
    position: "Senior Level",
    city: "Los Angeles",
    state: "CA",
  },
  {
    id: 6,
    user: "Meta",
    img: "https://th.bing.com/th/id/OIP.5MoH8qTW_swxJ-jDBlOd8QHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    days: "7",
    payment: 130,
    role: "React Developer",
    duration: "Remote",
    position: "Mid Level",
    city: "Menlo Park",
    state: "CA",
  },
  {
    id: 7,
    user: "Adobe",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    days: "6",
    payment: 95,
    role: "UI Designer",
    duration: "Contract",
    position: "Junior Level",
    city: "Noida",
    state: "Uttar Pradesh",
  },
  {
    id: 8,
    user: "Spotify",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    days: "1",
    payment: 115,
    role: "Mobile App Developer",
    duration: "Full-Time",
    position: "Senior Level",
    city: "Stockholm",
    state: "Sweden",
  },
  {
    id: 9,
    user: "Tesla",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    days: "9",
    payment: 125,
    role: "Full Stack Developer",
    duration: "Full-Time",
    position: "Mid Level",
    city: "Austin",
    state: "Texas",
  },
  {
    id: 10,
    user: "Airbnb",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    days: "10",
    payment: 105,
    role: "DevOps Engineer",
    duration: "Remote",
    position: "Senior Level",
    city: "San Francisco",
    state: "CA",
  },
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx) {
        return <div key={idx}>
        <Card 
        user = {elem.user}
        img = {elem.img}
        duration = {elem.duration}
        role = {elem.role}
        days = {elem.days}
        position = {elem.position}
        payment = {elem.payment}
        city = {elem.city}
        state = {elem.state}
        />
        </div>
      })}
    </div>
  )
}

export default App
