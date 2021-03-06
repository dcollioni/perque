import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './App.css'

const App = ({ children }) => {
  return (
    <main className='app'>
      <header className='app-header'>
        <h1 className='app-title'>
          <Link to='/'>Perque</Link>
        </h1>
      </header>
      <section className="content">
        {children}
      </section>
      <footer>
      </footer>
    </main>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  user: PropTypes.object
}

export default App
