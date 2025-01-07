import React from 'react'
import Card from './components/Card'

const App = () => {
  const data=[
  {
    "username": "alex_jones",
    "age": 28,
    "city": "New York",
    "profession": "Software Engineer",
    "profile_picture": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "username": "maria_lee",
    "age": 34,
    "city": "San Francisco",
    "profession": "Product Manager",
    "profile_picture": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "username": "rohit_singh",
    "age": 26,
    "city": "Mumbai",
    "profession": "UI/UX Designer",
    "profile_picture": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "username": "linda_kim",
    "age": 31,
    "city": "Seoul",
    "profession": "Marketing Specialist",
    "profile_picture": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "username": "jack_wilson",
    "age": 29,
    "city": "London",
    "profession": "Data Analyst",
    "profile_picture": "https://randomuser.me/api/portraits/men/5.jpg"
  }
]

  return (
    <div>
      {data.map((elem, id) => (
    <Card 
      key={id}
      username={elem.username}
      age={elem.age}
      city={elem.city}
      prof={elem.profession}
      profile_picture={elem.profile_picture}
    />
))}

    </div>
  )
}

export default App