import React from 'react'
import Todo from './components/Todo'
import Header from './components/Header'

const App = () => {
  return (
    <div className='bg-violet-300 grid py-4 min-h-screen'>
      <Header />
      <Todo />
    </div>
  )
}

export default App