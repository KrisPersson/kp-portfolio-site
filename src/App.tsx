import { useState } from 'react'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  const now = new Date()
  const birthdate = new Date('1987-01-14')
  const birthdayThisYear= new Date(`${now.getFullYear()}-01-14`)
  let myAge = now.getFullYear() - birthdate.getFullYear()

  if (birthdayThisYear > now) {
    myAge -= 1
  }




  return (
    <>
      <header>
        <h1>Kristofer Persson Web Dev Portfolio</h1>
      </header>
      <section className="hero">
        <div className='hero__img-container'>
          <img src="/profil-kp.jpeg" alt="Krille" />
        </div>
        <section className='hero__infobox'>
          <p>Name: Kristofer Persson</p>
          <p>Age: {myAge}</p>
          <p>Location: Gothenburg, SWE</p>
          <p>Occupation: Student / Part-time Musician</p>
          <p>Appreciates: Coffee, dogs, nature, music</p>
          <p>Status: Learning JavaScript at <a href="https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/javascriptutvecklare-distans/" target='_blank'>Folkuniversitetet</a></p>

        </section>
      </section>
      <main>
        <h1>Hi, I'm Kris! Check out my projects below</h1>
        <section className="projects-container">
          
        </section>
      </main>
      
    </>
  )
}

export default App