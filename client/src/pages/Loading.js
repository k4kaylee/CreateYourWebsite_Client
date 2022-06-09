import React from 'react'
import NavBar from '../components/NavBar'


export default function Loading() {
  return (
    <div className='loading-body'>
      <div className='loading'>
        <span className='loading-text'>loading</span>
      </div>
      <NavBar/>
    </div>
  )
}
